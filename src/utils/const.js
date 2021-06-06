const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=76d6acb0420f7522a14a1700bb00123b&symbols=USD,IDR,GBP,SGD,KYP,JYP,MYR,CHF&format=1'

const CURRENCY_ABBRIV = [
    {
        "stand" : "United States Dolars",
        "key" : "USD"
    },
    {
        "stand" : "Indonesia Rupiah",
        "key": "IDR"
    },
    {
        "key" : "GPP",
        "stand": "teunyaho"
    },
    {
        "stand" : "singapore Dolars",
        "key" : "SGD"
    },
    {
        "key" : "MYR",
        "stand": "test"
    },
    {
        "key" : "CHF",
        "stand": "hai"
    }
]

export {
    BASE_URL,
    CURRENCY_ABBRIV
}