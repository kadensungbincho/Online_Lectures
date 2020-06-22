const Query = {
    users(parent, args, { prisma }, info) {
        const opArgs = {}

        if (args.query) {
            opArgs.where = {
                OR: [{
                    name_contains: args.query
                }, {
                    email_contains: args.query
                }]
            }
        }

        return prisma.query.users(opArgs, info)
    },
    posts(parent, args, { prisma }, info) {
        const opArgs = {}

        if (args.query) {
            opArgs.where = {
                OR: [{
                    title_contains: args.query
                }, {
                    body_contains: args.query
                }]
            }
        }

        return prisma.query.posts(opArgs, info)
    },
    comments(parent, args, { prisma }, info) {
        return prisma.query.comments(null, info)
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