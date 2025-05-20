let products = [];
let id = 0; 


function addProduct(name, price){
    if(!name || price === undefined){
        throw new Error("need name and price")
    }
    if(products.find(p => p.name === name)){
        throw new Error("product already exist")
    }
    products.push({id, name, price});
    id++;


}

function removeProduct(productId){
    const index = products.findIndex(p => p.id === productId)
    if(index === -1){
        throw new Error("product not find")
    }
    products.splice(index,1);
    
}

function getProduct(productId){
    const product = products.find (p => p.id === productId)
    if(!product){
        throw new Error("product not find")
    }
    return product;
}

function updateProduct(productId, name, price){
    const product = products.find (p => p.id === productId)
      if(!product){
        throw new Error("product not find")
        }
      if (name !== undefined) product.name =name;
      if (price !== undefined) product.price =price;

}

function resetProducts(){
    products = [];
    id = 0; 
}

function getProducts(){
        return products;
}

module.exports ={
    addProduct,
    removeProduct,
    getProduct,
    updateProduct,
    resetProducts,
    getProducts
}