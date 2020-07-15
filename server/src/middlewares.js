const notFound = (request, response, next) => {
    const error = new Error(`Not Found = ${request.originalUrl}`);
    response.status(404);
    next(error);
}

const errorHandler = (error, request, response, next) => {
    const statusCode = response.statusCode === 200 ? 500 : response.statusCode;
    response.status(statusCode);
    return response.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '😒' : error.stack,
    })
}

module.exports = {
    notFound,
    errorHandler
}