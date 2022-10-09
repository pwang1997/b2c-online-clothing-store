import {fetchAllProducts, fetchProductsByCategory} from "../apis/Products";

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
        });
    }).catch((err) => {
        console.error(err);
    }).finally((res) => {
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
                id: doc.id,
                product: doc.data()
            }
            results.push(data);
        });
    }).catch((err) => {
        console.error(err);
    }).finally((res) => {
        setProducts(results);
    });
}