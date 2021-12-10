import React from 'react'
import './dash.css'
import logo from './logo.png'
import explore from './explore.png'
import email from './email.png'
import asset from './asset.png'
import certificate from './certificate.png'
import logout from './logout.png'
import user from './user.png'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col xl={9} className="bg-danger">
                    <div class="wrapper">
                        {/* <!-- Sidebar --> */}
                        <nav id="sidebar">
                            <div class="sidebar-header">
                                <p class="logotxt">Laurel</p>
                                {/* <img src="logo.png" alt="" class="logopic"> */}
                                 <img src={logo} alt="Logo" class="logopic"/>
                            </div>
                            <button class="addicon">
                                <span class="addtxt">+</span>
                            </button>

                            <ul class="list-unstyled components">
                                <li class="explore">
                                    {/* <img src="explore.png" alt="" class="sidelogo"> */}
                                <img src={explore} alt="" class="sidelogo"/>
                                    <a href="/#">Explore</a>
                                </li>
                                <li class="asset">
                                    {/* <img src="asset.png" alt="" class="sidelogo"> */}
                                <img src={asset} alt="" class="sidelogo"/>
                                    <a href="/#" class ="link">My assets</a>
                                </li>
                                <li class="mail">
                                    {/* <img src="email.png" alt="" class="sidelogo"> */}
                                <img src={email} alt="" class="sidelogo"/>

                                    <a href="/#" class ="link">My Email Presets</a>
                                </li>
                                <li class="profile">
                                    {/* <img src="user.png" alt="" class="sidelogo"> */}
                                <img src={user} alt="" class="sidelogo"/>
                                    <a href="/#" class ="link">Profile</a>
                                </li>
                                <li class="logout">
                                    {/* <img src="logout.png" alt="" class="sidelogo"> */}
                                <img src={logout} alt="" class="sidelogo"/>
                                    <a href="/#" class ="link">Logout</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="main">
                        <span class="heading">Certificates</span>
                        <button style={{'borderRadius': '30px'}}>
                            <span class="addsign">+</span>
                            <span class="customtxt">Custom Certificate</span>
                        </button>
                        <div class="bgimage"></div>
                        {/* <!-- break --> */}
                        <div class="certificates">
                            <div id="certificate">
                                <span class="gdsctxt">~GDSC RCCIIT</span>
                                <div class="rectangle1"></div>
                                <div class="rectangle2"></div>
                                {/* <img src="certificate.png" alt="" class="certificateimg"> */}
                                <img src={certificate} alt="" class="certificateimg"/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home