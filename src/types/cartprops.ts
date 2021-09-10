import { Products } from './products';

interface CartProps {
    cart: Products[];
    quantity: number
    handleRemoveFromCart: (id: string) => void;
};

export type { CartProps };
