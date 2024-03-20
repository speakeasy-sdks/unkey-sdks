/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V1KeysVerifyKeyRequest = {
    /**
     * The id of the api where the key belongs to. This is optional for now but will be required soon.
     *
     * @remarks
     * The key will be verified against the api's configuration. If the key does not belong to the api, the verification will fail.
     */
    apiId?: string | undefined;
    /**
     * The key to verify
     */
    key: string;
};

/** @internal */
export namespace V1KeysVerifyKeyRequest$ {
    export type Inbound = {
        apiId?: string | undefined;
        key: string;
    };

    export const inboundSchema: z.ZodType<V1KeysVerifyKeyRequest, z.ZodTypeDef, Inbound> = z
        .object({
            apiId: z.string().optional(),
            key: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.apiId === undefined ? null : { apiId: v.apiId }),
                key: v.key,
            };
        });

    export type Outbound = {
        apiId?: string | undefined;
        key: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V1KeysVerifyKeyRequest> = z
        .object({
            apiId: z.string().optional(),
            key: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.apiId === undefined ? null : { apiId: v.apiId }),
                key: v.key,
            };
        });
}
