exports.handler = async (event) => {
    let Wunderlist = require('wunderlist-api');
    const wunderlist = new Wunderlist({
        clientId: process.env.WUNDERLIST_CLIENT_KEY,
        accessToken: process.env.WUNDERLIST_ACCESS_TOKEN
    });
    wunderlist.getLists()
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        });
};