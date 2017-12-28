/**
 * 
 *      /\     |ˉ|         |ˉˉˉˉˉˉˉˉˉ\ |ˉ|      |ˉ|     /\     |ˉˉˉˉˉˉˉˉˉ\ |ˉˉˉˉˉˉˉˉˉˉ||ˉˉˉˉˉˉˉˉˉˉˉ|
 *     /  \    | |         | |ˉˉˉˉˉˉ\ \| |      | |    /  \    | |ˉˉˉˉˉ\ | | |ˉˉˉˉˉˉˉˉ  ˉˉˉˉ| |ˉˉˉˉ 
 *    / /\ \   | |         | |      | ||  ˉˉˉˉˉˉ  |   / /\ \   |  ˉˉˉˉˉ  / |  ˉˉˉˉˉˉˉˉ|     | |     
 *   / /  \ \  | |         | ˉˉˉˉˉˉˉ  /| |ˉˉˉˉˉˉ| |  / /  \ \  | |ˉˉˉˉˉ\ \ | |ˉˉˉˉˉˉˉˉ      | |     
 *  /  ˉˉˉˉ  \ | |         | |ˉˉˉˉˉˉˉˉ | |      | | /  ˉˉˉˉ  \ | |     /  || |              | |     
 * / /ˉˉˉˉˉˉ\ \|  ˉˉˉˉˉˉˉˉ|| |         | |      | |/ /ˉˉˉˉˉˉ\ \|  ˉˉˉˉˉ  / |  ˉˉˉˉˉˉˉˉ|     | |     
 * ˉˉ        ˉˉ ˉˉˉˉˉˉˉˉˉˉ ˉˉˉ          ˉ        ˉ ˉˉ        ˉˉ ˉˉˉˉˉˉˉˉˉ   ˉˉˉˉˉˉˉˉˉˉ      ˉˉˉ     
 *
 */
import characterPlanar from './character/planar'
import characterStereo from './character/stereo'
function Alphabet (str, mode = 'planar') {
  if (typeof str !== 'string') {
    throw new TypeError('str must be a string')
  }
  str = str.toUpperCase()
  var character
  if (mode === 'planar') {
    character = characterPlanar
  }
  if (mode === 'stereo') {
    character = characterStereo
  }

  var result = '\n'
  var strArr = str.split('\n')
  for (var k = 0; k < strArr.length; k++) {
    for (var j = 0; j < 7; j++) {
      for (var i = 0, length = strArr[k].length; i < length; i++) {
        var nowCharater = strArr[k][i]
        var line = character[nowCharater]
        if (line) {
          result += line[j]
        } else {
          throw new Error(`str contains invalid char: ${nowCharater}`)
        }
      }
      result += '\n'
    }
  }
  return result
}
exports['default'] = Alphabet
module.exports = exports['default']
