# orders-api

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/orders-api
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/orders-api
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [orders](docs/sdks/orders/README.md)

* [createOrderAction](docs/sdks/orders/README.md#createorderaction) - Creates a new order
* [deleteOrderAction](docs/sdks/orders/README.md#deleteorderaction) - Deletes order
* [getOrderAction](docs/sdks/orders/README.md#getorderaction) - Returns an order by ID
* [listOrdersAction](docs/sdks/orders/README.md#listordersaction) - Returns a list of orders
* [updateOrderAction](docs/sdks/orders/README.md#updateorderaction) - Updates order

### [status](docs/sdks/status/README.md)

* [status](docs/sdks/status/README.md#status) - Return service status
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { OrdersApi } from "orders-api";
import { OrderStatus } from "orders-api/dist/sdk/models/shared";

async function run() {
    const sdk = new OrdersApi();

    let res;
    try {
        res = await sdk.orders.createOrderAction({
            address: {},
            shipDate: new Date("2019-01-01T12:00:00Z"),
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://acme.mavendev.com/api` | None |

#### Example

```typescript
import { OrdersApi } from "orders-api";
import { OrderStatus } from "orders-api/dist/sdk/models/shared";

async function run() {
    const sdk = new OrdersApi({
        serverIdx: 0,
    });

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


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { OrdersApi } from "orders-api";
import { OrderStatus } from "orders-api/dist/sdk/models/shared";

async function run() {
    const sdk = new OrdersApi({
        serverURL: "https://acme.mavendev.com/api",
    });

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
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { orders-api } from "OrdersApi";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new OrdersApi({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
