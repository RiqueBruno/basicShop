import { Item } from "./Item";

export interface CategoryProductProps {
    products: Item[];
    category: string;
    isloading: boolean;
}