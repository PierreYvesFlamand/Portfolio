import React, { useState, useContext } from 'react';
import './Projects.css';

import { DataContext } from '../../context/dataContext';
import FadeIn from '../../hooks/FadeIn';

import ProjectModal from '../ProjectModal/ProjectModal';

export default function Projects() {
    const projects = useContext(DataContext).data.projects;

    return (
        <section className='projects' id='projects'>
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
    const [ref, fadeIn] = FadeIn();

    return (
        <>
            {modalOpen ? <ProjectModal data={props.data} closeBtn={setModalOpen} /> : null}
            <div className='project' style={fadeIn ? { transform: 'scale(1)', opacity: 1 } : null} ref={ref}>
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
