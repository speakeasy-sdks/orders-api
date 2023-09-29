# Orders
(*orders*)

## Overview

Operations about orders

### Available Operations

* [createOrderAction](#createorderaction) - Creates a new order
* [deleteOrderAction](#deleteorderaction) - Deletes order
* [getOrderAction](#getorderaction) - Returns an order by ID
* [listOrdersAction](#listordersaction) - Returns a list of orders
* [updateOrderAction](#updateorderaction) - Updates order

## createOrderAction

Creates a new order

### Example Usage

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

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Order](../../models/shared/order.md)                 | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateOrderActionResponse](../../models/operations/createorderactionresponse.md)>**


## deleteOrderAction

Deletes order by ID

### Example Usage

```typescript
import { OrdersApi } from "orders-api";
import { DeleteOrderActionResponse } from "orders-api/dist/sdk/models/operations";

const sdk = new OrdersApi();

sdk.orders.deleteOrderAction({
  orderId: 514454,
}).then((res: DeleteOrderActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteOrderActionRequest](../../models/operations/deleteorderactionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteOrderActionResponse](../../models/operations/deleteorderactionresponse.md)>**


## getOrderAction

Returns a order orderId

### Example Usage

```typescript
import { OrdersApi } from "orders-api";
import { GetOrderActionResponse } from "orders-api/dist/sdk/models/operations";

const sdk = new OrdersApi();

sdk.orders.getOrderAction({
  fields: "Regional Steel",
  orderId: 937228,
}).then((res: GetOrderActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetOrderActionRequest](../../models/operations/getorderactionrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetOrderActionResponse](../../models/operations/getorderactionresponse.md)>**


## listOrdersAction

Returns a list of orders

### Example Usage

```typescript
import { OrdersApi } from "orders-api";
import { ListOrdersActionResponse } from "orders-api/dist/sdk/models/operations";

const sdk = new OrdersApi();

sdk.orders.listOrdersAction({
  after: "transmitting Common",
  fields: "darn convergence coolly",
  filters: "white",
  limit: 375563,
  offset: 8301,
  order: "Roseville behind Connecticut",
}).then((res: ListOrdersActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListOrdersActionRequest](../../models/operations/listordersactionrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListOrdersActionResponse](../../models/operations/listordersactionresponse.md)>**


## updateOrderAction

Updates order by ID

### Example Usage

```typescript
import { OrdersApi } from "orders-api";
import { UpdateOrderActionResponse } from "orders-api/dist/sdk/models/operations";
import { OrderStatus } from "orders-api/dist/sdk/models/shared";

const sdk = new OrdersApi();

sdk.orders.updateOrderAction({
  order: {
    address: {
      city: "New Mikecester",
      state: "deposit ADP",
      street: "Ford Common",
      zip: "synthesizing compress Account",
    },
    complete: false,
    petId: 813469,
    quantity: 42881,
    shipDate: new Date("2019-01-01T12:00:00Z"),
    status: OrderStatus.Delivered,
  },
  orderId: 556087,
}).then((res: UpdateOrderActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateOrderActionRequest](../../models/operations/updateorderactionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateOrderActionResponse](../../models/operations/updateorderactionresponse.md)>**

