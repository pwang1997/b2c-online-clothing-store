import {addProduct, updateProduct, fetchAllProducts, fetchProductByProductName, fetchProductsByCategory} from "../apis/Products";

export const fetchProductsByCategoryService = (firebaseContext, categoryName, setProducts) => {
    let results = [];
    if (!firebaseContext || !categoryName) {
        return results;
    }

    fetchProductsByCategory(firebaseContext, categoryName).then((res) => {
        res.docs.forEach((doc) => {
            const data = {
                id : doc.id,
                product : doc.data()
            }
            results.push(data);
        })
    }).catch((err) => {
        console.error(err);
    }).finally(() => {
        setProducts(results);
    });
}

export const fetchAllProductsService = (firebaseContext, setProducts) => {
    let results = [];
    if (!firebaseContext) {
        return results;
    }

    fetchAllProducts(firebaseContext).then((res) => {
        res.docs.forEach((doc) => {
            const data = {
                id : doc.id,
                product : doc.data()
            }
            results.push(data);
        })
    }).catch((err) => {
        console.error(err);
    }).finally(() => {
        console.log(results);
        setProducts(results);
    });
}

export const fetchProductsByProductNameService = (firebaseContext, productName, setProducts) => {
    let results = [];
    if(!firebaseContext) {
        return results;
    }

    fetchProductByProductName(firebaseContext, productName).then((res) => {
        res.docs.forEach((doc) => {
            const data = {
                id : doc.id,
                product : doc.data()
            }
            results.push(data);
        })
    }).catch((err) => {
        console.error(err);
    }).finally(() => {
        setProducts(results);
    });
}

export const addProductService = (firebaseContext, product) => {

    addProduct(firebaseContext, product).then((res) => {
        console.log(res);
        console.log("then completed")
    }).catch((err) => {
        console.error(err);
    }).finally((res) => {
        console.log(res);
        console.log("arrived at finally");
    })
}

export const updateProductService = (firebaseContext, product) => {
    updateProduct(firebaseContext, product).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.error(err)
    }).finally(() => {

    })
}