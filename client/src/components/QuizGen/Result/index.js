import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import './style.css'


const Result = ({totalQuestions, correctAnswers, replayQuiz, resetQuiz}) => {

  return (
    <div className="container3">
    <Stats
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          replayQuiz={replayQuiz}
          resetQuiz={resetQuiz}
        />
    </div>
  );
};

Result.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired
};

export default Result;
