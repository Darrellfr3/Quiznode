import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Item, Dropdown, Divider, Button} from 'semantic-ui-react';
import './style.css'
import {CATEGORIES, DIFFICULTY,} from '../constants';
import { shuffle } from '../utils';

const QuestionNum = [];
for (let i = 1; i <= 50; i++) {
  QuestionNum.push({ key: i, text: i, value: i });
}

const Main = ({ startQuiz }) => {
  const [category, setCategory] = useState(null);
  const [numOfQuestions, setNumOfQuestions] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);


  let allFieldsSelected = false;
  if (
    category &&
    numOfQuestions &&
    difficulty
  ) {
    allFieldsSelected = true;
  }

  const fetchData = () => {
    setProcessing(true);

    if (error) setError(null);

    const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;

    fetch(API)
      .then(respone => respone.json())
      .then(data =>
        setTimeout(() => {
          const { response_code, results } = data;

          if (response_code === 1) {
            setProcessing(false);

            return;
          }

          results.forEach(element => {
            element.options = shuffle([
              element.correct_answer,
              ...element.incorrect_answers
            ]);
          });

          setProcessing(false);
          startQuiz(
            results,
          );
        }, 1000)
      )
      .catch(error =>
        setTimeout(() => {
          if (!navigator.onLine) {
          } else {
            setProcessing(false);
            setError(error);
          }
        }, 1000)
      );
  };

  return (
    <div className="container4">
        <Item.Group divided>
          <Item>
            <Item.Content>
                <h1 className="text-center">Generate Quiz</h1>
              <Divider />
              <Item.Meta>
                <Dropdown
                  fluid
                  selection
                  name="category"
                  placeholder="Select Category"
                  options={CATEGORIES}
                  value={category}
                  onChange={(e, { value }) => setCategory(value)}
                  disabled={processing}
                />
                <br />
                <Dropdown
                  fluid
                  selection
                  name="numOfQ"
                  placeholder="Number of Questions"
                  options={QuestionNum}
                  value={numOfQuestions}
                  onChange={(e, { value }) => setNumOfQuestions(value)}
                  disabled={processing}
                />
                <br />
                <Dropdown
                  fluid
                  selection
                  name="difficulty"
                  placeholder="Select Difficulty"
                  options={DIFFICULTY}
                  value={difficulty}
                  onChange={(e, { value }) => setDifficulty(value)}
                  disabled={processing}
                />
                <br />
              </Item.Meta>
              <Divider />
              <Item.Extra>
                <Button
                  primary
                  size="big"
                  icon="cog"
                  labelPosition="left"
                  content={processing ? 'Processing...' : 'Generate'}
                  onClick={fetchData}
                  disabled={!allFieldsSelected || processing}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      <br />
    </div>
  );
};

Main.propTypes = {
  startQuiz: PropTypes.func.isRequired
};

export default Main;
