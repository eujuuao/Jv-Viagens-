import express from 'express'

const app = express ()

app.get('/usuarios', (resquest, reponse) => {
    response.send('ok, deu bom')
})

app.listen(3000)
