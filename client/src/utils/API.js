import axios from "axios";

export default {

    // question routes
    getQuestions: (id) => {
        return axios.get(`/api/questions/${id}`);
    },
    // quiz routes
    // this gets quiz by id now
    getQuiz: (id) => {
        return axios.get("/api/quizs/" + id);
    },
    getQuizSubject: (subject) => {
        return axios.get("/api/quizs/" + subject);
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