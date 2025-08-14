# Static files:-
html
css
js

To display the changes is express we have to use a middleware.

Middleware are functions that executes on every incoming requests.

middleware can be used with paths orr without paths.


## POST

if we are sending through POst Method , we get the data in (req.body) which is object means contains key value pair.

req ki body by default undefined hoti h. that's why we use a middleware.