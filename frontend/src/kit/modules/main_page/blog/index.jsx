import React, { useContext, useEffect } from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import SectionH6 from '../../../components/section_h6';
import { Link } from '@reach/router';
import { Cards, Card, CardImg, CardBody, CardFooter, Button } from './styles';
import { mainDataContext } from '../../../../contexts/MainDataContext';
import Truncate from 'react-truncate';

export default function Blog(props) {

  const { mainPosts, fetchMainPosts } = useContext(mainDataContext)


  useEffect(() => {
    fetchMainPosts()
  }, [])

  return (
    <Section bg_color='lightgrey'>
      <SectionHeader color='grey'>
      Наши последние публикации
      </SectionHeader>
      {/* <SectionH6 color='grey'>
        
      </SectionH6> */}
      <Cards>

        {
          mainPosts && mainPosts.map(post => (
          <Link to={`/blog/${post.id}`}>
            <Card>
              <CardImg img={post.images[0].file} />
              <CardBody>
                <h3>{post.title}</h3>

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



        {/* <Card>
          <CardImg img='/images/card_img.jpg' />
          <CardBody>
            <Link to='/'>
              <h3>Vestibulum iaculis lacinia</h3>
            </Link>
            <p>
              Vestibulum eget nunc eget leo fermentum imp erdiet. Quisque sit
              amet ligula porta, tempus ante nec, varius nisi. Nunc mollis
              vulputate tortor quis pharetra. Nam viverra nulla dolor
            </p>
          </CardBody>
          <CardFooter>
            <img src='/icons/calendar.svg' alt='calendar' />
            <span>July 9, 2015 </span>
          </CardFooter>
        </Card>
        <Card>
          <CardImg img='/images/card_img.jpg' />
          <CardBody>
            <Link to='/'>
              <h3>Vestibulum iaculis lacinia</h3>
            </Link>
            <p>
              Vestibulum eget nunc eget leo fermentum imp erdiet. Quisque sit
              amet ligula porta, tempus ante nec, varius nisi. Nunc mollis
              vulputate tortor quis pharetra. Nam viverra nulla dolor
            </p>
          </CardBody>
          <CardFooter>
            <img src='/icons/calendar.svg' alt='calendar' />
            <span>July 9, 2015 </span>
          </CardFooter>
        </Card> */}
      </Cards>

      <Link to="/blog">
        <Button type='submit'>Больше</Button>
      </Link>

    </Section>
  );
}
