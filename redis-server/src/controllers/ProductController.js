const redisClient = require("../redis");
const {db, storage, bucket} = require("../firebase-config");

const fetchAllProducts = async (req, res) => {
    const key = "find-all";

    try {
        const cachedResults = await redisClient.get(key);

        if (cachedResults) {
            const results = JSON.parse(cachedResults);
            console.log(`Cache hits: ${key}`);
            res.status(200).send(results);
        } else {
            let docs = [];
            await db.collection('products').get()
                .then((res) => {
                    res.docs.forEach((doc) => {
                        const data = {
                            id: doc.id,
                            ...doc.data()
                        }
                        docs.push(data);
                    });
                });

            if (!docs) {
                throw "API received an empty array";
            } else {
                await redisClient.set(key, JSON.stringify(docs));
                await redisClient.expire(key, 60 * 60 * 6); // 6hr ttl
                res.status(200).send(docs);
                console.log(`Cache sets: ${key}`);

            }
        }
    } catch (e) {
        console.error(e)
        res.status(400).send(e);
    }
}

const fetchProductByCondition = async (req, res) => {
    const {fieldPath, opStr, value} = req.query;

    const key = `products-${fieldPath}-${opStr}-${value}`;
    try {
        const cachedResults = await redisClient.get(key);

        if (cachedResults) {
            const results = JSON.parse(cachedResults);
            console.log(`Cache hits: ${key}`);
            res.status(200).send(results);
        } else {
            let docs = [];
            await db.collection('products')
                .where(fieldPath, opStr, value)
                .get()
                .then((res) => {
                    res.docs.forEach((doc) => {
                        const data = {
                            id: doc.id,
                            ...doc.data()
                        }
                        docs.push(data);
                    });
                });

            if (docs.length === 0) {
                throw "API received an empty array";
            } else {
                await redisClient.set(key, JSON.stringify(docs));
                await redisClient.expire(key, 60 * 60 * 6); // 6hr ttl
                res.status(200).send(docs);
                console.log(`Cache sets: ${key}`);
            }
        }
    } catch (e) {
        console.error(e)
        res.status(400).send(e);
    }
}

const fetchProductImage = async (req, res) => {
    const key = `image-products-${req?.query?.url}`;

    try {
        const cachedResults = await redisClient.get(key);

        if (cachedResults) {
            res.status(200).send(cachedResults);
            console.log(`Cache hits: ${key}`);
        } else {
            res.send(null);
        }

    } catch (e) {
        console.error(e)
        res.status(400).send(e);
    }
}

const setProductImageUrl = async (req, res) => {
    const downloadUrl = req?.body?.downloadUrl;

    try {
        const url = downloadUrl.split("products%2F")[1].split("?alt")[0];

        const key = `image-products-${url}`;

        if (downloadUrl) {
            await redisClient.set(key, downloadUrl)
                .then(res.status(200).send(downloadUrl));
            console.log(`Cache sets: ${key}`);
        } else {
            throw "Received invalid downloadUrl";
        }
    } catch (e) {
        console.error(e)
        res.status(400).send(e);
    }
}

module.exports = {setProductImageUrl, fetchProductImage, fetchAllProducts, fetchProductByCondition};