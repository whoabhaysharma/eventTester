import express from 'express'
import { fetchDataAndNotify } from './test.js'
import cron from 'node-cron'

const app = express()
app.listen(3000, () => {
    setInterval(
        fetchDataAndNotify,
        60000
    )
})

app.get('/', (req, res) => {
    // Send a response back to the client
    res.send('Hello, World!');
});

cron.schedule('*/5 * * * *', async () => {
    fetch("https://eventtester.onrender.com/")
        .then(response => {
            console.log("Refreshing.......")
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            // Log or use the response data
            // console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch request
            // console.error('Error:', error);
        });
});