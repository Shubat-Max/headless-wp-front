import * as React from "react"
import Flickity from "react-flickity-component";
import {FilterSliderItem, FilterSliderItemImg, FilterSliderItemImgBlock, FlickityContainer} from "./Slider.sc";


const flickityOptions = {
  prevNextButtons: true,
  pageDots: false,
  cellAlign: 'left',
  groupCells: true,
  contain: true,
}

const Slider = ({activeAttribute, slides, onClick}) => {
  return (
    <FlickityContainer>
      <Flickity
        className={''}
        options={flickityOptions}
        disableImagesLoaded={false}
      >
      {slides.map(slide => {
        let name : string;
        let slug : string
        if (typeof slide === "string") {
          name = slide
          slug = slide
        } else {
          name = slide.term_name
          slug = slide.term_slug
        }
        return <div key={slug}>
          <FilterSliderItem
            // active={activeAttribute === slug}
            onClick={() => onClick(activeAttribute === slug ? '' : slug)}
          >
            <FilterSliderItemImgBlock>
              <FilterSliderItemImg
                      src='https://s3-alpha-sig.figma.com/img/3980/9632/cb389c206a8864220e9db759771807c4?Expires=1608508800&Signature=LQY9VMNI9FrP6-W2IekdSlJ6ZuhtKbZWMxUtQzM3IlzGeLNRKZNsfKH8i0TGawKG8cayh5lDzV~gwXiEMObzrZb6sKgm9tFxwgfrrfHd4LzzRSmW~XzsyywDoCZl~cMbQ9-qQcSryq1eGS~01N2GeHHvs3Zn6~Z45w0QLYPkt93dlIUD346UVlNDS2e4JPZ1GXNIKAPVrfeX3NAe-dm-qg~pBDkbts5moF7cBeCFDcPslZVr41vGBgJ9ptXUJxZya72rgGay~jcwEpVK2Md5m2adpWtOAYPR0eC~FZIIilZUNOEf2rnTLhyaXzx8sxI4pwqKKLHYtKJJM~JtdfwSxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'/>
            </FilterSliderItemImgBlock>
            <div>{name}</div>
          </FilterSliderItem>
        </div>
      })}
    </Flickity>
  </FlickityContainer>
  )
}





export default Slider