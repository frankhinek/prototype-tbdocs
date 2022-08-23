curl -X PUT -d '
{
    "Issuer": "did:key:zQ3sheEFdrQ7vRt1SvLPbajJ4SQoCdwt6coEUd1YF2Q1xtb8Q",
    "Subject": "did:key:zQ3sheEFdrQ7vRt1SvLPbajJ4SQoCdwt6coEUd1YF2Q1xtb8Q",
    "Schema": "https://schema.org/PostalAddress",
    "Data": {
        "addressLocality": "Paris, France",
        "postalCode": "75002",
        "streetAddress": "38 avenue de l'\''Opera"
    },
    "Expiry": "2022-12-31T05:00:00+00:00"
}' localhost:8080/v1/credentials