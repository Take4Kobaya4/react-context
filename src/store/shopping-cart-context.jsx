import {createContext} from 'react';

export const CartContext = createContext({
    items: [],
    // 自動保管をするために空にしている
    addItemToCart: () => {},
});

