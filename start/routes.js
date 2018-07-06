'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

// Route.on('/').render('welcome')
// Route.on('/').render('home')

// Route.get('/test1', _ => 'hello test1')
// Route.get('/test2/:id', ({ params }) => `hello test2 params - ${params.id}`)

Route.get('/', 'PostController.home')

Route.get('/posts', 'PostController.index')
Route.get('/posts/details/:id', 'PostController.details')
Route.get('/posts/add', 'PostController.add')
Route.post('/posts', 'PostController.store')

Route.get('/message', 'ApiController.index')
Route.get('/api/posts', 'ApiController.getAllPosts')
Route.get('/api/post/:id', 'ApiController.getPost')
Route.post('/api/post', 'ApiController.addPost')
Route.delete('/api/post/:id', 'ApiController.deletePost')
