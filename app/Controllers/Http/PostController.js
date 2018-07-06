'use strict'
const Post = use('App/Models/Post')
const Image = use('App/Models/Image')
class PostController {

    async home({ view }) {
        const images = await Image.all()
        return view.render('home', {
            images: images.toJSON()
        })
    }

    async swiper({ view }) {
        const images = await Image.all()
        return view.render('swiper', {
            images: images.toJSON()
        })
    }



    async index({ view }) {
        // const posts = [
        //     {title:"post1",body:"this is post1 body"},
        //     {title:"post2",body:"this is post2 body"},
        //     {title:"post3",body:"this is post3 body"}
        // ]
        const posts = await Post.all()
        return view.render('posts.index', {
            title: "post controller",
            posts: posts.toJSON().reverse()
        })
    }

    async details({ params, view }) {
        const post = await Post.find(params.id)
        return view.render('posts.details', {
            post: post
        })
    }

    async add({ view }) {
        return view.render('posts.add')
    }

    async store({ request, response, session }) {
        const post = new Post();

        post.title = request.input('title')
        post.body = request.input('body')
        await post.save()
        session.flash({ notification : "Post added"})
        return response.redirect('/posts')

    }
}

module.exports = PostController
