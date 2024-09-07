export interface CardProductProps {
    key: number;
    id: string;
    title: string;
    price: number;
    initial_quantity?: number;
    thumbnail: string;
    pictures?: object[];
    descriptions?: object[];
    warranty?: string;
}