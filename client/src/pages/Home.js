import React from 'react';
import Footer from "../components/footer"

import {Row, Col, Button, Container} from "react-bootstrap";
import Navbar from '../components/navbarx';
import { BrowserRouter as Router, Link} from 'react-router-dom';

import './userHome.css';
import '../components/Landing/index.scss';







function Home() {
  return (
    
    <div id="my-background" className="background">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Router>
        <Navbar />

        <Container>

          <Row >
            <Col className="quizcontainer1">

              <h3> Build a Quiz</h3>
              <p>Build a custom quiz with your own Q's {`&`} A's</p>

              <Button size="lg" block href="/createQuiz">Build Quiz</Button>{' '}


            </Col>

            <Col className="quizcontainer1">

              <h3> Take a Quiz</h3>
              <p>Take a quiz that you've built previously.</p>

              <Button size="lg" block href="/search">Take Quiz</Button>


            </Col>

            <Col className="quizcontainer1">

              <h3> Pregenerated Quiz </h3>
              <p>Take a quiz that's been pregenerated.</p>

              <Button size="lg" block href="/quizgen">Load Quiz</Button>

            </Col>


          </Row>
        </Container>
        <Footer />

      </Router>
      </div>
    )
}

export default Home
