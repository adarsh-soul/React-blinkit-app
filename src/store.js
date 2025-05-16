// Import necessary functions
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create the slice for products
const productSlice = createSlice({
    name: "products", // Slice name
    initialState: { // State
        veg: [
            { name: 'Onion', price: 25, image: '/images/1onion.webp' },
            { name: 'Tomato', price: 30, image: '/images/1tomato.png' },
            { name: 'Potato', price: 20, image: '/images/1potato.png' },
            { name: 'Carrot', price: 40, image: '/images/1carrot.png' },
            { name: 'Green Beans', price: 60, image: '/images/1beans.png' },
            { name: 'Cauliflower', price: 60, image: '/images/1cauliflo.webp' },
            { name: 'Chillies', price: 25, image: '/images/1chilli.webp' },
            { name: 'Cucumber', price: 25, image: '/images/1cucumb.png' },
            { name: 'Eggplant', price: 40, image: '/images/1eggplant.png' },
            { name: 'Spinach', price: 15, image: '/images/1spinach.webp' },
            
            { name: 'Capsicum', price: 50, image: '/images/capsicum.jpg' },
            { name: 'Cabbage', price: 35, image: '/images/cabbage.jpg' },
            { name: 'Broccoli', price: 60, image: '/images/broccoli.jpg' },
            { name: 'Peas', price: 55, image: '/images/peas.jpg' },
            { name: 'Radish', price: 18, image: '/images/radish.jpg' },
            { name: 'Garlic', price: 120, image: '/images/garlic.jpg' },
            { name: 'Ginger', price: 90, image: '/images/ginger.jpg' },
            { name: 'Beetroot', price: 25, image: '/images/beetroot.jpg' },
            { name: 'Pumpkin', price: 30, image: '/images/pumpkin.jpg' },
            { name: 'Zucchini', price: 70, image: '/images/zucchini.jpg' },
            { name: 'Lettuce', price: 45, image: '/images/lettuce.jpg' },
            { name: 'Mushroom', price: 150, image: '/images/mushroom.jpg' },
            { name: 'Bell Pepper', price: 80, image: '/images/bellpepper.jpg' },
            
            { name: 'Okra', price: 35, image: '/images/okra.jpg' },
            { name: 'Celery', price: 50, image: '/images/celery.jpg' },
            
            { name: 'Corn', price: 40, image: '/images/corn.jpg' },
            { name: 'Turnip', price: 30, image: '/images/turnip.jpg' },
            { name: 'Coriander', price: 10, image: '/images/coriander.jpg' },
            { name: 'Parsley', price: 15, image: '/images/parsley.jpg' },
            { name: 'Leek', price: 60, image: '/images/leek.jpg' },
            { name: 'Arugula', price: 70, image: '/images/arugula.jpg' }
        ],
        nonVeg: [
            { name: 'Egg Curry', price: 60, image: '/images/2eggcurry.png' },
            { name: 'Chicken', price: 200, image: '/images/2chickcurr.webp' },
            { name: 'Fish', price: 250, image: '/images/2fish.webp' },
            { name: 'Mutton', price: 400, image: '/images/2mutton.png' },
            { name: 'Omlet', price: 45, image: '/images/2omlet.png' },
            
            { name: 'Prawns', price: 300, image: '/images/2prawns.webp' },
            
            { name: 'Crab', price: 350, image: '/images/crab.jpg' },
            { name: 'Duck', price: 380, image: '/images/duck.jpg' },
            { name: 'Turkey', price: 450, image: '/images/turkey.jpg' },
            { name: 'Quail', price: 220, image: '/images/quail.jpg' },
            { name: 'Lobster', price: 600, image: '/images/lobster.jpg' },
            { name: 'Squid', price: 400, image: '/images/squid.jpg' },
            { name: 'Shrimp', price: 320, image: '/images/shrimp.jpg' },
            { name: 'Octopus', price: 500, image: '/images/octopus.jpg' },
            { name: 'Clams', price: 280, image: '/images/clams.jpg' },
            { name: 'Goat Meat', price: 420, image: '/images/goatmeat.jpg' },
            { name: 'Rabbit', price: 300, image: '/images/rabbit.jpg' },
            { name: 'Salmon', price: 700, image: '/images/salmon.jpg' },
            { name: 'Tilapia', price: 150, image: '/images/tilapia.jpg' },
            { name: 'Swordfish', price: 750, image: '/images/swordfish.jpg' },
            { name: 'Herring', price: 350, image: '/images/herring.jpg' }
        ],
        fruits: [
            { name: 'Apple', price: 120, image: '/images/apple.png' },
            { name: 'Banana', price: 40, image: '/images/banana.png' },
            { name: 'Orange', price: 60, image: '/images/orang.png' },
            { name: 'Mango', price: 150, image: '/images/mango.png' },
            
            { name: 'Watermelon', price: 35, image: '/images/watermelon.png' },
            { name: 'Pineapple', price: 80, image: '/images/pineapple.jpg' },
            { name: 'Grapes', price: 90, image: '/images/grapes.jpg' },
            { name: 'Strawberry', price: 200, image: '/images/strawberry.jpg' },
            { name: 'Kiwi', price: 180, image: '/images/kiwi.jpg' },
            { name: 'Cherry', price: 250, image: '/images/cherry.jpg' },
            { name: 'Papaya', price: 50, image: '/images/papaya.jpg' },
            { name: 'Pear', price: 70, image: '/images/pear.jpg' },
            { name: 'Plum', price: 100, image: '/images/plum.jpg' },
            { name: 'Guava', price: 45, image: '/images/guava.jpg' },
            { name: 'Peach', price: 130, image: '/images/peach.jpg' },
            { name: 'Fig', price: 90, image: '/images/fig.jpg' },
            { name: 'Lime', price: 20, image: '/images/lime.jpg' },
            { name: 'Lychee', price: 200, image: '/images/lychee.jpg' },
            { name: 'Blueberry', price: 300, image: '/images/blueberry.jpg' },
            { name: 'Blackberry', price: 250, image: '/images/blackberry.jpg' }
        ],
        dairy: [
            { name: 'Milk', price: 50, image: '/images/milk.jpg' },
            { name: 'Kefir', price: 120, image: '/images/kefir.jpg' },
            { name: 'Sour Cream', price: 60, image: '/images/sourcream.jpg' },
            { name: 'Ricotta', price: 140, image: '/images/ricotta.jpg' },
            { name: 'Mozzarella', price: 180, image: '/images/mozzarella.jpg' },
            { name: 'Parmesan', price: 250, image: '/images/parmesan.jpg' },
            { name: 'Cottage Cheese', price: 90, image: '/images/cottagecheese.jpg' },
            { name: 'Chocolate Milk', price: 70, image: '/images/chocolatemilk.jpg' },
            { name: 'Whey Protein', price: 500, image: '/images/wheyprotein.jpg' },
            { name: 'Cheese', price: 150, image: '/images/cheese.jpg' },
            { name: 'Butter', price: 120, image: '/images/butter.jpg' },
            { name: 'Yogurt', price: 40, image: '/images/yogurt.jpg' },
            { name: 'Cream', price: 70, image: '/images/cream.jpg' },
            { name: 'Paneer', price: 200, image: '/images/paneer.jpg' },
            { name: 'Ice Cream', price: 250, image: '/images/icecream.jpg' },
            { name: 'Ghee', price: 350, image: '/images/ghee.jpg' },
            { name: 'Custard', price: 80, image: '/images/custard.jpg' },
            { name: 'Condensed Milk', price: 90, image: '/images/condensedmilk.jpg' },
            { name: 'Whipped Cream', price: 100, image: '/images/whippedcream.jpg' },
            { name: 'Milkshake', price: 150, image: '/images/milkshake.jpg' }
            
        ]
    },
    reducers: {} // Reducers object is empty for now but can be extended later
});

// Create the slice for cart
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    return state.filter(item => item.name !== action.payload.name);
                }
            }
        },
        removeCart: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        },
        clearCart: () => []
    }
});

// Create the slice for order
const orderSlice = createSlice({
    name: "ordercomponents",
    initialState: [],
    reducers: {
        orderDetails: (state, action) => {
            state.push(action.payload);
        }
    }
});

// Export actions
export const { addToCart, incrementCart, decrementCart, removeCart, clearCart } = cartSlice.actions;
export const { orderDetails } = orderSlice.actions;

// Configure the store
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        ordercomponents: orderSlice.reducer
    }
});

// Export the store to use in your app
export default store;
