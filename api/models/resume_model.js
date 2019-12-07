const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    studentID: { type: String, required: true},
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    major: { type: String, required: true},
    school: { type: String, required: true},
    year: { type: String, required: true},
    exp1: { type: String, required: false},
    exp2: { type: String, required: false},
    exp3: { type: String, required: false}
});

module.exports = mongoose.model('ResumeTable', resumeSchema);
