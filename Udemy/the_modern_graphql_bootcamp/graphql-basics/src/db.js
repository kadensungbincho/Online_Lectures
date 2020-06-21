const users = [{
    id: '1',
    name: 'Kaden',
    email: 'kaden@example.com',
    age: 31
}, {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com'
}, {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
}]

const posts = [{
    id: '1',
    title: 'The Art of Secret',
    body: 'This is the most ...',
    published: true,
    author: '1'
}, {
    id: '2',
    title: 'The fake of symbolism',
    body: 'Fake of symbolism ...',
    published: true,
    author: '2'
}, {
    id: '3',
    title: 'Name Space Secret',
    body: 'Namespace is the basics of the file system ...',
    published: false,
    author: '2'
}]

const comments = [{
    id: '1',
    text: 'This is awesome!',
    author: '1',
    post: '1'
}, {
    id: '2',
    text: 'Amazing',
    author: '2',
    post: '2'
}, {
    id: '3',
    text: 'Hope to check it soon',
    author: '1',
    post: '3'
}, {
    id: '4',
    text: 'Wrapup!',
    author: '3',
    post: '3'
}]

let db = {
    users,
    posts,
    comments
}

export { db as default }