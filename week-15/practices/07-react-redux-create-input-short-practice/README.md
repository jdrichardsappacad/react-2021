# React-Redux Create an Article

In this short practice, you will create an article using steps you've learned from previous short practices.

## Set up

Make sure you are logged in to your [codesandbox.io] account.

Navigate to the starter repo for this short practice by clicking the `Download
Project` button at the bottom of the page. Use one of the following options to
load the practice into codesandbox.

### Option 1 (the simplest option)

- In the url of the starter repo, append `box` to the word `github` and hit
  `Enter` or `return` depending on your computer. You should be taken to
  [codesandbox.io] and the app should be loaded for you.
- Example: If the repo was
  `https://github.com/reduxjs/redux/tree/master/examples/todomvc`, it would
  become `https://githubbox.com/reduxjs/redux/tree/master/examples/todomvc`

### Option 2

- Navigate to [codesandbox.io] and sign in. Click `Create Sandbox`, then choose
 `Import Project` from the sidebar. Paste the link to the starter repo and
 click `Import and Fork`.


## Article Reducer Steps
In the `articleReducer.js` file:
- create a constant called `ADD_ARTICLE` with a string value of
  `article/addArticle`
- use thet constant in an action creator called `addArticle` which returns an
  object with a type of the constand and a payload of `article`. This action
  creator will also take a parameter of `article` to accept the new incoming
  article
- add the `ADD_ARTICLE` case to the reducer. 
- Update the state by adding the `article` payload to the `entries` array.
  Remember not to mutate state. Instead, update state by creating a new
  reference in memory for all objects, including nested objects.

## ArticleInput Component Steps
- Create the new article to submit to the store
- Dispatch that object using the `action creator` you created.


[code-sandbox]:http://www.codesandbox.io