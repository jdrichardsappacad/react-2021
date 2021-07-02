# Create React App Quiz

This quiz is to test you on how you make your own React app.

## The questions

<quiz>
  <question>
    <p>
      When I run this command line, I will create a React app called my_app.
      `npx create-react-app react-template --use-npm`
    </p>
    <answer> True </answer>
    <answer correct> False </answer>
    <explanation>
      In order to create your own project name, you will state the name after
      `npx create-react-app`. In this case, the React project we created is
      called "react-template".
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      What tool is used both to allow our React app the ability to read various
      file types as well as to bundle them into JavaScript files that are sent
      to the browser?
    </p>
    <answer> React </answer>
    <answer> Create React App </answer>
    <answer correct> Webpack </answer>
    <answer> DevTools </answer>
    <explanation>
      Create React App is our entire React application. Once it is created,
      there are built-in tools that would create JavaScript from JSX files. One
      of those tools is `Webpack`, which will read various types of files,
      including CSS, images, and JavaScript, and bundle them into one
      JavaScript file.
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      When you run, `npx create-react-app react-template --use-npm`, you will
      create a boilerplate application that's ready for you to customize
    </p>
    <answer correct> false </answer>
    <answer> true </answer>
    <explanation>
      False, once you run that command line, the Create React App Tool
      will generate a bunch of files and a README.md of instructions
      that explains what each file does.
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      Which is the correct command line command if you want to use App
      Academy's React template?
    </p>
    <answer> `npx create-react-app <<project-folder-name>> --use-npm` </answer>
    <answer> `npx create-app-academy-react-app <<project-folder-name>>
    --use-npm` </answer>
    <answer correct>`npx create-react-app <<project-folder-name>> --template
    @appacademy/react-v17 --use-npm`</answer>
    <answer>`npx create-react-app <<project-folder-name>> --template @appacademy
    --use-npm`</answer>
    <explanation>
      `npx create-react-app <<project-folder-name>> --template
      @appacademy/react-v17 --use-npm` is the correct format.
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      What is the purpose of index.css file?
    </p>
    <answer correct> To add site wide styles for your app.</answer>
    <answer> To style an individual component. </answer>
    <answer> Nothing, it's just something Create React App created.</answer>
    <answer >To be the only file where you can add your styles</answer>
    <explanation>
      While you can write all of your styles in `index.css`, its true purpose is
      to add styles that will be used site wide.
    </explanation>
  </question>
</quiz>
<quiz>
  <question>
    <p>
      What is my ES6 import and export for this code below going to look
      like in my Create React App?
      `const bubblebop = {greeting: "hi"}` Check all that will apply.
    </p>
    <answer correct> `export const bubblebop = {greeting: "hi"}`</answer>
    <answer> `module.exports = bubblebop` </answer>
    <answer> `const {bubblebop} = require('./...')` </answer>
    <answer> `const bubblebop = require('./...')` </answer>
    <answer> `module.exports = {bubblebop}` </answer>
    <answer correct> `export default bubblebop`</answer>
    <answer correct>`import {bubblebop} from './...'`</answer>
    <answer correct>`import bubblebop from './...'`</answer>
    <explanation>
      Because we will be working with the browser, we will need to use the ES6
      module import/export format to import and export our data.  For default
      export/import, it will look like `export default bubblebop` && `import
      bubblebop from './...'`. If it's not a default export, we will use this
      format - `export const bubblebop = {greeting: "hi"}` && `import
      {bubblebop} from './...'` .
    </explanation>
  </question>
</quiz>
