fetch('/api/posts')
    .then(res => res.json())
    .then(res => console.log(res))
fetch('/api/post/4')
    .then(res => res.json())
    .then(res => console.log(res))