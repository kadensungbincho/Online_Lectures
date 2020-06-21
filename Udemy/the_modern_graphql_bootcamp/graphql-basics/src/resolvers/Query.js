const Query = {
    users(parent, args, { db }, info) {
        if (!args.query) {
            return db.users
        }

        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    posts(parent, args, { db }, info) {
        if (!args.query) {
            return db.posts
        }

        return db.posts.filter((post) => {
            const loweredQuery = args.query.toLowerCase()
            return post.title.toLowerCase().includes(loweredQuery) || post.body.toLowerCase().includes(loweredQuery)
        })
    },
    comments(parent, args, { db }, info) {
        return db.comments
    },
    me() {
        return {
            id: '1230',
            name: 'Kaden',
            email: 'sample@sample.com',
            age: 28
        }
    },
    post() {
        return {
            id: '12111',
            title: 'The Name',
            body: 'This is the most exotic...',
            published: true
        }
    }
}

export { Query as default }