import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../../Assets/color-sharp2.png'

//Random Images
import projImg2 from '../../Assets/project-img2.png'
import projImg3 from '../../Assets/project-img3.png'
import projImg1 from '../../Assets/project-img1.png'
//Final year project
import projectDashboard from '../../Assets/project-dashboard.png'
import projectAbout from '../../Assets/project-about.png'
import projectCreate from '../../Assets/project-createproduct.png'
//Work projects
import image1 from '../../Assets/unknown.png'
import image2 from '../../Assets/unknown (1).png'
import image3 from '../../Assets/unknown (2).png'
//UI
import Contact from '../../Assets/NewUI.png'
import Landing from '../../Assets/Landing1.png'
import Banner from '../../Assets/Banner1.png'
import Skills from '../../Assets/Skills.png'
import Landing2 from '../../Assets/Landing2.png'

//UI Design projects


//Startup projects
import BudgetApp from '../../Assets/BudgetApp.png'
import ExpensesChart from '../../Assets/ExpensesChart.png'
import SummaryChart from '../../Assets/SummaryChart.png'

export default function Projects() {

    const Devprojects = [
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
            title: "Front end Projects",
            description: "Managing public Holidays",
            imgUrl: image1,
        },
        {
            title: "Front end Projects",
            description: "Managing public Holidays",
            imgUrl: image2,
        },
        {
            title: "Front end Projects",
            description: "Managing public Holidays",
            imgUrl: image3,
        },
    ];

    const UIProjects = [
        {
            title: "3d Spline",
            description: "Animation",
            imgUrl: Landing,
        },
        {
            title: "3d Spline",
            description: "Animation",
            imgUrl: Landing2,
        },
        {
            title: "3d Spline",
            description: "Animation",
            imgUrl: Landing,
        },
        {
            title: "Portfolio",
            description: "Design & Development",
            imgUrl: Contact,
        },
        {
            title: "Portfolio",
            description: "Design & Development",
            imgUrl: Banner,
        },
        {
            title: "Portfolio",
            description: "Design & Development",
            imgUrl: Skills,
        },
    ];

    const StartUpProjects = [
        {
            title: "Budget App",
            description: "Design & Development",
            imgUrl: BudgetApp,
            URL: 'https://myfirstbudget.netlify.app/'
        },
        {
            title: "Budget App",
            description: "Design & Development",
            imgUrl: ExpensesChart,
        },
        {
            title: "Budget App",
            description: "Design & Development",
            imgUrl: SummaryChart,
        },
        {
            title: "Front end Projects",
            description: "Managing public Holidays",
            imgUrl: image1,
        },
        {
            title: "Front end Projects",
            description: "Managing public Holidays",
            imgUrl: image2,
        },
        {
            title: "Front end Projects",
            description: "Managing public Holidays",
            imgUrl: image3,
        },
    ];


    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Projects I have worked on</p>
                        <Tab.Container id='project-tabs' defaultActiveKey="first">
                            <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first" > Software Development </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" > UI Design </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" > Software Development </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            Devprojects.map((project, index) => {
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
                                            UIProjects.map((project, index) => {
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
                                    <Row>
                                        {
                                            StartUpProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
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

