import { WaterItem, WaterItems, BaseWaterItem } from "../items/interface";
let items: WaterItems = {
    1: {
        id: 1,
        value: 11,
        year: 2021,
        month: 11,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false
    },
    2: {
        id: 2,
        value: 11,
        year: 2021,
        month: 11,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false
    },
    3: {
        id: 3,
        value: 11,
        year: 2021,
        month: 11,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false
    }
};

export const findAll = async (): Promise<WaterItem[]> => Object.values(items);
export const find = async (id: number): Promise<WaterItem> => items[id];
export const create = async (newItem: BaseWaterItem): Promise<WaterItem> => {
    const id = new Date().valueOf();
    items[id] = {
        id,
        ...newItem,
    };
    return items[id];
};
export const update = async (
    id: number,
    itemUpdate: BaseWaterItem
): Promise<WaterItem | null> => {
    const item = await find(id);

    if (!item) {
        return null;
    }

    items[id] = { id, ...itemUpdate };

    return items[id];
};

export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);

    if (!item) {
        return null;
    }

    delete items[id];
};