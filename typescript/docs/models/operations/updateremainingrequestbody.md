# UpdateRemainingRequestBody


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `keyId`                                                           | *string*                                                          | :heavy_check_mark:                                                | The id of the key you want to modify                              | key_123                                                           |
| `op`                                                              | [operations.Op](../../models/operations/op.md)                    | :heavy_check_mark:                                                | The operation you want to perform on the remaining count          |                                                                   |
| `value`                                                           | *number*                                                          | :heavy_check_mark:                                                | The value you want to set, add or subtract the remaining count by | 1                                                                 |