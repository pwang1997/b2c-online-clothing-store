import {
    addProduct,
    updateProduct,
    deleteProduct,
    fetchAllProducts,
    fetchProductByProductName,
    fetchProductsByCategory,
    addProductImage, fetchProductImage
} from "../apis/Products";

export const fetchProductsByCategoryService = (firebaseContext, categoryName, setProducts) => {
    let results = [];
    if (!firebaseContext || !categoryName) {
        return results;
    }

    fetchProductsByCategory(firebaseContext, categoryName).then((res) => {
        res.docs.forEach((doc) => {
            const data = {
                id: doc.id,
                product: doc.data()
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
        setProducts(results);
    }

    fetchAllProducts(firebaseContext).then((res) => {
        res.docs.forEach((doc) => {
            const data = {
                id: doc.id,
                ...doc.data()
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
    if (!firebaseContext) {
        return results;
    }

    fetchProductByProductName(firebaseContext, productName).then((res) => {
        res.docs.forEach((doc) => {
            const data = {
                id: doc.id,
                product: doc.data()
            }
            results.push(data);
        })
    }).catch((err) => {
        console.error(err);
    }).finally(() => {
        setProducts(results);
    });
}

export const addProductService = (firebaseContexts, product, productImage) => {
    addProductImage(firebaseContexts.storage, productImage)
        .then((res) => {
            product.imageUrl = res?.metadata?.fullPath;
            // connect product image url with product detail
            addProduct(firebaseContexts.db, product);
        })
        .then(res => {
            alert("Added product with image");
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {

        });
}

export const updateProductService = (firebaseContext, product) => {
    updateProduct(firebaseContext, product).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.error(err)
    }).finally(() => {

    })
}

export const deleteProductService = (firebaseContext) => {
    deleteProduct(firebaseContext).then((res) => {
        console.log(res);
        console.log("then completed")
    }).catch((err) => {
        console.error(err);
    }).finally((res) => {
        console.log(res);
        console.log("arrived at finally");
    });
}

export const fetchProductImageService = (firebaseContext, imageName, setImageURL) => {
    fetchProductImage(firebaseContext, imageName)
        .then((res) => {
            setImageURL(res);
        })
        .catch((err) => {
            console.error(err);
        });
}