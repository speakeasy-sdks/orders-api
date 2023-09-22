# StatusResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `error`                                                 | [shared.ErrorT](../../models/shared/errort.md)          | :heavy_minus_sign:                                      | unexpected error                                        |
| `status`                                                | [shared.Status](../../models/shared/status.md)          | :heavy_minus_sign:                                      | status response                                         |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | N/A                                                     |