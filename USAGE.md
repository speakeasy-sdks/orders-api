<!-- Start SDK Example Usage -->


```typescript
import { OrdersApi } from "orders-api";
import { CreateOrderActionResponse } from "orders-api/dist/sdk/models/operations";
import { OrderStatus } from "orders-api/dist/sdk/models/shared";

const sdk = new OrdersApi();

sdk.orders.createOrderAction({
  address: {
    city: "Laruecester",
    state: "quibusdam",
    street: "8584 Oberbrunner Hill",
    zip: "iure",
  },
  complete: false,
  petId: 297534,
  quantity: 891773,
  shipDate: new Date("2019-01-01T12:00:00Z"),
  status: OrderStatus.Placed,
}).then((res: CreateOrderActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->