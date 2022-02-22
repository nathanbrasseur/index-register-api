export interface BaseItem {
    year: number;
    month: number;
    statementDate: Date;
    isSimulated: boolean;
}

// Electricity
export interface BaseElectricityItem extends BaseItem {
    dayValue: number;
    nightValue: number;
    dayUsage: number;
    nightUsage: number;
}

export interface ElectricityItem extends BaseElectricityItem {
    id: number;
}

//  Water
export interface BaseWaterItem extends BaseItem {
    value: number;
    usage: number;
}

export interface WaterItem extends BaseWaterItem {
    id: number;
}