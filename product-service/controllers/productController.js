
let products = [];

const createProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const newProduct = { id: generateProductId(), name, price };
        products.push(newProduct);
        await req.rabbitMQ.publishMessage(JSON.stringify(newProduct), 'product.created');
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

function generateProductId() {
    return products.length + 1;
}

module.exports = {
    createProduct,
    getAllProducts
};

