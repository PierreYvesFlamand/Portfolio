import React, { useContext } from 'react';

// Loading anim
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// Data Context
import { DataContext } from './context/dataContext';

// Components
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AsideSocial from './components/AsideSocial/AsideSocial';
import BackToTop from './components/BackToTop/BackToTop';

export default function App() {
    const { showLoading } = useContext(DataContext);

    return showLoading ? (
        <div className='loading-screen'>
            <Loader type='Oval' color='#94a4b4' height={150} width={150} />
        </div>
    ) : (
        <>
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
            <AsideSocial />
            <BackToTop />
        </>
    );
}
