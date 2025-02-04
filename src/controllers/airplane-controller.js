const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');

const createAirplane = async(req, res) => {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully Created A Airplane",
            data: airplane,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong while creating a airplane",
            data: {},
            error: error
        })
    }
}

module.exports = {
    createAirplane
}