import e from 'express'
import {nanoid} from 'nanoid'

class Cars {
    constructor (id, {
        carName, category, price, madeIn, engine,country
    }){
        this.id = id
        this.carName = carName
        this.category = category
        this.price = price
        this.madeIn = madeIn
        this.engine = engine
        this.country = country
    }
}

const carholder = {}

const resolvers = {
    getCars : ({ id }) => {
        return new Cars(id, carholder[ID])
    },
    createCars: ({input}) => {
        let id = nanoid()
        carholder[id] = input
        return new Cars(id, input)
    }
}

export default resolvers;