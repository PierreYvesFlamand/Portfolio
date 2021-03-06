import React, { useState, useContext } from 'react';
import './Projects.css';

import { DataContext } from '../../context/dataContext';
import FadeIn from '../../hooks/FadeIn';

import ProjectModal from '../ProjectModal/ProjectModal';

export default function Projects() {
    const projects = useContext(DataContext).data.projects;
    const { ctas } = useContext(DataContext).data.header;

    return (
        <section className='projects' id='projects'>
            <div className='projects-container'>
                <h2 className='projects-header'>{ctas[1]}</h2>
                <div className='all-projetcs'>
                    {projects.map((project, idx) => (
                        <Project key={idx} data={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Project({ data }) {
    const { img, techs } = data;
    const [modalOpen, setModalOpen] = useState(false);
    const [ref, fadeIn] = FadeIn();

    return (
        <>
            {modalOpen ? <ProjectModal data={data} closeBtn={setModalOpen} /> : null}
            <div
                className='project'
                style={fadeIn ? { transform: 'scale(1)', opacity: '1' } : null}
                ref={ref}
                onClick={() => {
                    document.body.style.overflow = 'hidden';
                    setModalOpen(true);
                }}
            >
                <div
                    className='img'
                    style={{
                        backgroundImage: `url(${img}`,
                    }}
                ></div>
                <div className='hover'>
                    <span>
                        <i className='far fa-eye'></i>VIEW PROJECT
                    </span>
                </div>
                {techs.some((tech) => tech.toLowerCase() === 'react') && (
                    <i className='fab fa-react react react-tag'></i>
                )}
            </div>
        </>
    );
}
