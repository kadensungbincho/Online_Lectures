import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466'
})

// prisma.query.users(null, '{ id name posts { id title } }').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.query.comments(null, '{ id text author { id name }}').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2)) 
// })

// prisma.mutation.createPost({
//     data: {
//         title: "graphQL 101",
//         body: "You can find new courses here",
//         published: false,
//         author: {
//             connect: {
//                 id: "ckbolxgep00dh0741109x32cz"
//             }
//         }
//     }
// }, '{ id title body  published }').then((data) => {
//     console.log(data)
//     return prisma.query.users(null, '{ id name posts { id title }}')
// }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.mutation.updatePost({
//     where: {
//         id: "ckboo8u3k00l50741k4sia7e7"
//     },
//     data: {
//         body: "This is changed body",
//         published: true
//     }
// }, '{ id title body published }').then(() => {
//     return prisma.query.posts(null, '{ id title body }')
// }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// const createPostForUser = async (authorId, data) => {
//     const userExists = await prisma.exists.User({ id: authorId })

//     if (!userExists) {
//         throw new Error('User not found')
//     }

//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{ author { id name email posts { id title published } } }')

//     return post.author
// }

// createPostForUser("ckbolxgep00dh0741109x32cz", {
//     title: "Great books to read",
//     body: "The War of Art",
//     published: true
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//     console.log(error.message)
// })

// const updatePostForUser = async (postId, data) => {
//     const postExists = await prisma.exists.Post({ id: postId })

//     if (!postExists) {
//         throw new Error('Post not found')
//     }

//     const post = await prisma.mutation.updatePost({
//         where: {
//             id: postId
//         },
//         data
//     }, '{ author { id name email posts { id title published }} }')
    
//     return post.author
// }

// updatePostForUser("ckboo4xlc00kr0741n278wfmr", {
//     title: "This is changed by updatePostForUser",
//     body: "new body",
//     published: true
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//     console.log(error.message)
// })

// prisma.exists.Comment({
//     id: "abc123"
// }).then((exists) => {
//     console.log(exists)
// })