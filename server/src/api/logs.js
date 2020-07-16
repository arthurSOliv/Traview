const { Router } = require('express');

const LogEntry = require('../models/logEntry');

const router = Router();

router.get('/', async (request, response, next) => {
    try {
        const entries = await LogEntry.find();
        response.json(entries)
    } catch (error) {
        next(error);
    }
})

router.post('/', async (request, response, next) => {
    try{
        const logEntry = new LogEntry(request.body);
        const createdEntry = await logEntry.save();

        response.json(createdEntry);
    }catch (error) {
        if(error.name === 'ValidationError') {
            response.status(422);
        }
        next(error);
    }
})

module.exports = router;