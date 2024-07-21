import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

export const routes = [
    {path:"/",element:<ProductList/>},
    {path:"/product/:pid",element:<ProductDetails/>},
    {path:"/cart",element:<Cart/>}
]