import React, { useState, useRef, useEffect, useContext } from 'react';

import './Projects.css';

import { DataContext } from '../../context/dataContext';

import ProjectModal from '../ProjectModal/ProjectModal';

export default function Projects() {
    const { data } = useContext(DataContext);
    const projects = data.projects;

    return (
        <section className='projects' id='mes-projets'>
            <div className='projects-container'>
                <h2 className='projects-header'>Mes Projets</h2>
                <div className='all-projetcs'>
                    {projects.map((project, idx) => (
                        <Project key={idx} data={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Project(props) {
    const { img } = props.data;
    const [modalOpen, setModalOpen] = useState(false);

    const ref = useRef();
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const nodeRef = ref.current;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setFadeIn(true);
                observer.unobserve(nodeRef);
            }
        });
        observer.observe(nodeRef);

        return () => observer.unobserve(nodeRef);
    }, []);
    return (
        <>
            {modalOpen ? <ProjectModal data={props.data} closeBtn={setModalOpen} /> : null}
            <div className={`project${fadeIn ? ' fade-in' : ''}`} ref={ref}>
                <div className='img' style={{ backgroundImage: `url(./data/img/projects/${img})` }}></div>
                <div
                    className='hover'
                    onClick={() => {
                        document.body.style.overflow = 'hidden';
                        setModalOpen(true);
                    }}
                >
                    <span>
                        <i className='far fa-eye'></i>VIEW PROJECT
                    </span>
                </div>
            </div>
        </>
    );
}
