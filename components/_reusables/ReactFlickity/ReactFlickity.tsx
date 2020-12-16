import * as React from "react"
import styled from "styled-components"
import Flickity from "react-flickity-component"
import times from "lodash/times"
import styles from "./ReactFlickity.module.css"


interface IFlickitySettings {
  className?: string;                         // Default: '' - Applied to top level wrapper
  elementType?: string;                       // Default: 'div' - Wrapper's element type
  options?: IFlickityOptions;                 // Default: {} - Flickity initialization options
  disableImagesLoaded?: boolean;              // Default: false - Disable call reloadCells images are loaded
  flickityRef?: (ref: Flickity) => void;      // Like ref function, get Flickity instance in parent component
  reloadOnUpdate?: boolean;                   // Default: false - Run reloadCells and resize on componentDidUpdate
  static?: boolean;                           // Default: false - Carousel contents are static and not updated at runtime. Useful for smoother server-side rendering however the carousel contents cannot be updated dynamically
  prevNextButtons: boolean;                   // Default: false - Creates and enables previous & next buttons
  pageDots: boolean;                          // Default: false - Creates and enables page dots
  pageCounter: boolean;                       // Default: false - Creates and enables page counter
  onStaticClick: (e, p, ce, ci) => {};        // Callback for onStaticClick event
}

interface IFlickityOptions {
  draggable?: false | string;                 // Default: '>1' - Enables dragging and flicking. Enabled by default when carousel has 2 or more slides
  freeScroll?: boolean;                       // Enables content to be freely scrolled and flicked without aligning cells to an end position
  freeScrollFriction?: number;                // Default: 0.075 - Slows movement of slider when freeScroll: true. Higher friction makes the slider feel stickier. Lower friction makes the slider feel looser
  wrapAround?: boolean;                       // At the end of cells, wrap-around to the other end for infinite scrolling
  groupCells?: boolean | number;              // Groups cells together in slides. Flicking, page dots, and previous/next buttons are mapped to group slides, not individual cells. [is-selected] class is added to the multiple cells in the selected slide
  autoPlay?: boolean | number;                // Automatically advances to the next cell. Auto-playing will pause when mouse is hovered over, and resume when mouse is hovered off. Auto-playing will stop when the carousel is clicked or a cell is selected
  pauseAutoPlayOnHover?: boolean;             // Auto-playing will pause when the user hovers over the carousel. Set pauseAutoPlayOnHover: false to disable this behavior
  adaptiveHeight?: boolean;                   // Changes height of carousel to fit height of selected slide
  dragThreshold?: number;                     // Default: 3 - The number of pixels a mouse or touch has to move before dragging begins. Increase dragThreshold to allow for more wiggle room for vertical page scrolling on touch devices
  selectedAttraction?: number;                // Default: 0.025 - attracts the position of the slider to the selected cell. Higher attraction makes the slider move faster. Lower makes it move slower
  friction?: number;                          // Default: 0.28 - slows the movement of slider. Higher friction makes the slider feel stickier and less bouncy. Lower friction makes the slider feel looser and more wobble
  lazyLoad?: boolean | number;                // Loads cell images when a cell is selected. Use [data-flickity-lazyload-src] instead of [src] on image tag

  cellSelector?: string;                      // Specify selector for cell elements. cellSelector is useful if you have other elements in your carousel elements that are not cells
  initialIndex?: number;                      // Default: 0 - Zero-based index of the initial selected cell
  accessibility?: boolean;                    // Default: true - Enable keyboard navigation. Users can tab to a Flickity carousel, and pressing left & right keys to change cells

  cellAlign?: 'left' | 'right' | 'center';    // Default: 'center' - Align cells within the carousel element
  contain?: boolean;                          // Default: false - Contains cells to carousel element to prevent excess scroll at beginning or end. Has no effect if wrapAround: true

  prevNextButtons?: boolean;                  // !!!Disabled since control enhancements. Creates and enables previous & next buttons
  pageDots?: boolean;                         // !!!Disabled since control enhancements. Creates and enables page dots
}


const ReactFlickity = ({children, settings}: { children: any, settings: IFlickitySettings | any }) => {

  const defaultOptions: IFlickityOptions | any = {
    pageDots: false,
    prevNextButtons: false,
    accessibility: false
  }

  const defaultSettings: IFlickitySettings | any = {
    pageDots: false,
    prevNextButtons: false,
    pageCounter: false,
  }

  const flickitySettings = {
    ...defaultSettings,
    ...settings,
    options: {
      ...defaultOptions,
      ...settings?.options
    }
  }


  const carouselRef = React.useRef(null);
  const carouselForwardRef = React.useRef(null);
  const carouselBackwardRef = React.useRef(null);
  const carouselDotsRef = React.useRef([]);
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [maxCells, setMaxCells] = React.useState(0)
  const [maxSlides, setMaxSlides] = React.useState(0)


  React.useEffect(() => {
    let flkty = carouselRef.current
    let forward = carouselForwardRef.current
    let backward = carouselBackwardRef.current
    let current_index = 0

    /* Setup event functions */
    function onDragMove() {
      current_index = flkty.selectedIndex
    }

    function onDragEnd() {
      if (flkty.selectedIndex !== current_index) {
        setCurrentIndex(flkty.selectedIndex)
      }
    }

    function onReady() {
      setMaxSlides(flkty.slides.length)
      setMaxCells(flkty.cells.length)
    }

    function onStaticClick(event, pointer, cellElement, cellIndex) {
      if( flickitySettings.onStaticClick ){
        flickitySettings.onStaticClick(event, pointer, cellElement, cellIndex)
      }
    }

    function incrementIndex() {
      if (currentIndex < maxSlides - 1) {
        setCurrentIndex(c => +c + 1)
        flkty.next()
      }
    }

    function decrementIndex() {
      if (currentIndex > 0) {
        setCurrentIndex(c => +c - 1)
        flkty.previous()
      }
    }

    function moveToIndex(i) {
      setCurrentIndex(i)
      flkty.select(i)
    }

    /* Bind events */
    if( flkty ){
      flkty.on('dragMove', onDragMove)
      flkty.on('dragEnd', onDragEnd)
      flkty.on('ready', onReady)
      flkty.on('staticClick', onStaticClick)
    }

    if (forward) forward.addEventListener('click', incrementIndex)
    if (backward) backward.addEventListener('click', decrementIndex)

    carouselDotsRef.current.map((dot, i) => {
      if (dot) dot.addEventListener('click', moveToIndex.bind(this, i))
    })


    return () => {
      if( flkty ){
        flkty.off('dragMove', onDragMove)
        flkty.off('dragEnd', onDragEnd)
        flkty.off('ready', onReady)
        flkty.off('staticClick', onStaticClick)
      }
      if (forward) forward.removeEventListener('click', incrementIndex)
      if (backward) backward.removeEventListener('click', decrementIndex)
      carouselDotsRef.current.map((dot, i) => {
        if (dot) dot.removeEventListener('click', moveToIndex.bind(this, i))
      })
    }
  }, [carouselRef, carouselForwardRef, carouselBackwardRef, currentIndex, maxSlides])


  return (
    <div className={`${styles.wrapper} react-flickity_wrapper`}>
      <Flickity
        {...flickitySettings}
        flickityRef={ref => {
          if (carouselRef) carouselRef.current = ref
        }}
      >
        {children}
      </Flickity>
      {
        (flickitySettings.pageDots || flickitySettings.prevNextButtons || flickitySettings.pageCounter) &&
        <div className={`${styles.controls} react-flickity_controls`}>
          {
            flickitySettings.prevNextButtons &&
            <>
                <div
                    ref={carouselBackwardRef}
                    className={`${styles.backward} ${currentIndex === 0 ? styles.backwardDisabled : ''} react-flickity_backward ${currentIndex === 0 ? 'disabled' : ''}`}
                />
                <div
                    ref={carouselForwardRef}
                    className={`${styles.forward} ${currentIndex === maxSlides - 1 ? styles.forwardDisabled : ''} react-flickity_forward ${currentIndex === maxSlides - 1 ? 'disabled' : ''}`}
                />
            </>
          }
            <div className={`${styles.dotsWrapper} react-flickity_dots-wrapper`}>
              {
                flickitySettings.pageDots &&
                <div className={`${styles.dots} react-flickity_dots`}>
                  {times(maxSlides, i =>
                    <div
                      key={i}
                      ref={ref => carouselDotsRef.current[i] = ref}
                      className={`${styles.dot} ${i === currentIndex ? styles.dotSelected : ''} react-flickity_dot ${i === currentIndex ? 'react-flickity_dot-selected' : ''}`}
                    />
                  )}
                </div>
              }
              {
                flickitySettings.pageCounter &&
                <div className={`${styles.counter} react-flickity_counter`}>{currentIndex + 1} / {maxSlides}</div>
              }
            </div>
        </div>
      }

    </div>
  )
}


export default ReactFlickity;