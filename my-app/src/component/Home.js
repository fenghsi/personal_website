import React from 'react';
import { Timeline, Icon } from 'antd';
import { Layout } from 'antd';
import { Typography} from 'antd';
import feyu from '../images/feyu.jpg';
import csg from '../images/csg.png';
import ecomm from '../images/e-comm.png';
import twitter from '../images/twitter.jpg';
import { Card, Col, Row } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

function Home(props) {
    return (
            <div id = "homepage">
                <Layout className="layout">
                    <Header>
                    </Header>
                    <Content className = "content" style={{ padding: '0 50px' }}>
                        <div class = "blocks" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <div class="odd">
                                <Title style={{ textAlign: 'center' }} >Fenghsi Yu</Title>
                                <img src={feyu} alt="Avatar" class="prof_picture" ></img>
                            </div>
                            <div class="even">
                                <Typography className = "typolog" >
                                    <Title >About Me</Title>
                                    <Paragraph className = "self_intro">
                                    Currently 
                                    </Paragraph>
                                    <br />
                                </Typography>
                            </div>
                            <div id = "Timeline" class="odd" >
                                <Title >Experience</Title>
                                <Timeline mode="alternate">
                                    <Timeline.Item>
                                        <h3>Fall 2017</h3>Start studying Computer Science in Stony Brook University </Timeline.Item>
                                    <Timeline.Item color="green">
                                        <h3>Spring 2019</h3>Teaching Assistant for Data Structure
                                    </Timeline.Item>
                                    <Timeline.Item>
                                        <h3>June 2019</h3>Intern at KSR as a Database Developer
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <h3>July 2019</h3> Work in Stony Brook University CS Department as a Web Assistant (Current Job)
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <h3>Now</h3>
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                            <div class="even" >
                                <Title >Projects</Title>
                                <div style={{ background: '#ECECEC', padding: '30px' }}>
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <Card className="projects" title="Twitter Clone" bordered={false}>
                                                <img src={twitter}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text">Link Unavailable</div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="E-Commerce Website" bordered={false}>
                                                <img src={ecomm}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <a href="https://github.com/fenghsi/e-commerce-project"><div class="text">Go to Github</div></a>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="Course site Generator" bordered={false}>
                                                <img src={csg}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <a href="https://github.com/fenghsi/course_site_generator"><div class="text">Go to Github</div></a>
                                                </div>              
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                       
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>©2020 Created by Fenghsi Yu</Footer>
                </Layout>
            </div>
     );
}

export default Home; 