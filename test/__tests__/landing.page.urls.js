const axios = require('axios');

test('should have working course url', ()=>{
    const response1 = getUrl();
    console.log(response1)
    // const response = axios.get('https://courses.ultimateqa.com/enroll/808620?et=free_trial')
    //     .then(response => { expect(response.status).toBe(500)});
});

async function getUrl() {
    try {
        const response = await axios.get('https://courses.ultimateqa.com/enroll/808620?et=free_trial');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}


