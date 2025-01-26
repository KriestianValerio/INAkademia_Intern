const express = require('express')

const { Series } = require('../Models/SessionSchedules')
const router = express.Router();

// Series.createIndexes();

router.post('/', 
    async (req, res) => {
        try 
            {
                let series = new Series(req.body)
                await series.save()
                res.status(200).send("Series good!")
                console.log('submitted')
            } 
        catch (error) 
            {
                res.status(400).send(error)
                console.log(error)
            }
    }
)


router.get('/', 
    async (req, res) => {
        try {
            Series.find()
            .then(series => res.json(series))
            .catch(err => res.json(err))
        } catch (error) {
            console.log(error)
        }
})

module.exports = router