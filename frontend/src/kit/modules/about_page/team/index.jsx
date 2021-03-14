import React, { useContext, useEffect } from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import SectionH6 from '../../../components/section_h6';
import { Cards, Card, CardAvatar, CardInfo, CardAvatarImage } from './styles';
import { mainDataContext } from '../../../../contexts/MainDataContext';
import { CardWrapper } from '../../main_page/features/styles';

export default function Team() {

  const { fetchOurTeam, ourTeam } = useContext(mainDataContext);
  
  useEffect(() => {
    fetchOurTeam()
  }, [])

  return (
    <Section bg_img='/images/team_bg.jpg'>
      <SectionHeader>
        {/* <span>Наша</span> команда */}
        {ourTeam?.title}
      </SectionHeader>
      <SectionH6>
        {ourTeam?.description}
        {/* Nullam laoreet nulla sem, et malesuada metus ultricies ullamcorper.
        Phasellus lobortis leo eget diam venenatis porta. Proin maximus, mauris
        ut suscipit mollis nibh nisl hendrerit urna, a scelerisque est velit ut
        nulla. Etiam pellentesque nibh in facilisis aliquet. */}
      </SectionH6>
      <Cards>
        {
          ourTeam?.team_members.map(member => (
            <Card key={member.id}>
              <CardAvatar >
                <CardAvatarImage img={member.image} />
              </CardAvatar>
              <CardInfo>
                <h3>{member.full_name}</h3>
                <p>{member.description}</p>
              </CardInfo>
            </Card>
          ))
        }
      </Cards>
    </Section>
  );
}
