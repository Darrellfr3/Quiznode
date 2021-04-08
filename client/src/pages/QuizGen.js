import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from '../components/QuizGen/App/index';
import '../components/Landing/index.scss';
import Navbar from "../components/navbar";
import Footer from "../components/footer";


function QuizGen() {
return ReactDOM.render(
    
  <React.StrictMode>
        <Navbar />
      <div id="my-background" className="background">
				<div id="stars"></div>
				<div id="stars2"></div>
				<div id="stars3"></div></div>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
}

export default QuizGen