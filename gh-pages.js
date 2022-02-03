var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/dukesteen/woordle-solver.git', // Update to point to your repository  
        user: {
            name: 'Duke', // update to use your name
            email: 'signaturesenpai@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)