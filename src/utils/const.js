const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=76d6acb0420f7522a14a1700bb00123b&symbols=IDR,GBP,SGD,USD,CAD,INR,JPY,MYR,CHF,KRW&format=1'

const CURRENCY_ABBRIV = [
    {
        "stand" : "United States Dolar",
        "key" : "USD"
    },
    {
        "stand" : "Indonesia Rupiah",
        "key": "IDR"
    },
    {
        "key" : "GBP",
        "stand": "British Pound Sterling"
    },
    {
        "stand" : "singapore Dolar",
        "key" : "SGD"
    },
    {
        "key" : "MYR",
        "stand": "Malaysian Ringgit"
    },
    {
        "key" : "CHF",
        "stand": "Swiss Franch"
    },
    {
        "key" : "JPY",
        "stand": "Japanese Yen"
    },
    {
        "key" : "INR",
        "stand": "Indian Rupee"
    },
    {
        "key" : "KRW",
        "stand": "Korean Won"
    },
    {
        "key" : "CAD",
        "stand": "Canadian Dollar"
    }

]

export {
    BASE_URL,
    CURRENCY_ABBRIV
}