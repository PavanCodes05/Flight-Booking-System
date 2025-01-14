const { StatusCodes } = require('http-status-codes');

const validateCreateRequest = (req, res, next) => {
    if(!req.body.modelNumber) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({
            success: false,
            message: "Something went wrong while creating a airplane",
            data: {},
            error: {explanation: "The modelNumber not found in the request!"}
            })
    }
    next();
};

module.exports = {
    validateCreateRequest
};