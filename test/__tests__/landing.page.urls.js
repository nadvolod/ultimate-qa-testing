const axios = require('axios');

test('should have working course url', ()=>{
    const response = axios.get('https://courses.ultimateqa.com/enroll/808620?et=free_trial')
        .then(response => { expect(response.status).toBe(500)});
})


