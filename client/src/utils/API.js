import axios from "axios";

export default {

    // question routes
    getQuestions: (id) => {
        return axios.get(`/questions/:${id}`);
    },
    createQuestion: (question) => {
        return axios.post("questions", question);
    },

    // quizz routes
    getQuiz: (id) => {
        return axios.get("/quizs");
    },
    createQuiz: (quiz) => {
        return axios.post("/quizs", quiz);
    },

    // score routes
    createScore: (score) => {
        return axios.post("/scores", score);
    },
    findScore: (id) => {
        return axios.get(`/scores/:${id}`);
    },
    findScores: (name) => {
        return axios.get(`/scores/:${name}`);
    },

    // user routes
    findUser: (username) => {
        return axios.get(`/users/:${username}`);
    },
    createUser: (user) => {
        return axios.post("/users", user);
    }
};