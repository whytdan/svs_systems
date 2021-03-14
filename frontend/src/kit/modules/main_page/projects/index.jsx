import React, { useContext, useEffect } from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import SectionH6 from '../../../components/section_h6';
import {ProjectsCards, Button} from './styles';
import ProjectCard from './ProjectCard'
import Slider from "react-slick";
import classes from './styles.module.scss';
import { mainDataContext } from '../../../../contexts/MainDataContext';
import { Link } from '@reach/router';
import { useHistory } from 'react-router-dom';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4
};


export default function Projects(props) {

  const {ourProjectsSectionData, fetchOurProjectsSectionData} = useContext(mainDataContext);
  
  useEffect(() => {
    fetchOurProjectsSectionData();
  }, [])

  const history = useHistory();

  return (
    <Section bg_color='lightgrey'>
      <div>
        <SectionHeader color='grey'>
          {/* <span>Наши</span> последние работы */}
          {ourProjectsSectionData?.static.title}
        </SectionHeader>
        <SectionH6 color='grey'>
          {/* Nullam laoreet nulla sem, et malesuada metus ultricies ullamcorper.
          Phasellus lobortis leo eget diam venenatis porta. Proin maximus, mauris
          ut suscipit mollis nibh nisl hendrerit urna, a scelerisque est velit ut
          nulla. Etiam pellentesque nibh in facilisis aliquet. */}
          {ourProjectsSectionData?.static.description}
        </SectionH6>
          {/* <Slider {...settings}> */}
        <ProjectsCards>
          {
            ourProjectsSectionData?.projects.map(project => (
              <Link key={project.id} to={`/portfolio/${project.id}`}>
                <ProjectCard key={project.id} data={project} />
              </Link>
            ))
          }
            {/* <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/> */}
        </ProjectsCards>
          {/* </Slider> */}

        <Link to="/portfolio">
          <Button type='submit'>Больше</Button>
        </Link>

      </div>
    </Section>
  );
}
