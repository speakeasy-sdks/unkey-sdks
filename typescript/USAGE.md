<!-- Start SDK Example Usage [usage] -->
```typescript
import { UnkeyTs } from "openapi";

const unkeyTs = new UnkeyTs({
    rootKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await unkeyTs.liveness.checkLiveness();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->