export interface CartItem {
    Specification: {
        id: number;
        name: string;
        price: number;
        description: string;
        url: string;
    },
    quantity: number
}
