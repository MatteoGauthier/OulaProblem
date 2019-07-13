# OulaProblem
This repository contain some http error page sample, they work with Apache server for the moment (more hosting software soon)

## For Apache with restricted Plesk Panel
Copy the `src` directory then create a `error_docs` directory at the root of your Apache server with the content of your clipboard
```
├─ error_docs
│    error.html
│    logic.js
│    master.min.css
│    master.min.css.map
│    master.scss
│    test-zdog.png
│    test-zdog2.png
```

In your `.htdocs`
```apache
ErrorDocument 400 /error_docs/error.html
ErrorDocument 401 /error_docs/error.html
ErrorDocument 403 /error_docs/error.html
ErrorDocument 404 /error_docs/error.html
ErrorDocument 500 /error_docs/error.html
ErrorDocument 501 /error_docs/error.html
ErrorDocument 502 /error_docs/error.html
ErrorDocument 503 /error_docs/error.html
# ErrorDocument 520 /error_docs/error.html
# ErrorDocument 521 /error_docs/error.html
ErrorDocument 200 /error_docs/error.html
```
