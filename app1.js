const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 8000

app.get('/myname', greeting)

function greeting(req,response)
{
    response.send("Mahesh SE")
}
app.listen(port, () => {
console.log(`check your greeting`)
})

