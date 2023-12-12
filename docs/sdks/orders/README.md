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

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Order](../../sdk/models/shared/order.md)             | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateOrderActionResponse](../../sdk/models/operations/createorderactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteOrderAction

Deletes order by ID

### Example Usage

```typescript
import { OrdersApi } from "orders-api";

async function run() {
  const sdk = new OrdersApi();

  const res = await sdk.orders.deleteOrderAction({
    orderId: 514454,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteOrderActionRequest](../../sdk/models/operations/deleteorderactionrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteOrderActionResponse](../../sdk/models/operations/deleteorderactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getOrderAction

Returns a order orderId

### Example Usage

```typescript
import { OrdersApi } from "orders-api";

async function run() {
  const sdk = new OrdersApi();

  const res = await sdk.orders.getOrderAction({
    orderId: 454071,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetOrderActionRequest](../../sdk/models/operations/getorderactionrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetOrderActionResponse](../../sdk/models/operations/getorderactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listOrdersAction

Returns a list of orders

### Example Usage

```typescript
import { OrdersApi } from "orders-api";

async function run() {
  const sdk = new OrdersApi();

  const res = await sdk.orders.listOrdersAction({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListOrdersActionRequest](../../sdk/models/operations/listordersactionrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListOrdersActionResponse](../../sdk/models/operations/listordersactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateOrderAction

Updates order by ID

### Example Usage

```typescript
import { OrdersApi } from "orders-api";
import { OrderStatus } from "orders-api/dist/sdk/models/shared";

async function run() {
  const sdk = new OrdersApi();

  const res = await sdk.orders.updateOrderAction({
    order: {
      address: {},
      shipDate: new Date("2019-01-01T12:00:00Z"),
    },
    orderId: 1657,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateOrderActionRequest](../../sdk/models/operations/updateorderactionrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateOrderActionResponse](../../sdk/models/operations/updateorderactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
