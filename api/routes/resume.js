const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Resume = require('../models/resume_model');
//const multer = require('multer');
/*
router.get('/', (req, res, next) => {
    Resume.find()
        .select('-__v')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                resume: docs.map(doc => {
                    return {
                        resume: doc,
                        request: {
                            type: "GET",
                            url: "http://localhost:5555/resume/" + doc._id
                        }
                    }
                })
            }
                res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});*/
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /resume'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /resume'
    });
});
/*
router.get('/:resumeID', (req, res, next) => {
    const id = req.params.resumeID;
    Resume.findById(id)
        .select('-__v')
        .exec()
        .then(doc => {
            res.status(200).json({
                resume: doc,
                request: {
                    type: 'GET',
                    description: 'Get all resume',
                    url: 'http://localhost:5555/resume'
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.patch('/:resumeID', (req, res, next) => {
    const id = req.params.resumeID;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Resume.updateOne({ _id: id}, {$set: updateOps})
        .exec()
        .then(doc => {
            res.status(200).json({
                message: 'Resume updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:5555/resume/' + id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.delete('/:resumeID', (req, res, next) => {
    const id = req.params.resumeID;
    Resume.deleteOne({ _id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Resume deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:5555/resume',
                    body: { firstname: 'String' }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});
*/
router.get('/:resumeID', (req, res, next) => {
    const id = req.params.resumeID;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed a normal ID',
            id: id
        });
    };
});

router.patch('/:resumeID', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Resume'
    });
});

router.delete('/:resumeID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Resume'
    });
});
module.exports = router;
