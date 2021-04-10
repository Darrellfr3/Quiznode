import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Item, Divider, Button, Message, Menu, Header} from 'semantic-ui-react';
import he from 'he';
import './style.css'

const Quiz = ({ data, endQuiz }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userSlectedAns, setUserSlectedAns] = useState(null);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

  const handleItemClick = (e, { name }) => {
    setUserSlectedAns(name);
  };

  const handleNext = () => {
    let point = 0;
    if (userSlectedAns === he.decode(data[questionIndex].correct_answer)) {
      point = 1;
    }

    const qna = questionsAndAnswers;
    qna.push({
      question: he.decode(data[questionIndex].question),
      user_answer: userSlectedAns,
      correct_answer: he.decode(data[questionIndex].correct_answer),
      point
    });

    if (questionIndex === data.length - 1) {
      return endQuiz({
        totalQuestions: data.length,
        correctAnswers: correctAnswers + point,
        questionsAndAnswers: qna
      });
    }

    setCorrectAnswers(correctAnswers + point);
    setQuestionIndex(questionIndex + 1);
    setUserSlectedAns(null);
    setQuestionsAndAnswers(qna);
  };

  return (
      <div className="container2">
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Extra>
                  <Header as="h1" floated="right">
                    <Header.Content>
                      {`No.${questionIndex + 1} of ${data.length}`}
                    </Header.Content>
                  </Header>
                </Item.Extra>
                <Item.Meta>
                  <Message size="huge" floating>
                    <b>{`${he.decode(data[questionIndex].question)}`}</b>
                  </Message>
                  <Item.Description>
                    <h3>Choose an answer:</h3>
                  </Item.Description>
                  <Divider />
                  <Menu vertical yellow fluid size="massive">
                    {data[questionIndex].options.map((option, i) => {
                      const decodedOption = he.decode(option);

                      return (
                        <Menu.Item
                          key={decodedOption}
                          name={decodedOption}
                          active={userSlectedAns === decodedOption}
                          onClick={handleItemClick}
                        >
                          {decodedOption}
                        </Menu.Item>
                      );
                    })}
                  </Menu>
                </Item.Meta>
                <Divider />
                <Item.Extra>
                  <Button
                    primary
                    content="Next"
                    onClick={handleNext}
                    floated="right"
                    size="big"
                    icon="right chevron"
                    labelPosition="right"
                    disabled={!userSlectedAns}
                  />
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
      </div>
  );
};

Quiz.propTypes = {
  data: PropTypes.array.isRequired,
  endQuiz: PropTypes.func.isRequired
};

export default Quiz;
