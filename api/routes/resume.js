const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Resume = require('../models/resume_model');
const ResumeController = require('../controllers/resumeController');
const controller = new ResumeController(Resume);
router.get('/', (req, res, next) => {
    controller.getAll((error, result)=>{
        handleCallback(error, result, res);
    });
});

router.post('/', (req, res, next) => {
    controller.create(req.body, (error, result)=>{
        handleCallback(error, result, res);
    });
});

router.get('/:id', (req, res, next) => {
    controller.find(req.params.id, (error, result)=>{
        handleCallback(error, result, res);
    });
});

router.patch('/:id', (req, res, next) => {
    controller.update(req.params.id, req.body, (error, result)=>{
        handleCallback(error, result, res);
    });
});

router.delete('/:id', (req, res, next) => {
    controller.delete(req.params.id, (error, result)=>{
        handleCallback(error, result, res);
    });
});

let handleCallback = (error, result, response)=>{
    console.log("error: " + JSON.stringify(error));
    console.log("result: " + JSON.stringify(result));

    if(error) return response.status(500).json({error: error});
    return response.status(200).json(result);
}
module.exports = router;
