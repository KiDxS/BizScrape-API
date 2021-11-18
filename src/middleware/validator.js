const { param, validationResult } = require("express-validator");

const validateSource = () => {
    // The list of sources; we are putting undefined to the array so that users can 
    const sources = ["manilabulletin", "businessmirror"]
    // Returns an array of validation that we will do.
    return [
        param("source").isIn(sources).withMessage({
            success: false,
            message: "The value of the source parameter doesn't exist in the list of sources.",
            data: {},
        }),
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    // Pushes the errors to a new array
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
    return res.status(400).json(extractedErrors);
};

module.exports = {
    validateSource,
    validate,
};
