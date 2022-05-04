// Models
const { Repair } = require('../models/repairs.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const repairExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({ where: { id } })

  if (!repair) {
    return next(new AppError('Repair does not exist with given Id', 404));
  }

  // Add repair data to the req object
  req.repair = repair;
  next();
});

module.exports = { repairExists };