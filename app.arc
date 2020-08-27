@app
begin-layers-magick

@http
get /
get /resize/:size
get /puppeteer

@aws
profile default
region us-east-1