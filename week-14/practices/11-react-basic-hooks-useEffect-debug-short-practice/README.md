# useEffect Debug

In this exercise you will use the [randomuser.me api][randomuser-api].

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
- If you end up somewhere that doesn't look right, check to make sure everything
is spelled correctly (**githubbox** and not githubox)

### Option 2

- Navigate to [codesandbox.io] and sign in. Click `Create Sandbox`, then choose
 `Import Project` from the sidebar. Paste the link to the starter repo and
 click `Import and Fork`.

## Instructions

The app should start out with a welcome page and a Login button.

When you click the button you should see a random user on the left with
information and a logout button beneath the image. On the right there should be
a search box where, if you input a different name for the user, you see a new
user on the left. The names will not coordinate with each other. However, if you
put in the same name again the picture will not change and if you repeat a name
it will show the person that was originally coordinated with the name.

When you log out, you should be directed back to the
welcome page.

If you refresh the page or if you logout and login you should see the last user
that was showing.

There are 7 errors to correct. Errors are not just
when the app runs but also warnings in the console.

You will encounter an error as soon as you load the repo with code sandbox. Read
the error output and adjust the code to solve the issue. 
 - HINT: fetch functions are always asynchronous and will need to be treated as 
 such. 

After encountering the next issue, look through the component to understand why
that specific message was given.

You'll next get an error that might feel a bit confusing at first. Look at the
code and think about what that line is trying to do. 
 - HINT: useState is looking to take an argument that will be the initial value
 for our slice of state.

You should be able to log in and click the submit button. However, nothing
happens on submit. Take a look at the `Problems` tab next to the `Console` and
see if you can fix the two issues it's reporting on.
- HINT: think about the purpose of the dependency array in a useEffect

With those five issues down there shouldn only be two left. See if you can
identify and resolve the last two without any additional guidance. Be sure to 
keep an eye on the `Problems` and `Console` for clues.

Good luck!

[randomuser-api]: https://randomuser.me/
[code-sandbox]:http://www.codesandbox.io