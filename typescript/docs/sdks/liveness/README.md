# Liveness
(*liveness*)

### Available Operations

* [checkLiveness](#checkliveness)

## checkLiveness

### Example Usage

```typescript
import { UnkeyTs } from "openapi";

const unkeyTs = new UnkeyTs({
  rootKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await unkeyTs.liveness.checkLiveness();

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CheckLivenessResponseBody](../../models/operations/checklivenessresponsebody.md)>**
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
