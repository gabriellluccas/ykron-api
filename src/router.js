import express from 'express'
import * as routes from './routes'

const router = express.Router()
const paths = []
const routeGenerator = (route) => {
    const { _method, _path, _function } = route
    paths.push(_path)
    router[_method](_path, _function)
}

Object.values(routes).map( file => {
    file.map( route => {
        routeGenerator(route)
    })
} )

export default router