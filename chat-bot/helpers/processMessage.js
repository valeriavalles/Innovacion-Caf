const API_AI_TOKEN = '2de0eea74fc94fbba7a9ff0618ed1c68';
const apiAiClient = require('apiai')(API_AI_TOKEN);
const FACEBOOK_ACCESS_TOKEN = "EAADCN3AVTzoBANJiflx253A5mhALJDngbRKZBwX13ZC9tmTXXOkjnM2q4gvkiwztJqO9t565jBw4wQzMEODRlC9ZA31lsXirptZCzNuhoyWfLo2lOOIUML5KZAmZAHBlkewcZAzJygPI6UWaD17CkkZAtc9RyoUNsxBs5DtKn6jWTQZDZD";
const request = require('request');
const sendTextMessage = (senderId, text) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FACEBOOK_ACCESS_TOKEN },
        method: 'POST',
        json: {
            recipient: { id: senderId },
            message: { text },
        }
    });
};
module.exports = (event) => {
    const senderId = event.sender.id;
    const message = event.message.text;
    const apiaiSession = apiAiClient.textRequest(message, { sessionId: 'crowdbotics_bot' });
    apiaiSession.on('response', (response) => {
        var textResponse = response.result.fulfillment.speech;
        textResponse = textResponse.replace(/\\n/g, '\n');
        sendTextMessage(senderId, textResponse);
    });
    apiaiSession.on('error', error => console.log(error));
    apiaiSession.end();
};