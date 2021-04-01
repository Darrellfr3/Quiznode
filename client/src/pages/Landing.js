import React from 'react';
import ReactDOM from 'react-dom';
import '../components/Landing/index.scss';
import Navbar from "../components/Landing/navbar";
import 'bootstrap/dist/css/bootstrap.css';

function Landing() {
    return ReactDOM.render(
      <React.Fragment>
        <Navbar />
      </React.Fragment>, document.getElementById('root'));
}

export default Landing
