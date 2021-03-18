import React from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import { Link } from '@reach/router';
import { Cards, Card, CardImg, CardBody, CardFooter } from './styles';
import Truncate from 'react-truncate';

export default function Posts({projects}) {
  return (
    <Section bg_color='white'>
      <SectionHeader color='grey'>
        <span>Нашe</span> портфолио
      </SectionHeader>
      <Cards>
        {
          projects && projects.map(project => (
          <Link to={`/portfolio/${project.id}`} key={project.id}>
            <Card>
              <CardImg img={project.image} />
              <CardBody>
                <Link to='/'>
                  <h3>{project.title}</h3>
                </Link>
                <p>
                  
                  <Truncate lines={3} ellipsis={"..."}>
                    <div dangerouslySetInnerHTML={{
                        __html: project.description
                      }}/>
                  </Truncate>
                </p>
              </CardBody>
              <CardFooter>
                <img src='/icons/calendar.svg' alt='calendar' />
                <span>{project.made_on}</span>
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


    </Section>
  );
}
