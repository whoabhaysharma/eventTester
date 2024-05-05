import express from 'express'
import cron from 'node-cron'
import { fetchDataAndNotify } from './test.js'

const app = express()
app.listen(3000, () => {
    console.log("LISTENING")
})

cron.schedule('*/30 * * * * *', async () => {
    await fetchDataAndNotify();
});