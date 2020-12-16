import * as React from "react"
import Flickity from "react-flickity-component"
import {useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import Link from "next/link";
import {
  FlickityContainer,
  ProjectsSlide,
  ProjectsSlideCategory,
  ProjectsSlideImg, ProjectsSliderTitle,
  ProjectsSliderWrapper,
  ProjectsSlideTitle
} from "./ProjectsSlider.sc";

const flickityOptions = {
  prevNextButtons: true,
  pageDots: false,
  cellAlign: 'left',
  groupCells: true,
  contain: true,
}

const ProjectsSlider = () => {
  const projects = useSelector((state: RootState) => state.indexPage.projectsSlider)

  return (
    <section>
      <ProjectsSliderTitle>
        ПРОЕКТЫ С МЕБЕЛЬЮ ОТ <a href={'https://skdesign.ru/'}>SK DESIGN</a>
        <span>{projects.length}</span>
      </ProjectsSliderTitle>
      <FlickityContainer>
        <Flickity
                className={''}
                options={flickityOptions}
                disableImagesLoaded={false}
        >
          {projects.map(({title, category, img, url }, i) =>
                  <ProjectsSliderWrapper key={i}>
                    <Link  href={url} passHref>
                      <a>
                        <ProjectsSlide>
                          <ProjectsSlideImg src={img} alt={title} title={title}/>
                          <ProjectsSlideCategory>{category}</ProjectsSlideCategory>
                          <ProjectsSlideTitle>{title}</ProjectsSlideTitle>
                        </ProjectsSlide>
                      </a>
                    </Link>
                  </ProjectsSliderWrapper>
          )}
        </Flickity>
      </FlickityContainer>
    </section>

  )
}

export default ProjectsSlider