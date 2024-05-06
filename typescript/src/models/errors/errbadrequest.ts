/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A machine readable error code.
 */
export enum Code {
    BadRequest = "BAD_REQUEST",
}

export type ErrorT = {
    /**
     * A machine readable error code.
     */
    code: Code;
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
 * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
export type ErrBadRequestData = {
    error: ErrorT;
};

/**
 * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
export class ErrBadRequest extends Error {
    error: ErrorT;

    /** The original data that was passed to this error instance. */
    data$: ErrBadRequestData;

    constructor(err: ErrBadRequestData) {
        super("");
        this.data$ = err;

        this.error = err.error;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "ErrBadRequest";
    }
}

/** @internal */
export const Code$: z.ZodNativeEnum<typeof Code> = z.nativeEnum(Code);

/** @internal */
export namespace ErrorT$ {
    export type Inbound = {
        code: Code;
        docs: string;
        message: string;
        requestId: string;
    };

    export const inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, Inbound> = z
        .object({
            code: Code$,
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
        code: Code;
        docs: string;
        message: string;
        requestId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorT> = z
        .object({
            code: Code$,
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
export namespace ErrBadRequest$ {
    export type Inbound = {
        error: ErrorT$.Inbound;
    };

    export const inboundSchema: z.ZodType<ErrBadRequest, z.ZodTypeDef, Inbound> = z
        .object({
            error: z.lazy(() => ErrorT$.inboundSchema),
        })
        .transform((v) => {
            return new ErrBadRequest({
                error: v.error,
            });
        });

    export type Outbound = {
        error: ErrorT$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrBadRequest> = z
        .instanceof(ErrBadRequest)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    error: z.lazy(() => ErrorT$.outboundSchema),
                })
                .transform((v) => {
                    return {
                        error: v.error,
                    };
                })
        );
}
