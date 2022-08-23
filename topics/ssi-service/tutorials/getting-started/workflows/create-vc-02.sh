curl -X PUT -d '
{
    "author": "did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR",
    "name": "PostalAddress",
    "schema": {
        "$id": "postal-address-schema-1.0",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "description": "Postal address",
        "type": "object",
        "properties": {
            "addressLocality": {
                "type": "string"
            },
            "addressRegion": {
                "type": "string"
            },
            "postalCode": {
                "type": "string"
            },
            "streetAddress": {
                "type": "string"
            }
        },
        "required": ["addressLocality", "streetAddress"],
        "additionalProperties": false
    }
}' localhost:8080/v1/schemas