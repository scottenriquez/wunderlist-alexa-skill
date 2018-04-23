exports.handler = async (event) => {
    let Wunderlist = require('wunderlist-api');
    const wunderlist = new Wunderlist({
        clientId: process.env.WUNDERLIST_CLIENT_KEY,
        accessToken: process.env.WUNDERLIST_ACCESS_TOKEN
    });
    return wunderlist.createTask(Number.parseInt(process.env.WUNDERLIST_GROCERY_LIST_ID), 
        event.request.intent.slots.item.value, false, false).then((response) => {
            return {
                response: {
                    outputSpeech: {
                        type: 'PlainText',
                        text: 'Added item to your Wunderlist app'
                    }
                }
            };
        });
};