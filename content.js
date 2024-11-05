// content.js

/**
 * TwitterDeAddictMe
 * Created by Chandravijay Agrawal (x.com/@MeHonestPerson)
 */

function replaceTweetsWithCustomText() {
    console.log("Replacing tweets with deAddict text...");

    // Select all tweet elements
    const tweetElements = document.querySelectorAll('[data-testid="tweetText"]');

    // Replace the text content with deAddict text
    tweetElements.forEach(tweet => {
      tweet.textContent = `Don't waste time on twitter
Go back and work or whatever is important

What are you waiting for, just go away :(`;
    });

    console.log("Tweets replaced.");
}

// Run the function to replace tweets
replaceTweetsWithCustomText();

// Observe the DOM for changes and re-apply the replacement
const observer = new MutationObserver(replaceTweetsWithCustomText);
observer.observe(document.body, { childList: true, subtree: true });

console.log("MutationObserver started.");// content.js

/**
 * TwitterDeAddictMe
 * Created by Chandravijay Agrawal (x.com/@MeHonestPerson)
 */

function replaceTweetsWithCustomText() {
    console.log("Replacing tweets with deAddict text...");

    // Select all tweet elements
    const tweetElements = document.querySelectorAll('[data-testid="tweetText"]');

    // Replace the text content with deAddict text
    tweetElements.forEach(tweet => {
      tweet.textContent = `Don't waste time on twitter
Go back and work or whatever is important

What are you waiting for, just go away :(`;
    });

    console.log("Tweets replaced.");
}

// Run the function to replace tweets
replaceTweetsWithCustomText();

// Observe the DOM for changes and re-apply the replacement
const observer = new MutationObserver(replaceTweetsWithCustomText);
observer.observe(document.body, { childList: true, subtree: true });

console.log("MutationObserver started.");