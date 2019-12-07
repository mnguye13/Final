const express = require('express');
const router = express.Router();

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
