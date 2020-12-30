import React, { useContext } from 'react';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { DataContext } from './context/dataContext';

import AsideSocial from './containers/AsideSocial/AsideSocial';
import Header from './containers/Header/Header';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';

import BackToTop from './containers/BackToTop/BackToTop';

export default function App() {
    const { showLoading } = useContext(DataContext);

    return showLoading ? (
        <div className='loading-screen'>
            <Loader type='Oval' color='#97a4b1' height={150} width={150} />
        </div>
    ) : (
        <>
            <AsideSocial />
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}
