import React from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import SectionH6 from '../../../components/section_h6';
import { Link } from '@reach/router';
import { Cards, Card, CardImg, CardBody, CardFooter, Button } from './styles';
import Truncate from 'react-truncate';

export default function Posts({posts}) {
  return (
    <Section bg_color='lightgrey'>
      <SectionHeader color='grey'>
        <span>Наш</span> блог
      </SectionHeader>
      <Cards>
        {
          posts && posts.map(post => (
            <Link to={`/blog/${post.id}`} key={post.id}>    
              <Card>
                <CardImg img={post.images[0].file} />
                <CardBody>
                  <Link to='/'>
                    <h3>{post.title}</h3>
                  </Link>
                  <p>
                  <Truncate lines={3} ellipsis={'...'}>
                    <div dangerouslySetInnerHTML={{
                      __html: post.description
                    }}>
                    </div>
                  </Truncate>
                </p>
                </CardBody>
                <CardFooter>
                  <img src='/icons/calendar.svg' alt='calendar' />
                  <span>{post.created_at}</span>
                </CardFooter>
              </Card>
            </Link>
          ))
        }
      </Cards>


    </Section>
  );
}
