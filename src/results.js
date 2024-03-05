export const getPersonalIdentificationSucessResponseV2 = async function() {
    const personalIdentificationData = {
        "data": [
          {
            "updateDateTime": "2021-05-21T08:30:00Z",
            "personalId": "578-psd-71md6971kjh-2d414",
            "brandName": "Organização A",
            "civilName": "Juan Kaique Cláudio Fernandes",
            "socialName": "Jaqueline de Freitas",
            "birthDate": "1989-03-23",
            "maritalStatusCode": "OUTRO",
            "maritalStatusAdditionalInfo": "Amasiado",
            "sex": "FEMININO",
            "companiesCnpj": [
              "01773247000103",
              "01773247000563"
            ],
            "documents": {
              "cpfNumber": "25872252137",
              "passport": {
                "number": "75253468744594820620",
                "country": "CAN",
                "expirationDate": "2021-05-21",
                "issueDate": "2021-05-21"
              }
            },
            "otherDocuments": [
              {
                "type": "CNH",
                "typeAdditionalInfo": "CREA-RJ",
                "number": "15291908",
                "checkDigit": "P",
                "additionalInfo": "SSP/SP",
                "expirationDate": "2021-05-21"
              }
            ],
            "hasBrazilianNationality": false,
            "nationality": [
              {
                "otherNationalitiesInfo": "CAN",
                "documents": [
                  {
                    "type": "SOCIAL SEC",
                    "number": "423929299",
                    "expirationDate": "2021-05-21",
                    "issueDate": "2021-05-21",
                    "country": "Brasil",
                    "additionalInfo": "Informações adicionais."
                  }
                ]
              }
            ],
            "filiation": [
              {
                "type": "PAI",
                "civilName": "Marcelo Cláudio Fernandes",
                "socialName": "string"
              }
            ],
            "contacts": {
              "postalAddresses": [
                {
                  "isMain": true,
                  "address": "Av Naburo Ykesaki, 1270",
                  "additionalInfo": "Fundos",
                  "districtName": "Centro",
                  "townName": "Marília",
                  "ibgeTownCode": "3550308",
                  "countrySubDivision": "SP",
                  "postCode": "17500001",
                  "country": "Brasil",
                  "countryCode": "BRA",
                  "geographicCoordinates": {
                    "latitude": "-23.5475000",
                    "longitude": "-46.6361100"
                  }
                }
              ],
              "phones": [
                {
                  "isMain": true,
                  "type": "FIXO",
                  "additionalInfo": "Informações adicionais.",
                  "countryCallingCode": "55",
                  "areaCode": "19",
                  "number": "29875132",
                  "phoneExtension": "932"
                }
              ],
              "emails": [
                {
                  "isMain": true,
                  "email": "karinafernandes-81@br.inter.net"
                }
              ]
            }
          }
        ],
        "links": {
          "self": "https://api.banco.com.br/open-banking/api/v1/resource",
          "first": "https://api.banco.com.br/open-banking/api/v1/resource",
          "prev": "https://api.banco.com.br/open-banking/api/v1/resource",
          "next": "https://api.banco.com.br/open-banking/api/v1/resource",
          "last": "https://api.banco.com.br/open-banking/api/v1/resource"
        },
        "meta": {
          "totalRecords": 1,
          "totalPages": 1,
          "requestDateTime": "2021-05-21T08:30:00Z"
        }
      }

    return personalIdentificationData;
}