var fs = require('fs')
var request = require('request')
var dotenv = require('dotenv')
var path = require('path')

dotenv.load()
var dataPath = path.join(__dirname, '../data/data.json')
console.log(dataPath)


function createAnimal(inputName, animalsObj) {
  var baseRequest = request.defaults({
    headers: {'Api-Key': process.env.GETTY_KEY,
    'Client-Secret': process.env.GETTY_SECRET}
  })

  var newAnimal = {}
  newAnimal.name = inputName
  newAnimal.id = Date.now()
  newAnimal.votes = 5
  var picAPI = 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=' + inputName
  var nameAPI = 'http://uinames.com/api/'
  var textAPI = 'https://api.chucknorris.io/jokes/random'

  baseRequest(picAPI, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      newAnimal.image = JSON.parse(body).images[0].display_sizes[0].uri

      request(textAPI, function (error, response, body) {
        newAnimal.description = JSON.parse(body).value
        animalsObj.animals.push(newAnimal)
        updateFileSystem()
      })

    }
  })

  function updateFileSystem () {
    var writeable = JSON.stringify(animalsObj)
    fs.writeFileSync(dataPath, writeable)
  }
}



module.exports = createAnimal
