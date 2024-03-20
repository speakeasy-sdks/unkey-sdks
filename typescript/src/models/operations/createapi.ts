/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateApiRequestBody = {
    /**
     * The name for your API. This is not customer facing.
     */
    name: string;
};

/**
 * The configuration for an api
 */
export type CreateApiResponseBody = {
    /**
     * The id of the api
     */
    apiId: string;
};

/** @internal */
export namespace CreateApiRequestBody$ {
    export type Inbound = {
        name: string;
    };

    export const inboundSchema: z.ZodType<CreateApiRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            name: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
            };
        });

    export type Outbound = {
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateApiRequestBody> = z
        .object({
            name: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
            };
        });
}

/** @internal */
export namespace CreateApiResponseBody$ {
    export type Inbound = {
        apiId: string;
    };

    export const inboundSchema: z.ZodType<CreateApiResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            apiId: z.string(),
        })
        .transform((v) => {
            return {
                apiId: v.apiId,
            };
        });

    export type Outbound = {
        apiId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateApiResponseBody> = z
        .object({
            apiId: z.string(),
        })
        .transform((v) => {
            return {
                apiId: v.apiId,
            };
        });
}
