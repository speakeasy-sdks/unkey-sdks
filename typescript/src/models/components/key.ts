/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Determines the rate at which verifications will be refilled.
 */
export enum Interval {
    Daily = "daily",
    Monthly = "monthly",
}

/**
 * Unkey allows you to refill remaining verifications on a key on a regular interval.
 */
export type Refill = {
    /**
     * Determines the rate at which verifications will be refilled.
     */
    interval: Interval;
    /**
     * Resets `remaining` to this value every interval.
     */
    amount: number;
    /**
     * The unix timestamp in miliseconds when the key was last refilled.
     */
    lastRefillAt?: number | undefined;
};

/**
 * Fast ratelimiting doesn't add latency, while consistent ratelimiting is more accurate.
 *
 * @see {@link https://unkey.dev/docs/features/ratelimiting} - Learn more
 */
export enum Type {
    Fast = "fast",
    Consistent = "consistent",
}

/**
 * Unkey comes with per-key ratelimiting out of the box.
 */
export type Ratelimit = {
    /**
     * Fast ratelimiting doesn't add latency, while consistent ratelimiting is more accurate.
     */
    type?: Type | undefined;
    /**
     * The total amount of burstable requests.
     */
    limit: number;
    /**
     * How many tokens to refill during each refillInterval.
     */
    refillRate: number;
    /**
     * Determines the speed at which tokens are refilled, in milliseconds.
     */
    refillInterval: number;
};

export type Key = {
    /**
     * The id of the key
     */
    id: string;
    /**
     * The first few characters of the key to visually identify it
     */
    start: string;
    /**
     * The id of the workspace that owns the key
     */
    workspaceId: string;
    /**
     * The id of the api that this key is for
     */
    apiId?: string | undefined;
    /**
     * The name of the key, give keys a name to easily identify their purpose
     */
    name?: string | undefined;
    /**
     * The id of the tenant associated with this key. Use whatever reference you have in your system to identify the tenant. When verifying the key, we will send this field back to you, so you know who is accessing your API.
     */
    ownerId?: string | undefined;
    /**
     * Any additional metadata you want to store with the key
     */
    meta?: Record<string, any> | undefined;
    /**
     * The unix timestamp in milliseconds when the key was created
     */
    createdAt?: number | undefined;
    /**
     * The unix timestamp in milliseconds when the key was deleted. We don't delete the key outright, you can restore it later.
     */
    deletedAt?: number | undefined;
    /**
     * The unix timestamp in milliseconds when the key will expire. If this field is null or undefined, the key is not expiring.
     */
    expires?: number | undefined;
    /**
     * The number of requests that can be made with this key before it becomes invalid. If this field is null or undefined, the key has no request limit.
     */
    remaining?: number | undefined;
    /**
     * Unkey allows you to refill remaining verifications on a key on a regular interval.
     */
    refill?: Refill | undefined;
    /**
     * Unkey comes with per-key ratelimiting out of the box.
     */
    ratelimit?: Ratelimit | undefined;
    /**
     * All roles this key belongs to
     */
    roles?: Array<string> | undefined;
    /**
     * Sets if key is enabled or disabled. Disabled keys are not valid.
     */
    enabled?: boolean | undefined;
};

/** @internal */
export const Interval$: z.ZodNativeEnum<typeof Interval> = z.nativeEnum(Interval);

/** @internal */
export namespace Refill$ {
    export type Inbound = {
        interval: Interval;
        amount: number;
        lastRefillAt?: number | undefined;
    };

    export const inboundSchema: z.ZodType<Refill, z.ZodTypeDef, Inbound> = z
        .object({
            interval: Interval$,
            amount: z.number().int(),
            lastRefillAt: z.number().optional(),
        })
        .transform((v) => {
            return {
                interval: v.interval,
                amount: v.amount,
                ...(v.lastRefillAt === undefined ? null : { lastRefillAt: v.lastRefillAt }),
            };
        });

    export type Outbound = {
        interval: Interval;
        amount: number;
        lastRefillAt?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Refill> = z
        .object({
            interval: Interval$,
            amount: z.number().int(),
            lastRefillAt: z.number().optional(),
        })
        .transform((v) => {
            return {
                interval: v.interval,
                amount: v.amount,
                ...(v.lastRefillAt === undefined ? null : { lastRefillAt: v.lastRefillAt }),
            };
        });
}

/** @internal */
export const Type$: z.ZodNativeEnum<typeof Type> = z.nativeEnum(Type);

/** @internal */
export namespace Ratelimit$ {
    export type Inbound = {
        type?: Type | undefined;
        limit: number;
        refillRate: number;
        refillInterval: number;
    };

    export const inboundSchema: z.ZodType<Ratelimit, z.ZodTypeDef, Inbound> = z
        .object({
            type: Type$.default(Type.Fast),
            limit: z.number().int(),
            refillRate: z.number().int(),
            refillInterval: z.number().int(),
        })
        .transform((v) => {
            return {
                type: v.type,
                limit: v.limit,
                refillRate: v.refillRate,
                refillInterval: v.refillInterval,
            };
        });

    export type Outbound = {
        type: Type;
        limit: number;
        refillRate: number;
        refillInterval: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Ratelimit> = z
        .object({
            type: Type$.default(Type.Fast),
            limit: z.number().int(),
            refillRate: z.number().int(),
            refillInterval: z.number().int(),
        })
        .transform((v) => {
            return {
                type: v.type,
                limit: v.limit,
                refillRate: v.refillRate,
                refillInterval: v.refillInterval,
            };
        });
}

/** @internal */
export namespace Key$ {
    export type Inbound = {
        id: string;
        start: string;
        workspaceId: string;
        apiId?: string | undefined;
        name?: string | undefined;
        ownerId?: string | undefined;
        meta?: Record<string, any> | undefined;
        createdAt?: number | undefined;
        deletedAt?: number | undefined;
        expires?: number | undefined;
        remaining?: number | undefined;
        refill?: Refill$.Inbound | undefined;
        ratelimit?: Ratelimit$.Inbound | undefined;
        roles?: Array<string> | undefined;
        enabled?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<Key, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            start: z.string(),
            workspaceId: z.string(),
            apiId: z.string().optional(),
            name: z.string().optional(),
            ownerId: z.string().optional(),
            meta: z.record(z.any()).optional(),
            createdAt: z.number().optional(),
            deletedAt: z.number().optional(),
            expires: z.number().optional(),
            remaining: z.number().optional(),
            refill: z.lazy(() => Refill$.inboundSchema).optional(),
            ratelimit: z.lazy(() => Ratelimit$.inboundSchema).optional(),
            roles: z.array(z.string()).optional(),
            enabled: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                start: v.start,
                workspaceId: v.workspaceId,
                ...(v.apiId === undefined ? null : { apiId: v.apiId }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.ownerId === undefined ? null : { ownerId: v.ownerId }),
                ...(v.meta === undefined ? null : { meta: v.meta }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                ...(v.expires === undefined ? null : { expires: v.expires }),
                ...(v.remaining === undefined ? null : { remaining: v.remaining }),
                ...(v.refill === undefined ? null : { refill: v.refill }),
                ...(v.ratelimit === undefined ? null : { ratelimit: v.ratelimit }),
                ...(v.roles === undefined ? null : { roles: v.roles }),
                ...(v.enabled === undefined ? null : { enabled: v.enabled }),
            };
        });

    export type Outbound = {
        id: string;
        start: string;
        workspaceId: string;
        apiId?: string | undefined;
        name?: string | undefined;
        ownerId?: string | undefined;
        meta?: Record<string, any> | undefined;
        createdAt?: number | undefined;
        deletedAt?: number | undefined;
        expires?: number | undefined;
        remaining?: number | undefined;
        refill?: Refill$.Outbound | undefined;
        ratelimit?: Ratelimit$.Outbound | undefined;
        roles?: Array<string> | undefined;
        enabled?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Key> = z
        .object({
            id: z.string(),
            start: z.string(),
            workspaceId: z.string(),
            apiId: z.string().optional(),
            name: z.string().optional(),
            ownerId: z.string().optional(),
            meta: z.record(z.any()).optional(),
            createdAt: z.number().optional(),
            deletedAt: z.number().optional(),
            expires: z.number().optional(),
            remaining: z.number().optional(),
            refill: z.lazy(() => Refill$.outboundSchema).optional(),
            ratelimit: z.lazy(() => Ratelimit$.outboundSchema).optional(),
            roles: z.array(z.string()).optional(),
            enabled: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                start: v.start,
                workspaceId: v.workspaceId,
                ...(v.apiId === undefined ? null : { apiId: v.apiId }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.ownerId === undefined ? null : { ownerId: v.ownerId }),
                ...(v.meta === undefined ? null : { meta: v.meta }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                ...(v.expires === undefined ? null : { expires: v.expires }),
                ...(v.remaining === undefined ? null : { remaining: v.remaining }),
                ...(v.refill === undefined ? null : { refill: v.refill }),
                ...(v.ratelimit === undefined ? null : { ratelimit: v.ratelimit }),
                ...(v.roles === undefined ? null : { roles: v.roles }),
                ...(v.enabled === undefined ? null : { enabled: v.enabled }),
            };
        });
}
