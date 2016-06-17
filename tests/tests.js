var test = require('tape')
var getImage = require('../lib/get-image')

test('get image', function(t) {
  // Arrange
  var expected = 'http://www.londolozi.com/cubsden/wp-content/uploads/2013/08/Cheeetah-thumb.jpg'


  // Act
  var actual = getImage('fdsfds')

  // Assert
  //returns something
  t.ok(actual, 'get image returns something')
  //starts with http
  t.equal('http', actual.substring(0,4), 'starts with http')
  t.end()
})



