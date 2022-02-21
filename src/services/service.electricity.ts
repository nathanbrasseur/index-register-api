import { ElectricityItem, ElectricityItems, BaseElectricityItem } from "../items/interface";
let items: ElectricityItems = {
    1: {
        id: 1,
        dayValue: 11,
        nightValue: 10,
        year: 2021,
        month: 11,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false
    },
    2: {
        id: 2,
        dayValue: 11,
        nightValue: 10,
        year: 2021,
        month: 11,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false
    },
    3: {
        id: 3,
        dayValue: 11,
        nightValue: 10,
        year: 2021,
        month: 11,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false
    }
};

export const findAll = async (): Promise<ElectricityItem[]> => Object.values(items);
export const find = async (id: number): Promise<ElectricityItem> => items[id];
export const create = async (newItem: BaseElectricityItem): Promise<ElectricityItem> => {
    const id = new Date().valueOf();
    items[id] = {
        id,
        ...newItem,
    };
    return items[id];
};
export const update = async (
    id: number,
    itemUpdate: BaseElectricityItem
): Promise<ElectricityItem | null> => {
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