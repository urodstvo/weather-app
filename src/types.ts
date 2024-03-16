interface GeoQueryByName {
    q: string;
}

interface GeoQueryByCoords {
    lat: string;
    lon: string;
    units?: 'metric' | 'imperial';
}

export type GeoQuery = GeoQueryByName | GeoQueryByCoords;

export type CurrentWeatherResponse = {
    coord: {
        lon: number;
        lat: number;
    };
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        },
    ];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    rain: unknown;
    clouds: unknown;
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
};

export type ForecastWeatherResponse = {
    cod: string;
    message: number;
    cnt: number;
    list: {
        dt: number;
        main: {
            temp: number;
            feels_like: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            sea_level: number;
            grnd_level: number;
            humidity: number;
            temp_kf: number;
        };
        weather: [
            {
                id: number;
                main: string;
                description: string;
                icon: string;
            },
        ];
        clouds: {
            all: number;
        };
        wind: {
            speed: number;
            deg: number;
            gust: number;
        };
        visibility: number;
        pop: number;
        rain: {
            '3h': number;
        };
        sys: {
            pod: string;
        };
        dt_txt: string;
    }[];
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    };
};

export type GeoCodingResponseItem = {
    name: string;
    local_names: Record<string, string>;
    lat: number;
    lon: number;
    country: string;
    state: string;
};

export type GeoCodingResponse = Array<GeoCodingResponseItem>;
