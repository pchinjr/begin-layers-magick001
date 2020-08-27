@app
begin-layers-magick

@http
get /
get /resize/:size

@aws
profile default
region us-east-1