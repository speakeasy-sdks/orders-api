<!-- Start SDK Example Usage -->


```typescript
import { OrdersApi } from "orders-api";
import { CreateOrderActionResponse } from "orders-api/dist/sdk/models/operations";
import { OrderStatus } from "orders-api/dist/sdk/models/shared";

const sdk = new OrdersApi();

sdk.orders.createOrderAction({
  address: {
    city: "Boynton Beach",
    state: "Engineer Loan Bedfordshire",
    street: "Adams Groves",
    zip: "orange withdrawal",
  },
  complete: false,
  petId: 601004,
  quantity: 355253,
  shipDate: new Date("2019-01-01T12:00:00Z"),
  status: OrderStatus.Delivered,
}).then((res: CreateOrderActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->