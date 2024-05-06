/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A machine readable error code.
 */
export enum ErrInternalServerErrorCode {
    InternalServerError = "INTERNAL_SERVER_ERROR",
}

export type ErrInternalServerErrorError = {
    /**
     * A machine readable error code.
     */
    code: ErrInternalServerErrorCode;
    /**
     * A link to our documentation with more details about this error code
     */
    docs: string;
    /**
     * A human readable explanation of what went wrong
     */
    message: string;
    /**
     * Please always include the requestId in your error report
     */
    requestId: string;
};

/**
 * The server has encountered a situation it does not know how to handle.
 */
export type ErrInternalServerErrorData = {
    error: ErrInternalServerErrorError;
};

/**
 * The server has encountered a situation it does not know how to handle.
 */
export class ErrInternalServerError extends Error {
    error: ErrInternalServerErrorError;

    /** The original data that was passed to this error instance. */
    data$: ErrInternalServerErrorData;

    constructor(err: ErrInternalServerErrorData) {
        super("");
        this.data$ = err;

        this.error = err.error;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "ErrInternalServerError";
    }
}

/** @internal */
export const ErrInternalServerErrorCode$: z.ZodNativeEnum<typeof ErrInternalServerErrorCode> =
    z.nativeEnum(ErrInternalServerErrorCode);

/** @internal */
export namespace ErrInternalServerErrorError$ {
    export type Inbound = {
        code: ErrInternalServerErrorCode;
        docs: string;
        message: string;
        requestId: string;
    };

    export const inboundSchema: z.ZodType<ErrInternalServerErrorError, z.ZodTypeDef, Inbound> = z
        .object({
            code: ErrInternalServerErrorCode$,
            docs: z.string(),
            message: z.string(),
            requestId: z.string(),
        })
        .transform((v) => {
            return {
                code: v.code,
                docs: v.docs,
                message: v.message,
                requestId: v.requestId,
            };
        });

    export type Outbound = {
        code: ErrInternalServerErrorCode;
        docs: string;
        message: string;
        requestId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrInternalServerErrorError> = z
        .object({
            code: ErrInternalServerErrorCode$,
            docs: z.string(),
            message: z.string(),
            requestId: z.string(),
        })
        .transform((v) => {
            return {
                code: v.code,
                docs: v.docs,
                message: v.message,
                requestId: v.requestId,
            };
        });
}

/** @internal */
export namespace ErrInternalServerError$ {
    export type Inbound = {
        error: ErrInternalServerErrorError$.Inbound;
    };

    export const inboundSchema: z.ZodType<ErrInternalServerError, z.ZodTypeDef, Inbound> = z
        .object({
            error: z.lazy(() => ErrInternalServerErrorError$.inboundSchema),
        })
        .transform((v) => {
            return new ErrInternalServerError({
                error: v.error,
            });
        });

    export type Outbound = {
        error: ErrInternalServerErrorError$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrInternalServerError> = z
        .instanceof(ErrInternalServerError)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    error: z.lazy(() => ErrInternalServerErrorError$.outboundSchema),
                })
                .transform((v) => {
                    return {
                        error: v.error,
                    };
                })
        );
}
