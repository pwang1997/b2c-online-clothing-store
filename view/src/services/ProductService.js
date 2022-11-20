import {
    addProduct,
    updateProduct,
    deleteProduct,
    addProductImage, fetchProductImage, fetchFeaturedProducts
} from "../apis/Products";
import axios from "axios";

const fetchProductsWithConditionService = (ctx, params, setProducts) => {
    return axios.get("http://localhost:4000/products/fetch/?", {params})
        .then((res) => {
            setProducts(res.data);
        });
}

export const fetchProductsByCategoryService = (firebaseContext, categoryName, setProducts) => {
    const params = {
        fieldPath: "category",
        opStr: "==",
        value: categoryName
    }
    fetchProductsWithConditionService(firebaseContext, params, setProducts);
}

export const fetchAllProductsService = (firebaseContext, setProducts) => {

    axios.get("http://localhost:4000/products/fetch/find-all")
        .then((res) => {
            setProducts(res.data);
        });
}

export const fetchProductsByProductNameService = (firebaseContext, productName, setProducts) => {
    const params = {
        fieldPath : "productName",
        opStr: ">=",
        value : productName
    }
    fetchProductsWithConditionService(firebaseContext, params, setProducts);
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

    const params = {
        url: imageName.split("/")[1]
    }

    const fetchImageUrlFromRedis = () => {
        return axios.get(`http://localhost:4000/products/image/get/`, {params})
            .then((res) => {
                console.log("Return from redis");
                return res.data;
            });
    }

    const fetchImageUrlFromFirebase = () => {
        return fetchProductImage(firebaseContext, imageName)
            .then((res) => {
                console.log("Return from firebase");
                return res;
            });
    }

    const setImageUrl2Redis = async (res) => {
        return await axios.post(`http://localhost:4000/products/image/set/`, {downloadUrl: res})
            .then((res) => {
                console.log(res);
                return res;
            })
    }

    fetchImageUrlFromRedis()
        .then((res) => {
            if (!res) {
                fetchImageUrlFromFirebase()
                    .then((res) => {
                        setImageUrl2Redis(res);
                        setImageURL(res)
                    });
            } else {
                setImageURL(res);
            }
        })
}

export const fetchFeaturedProductsService = (firebaseContext, setProducts) => {
    let results = [];
    fetchFeaturedProducts(firebaseContext)
        .then((res) => {
            res.docs.forEach((doc) => {
                const data = {
                    id: doc.id,
                    ...doc.data()
                }
                results.push(data);
            })
        })
        .catch(console.error)
        .finally(() => {
            setProducts(results);
        })
}