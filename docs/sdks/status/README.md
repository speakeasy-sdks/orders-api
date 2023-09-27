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
import { StatusResponse } from "orders-api/dist/sdk/models/operations";

const sdk = new OrdersApi();

sdk.status.status().then((res: StatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.StatusResponse](../../models/operations/statusresponse.md)>**

