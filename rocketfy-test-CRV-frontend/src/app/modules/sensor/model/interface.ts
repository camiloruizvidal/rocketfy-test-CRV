export interface ISensor {
    sensor_id:   number;
    sensor_name: string;
    data:        ISensorData[];
}

export interface ISensorData {
    timestamp:    Date;
    temperature?: number;
    humidity?:    number;
    pressure?:    number;
    wind_speed?:  number;
    noise_level?: number;
    air_quality?: string;
}
