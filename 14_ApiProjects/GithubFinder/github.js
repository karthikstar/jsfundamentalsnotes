class Github {
    constructor(){
        this.client_id = '1246ccdff2f14534c3b7';
        this.client_secret = 'af8b038ee14a2a6bf51dc0ba24a3790d87fe967c';
        this.repos_count = 5; // only want 5 repos of the user
        this.repos_sort = 'created: asc'; // 5 latest repos of the user

    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();


        return {
            profile,
            repos 
            // same as profile : profile, repos: repos
        }
    }
}
