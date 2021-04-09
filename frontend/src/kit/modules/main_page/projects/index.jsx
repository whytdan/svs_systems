import React, { useContext, useEffect } from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import SectionH6 from '../../../components/section_h6';
import {ProjectsCards, Button} from './styles';
import ProjectCard from './ProjectCard'
import { mainDataContext } from '../../../../contexts/MainDataContext';
import { Link } from '@reach/router';

export default function Projects(props) {

  const {ourProjectsSectionData, fetchOurProjectsSectionData} = useContext(mainDataContext);
  
  useEffect(() => {
    fetchOurProjectsSectionData();
  }, [])

  return (
    <Section bg_color='white'>
      <div>
        <SectionHeader color='grey'>
          {ourProjectsSectionData?.static?.title}
        </SectionHeader>
        <SectionH6 color='grey'>
          {ourProjectsSectionData?.static?.description}
        </SectionH6>
        <ProjectsCards>
          {
            ourProjectsSectionData?.projects.map(project => (
              <Link key={project.id} to={`/portfolio/${project.id}`}>
                <ProjectCard key={project.id} data={project} />
              </Link>
            ))
          }
        </ProjectsCards>
        <Link to="/portfolio">
          <Button type='submit'>Больше</Button>
        </Link>
      </div>
    </Section>
  );
}
