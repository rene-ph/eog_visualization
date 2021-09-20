interface MeasurementResponse {
    metric: string;
    at: number;
    value: number;
    unit: string;
}

export interface MeasurementDataResponse  {
    getLastKnownMeasurement: MeasurementResponse;
};