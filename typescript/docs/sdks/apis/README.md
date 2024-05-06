# Apis
(*apis*)

### Available Operations

* [getApi](#getapi)
* [createApi](#createapi)
* [listKeys](#listkeys)
* [deleteApi](#deleteapi)

## getApi

### Example Usage

```typescript
import { UnkeyTs } from "openapi";

const unkeyTs = new UnkeyTs({
  rootKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const apiId = "api_1234";
  
  const result = await unkeyTs.apis.getApi(apiId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `apiId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.GetApiResponseBody](../../models/operations/getapiresponsebody.md)>**
### Errors

| Error Object                  | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrBadRequest          | 400                           | application/json              |
| errors.ErrUnauthorized        | 401                           | application/json              |
| errors.ErrForbidden           | 403                           | application/json              |
| errors.ErrNotFound            | 404                           | application/json              |
| errors.ErrConflict            | 409                           | application/json              |
| errors.ErrTooManyRequests     | 429                           | application/json              |
| errors.ErrInternalServerError | 500                           | application/json              |
| errors.SDKError               | 4xx-5xx                       | */*                           |

## createApi

### Example Usage

```typescript
import { UnkeyTs } from "openapi";

const unkeyTs = new UnkeyTs({
  rootKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await unkeyTs.apis.createApi({
    name: "my-api",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiRequestBody](../../models/operations/createapirequestbody.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateApiResponseBody](../../models/operations/createapiresponsebody.md)>**
### Errors

| Error Object                  | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrBadRequest          | 400                           | application/json              |
| errors.ErrUnauthorized        | 401                           | application/json              |
| errors.ErrForbidden           | 403                           | application/json              |
| errors.ErrNotFound            | 404                           | application/json              |
| errors.ErrConflict            | 409                           | application/json              |
| errors.ErrTooManyRequests     | 429                           | application/json              |
| errors.ErrInternalServerError | 500                           | application/json              |
| errors.SDKError               | 4xx-5xx                       | */*                           |

## listKeys

### Example Usage

```typescript
import { UnkeyTs } from "openapi";

const unkeyTs = new UnkeyTs({
  rootKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const apiId = "api_1234";
  const limit = 100;
  const cursor = "<value>";
  const ownerId = "<value>";
  
  const result = await unkeyTs.apis.listKeys(apiId, limit, cursor, ownerId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `apiId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `limit`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `cursor`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `ownerId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.ListKeysResponseBody](../../models/operations/listkeysresponsebody.md)>**
### Errors

| Error Object                  | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrBadRequest          | 400                           | application/json              |
| errors.ErrUnauthorized        | 401                           | application/json              |
| errors.ErrForbidden           | 403                           | application/json              |
| errors.ErrNotFound            | 404                           | application/json              |
| errors.ErrConflict            | 409                           | application/json              |
| errors.ErrTooManyRequests     | 429                           | application/json              |
| errors.ErrInternalServerError | 500                           | application/json              |
| errors.SDKError               | 4xx-5xx                       | */*                           |

## deleteApi

### Example Usage

```typescript
import { UnkeyTs } from "openapi";

const unkeyTs = new UnkeyTs({
  rootKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await unkeyTs.apis.deleteApi({
    apiId: "api_1234",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteApiRequestBody](../../models/operations/deleteapirequestbody.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteApiResponseBody](../../models/operations/deleteapiresponsebody.md)>**
### Errors

| Error Object                  | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrBadRequest          | 400                           | application/json              |
| errors.ErrUnauthorized        | 401                           | application/json              |
| errors.ErrForbidden           | 403                           | application/json              |
| errors.ErrNotFound            | 404                           | application/json              |
| errors.ErrConflict            | 409                           | application/json              |
| errors.ErrTooManyRequests     | 429                           | application/json              |
| errors.ErrInternalServerError | 500                           | application/json              |
| errors.SDKError               | 4xx-5xx                       | */*                           |
