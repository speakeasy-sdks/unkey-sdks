/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A machine readable error code.
 */
export enum ErrConflictCode {
    Conflict = "CONFLICT",
}

export type ErrConflictError = {
    /**
     * A machine readable error code.
     */
    code: ErrConflictCode;
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
 * This response is sent when a request conflicts with the current state of the server.
 */
export type ErrConflictData = {
    error: ErrConflictError;
};

/**
 * This response is sent when a request conflicts with the current state of the server.
 */
export class ErrConflict extends Error {
    error: ErrConflictError;

    /** The original data that was passed to this error instance. */
    data$: ErrConflictData;

    constructor(err: ErrConflictData) {
        super("");
        this.data$ = err;

        this.error = err.error;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "ErrConflict";
    }
}

/** @internal */
export const ErrConflictCode$ = z.nativeEnum(ErrConflictCode);

/** @internal */
export namespace ErrConflictError$ {
    export type Inbound = {
        code: ErrConflictCode;
        docs: string;
        message: string;
        requestId: string;
    };

    export const inboundSchema: z.ZodType<ErrConflictError, z.ZodTypeDef, Inbound> = z
        .object({
            code: ErrConflictCode$,
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
        code: ErrConflictCode;
        docs: string;
        message: string;
        requestId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrConflictError> = z
        .object({
            code: ErrConflictCode$,
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
export namespace ErrConflict$ {
    export type Inbound = {
        error: ErrConflictError$.Inbound;
    };

    export const inboundSchema: z.ZodType<ErrConflict, z.ZodTypeDef, Inbound> = z
        .object({
            error: z.lazy(() => ErrConflictError$.inboundSchema),
        })
        .transform((v) => {
            return new ErrConflict({
                error: v.error,
            });
        });

    export type Outbound = {
        error: ErrConflictError$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrConflict> = z
        .instanceof(ErrConflict)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    error: z.lazy(() => ErrConflictError$.outboundSchema),
                })
                .transform((v) => {
                    return {
                        error: v.error,
                    };
                })
        );
}
