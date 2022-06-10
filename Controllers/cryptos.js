import coin from '../Models/cryptos.js';

export const getCoins =  async (req, res) => {
    try {
        const allCoins = await coin.find()
        res.send(allCoins)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const addCoin = async (req, res) => {
    try {
        const newCoin = new coin (req.body);
        const saveNewCoin = await newCoin.save()
        res.send(saveNewCoin)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const getCoin = async (req, res) => {
    try {
        const Coin = await coin.findById(req.params.id, req.body)
        res.send(Coin)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const updateCoin = async (req, res) => {
    try {
        const updateCoin = await coin.findByIdAndUpdate(req.params.id, req.body);
        const updatedCoin = await updateCoin.save();
        res.send(updatedCoin)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const deleteCoin = async (req, res) => {
    try {
        await coin.findByIdAndDelete(req.params.id)
        res.send('coin deleted')
    } catch (error) {
        res.status(500).send(error)
    }
}