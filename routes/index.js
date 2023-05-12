import express from 'express';
import { userRouter } from './userRouter.js'
import {categoryRouter} from './categoryRoutes.js'
const rootRouter = express();

rootRouter.use('/user', userRouter)
rootRouter.use('/category', categoryRouter)
export { rootRouter }