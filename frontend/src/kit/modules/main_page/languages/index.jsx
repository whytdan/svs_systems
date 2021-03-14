import { Grid, makeStyles } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { mainDataContext } from '../../../../contexts/MainDataContext';
import Section from '../../../components/section';
import {
  Wrapper,
  SectionHeader,
  List,
} from './styles';

// TODO: How to render language lists???

const useStyles = makeStyles({
  languageServices: {
    maxWidth: 350,
    margin: 30
  },
  container: {
    maxWidth: 1440,
    margin: '0 auto'
  }
})

export default function Languages({ service }) {

  const classes = useStyles();
  const { fetchLanguages, languages } = useContext(mainDataContext);

  useEffect(() => {
    fetchLanguages()
  }, [])

  return (
    <Section bg_img='/images/bg-2.jpg'>
      <Wrapper>
        <Grid container spacing={3} justify="center" className={classes.container}>

          {
            languages?.length && languages.map(language => (
              <Grid item xs={12} md={6} className={classes.languageServices} key={language.id}>
                <SectionHeader>
                  <span>{language.title}</span>
                </SectionHeader>

                <List>
                  {
                    language.services.map(service => (
                      <li key={service.id}>
                        <img src='/icons/arrow-right.png' alt='arrow' />
                        <span>{service.title}</span>
                      </li>
                    ))
                  }
                </List>
              </Grid>
            ))
          }

        </Grid>
      </Wrapper>
    </Section>
  );
}
