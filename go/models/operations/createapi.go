// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"openapi/models/components"
)

type CreateAPIRequestBody struct {
	// The name for your API. This is not customer facing.
	Name string `json:"name"`
}

func (o *CreateAPIRequestBody) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

// CreateAPIResponseBody - The configuration for an api
type CreateAPIResponseBody struct {
	// The id of the api
	APIID string `json:"apiId"`
}

func (o *CreateAPIResponseBody) GetAPIID() string {
	if o == nil {
		return ""
	}
	return o.APIID
}

type CreateAPIResponse struct {
	HTTPMeta components.HTTPMetadata
	// The configuration for an api
	Object *CreateAPIResponseBody
}

func (o *CreateAPIResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *CreateAPIResponse) GetObject() *CreateAPIResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
