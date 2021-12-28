const posts = [
    {type: 'post One', body: 'this is post one'},
    {type: 'post Two', body: 'this is post Two'},
]


function getPost() {
    setTimeout(() => {
        let output = ''
        posts.forEach(post => {
            output += `<li>${post.type} - ${post.body}</li>`
        })
        console.log('----2')
        document.body.innerHTML = output
        
    }, 1000)
}


function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            console.log('----1')
            let error = false
            if(!error) resolve()
            else reject('error: something went wrong')
        }, 2000);
    })
}


/** async and await is clear way of using the promises */
async function init(){
    let result = await createPost({type: 'post three', body: 'this is post three'})
    getPost()
}

// init()

/** fetch method using async and await */


async function init2(){
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = await res.json()
    console.log('users', users)
}

init2()