'use strict'
const Post = use('App/Models/Post')

class ApiController {

    async index({view}) {

        return view.render('message')

    }

    async getAllPosts({response}) {
        const posts = await Post.all()
        response.status(200).json({
            msg: "all posts",
            data: posts
        })

    }

    async getPost({response, request, params: {id}}) {
        const post = await Post.find(id)
        if (post) {
            response.status(201).json({
                msg: `post #${post.id}`,
                data: post
            })
        } else {
            response.status(404).json({
                msg: "post not found"

            })
        }


    }

    async addPost({response, request}) {
        const {title, body} = request.post();
        const post = await Post.create({title, body});
        response.status(200).json({
            msg: "post create",
            data: post
        })

    }

    async deletePost({response, request, params: {id}}) {

        const post = await Post.find(id);

        if (post) {
            await post.delete();
            response.status(201).json({
                msg: `post #${post.id} deleted`,
                id
            })
        } else {
            response.status(404).json({
                msg: "post not found",
                id

            })
        }

    }

}

module.exports = ApiController
