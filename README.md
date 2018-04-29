# Wunderlist Alexa Skill
This project implements third-party Alexa Skills Kit integration for [Wunderlist](https://developer.wunderlist.com/).

## Use Case
I use a shared-list application called Wunderlist with my girlfriend for groceries that we need to buy, movies that we'd like to watch, new restaurants to try, etc. Often while cooking at my apartment we want to jot down things that we're out of or items for new recipes. We use Alexa in the kitchen a great deal for features like her built-in timer. Since we don't always have our phones handy, I wanted to integrate Wunderlist for our grocery list.

## Solution Structure
This project extends the Amazon standard structure for organizing a custom skill. There are two main parts: the AWS Lambda function and the Alexa Skills Kit interaction model.

Lambda is Amazon's serverless compute offering. I use this due to the cost savings of not hosting a dedicated web server. The environment I have configured uses the Node.js 8.10 runtime. It's worth noting that because my code uses ES6 syntax, it may not work with older versions of Node.js.

The interaction model doesn't need to be manually coded as it can be created through the Alexa Skills console's GUI. I have included my configuration for reference.

### /build
Admittedly, I have been using the quick and dirty way of deploying my AWS Lambda function. You can either upload your zipped build artifact through the browser interface or use Amazon's CLI. I use this for development on my machine running macOS High Sierra.

### /lambda
This directory contains all of my serverless functions log and dependency information. Note that this function uses ES6 syntax and `async/await`. There are three environment variables that need to be set: `process.env.WUNDERLIST_CLIENT_KEY` and `process.env.WUNDERLIST_ACCESS_TOKEN`, which are your Wunderlist API credentials and `process.env.WUNDERLIST_GROCERY_LIST_ID`, which is the Wunderlist ID of the list you want your skill to add the item to.

### /models
This directory contains the Alexa Skills Kit interaction model. As stated above, you can build your own via the Alexa Skills console's interface. I have included mine in the project as an artifact for reference.

### /test
This directory contains my test event that I used for validing my AWS Lambda function. For testing your skill end-to-end, you can test the skill via the Alexa Skills console.
