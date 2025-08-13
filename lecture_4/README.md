## Restfull architecture

file.ejs :- index       NEW         Craete   Show         Edit              Update         Destroy

url :-      /blogs    /blog/new     /blogs   /blogs/:id  /blogs/:id/edit    /blogs/:id    /blogs/:id

HTTP Verb:- GET        GET           POST     GET         GET              PUT             DELETE

Description:-

1. Display a list of all Blogs

2. Show form to make new blogs

3. Add new Blog to Database, then redirect

4. Show info about one blogs

5. show edit form of one blog

6. Update a particular blog, then redirect

7. Delete a particular blog , then redirect