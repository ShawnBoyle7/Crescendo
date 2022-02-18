const { validationResult } = require('express-validator');

const passwordValidator = (password) => {
     const regex_eight_min = "^.{8,}$"
     const regex_lower_case = "^.*[a-z]+.*$"
     const regex_upper_case = "^.*[A-Z]+.*$"
     const regex_digit = "^.*\d+.*$"
     const regex_special = "^.*[@$!%*?&]+.*$"

     const eight_matches = regex_eight_min.match(regex_eight_min, password)
     const lower_case_matches = regex_lower_case.match(regex_lower_case, password)
     const upper_case_matches = regex_upper_case.match(regex_upper_case, password)
     const digit_matches = regex_digit.match(regex_digit, password)
     const special_matches = regex_special.match(regex_special, password)

    const errors = []

    if (!eight_matches && password.length) {
        errors.push("Must be at least 8 characters")
    }

    if (!lower_case_matches && password.length) {
        errors.push("Must contain at least one lower case character")
    }

    if (!upper_case_matches && password.length) {
        errors.push("Must contain at least one upper case character")
    }
    
    if (!digit_matches && password.length) {
        errors.push("Must contain at least one digit")
    }

    if (!special_matches && password.length) {
        errors.push("Must contain at least one special character (@, $, !, %, *, ?, &)")
    }

    if (errors.length) {
        return errors
    } else {
        return []
    }
}

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors
            .array()
            .map((error) => `${error.msg}`);

        const err = Error('Bad request.');
        err.errors = errors;
        err.status = 400;
        err.title = 'Bad request.';
        next(err);
    }
    next();
};

module.exports = {
    handleValidationErrors,
    passwordValidator
};