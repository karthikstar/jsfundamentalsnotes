// fetch api is the newer standard for dealing with requests, and we can do a lot of stuff sim to ajax and xmlreq

document.getElementById('button1').addEventListener('click',getText);

document.getElementById('button2').addEventListener('click',getJson);

document.getElementById('button3').addEventListener('click',getExternal);

// get local text file data
function getText(){
    fetch('text.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
        console.log(err);
    })
}

// when we get a response from a promise we need to use .then()

// get local json data
function getJson(){
    fetch('posts.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(post){
            output += `<li>${post.title}</li>`
        })

        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    })
}

// Get data from external API

function getExternal(){
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`
        })

        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    })
}