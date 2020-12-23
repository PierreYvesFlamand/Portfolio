import React, { useEffect, useState } from 'react';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import AsideSocial from './containers/AsideSocial/AsideSocial';
import Header from './containers/Header/Header';
import About from './containers/About/About';
import Footer from './containers/Footer/Footer';

import ProjectModal from './containers/ProjectModal/ProjectModal';

export default function App() {
    const [minLoading, setMinLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => setMinLoading(false), 1); // 900

        fetch('./data/data.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            });
    }, []);

    return minLoading || isLoading ? (
        <div className='loading-screen'>
            <Loader type='Oval' color='#97a4b1' height={150} width={150} />
        </div>
    ) : (
        <>
            <AsideSocial />
            <Header data={data} />
            <About />
            <Footer />
            <ProjectModal />
        </>
    );
}
