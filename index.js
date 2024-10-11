const http = require("http");
const fs = require("fs")



const server = http.createServer((req, res) => {
    if (req.url == "/home") {
        res.end("Welcome to home page")
    }
    else if (req.url == "/about") {
        res.end("This is about page")
    }

    // product data
    else if (req.url == "/getproductdata") {

     
        fs.readFile("./db.json", "utf-8", (err, data) => {

            if (err) {
                console.log(err)
            }
            else {
                const jsonData = JSON.parse(data)
                res.end(JSON.stringify(jsonData.products))

            }

        })
    }
     // User data
    else if (req.url == "/user"){
        fs.readFile("./db.json" , "utf-8" , (err,data) =>{

            if(err){
                console.log(err)
            }

            else{
                const jsonData = JSON.parse(data)
                res.end(JSON.stringify(jsonData.user))
            }

        })
    }

})


   

   


server.listen(5500, () => {

    console.log("port is run 5500")

})

