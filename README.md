# orders-api

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/orders-api
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/orders-api
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { OrdersApi } from "orders-api";
import { OrderStatus } from "orders-api/dist/sdk/models/shared";

(async () => {
    const sdk = new OrdersApi();

    const res = await sdk.orders.createOrderAction({
        address: {},
        shipDate: new Date("2019-01-01T12:00:00Z"),
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [orders](docs/sdks/orders/README.md)

* [createOrderAction](docs/sdks/orders/README.md#createorderaction) - Creates a new order
* [deleteOrderAction](docs/sdks/orders/README.md#deleteorderaction) - Deletes order
* [getOrderAction](docs/sdks/orders/README.md#getorderaction) - Returns an order by ID
* [listOrdersAction](docs/sdks/orders/README.md#listordersaction) - Returns a list of orders
* [updateOrderAction](docs/sdks/orders/README.md#updateorderaction) - Updates order

### [status](docs/sdks/status/README.md)

* [status](docs/sdks/status/README.md#status) - Return service status
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
