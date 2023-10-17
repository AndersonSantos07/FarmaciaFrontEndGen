import Categoria from "./ICategoria";

export default interface Produto {
    id: number;
    name: string;
    description: string;
    amount: number;
    price: number;
    photo: string;
    
    category: Categoria | null;

}