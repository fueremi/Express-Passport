const express = require('express')

const app = express()

app.get('/', ( req,res ) => {
    res.status(200).json({
        msg: 'Success',
        data: {
            id: 1,
            name: 'Rian Oktio MP',
            username: 'fueremi'
        }
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`) )