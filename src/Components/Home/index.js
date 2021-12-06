import React from 'react'
import './home.css'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col xl={9} className="bg-danger">
                    <div style={{color: 'white'}}>Hello</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
