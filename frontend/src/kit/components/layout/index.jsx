import React from 'react';
import PT from 'prop-types';
import Header from './header';
import Footer from './footer';
import ScrollUp from '../scroll_up';
export default function Layout(props) {
  return (
    <div>
      <Header bottom_header={props.bottom_header} isLanguagesPage={props.isLanguagesPage}/>
      {props.children}
      <ScrollUp />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  bottom_header: PT.bool,
};
