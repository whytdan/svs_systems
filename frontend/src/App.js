import React from 'react';
import { Router } from '@reach/router';
import MainScene from './scenes/MainScene';
import ContactScene from './scenes/ContactScene';
import AboutScene from './scenes/AboutScene';
import ServicesScene from "./scenes/ServicesScene";
import LanguagesScene from "./scenes/LanguagesScene";
import BlogScene from './scenes/BlogScene';
import PortfolioScene from './scenes/PortfolioScene';
import { ScrollToTop } from './kit/components/scroll_to_top';
import BlogDetailScene from './scenes/BlogDetailScene';
import ProjectDetailScene from './scenes/ProjectDetailScene';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import 'firebase/auth';
import MainDataProvider from './contexts/MainDataContext';
import SecondaryDataProvider from './contexts/SecondaryDataContext';

toast.configure();

export const adminContext = React.createContext(null);

function App() {

  return (
    <div id='App'>
      <MainDataProvider>
        <SecondaryDataProvider>
          <Router>
            <ScrollToTop path='/'>
              <MainScene path='/' />
              <ContactScene path='/contact' />
              <AboutScene path='/about' />
              <ServicesScene path='/services' />
              <LanguagesScene path='/languages' />
              <BlogScene path="/blog" />
              <PortfolioScene path="/portfolio" />
              <BlogDetailScene path="blog/:postId" />
              <ProjectDetailScene path="portfolio/:projectId" />
            </ScrollToTop>
          </Router>
        </SecondaryDataProvider>
      </MainDataProvider>
    </div>
  );
}

export default App;
