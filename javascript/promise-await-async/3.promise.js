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


createPost({type: 'post three', body: 'this is post three'})
.then(getPost)
.catch(err => console.log(err))



/** promise.all function wil help is parallely fun all promise functions and result the result in array format. 
 * if one of the promise get rejected, then promise all is reject the entire call. 
 * conside promise1 and 2 is resolved and promise4 is rejected, the promise.all return the reject value. it wil not care or wait for promise1 and 2
 */
let promise1 = Promise.resolve('Hello World')
let promise2 = 10
let promise3 = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
let promise4 = new Promise((resolve, reject) => setTimeout(resolve('good bye!!!'), 2));
// let promise4 = new Promise((resolve, reject) => setTimeout(reject('err: something went wrong')));


Promise.all([promise1, promise2, promise3, promise4]).then(res => console.log(res)).catch(err => console.log(err))