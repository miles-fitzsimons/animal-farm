var dotenv = require('dotenv')
var request = require('superagent')

dotenv.load()


function getImage(inputName) {

request.get('https://api.imgur.com/oauth2/authorize?client_id=' + process.env.IMGUR_ID + '&response_type=REQUESTED_RESPONSE_TYPE')
request.get('https://api.imgur.com/3/image/')








  //return imageURL
  return 'http://www.londolozi.com/cubsden/wp-content/uploads/2013/08/Cheeetah-thumb.jpg'

}



module.exports = getImage

// Client ID:
// 0ff7a87df23cd9d


// Client secret:
// 5e8b738193230dfed335d97711f4e2de2ebe67dc
