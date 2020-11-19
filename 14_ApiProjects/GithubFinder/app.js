// Init gihub
const github = new Github;

// Search input 

const searchUser = document.getElementById('searchUser');


// Search input event listener
searchUser.addEventListener('keyup',(e) => {
    // get input text
    const userText = e.target.value;

    if(userText !== ''){
        // make a http call to github 
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === "Not Found"){
                    // show alert


                } else {
                    // show profile
                    console.log(data);

                }
            })
    } else {
        // Clear the profile from UI
        
    }
})