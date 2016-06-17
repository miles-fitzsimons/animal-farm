var fs = require('fs')
var request = require('request')
var dotenv = require('dotenv')
dotenv.load()


createAnimal("Jack")

// Big picture function. Uses sub functions
function createAnimal(inputName) {
  // We're in the create page
  // Take inputted string -> find image, set name, set votes, set id, generate description
  // Update data.json
  var baseRequest = request.defaults({
  headers: {'Api-Key': process.env.GETTY_KEY,
            'Client-Secret': process.env.GETTY_SECRET}

})

  var newAnimal = {}
  newAnimal.name = inputName
  newAnimal.id = Date.now()
  newAnimal.votes = 5
  //newAnimal.image = getImage(inputName) WRITE PULL IMAGE FUNCTION
  //newAnimal.description = WRITE DESCRIPTION FUNCTION
  var catAPI = 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase='+ inputName
  var nameAPI = 'http://uinames.com/api/'
  var textAPI = 'https://api.chucknorris.io/jokes/random'
  var randomCat = {lives: 20}

  baseRequest(catAPI, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      newAnimal.image = JSON.parse(body).images[0].display_sizes[0].uri

      request(textAPI, function (error, response, body) {
        newAnimal.description = JSON.parse(body).value
        console.log(newAnimal)
        //
         catsObj.cats.push(randomCat)
        // updateFileSystem()
        // res.redirect('/cats')
      })

    }
  })












}



module.exports = createAnimal
