import React from 'react';
import Footer from "../components/footer"
import {Row, Col, Button, Container} from "react-bootstrap";
import Navbar from '../components/navbar';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import './userHome.css';







function Home() {
    return (
        <Router>
        <Navbar/>  
        <Container>
            <Row >
            <Col className="quizcontainer1">
            
          <h3> Build a Quiz</h3>
          <p>Build a custom quiz with your own Q's {`&`} A's</p>
          <Link to="/createQuiz">
          <Button size="lg" block>Build Quiz</Button>{' '}
          </Link>

          </Col>

            <Col className="quizcontainer1">
           
          <h3> Take a Quiz</h3>
          <p>Take a quiz that you've built previously.</p>
          <Link to="/search">
          <Button size="lg" block>Take Quiz</Button>
          </Link>
            </Col>

            <Col className="quizcontainer1">
         
          <h3> Pregenerated Quiz </h3>
          <p>Take a quiz that's been pregenerated.</p>
          <Link to="/quizGen">
          <Button size="lg" block>Load Quiz</Button>
          </Link>
          </Col>
      

          </Row>
          </Container>
          <Footer/>
     
        </Router>
        
    )
}

export default Home
