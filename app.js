import express from 'express'
import { fetchDataAndNotify } from './test.js'

const app = express()
app.listen(3000, () => {
    setInterval(
        fetchDataAndNotify,
        30000
    )
})