import { v4 as idGenerator } from 'uuid'
import { Router } from 'express'
import { getData, writeData } from '../utils/products.js';
async function getAllProducts() {
    try {
        let data = await getData();
        if (!data.products) {
            console.log("no no no")
            throw new Error("No products")
        }

        return data.products
    } catch (error) {
        throw new Error(error.message || "Error: unable to fetch products")
    }

}

async function getProduct(prodId) {
    console.log("baaaaa")
    try {
        let products = await getAllProducts();
        console.log(products)
        let searchedProd = products.find((prod) => prod.id === prodId);
        if (!searchedProd) {
            throw new Error("Product with id: " + prodId + " not found!")
        }
        return searchedProd
    } catch (error) {
        throw new Error(error.message)
    }
}

async function addProduct(prod) {
    try {
        let data = await getData();
        if (!data.products) {
            data.products = [];
        }
        data.products.push(prod)
        await writeData(data)

    } catch (error) {

    }
}

const productRouter = Router();

productRouter.get("/", async (req, res) => {
    try {
        let products = await getAllProducts()
        res.status(200).json({ products })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


productRouter.post("/", async (req, res, next) => {
    let newProdData = req.body;
    let errors = []

    if (newProdData.title.length === 0) {
        errors.push("Title is required!")
    }
    if (!newProdData.price) {
        errors.push("Price is required!")
    }
    if (!newProdData.description || newProdData.description.length === 0) {
        errors.push("Description is required")
    }

    if (errors.length > 0) {
        res.status(422).json({ errors })
    }

    let id = idGenerator()
    try {
        await addProduct({ id, ...newProdData })
        res.status(201).json({ product: { id, ...newProdData } })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


productRouter.get("/:prodId", async (req, res, next) => {
    console.log("SEARCHING")
    let prodId = req.params.prodId;

    try {
        let product = await getProduct(prodId);
        res.status(200).json({ product })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default productRouter