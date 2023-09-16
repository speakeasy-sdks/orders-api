# Orders

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
    city: "Edinburg",
    state: "suscipit",
    street: "7854 Huel Via",
    zip: "temporibus",
  },
  complete: false,
  petId: 71036,
  quantity: 337396,
  shipDate: new Date("2019-01-01T12:00:00Z"),
  status: OrderStatus.Placed,
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
  orderId: 648172,
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
  fields: "perferendis",
  orderId: 368241,
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
  after: "repellendus",
  fields: "sapiente",
  filters: "quo",
  limit: 140350,
  offset: 870013,
  order: "at",
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
      city: "Lakewood",
      state: "quod",
      street: "457 Carroll Rest",
      zip: "officia",
    },
    complete: false,
    petId: 582020,
    quantity: 143353,
    shipDate: new Date("2019-01-01T12:00:00Z"),
    status: OrderStatus.Approved,
  },
  orderId: 944669,
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

