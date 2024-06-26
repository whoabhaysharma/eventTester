import puppeteer from 'puppeteer';
import { sendNotification } from './message.js';
import dotenv from 'dotenv';

dotenv.config()

export const fetchDataAndNotify = async () => {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
        });
        const page = await browser.newPage();

        // Navigate to a page
        await page.goto('https://bseh.org.in/all-results');

        // Wait for a certain amount of time (e.g., 5 seconds)
        const elementLength = await page.evaluate(() => {
            // Replace 'your-selector' with your actual CSS selector
            const elements = document.querySelectorAll('.entry-content ul > li');
            // Convert NodeList to Array and return
            return Array.from(elements).length;
        });

        console.log("CHECKED THE RESULT", elementLength)

        if (elementLength > 3) {
            sendNotification()
        }

        await browser.close();   
    } catch (e) {
        console.log("CAUGHT AN ERROR OPENING THE PAGE", e)
    }
}