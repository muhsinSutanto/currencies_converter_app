export const fetchCurrencies = async (url) => {
    const result = await fetch(url)
    return result.json()
}