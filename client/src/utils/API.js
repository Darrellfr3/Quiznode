import axios from "axios";

export default {

    // question routes
    getQuestions: (id) => {
        return axios.get(`/api/questions/${id}`);
    },
    createQuestion: (question) => {
        return axios.post("/api/questions", question);
    },

    // quizz routes
    getQuiz: (id) => {
        return axios.get("/api/quizs");
    },
    createQuiz: (quiz) => {
        return axios.post("/api/quizs", quiz);
    },

    // score routes
    createScore: (score) => {
        return axios.post("/api/scores", score);
    },
    findScore: (id) => {
        return axios.get(`/api/scores/${id}`);
    },
    findScores: (name) => {
        return axios.get(`/api/scores/${name}`);
    },

    // user routes
    findUser: (username) => {
        return axios.get(`/api/users/${username}`);
    },
    createUser: (user) => {
        return axios.post("/api/users", user);
    }
};