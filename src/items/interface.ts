export interface BaseItem {
    value: number;
    year: number;
    month: number;
    statementDate: Date;
    isSimulated: boolean;
    type: string;
}

export interface Item extends BaseItem {
    id: number;
}

export interface Items {
    [key: number]: Item;
}