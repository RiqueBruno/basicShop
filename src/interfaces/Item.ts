export interface Item {
    id: string;
    title: string;
    price: number;
    initial_quantity: number;
    thumbnail: string;
    pictures: picturesObj[];
    descriptions: object[];
    warranty: string;
    category_id?: string;
    attributes: atributesObj[];
}

export interface picturesObj {
    url: string;
}

interface atributesObj {
    name: string;
    value_name: string;
}
