// Init gihub
const github = new Github;

// Init UI 
const ui = new UI
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
                    ui.showAlert('User not found','alert alert-danger');


                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear the profile from UI
        ui.clearProfile();

    }
})