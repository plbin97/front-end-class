import express, { Express } from 'express';

let APP: Express | null = null

const getApp = () => {
    if (!APP) {
        APP = express()
        APP.listen(1000, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:1000`)
        })
    }
    return APP
}

export {getApp}
