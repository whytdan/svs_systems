import React, { useContext, useEffect } from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import { Link } from '@reach/router';
import { Cards, Card, CardImg, CardBody, CardFooter, Button } from './styles';
import { mainDataContext } from '../../../../contexts/MainDataContext';
import Truncate from 'react-truncate';

export default function Blog() {

  const { mainPosts, fetchMainPosts } = useContext(mainDataContext)

  useEffect(() => {
    fetchMainPosts()
  }, [])

  return (
    <Section bg_color='white'>
      <SectionHeader color='grey'>
      Наши последние публикации
      </SectionHeader>
      <Cards>
        {
          mainPosts && mainPosts.map(post => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <Card>
              <CardImg img={post.images[0].file} />
              <CardBody>
                <h3>{post.title}</h3>
                <p>
                  <Truncate lines={3} ellipsis={'...'}>
                    <span dangerouslySetInnerHTML={{
                      __html: post.description
                    }}>
                    </span>
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

      <Link to="/blog">
        <Button type='submit'>Больше</Button>
      </Link>

    </Section>
  );
}
