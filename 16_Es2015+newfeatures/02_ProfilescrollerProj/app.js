const data = [
    {
        name: 'John Doe',
        age: 32,
        gender:'male',
        lookingfor: 'female',
        location:'Boston MA',
        image:'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jane Doe',
        age: 25,
        gender:'female',
        lookingfor: 'male',
        location:'Miami FL',
        image:'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 37,
        gender:'male',
        lookingfor: 'female',
        location:'Lynn MA',
        image:'https://randomuser.me/api/portraits/men/83.jpg'
    }
]; 

// Creating iterator function
const profiles = profileIterator(data);

// Next Even 
document.getElementById('next').addEventListener('click',nextProfile);

// Call first profile - so that when we come to the site theres one person's profile already

nextProfile(); // gives value of profiles[0] initally. hence whenever page reloads after no profiles found, this first profile will alw be displayed.

// Next Profile Display
function nextProfile(){
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name:${currentProfile.name} </li>
            <li class="list-group-item">Age:${currentProfile.age} </li>
            <li class="list-group-item">Location:${currentProfile.location} </li>
            <li class="list-group-item">Preference:${currentProfile.gender} looking for ${currentProfile.lookingfor} </li>
        </ul>
        `;
    
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;        
    } else {
        // No more profiles found
        window.location.reload();
    }

}

// Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? 
            {value : profiles[nextIndex++], done: false} :
            {done: true} 
        }

    };
}