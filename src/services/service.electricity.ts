import { ElectricityItem, BaseElectricityItem, BaseItem } from "../items/interface";
let items: ElectricityItem[] = [
    {
        id: 1,
        dayValue: 12.45,
        nightValue: 14.152,
        dayUsage: 0.457,
        nightUsage: 0.523,
        year: 2022,
        month: 1,
        statementDate: new Date(2022, 2, 1),
        isSimulated: false
    },
    {
        id: 2,
        dayValue: 11.993,
        nightValue: 13.629,
        dayUsage: 0.457,
        nightUsage: 0.523,
        year: 2021,
        month: 12,
        statementDate: new Date(2022, 1, 4),
        isSimulated: false,
    },
    {
        id: 3,
        dayValue: 5.264,
        nightValue: 3.964,
        dayUsage: 5.131,
        nightUsage: 4.758,
        year: 2021,
        month: 11,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
    },
    {
        id: 4,
        dayValue: 4.964,
        nightValue: 4.164,
        dayUsage: 5.131,
        nightUsage: 4.758,
        year: 2021,
        month: 10,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false,
    },
    {
        id: 5,
        dayValue: 12.45,
        nightValue: 14.152,
        dayUsage: 0.457,
        nightUsage: 0.523,
        year: 2022,
        month: 2,
        statementDate: new Date(2022, 2, 1),
        isSimulated: false
    },
    {
        id: 6,
        dayValue: 11.993,
        nightValue: 13.629,
        dayUsage: 0.457,
        nightUsage: 0.523,
        year: 2022,
        month: 3,
        statementDate: new Date(2022, 1, 4),
        isSimulated: false,
    },
    {
        id: 7,
        dayValue: 5.264,
        nightValue: 3.964,
        dayUsage: 5.131,
        nightUsage: 4.758,
        year: 2022,
        month: 4,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
    },
    {
        id: 4,
        dayValue: 4.964,
        nightValue: 4.164,
        dayUsage: 5.131,
        nightUsage: 4.758,
        year: 2021,
        month: 9,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false,
    },
    {
        id: 4,
        dayValue: 4.964,
        nightValue: 4.164,
        dayUsage: 5.131,
        nightUsage: 4.758,
        year: 2021,
        month: 8,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false,
    },
    {
        id: 4,
        dayValue: 4.964,
        nightValue: 4.164,
        dayUsage: 5.131,
        nightUsage: 4.758,
        year: 2021,
        month: 7,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false,
    },
    {
        id: 4,
        dayValue: 4.964,
        nightValue: 4.164,
        dayUsage: 5.131,
        nightUsage: 4.758,
        year: 2021,
        month: 6,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false,
    },
    {
        id: 4,
        dayValue: 4.964,
        nightValue: 4.164,
        dayUsage: 5.131,
        nightUsage: 4.758,
        year: 2021,
        month: 5,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false,
    },
    {
        id: 4,
        dayValue: 4.964,
        nightValue: 4.164,
        dayUsage: 5.131,
        nightUsage: 4.758,
        year: 2021,
        month: 4,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false,
    },
    {
        id: 4,
        dayValue: 4.964,
        nightValue: 4.164,
        dayUsage: 5.131,
        nightUsage: 4.758,
        year: 2021,
        month: 3,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false,
    },
    {
        id: 4,
        dayValue: 4.964,
        nightValue: 4.164,
        dayUsage: 5.131,
        nightUsage: 4.758,
        year: 2021,
        month: 2,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false,
    },
    {
        id: 4,
        dayValue: 4.964,
        nightValue: 4.164,
        dayUsage: 5.131,
        nightUsage: 4.758,
        year: 2021,
        month: 1,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false,
    },
];
function compareItem(emp1: BaseItem, emp2: BaseItem) {  
    if (emp1.year < emp2.year) {return 1; }  
    if (emp1.month < emp2.month) { return -1; }  
    return 0;  
} 
export const findAll = async (): Promise<ElectricityItem[]> => Object.values(items.sort(compareItem));
export const find = async (id: number): Promise<ElectricityItem | undefined> => items.find(o => o.id === id);
export const create = async (newItem: BaseElectricityItem): Promise<ElectricityItem | undefined> => {
    const id = new Date().valueOf();
    items.push({
        id,
        ...newItem,
    });
    return find(id);
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