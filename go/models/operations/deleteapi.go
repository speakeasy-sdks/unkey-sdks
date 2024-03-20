// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"openapi/models/components"
)

type DeleteAPIRequestBody struct {
	// The id of the api to delete
	APIID string `json:"apiId"`
}

func (o *DeleteAPIRequestBody) GetAPIID() string {
	if o == nil {
		return ""
	}
	return o.APIID
}

// DeleteAPIResponseBody - The api was successfully deleted, it may take up to 30s for this to take effect in all regions
type DeleteAPIResponseBody struct {
}

type DeleteAPIResponse struct {
	HTTPMeta components.HTTPMetadata
	// The api was successfully deleted, it may take up to 30s for this to take effect in all regions
	Object *DeleteAPIResponseBody
}

func (o *DeleteAPIResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *DeleteAPIResponse) GetObject() *DeleteAPIResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
