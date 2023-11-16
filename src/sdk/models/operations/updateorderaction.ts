/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class UpdateOrderActionRequest extends SpeakeasyBase {
    /**
     * Order
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    order: shared.Order;

    /**
     * ID of order to delete
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
    orderId: number;
}

export class UpdateOrderActionResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * unexpected error
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * Order Response
     */
    @SpeakeasyMetadata()
    order?: shared.Order;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
