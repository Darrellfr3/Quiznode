import React, { useState } from 'react';
import Layout from '../Layout';
import Main from '../Main';
import Quiz from '../Quiz';
import Result from '../Result';
import { shuffle } from '../utils';

const App = () => {
  const [data, setData] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [resultData, setResultData] = useState(null);

  const startQuiz = (data) => {

    setTimeout(() => {
      setData(data);
      setIsQuizStarted(true);
    }, 1000);
  };

  const endQuiz = resultData => {

    setTimeout(() => {
      setIsQuizStarted(false);
      setIsQuizCompleted(true);
      setResultData(resultData);
    }, 2000);
  };

  const replayQuiz = () => {

    const shuffledData = shuffle(data);
    shuffledData.forEach(element => {
      element.options = shuffle(element.options);
    });

    setData(shuffledData);

    setTimeout(() => {
      setIsQuizStarted(true);
      setIsQuizCompleted(false);
      setResultData(null);
    }, 1000);
  };

  const resetQuiz = () => {

    setTimeout(() => {
      setData(null);
      setIsQuizStarted(false);
      setIsQuizCompleted(false);
      setResultData(null);
    }, 1000);
  };

  return (
    <Layout>
      {!isQuizStarted && !isQuizCompleted && (
        <Main startQuiz={startQuiz} />
      )}
      {isQuizStarted && (
        <Quiz data={data} endQuiz={endQuiz} />
      )}
      {isQuizCompleted && (
        <Result {...resultData} replayQuiz={replayQuiz} resetQuiz={resetQuiz} />
      )}
    </Layout>
  );
};

export default App;
