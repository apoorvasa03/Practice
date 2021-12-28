/** javasript works synchronously which mean each line will wait for before line is execute 
 * only after completing 2 for loop which loop, console.log will be executed
 * if we write the code which takes long time is complete, then we are blocking the time, which effects the user experience 
 * 
*/

for(let i =1; i < 100; i++){
    for(let j =1; j < 100; j++){
        console.log(`${i} - ${j}`)
    }
}

console.log('----->', 3)


/**
 * setTimeout is asynch function. meaning it will not block the code.
 * but createPost is called first however its takes long time than getPost, so 2 li is painted in DOM
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
        console.log('----->', 1)
        document.body.innerHTML = output
    }, 1000)
}


function createPost(post){
    setTimeout(() => {
        posts.push(post)
        console.log('----->', 2)
    }, 2000);
}

createPost({type: 'post three', body: 'this is post three'})
getPost()
console.log('----->', 3)