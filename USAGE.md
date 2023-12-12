<!-- Start SDK Example Usage [usage] -->
```typescript
import { OrdersApi } from "orders-api";
import { OrderStatus } from "orders-api/dist/sdk/models/shared";

async function run() {
    const sdk = new OrdersApi();

    const res = await sdk.orders.createOrderAction({
        address: {},
        shipDate: new Date("2019-01-01T12:00:00Z"),
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->