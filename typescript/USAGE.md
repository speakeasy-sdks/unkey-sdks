<!-- Start SDK Example Usage [usage] -->
```typescript
import { UnkeyTs } from "openapi";

async function run() {
    const sdk = new UnkeyTs({
        rootKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.liveness.getV1Liveness();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->