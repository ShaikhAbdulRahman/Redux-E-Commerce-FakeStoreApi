export const commonReducer = (state = { product: [], cart: [], searchTerm: "", selected: [] }, action) => {
    if (action.type === "PRODUCT") {
        return { ...state, product: [...state.product, action.payload] }
    };
    if (action.type === "ADD-TO-CART") {
        const updatedItem = { ...action.payload, quantity: 1, totalPrice: action.payload.price };
        return { ...state, cart: [...state.cart, updatedItem] }
    };
    if (action.type === "Details-Cart") {
        return { ...state, selected: [action.payload],
        }
    };
    if (action.type === "REMOVE") {
        const filteredRemove = state.cart.filter((item, index) => index !== action.payload)
        return {
            ...state, cart: filteredRemove
        };
    };
    if (action.type === "SEARCH") {
        return {
            ...state, searchTerm: action.payload
        }
    };
    if (action.type === "INCREMENT") {
        const updatedcartinc = state.cart.map((item, index) =>
            index === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
            ...state, cart: updatedcartinc
        }
    };
    if (action.type === "DECREMENT") {
        const updatedcartdec = state.cart.map((item, index) =>
            index === action.payload ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
        );
        return {
            ...state, cart: updatedcartdec
        };
    }
    return state;
}