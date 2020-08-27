// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http (req) {

let body = `
<body>
<h1>Serverless Graphics Magick with Begin</h1>
<em>Praise Sloth!</em>
<p><a href='/resize/600'>Click here for a sloth</a></p>
<p> Adjust size of image through path parameters, for example '/resize/200' will return the image with max width of 200px.
</body>
`
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body
  }
}