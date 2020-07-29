const geocode = require('./utills/geocode')
const forecast = require('./utills/forecast')

const address = process.argv[2]
if(!address){
    console.log('please provide an address')
}
else{
    geocode(address,(error,{latitude,longitude,location} = {})=>{
        if(error){
           return console.log(error)
        }
        forecast(latitude,longitude,(error,foreCastdata)=>{
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(foreCastdata)
        })
        })
}



