# (Recall) Finding Information Based on Parameters

In this short practice, you will apply the knowledge you have in order to
complete the `SingleArticle` component.


## Set up

Make sure you are logged in to your [codesandbox.io][code-sandbox] account.

Navigate to the [starter][starter] repo for this short practice.

### 2 Options:

#### Option 1: (this simplest option)

- In the url of the starter repo, append `box` to the word `github` and hit
  `Enter` or `return` depending on your computer. You should be taken to
  [codesandbox.io][code-sandbox] and the app should be loaded for you.
- Example: If the repo was
  `https://github.com/reduxjs/redux/tree/master/examples/todomvc` it would
  become `https://githubbox.com/reduxjs/redux/tree/master/examples/todomvc`

#### Option 2:

- Navigate to codesandbox.io and sign in. Click `Create Sandbox` then choose
 `Import Project` from the sidebar. Paste the link to the starter repo and
 click `Import and Fork`.

## Pass State to Component

You have two options for passing the `state` into the `SingleArticle` component.
Either pass the articles from the `ArticleList` component to the `SingleArticle`
component, or use the `useSelector` to load the articles from the Reducer. 

Using the parameter given in the `url`, choose the correct article from the
`articles` array, and display the information for that article inside the `JSX`


Congratulations! You have re-used the knowledge that you have for displaying
information based on a parameter.   


[starter]:https://github.com/orgs/appacademy-starters/repositories?type=all
