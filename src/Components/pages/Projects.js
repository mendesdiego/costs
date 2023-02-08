import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Container from '../layout/Container';
import Loading from '../layout/Loading';
import LinkButton from '../layout/LinkButton';

import Message from '../layout/Message'
import ProjectCard from '../project/ProjectCard';

import styles from './Projects.module.css'

// import ConfigUrl from '../config/ConfigUrl';

const url = (window.location.host === 'localhost:3000') ? 'http://localhost:5000' : 'https://costs-nu-wine.vercel.app'

// console.log(ConfigUrl);

function Projects() {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    useEffect( () => {
        setTimeout(() => {
            fetch(`${url}/projects`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then((resp) => resp.json())
            .then(data => {
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch(err => console.log(err))
        },300)
    }, [])

    function removeProject(id) {
        fetch(`${url}/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
        .then(data => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>

            {message && <Message msg={message} type='success'/>}
            {projectMessage && <Message msg={projectMessage} type='success'/>}

            <Container customClass="start">
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCard 
                        id={project.id} 
                        name={project.name}
                        budget={project.budget}
                        category={project.category}
                        key={project.id}
                        handleRemove={removeProject}
                    />
                ))}

                {!removeLoading && <Loading />}
                {
                    removeLoading && projects.length === 0 && (
                        <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}

export default Projects