interface BaseItem {
    year: number;
    month: number;
    statementDate: Date;
    isSimulated: boolean;
}

// Electricity
export interface BaseElectricityItem extends BaseItem {
    dayValue: number;
    nightValue: number;
}

export interface ElectricityItem extends BaseElectricityItem {
    id: number;
}

export interface ElectricityItems {
    [key: number]: ElectricityItem;
}

//  Water
export interface BaseWaterItem extends BaseItem {
    value: number;
}

export interface WaterItem extends BaseWaterItem {
    id: number;
}

export interface WaterItems {
    [key: number]: WaterItem;
}