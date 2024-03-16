export const getAPIurl = (endpoint: string, searchParams?: URLSearchParams | Record<string, string | number>) => {
    const apiURL = new URL(import.meta.env.VITE_API_URL + endpoint);
    apiURL.searchParams.set('appid', import.meta.env.VITE_API_KEY);
    apiURL.searchParams.set('units', 'metric');
    // apiURL.searchParams.set('lang', 'ru');
    for (const [key, value] of Object.entries(searchParams || {})) apiURL.searchParams.set(key, value);

    return apiURL.toString();
};

export const getGeocodingAPIurl = (
    endpoint: string,
    searchParams?: URLSearchParams | Record<string, string | number>,
) => {
    const apiURL = new URL(import.meta.env.VITE_API_GEOCODING_URL + endpoint);
    apiURL.searchParams.set('appid', import.meta.env.VITE_API_KEY);
    apiURL.searchParams.set('limit', '5');
    for (const [key, value] of Object.entries(searchParams || {})) apiURL.searchParams.set(key, value);

    return apiURL.toString();
};
