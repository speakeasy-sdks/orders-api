# Status
(*status*)

## Overview

Service Status

### Available Operations

* [status](#status) - Return service status

## status

Status OK will be returned

### Example Usage

```typescript
import { OrdersApi } from "orders-api";

async function run() {
  const sdk = new OrdersApi();

  const res = await sdk.status.status();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.StatusResponse](../../sdk/models/operations/statusresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
