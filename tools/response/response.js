const {StatusCodes, ReasonPhrases} = require('http-status-codes')

function respondCreated(res, data) {
    return res.status(StatusCodes.CREATED).send({
        'status': 'success',
        'status_code': StatusCodes.CREATED,
        'data': data,
        'message': 'عملیات درج اطلاعات با موفقیت صورت گرفت'
    })
}

function respondUpdated(res, data) {
    return res.status(StatusCodes.OK).send({
        'status': 'success',
        'status_code': StatusCodes.OK,
        'data': data,
        'message': 'عملیات بروز رسانی اطلاعات با موفقیت صورت گرفت.'
    })
}

function respond(res, data) {
    return res.status(StatusCodes.OK).send({
        'status': 'success',
        'status_code': StatusCodes.OK,
        'data': data
    })
}

function respondDeleted(res, data) {
    return res.status(StatusCodes.OK).send({
        'status': 'success',
        'status_code': StatusCodes.OK,
        'data': data,
        'messsage': 'عملیات حذف اطلاعات با موفقیت صورت گرفت.'
    })
}

function respondNotFound(res, message = 'اطلاعات مورد نظر یافت نشد.') {
    return res.status(StatusCodes.NOT_FOUND).send({
        'status': 'error',
        'status_code': StatusCodes.NOT_FOUND,
        'messsage': message
    })
}

function respondInternalServerError(res) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        'status': 'error',
        'status_code': StatusCodes.INTERNAL_SERVER_ERROR,
        'messsage': 'خطای سرور رخ داده است.'
    })
}

function respondValidationError(res, error) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send({
        'status': 'error',
        'status_code': StatusCodes.UNPROCESSABLE_ENTITY,
        'messsage': 'فرمت اطلاعات ارسالی اشتباه است.',
        'error': error.details
    })
}

function respondUnauthorizedError(res) {
    return res.status(StatusCodes.UNAUTHORIZED).send({
        'status': 'error',
        'status_code': StatusCodes.UNAUTHORIZED,
        'messsage': ReasonPhrases.UNAUTHORIZED,
    })
}

function respondForbiddenError(res) {
    return res.status(StatusCodes.FORBIDDEN).send({
        'status': 'error',
        'status_code': StatusCodes.FORBIDDEN,
        'messsage': ReasonPhrases.FORBIDDEN,
    })
}

function respondMethodNotAllowed(res) {
    return res.status(StatusCodes.METHOD_NOT_ALLOWED).send({
        'status': 'error',
        'status_code': StatusCodes.METHOD_NOT_ALLOWED,
        'messsage': ReasonPhrases.METHOD_NOT_ALLOWED,
    })
}

function respondWithCustomPagination(res, limit, offset, page, data) {
    return res.status(StatusCodes.OK).send({
        'status': 'success',
        'status_code': StatusCodes.OK,
        'limit': limit,
        'offset': offset,
        'page': page,
        'data': data
    })
}

module.exports.Response = {
    respondCreated: respondCreated,
    respondUpdated: respondUpdated,
    respond: respond,
    respondDeleted: respondDeleted,
    respondNotFound: respondNotFound,
    respondInternalServerError: respondInternalServerError,
    respondValidationError: respondValidationError,
    respondUnauthorizedError: respondUnauthorizedError,
    respondForbiddenError: respondForbiddenError,
    respondWithCustomPagination: respondWithCustomPagination,
    respondMethodNotAllowed: respondMethodNotAllowed,
}