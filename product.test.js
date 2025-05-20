const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

describe("addProduct", () =>{
    it("should add a product", () =>{
        addProduct("Tablet", 500);
        const productos = getProducts();
        expect(productos.length).toBe(1);
        expect(productos[0].name).toBe("Tablet")
    });
    it("should need increment id 1 all time", () =>{
        addProduct("Tablet", 500);
        addProduct("Keyboard", 50);
        const productos = getProducts();
        expect(productos[0].id).toBe(0);
        expect(productos[1].id).toBe(1);
    });
     it("should throw error if name or price not defined", () =>{
        expect(() => addProduct(undefined, 100)).toThrow();
        expect(() => addProduct("Mouse")).toThrow();
    });
     it("should throw error if product already exist", () =>{
        addProduct("Tablet", 500);
        expect(() => addProduct("Tablet", 500)).toThrow("product already exist");
    });

});

describe("removeProduct", () =>{
    it("should delete product", () =>{
        addProduct("Tablet", 500);
        removeProduct(0);
        expect(getProducts().length).toBe(0);
    });
    it("should throw error if product dont exist", () =>{
        expect(() => removeProduct(99)).toThrow("product not find");

    });
});

describe("getProduct", () =>{
    it("should return product for id", () =>{
        addProduct("TV", 800);
        const producto = getProduct(0);
        expect(producto.name).toBe("TV");
    });
    it("should throw error if product dont exist", () =>{
        expect(() => getProduct(1)).toThrow("product not find");

    });
});

describe("updateProduct", () =>{
    it("should update product", () =>{
        addProduct("PC", 1800);
        updateProduct(0, "PC", 1800);
        const producto = getProduct(0);
        expect(producto.name).toBe("PC");
        expect(producto.price).toBe(1800);
    });
    it("should throw error if product dont exist", () =>{
        expect(() => updateProduct(1, "X", 1)).toThrow("product not find");

    });
     it("should update only price", () =>{
        addProduct("Camera", 180);
        updateProduct(0, undefined, 170);
        const producto = getProduct(0);
        expect(producto.name).toBe("Camera");
        expect(producto.price).toBe(170);
    });
     it("should update only name", () =>{
        addProduct("Headphone", 80);
        updateProduct(0, "Headphones Bluethoot");
        const producto = getProduct(0);
        expect(producto.name).toBe("Headphones Bluethoot");
        expect(producto.price).toBe(80);
    });
});



