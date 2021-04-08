import React from 'react';
import PropTypes from 'prop-types';
import { Header, Button } from 'semantic-ui-react';

const calculateScore = (totalQuestions, correctAnswers) => {
  return Number(((correctAnswers * 100) / totalQuestions).toFixed(2));
};

const Stats = ({
  totalQuestions,
  correctAnswers,
  replayQuiz,
  resetQuiz
}) => {
  const score = calculateScore(totalQuestions, correctAnswers);

  return (
    <div style={{ marginTop: 10 }}>
      <Header as="h3" textAlign="center">
        Total Questions: {totalQuestions}
      </Header>
      <Header as="h3" textAlign="center">
        Correct Answers: {correctAnswers}
      </Header>
      <Header as="h3" textAlign="center">
        Your Score: {score}%
      </Header>
      <Header as="h3" textAlign="center">
        Passing Score: 70%
      </Header>
      <div style={{ marginTop: 35 }}>
        <Button 
          primary
          content="Retake Quiz"
          onClick={replayQuiz}
          size="big"
          icon="redo"
          labelPosition="left"
          style={{ marginRight: 80, marginBottom: 8 }}
        />
        <Button
          color="green"
          content="New Quiz"
          onClick={resetQuiz}
          size="big"
          icon="question"
          labelPosition="right"
          style={{ marginBottom: 8 }}
        />
      </div>
    </div>
  );
};

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired
};

export default Stats;
