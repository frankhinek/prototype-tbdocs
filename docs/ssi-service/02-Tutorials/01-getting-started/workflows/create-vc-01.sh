curl -X PUT -d '
{
    "author": "did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR",
    "name": "Email",
    "schema": {
        "$id": "email-schema-1.0",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "description": "Email",
        "type": "object",
        "properties": {
            "emailAddress": {
                "type": "string",
                "format": "email"
            }
        },
        "required": ["emailAddress"],
        "additionalProperties": false
    }
}' localhost:8080/v1/schemas