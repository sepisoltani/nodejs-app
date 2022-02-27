import {StatusCodes, ReasonPhrases} from 'http-status-codes'
import {Response} from "express";

export class HttpResponse {

    /**
     *
     * @param res
     * @param data
     * @param message
     */
    static respondCreated(res: Response, data: any, message: string = "عملیات درج اطلاعات با موفقیت صورت گرفت.") {
        return res.status(StatusCodes.CREATED).send({
            'status': 'success',
            'status_code': StatusCodes.CREATED,
            'data': data,
            'message': message
        })
    }

    /**
     *
     * @param res
     * @param data
     * @param message
     */
    static respondUpdated(res: Response, data: any, message: string = "عملیات بروز رسانی اطلاعات با موفقیت صورت گرفت.") {
        return res.status(StatusCodes.OK).send({
            'status': 'success',
            'status_code': StatusCodes.OK,
            'data': data,
            'message': message
        })
    }

    /**
     *
     * @param res
     * @param data
     */
    static respond(res: Response, data: any) {
        return res.status(StatusCodes.OK).send({
            'status': 'success',
            'status_code': StatusCodes.OK,
            'data': data
        })
    }

    /**
     *
     * @param res
     * @param data
     * @param message
     */
    static respondDeleted(res: Response, data: any, message: string = "عملیات حذف اطلاعات با موفقیت صورت گرفت.") {
        return res.status(StatusCodes.OK).send({
            'status': 'success',
            'status_code': StatusCodes.OK,
            'data': data,
            'messsage': message
        })
    }

    /**
     *
     * @param res
     * @param message
     */
    static respondNotFound(res: Response, message: string = 'اطلاعات مورد نظر یافت نشد.') {
        return res.status(StatusCodes.NOT_FOUND).send({
            'status': 'error',
            'status_code': StatusCodes.NOT_FOUND,
            'messsage': message
        })
    }

    /**
     *
     * @param res
     * @param message
     */
    static respondInternalServerError(res: Response, message: string = "خطای سرور رخ داده است.") {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            'status': 'error',
            'status_code': StatusCodes.INTERNAL_SERVER_ERROR,
            'messsage': message
        })
    }

    /**
     *
     * @param res
     * @param error
     * @param message
     */
    static respondValidationError(res: Response, error, message: string = "فرمت اطلاعات ارسالی اشتباه است.") {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send({
            'status': 'error',
            'status_code': StatusCodes.UNPROCESSABLE_ENTITY,
            'messsage': message,
            'error': error.details
        })
    }

    /**
     *
     * @param res
     */
    static respondUnauthorizedError(res: Response) {
        return res.status(StatusCodes.UNAUTHORIZED).send({
            'status': 'error',
            'status_code': StatusCodes.UNAUTHORIZED,
            'messsage': ReasonPhrases.UNAUTHORIZED,
        })
    }

    /**
     *
     * @param res
     */
    static respondForbiddenError(res: Response) {
        return res.status(StatusCodes.FORBIDDEN).send({
            'status': 'error',
            'status_code': StatusCodes.FORBIDDEN,
            'messsage': ReasonPhrases.FORBIDDEN,
        })
    }

    /**
     *
     * @param res
     */
    static respondMethodNotAllowed(res: Response) {
        return res.status(StatusCodes.METHOD_NOT_ALLOWED).send({
            'status': 'error',
            'status_code': StatusCodes.METHOD_NOT_ALLOWED,
            'messsage': ReasonPhrases.METHOD_NOT_ALLOWED,
        })
    }

    /**
     *
     * @param res
     * @param limit
     * @param offset
     * @param page
     * @param data
     */
    static respondWithCustomPagination(res: Response, limit: Number, offset: Number, page: Number, data: any) {
        return res.status(StatusCodes.OK).send({
            'status': 'success',
            'status_code': StatusCodes.OK,
            'limit': limit,
            'offset': offset,
            'page': page,
            'data': data
        })
    }
}

