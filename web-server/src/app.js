const path = require('path')
const express = require('express')

console.log(path.join(__dirname,'../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather',
        name: 'Evyatar',
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About me',
        name: 'Evyatar',
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:
         "For any problems that came up please contact atatar1521@gmail.com",
    })
})

app.get('/weather',(req,res)=>{
  res.send({
    forecast : 'it is sunny',
    location : 'Ashdod'
  })
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})