const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
});

const TaskModel = mongoose.model('tasktracker', TaskSchema);
module.exports = TaskModel;
