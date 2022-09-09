curl -X PUT -d '
{
    "Issuer": "did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR",
    "Subject": "did:key:z6MkjbAqF37PNPNXBdrZw4Bsk6PjCCmFi8CcVCo9VNr3ACDR",
    "Schema": "9de4bf6e-8876-4c69-ab2d-727cddbde404",
    "Data": {
        "emailAddress": "hello@example.com"
    },
    "Expiry": "2022-12-31T05:00:00+00:00"
}' localhost:8080/v1/credentials