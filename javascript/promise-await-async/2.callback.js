/** to print the 2 posts we need to wait for createPost and then we need to execute getPost. here we can use callBack
 * 
 */

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


function createPost(post, callback){
    setTimeout(() => {
        posts.push(post)
        console.log('----1')
        callback()
    }, 2000);
}

createPost({type: 'post three', body: 'this is post three'}, getPost)


/** problem with callback is callback hell, consider u have more async function, ull have more nested function is execute with will end up in creating error pron, cant read the programs */



/* what is callback hell */
/**
 Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous 
 operations one after the other. By nesting callbacks in such a way, we easily end up with error-prone, hard to read, 
 and hard to maintain code.
 */
