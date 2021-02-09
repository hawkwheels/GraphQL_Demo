import {buildSchema} from 'graphql'

const schema = buildSchema(`
    type Cars {
        id: String
        carName: String
        category: String
        price: Int 
        madeIn: String 
        engine: [Engine] 
        country: Country
    }
    type Engine {
        v4: String
        v8: String 
        v12: String
    }

    enum Country {
        Italy
        Germany
        Japan
        US
    }

    type Query {
        getCars(id: String): Cars
    }

    input CarsInput {
        id: String
        carName: String!
        category: String
        price: Int 
        madeIn: String 
        engine: [EngineInput] 
        country: Country
    }
    input EngineInput{
        v4: String
        v8: String 
        v12: String
    }

    type Mutation {
        createCars(input: CarsInput): Cars
    }
`)

export default schema