import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader= async ()=>{
    const loadedProducts=await fetch('/products.json');
    const products=await loadedProducts.json();

    // if cart data in a database we must use async await
    const storedCart=getShoppingCart();
    // console.log(storedCart);

    const savedCart=[];
    
    for(const id in storedCart){
        const addedProduct=products.find(p=>p.id=== id);
        if(addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            savedCart.push(addedProduct);
        }
    }

    // console.log(products);


    // if we need to return more value then..
    // return [savedCart, products];
    // return {savedCart:savedCart, products:products};
    return savedCart;
}

export default cartProductLoader;