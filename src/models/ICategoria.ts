import Produto from "./IProduto";

export default interface Categoria {
    id: number;
    name: string;
    description: string;
    product: Produto | null;
}