import express from 'express';
import { Categories }  from '../model/model.js'

const categoryRouter = express();

categoryRouter.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const category = await Categories.create({ name })
        return res.json(category)
    

    }catch(e) {
        console.log(e)
    }
   

})

categoryRouter.get('/', async (req, res) => {
    try{
        const categories = await Categories.findAll()
        return res.json(categories)

    }catch(e) {
    console.log(e)
    }
})

categoryRouter.post('/:id', async (req, res) => {
   const { id } = req.params
   const category =await Categories.findOne({ where: {id}})
   return res.json(category)
})

categoryRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    const category =await Categories.findOne({ where: {id}})
    return res.json(category)

})

export {categoryRouter}