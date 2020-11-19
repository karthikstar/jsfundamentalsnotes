class Github {
    constructor(){
        this.client_id = '1246ccdff2f14534c3b7';
        this.client_secret = 'af8b038ee14a2a6bf51dc0ba24a3790d87fe967c';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile 
            // same as profile : profile
        }
    }
}
