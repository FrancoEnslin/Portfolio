import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
 import colorSharp2 from '../../Assets/color-sharp2.png'

import projImg2 from '../../Assets/project-img2.png'
import projImg3 from '../../Assets/project-img3.png'
import projImg1 from '../../Assets/project-img1.png'
import projectDashboard from '../../Assets/project-dashboard.png'
import projectAbout from '../../Assets/project-about.png'
import projectCreate from '../../Assets/project-createproduct.png'

export default function Projects() {

    const projects = [
        {
            title: "Final year project",
            description: "Design & Development",
            imgUrl: projectDashboard,
        },
        {
            title: "Final year project",
            description: "Design & Development",
            imgUrl: projectAbout,
        },
        {
            title: "Final year project",
            description: "Design & Development",
            imgUrl: projectCreate,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];


    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Some nice projects take a look</p>
                        <Tab.Container id='project-tabs' defaultActiveKey="first">
                            <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first" > Tab 1 </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" > Tab 2 </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" > Tab 3 </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Yo, some nice text again
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} />
        </section>
    )
}

