import React, { useState } from 'react';

import './Projects.css';
import ProjectModal from '../ProjectModal/ProjectModal';

export default function Projects(props) {
    const projects = props.data;

    return (
        <section className='projects' id='my-projects'>
            <div className='projects-container'>
                <h2 className='projects-header'>Projects</h2>
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
    console.log(modalOpen);

    return (
        <>
            {modalOpen ? <ProjectModal data={props.data} closeBtn={setModalOpen} /> : null}
            <div className='project'>
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
