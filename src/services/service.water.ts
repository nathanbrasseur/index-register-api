import { WaterItem, BaseWaterItem } from "../items/interface";
let items: WaterItem[] = [
    {
        id: 1,
        value: 4.758,
        usage: 4.758,
        year: 2021,
        month: 9,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false
    },
    {
        id: 2,
        value: 5.131,
        usage: 4.758,
        year: 2021,
        month: 10,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false
    },
    {
        id: 3,
        value: 5.264,
        usage: 4.758,
        year: 2021,
        month: 11,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false
    },
    {
        id: 4,
        value: 2.264,
        usage: 4.758,
        year: 2021,
        month: 12,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false
    }
];

export const findAll = async (): Promise<WaterItem[]> => Object.values(items);

export const find = async (id: number): Promise<WaterItem | undefined> => {
    return items.find(o => o.id === id);
};

export const create = async (newItem: BaseWaterItem): Promise<WaterItem> => {
    const id = new Date().valueOf();
    let item = {
        id,
        ...newItem,
    }
    items.push(item);
    return item;
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