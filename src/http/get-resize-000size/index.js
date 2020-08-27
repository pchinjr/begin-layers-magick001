const { execSync } = require('child_process')
const fs = require('fs')

exports.handler = async function http(req) {

  //make sure it's a number
  let resize = parseInt(req.pathParameters.size)

  // graphicsmagick is already installed to the layer
  // resize to max width input from path parameters
  await execSync(`gm convert -size ${resize} me_sloth.jpg -resize ${resize} +profile "*" /tmp/thumbnail.png`, { encoding: 'utf8', stdio: 'inherit' })

  //take the image out of tmp
  let image = fs.readFileSync('/tmp/thumbnail.png')

  //simple return of image
  return {
    headers: {
      "statusCode": 200,
      "Content-Type": 'image/png'
    },
    isBase64Encoded: true,
    body: image.toString('base64')
  }
}