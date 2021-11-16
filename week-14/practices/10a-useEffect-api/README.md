# useEffect with 3rd party api

Using a 3rd party api requires documentation research, understanding endpoints,
data parsing and application. It is an important skill to be able to parse and
display data in a visually pleasing and/or readable format.

In this short practice you will use `useEffect` to make an `api` call using the
[fortnite api][fortnite], and display the information that you retrieve.

## Setup

- Run `npm install` to install dependencies
- Run `npm start` to start the server
- Navigate to `http://localhost:3000` in your browser.
  You should see an `h1` tag saying `No Data To Display`

Before moving forward, take a look at the [fortnite][fortnite] documentation. If
you navigate to the [Endpoints][endpoints] section, you will find and use the
`https://fortnite-api.com/v2/news` endpoint. Read the documentation to
understand what the outcome of this endpoint should be.

## Test the Endpoint

In your browser, take the endpoint and place it in the url. Notice the `json`
data that you receive. This is the data that you must parse to design your
component. (If your data is jumbled, you can add an extension such as [`JSON
Formatter`][formatter] to prettify your data.)

## Retrieve Data

You will work in the `ServerData.js` file. Your goal is to retrieve the
data from the api and test the data. Create a `useEffect` that will only be run
one time. Create an asynchronous function called `fetchFortnite` that uses the
browser's `fetch` api to fetch the `https://fortnite-api.com/v2/news` endpoint.
After retrieving the data, log the data in the console to see what you received.
Invoke the `fetchFortnite` function inside the `useEffect` below the definition.

Open your browser console and take a look at the object you received.

If you are successful your code looks similar to the code below:

```js
useEffect(() => {
  const fetchFortnite = async () => {
    const data = await fetch('https://fortnite-api.com/v2/news');
    const response = await data.json();
    console.log(response);
  };
  fetchFortnite();
}, []);
```

## Parse the data

The data you want to use in your application is located in an array of objects.
Each object in this array contains these fields:

- id
- title
- body
- hidden
- image
- sortingPriority
- tabTitle
- titleImage
- title

Can you find it? Can you now log the data so that you only see the array with
these objects? If so, then update the `serverData` slice of state with this
array.

## Display the data

Comment out the `h1` tag that says `No Data to Display`.

Create another `return` below the commented code.

For each object in the array, create a `div` with a class of `serverContainer`.
Use an `h1` tag to display the `title`, an `h2` tag to display the `body` and an
`img` tag to display the image using the parsed `image` field as the `src` and
the `title` as the `alt` value.
Don't forget to add a key for each object listed using the `id`.

It takes time to retrieve data that you are receiving from a 3rd party api.
Above the `return` you've already created, add a conditional where, if the
`serverData` slice of state is empty, the user only sees an `h1` tag that says:
`No Data To Display`. Notice that you will catch a quick glimpse of this message
when reloading the app.

If you were successful in your attempts, the rest
of your code may look like the code below:

```js
useEffect(() => {
  const fetchFortnite = async () => {
    const data = await fetch('https://fortnite-api.com/v2/news');
    const response = await data.json();
    const parsedData = response.data.br.motds;
    setServerData(parsedData);
  };
  fetchFortnite();
}, []);

if (!serverData) return <h1>No Data To Display</h1>;

return (
  <div>
    {serverData.map(data => (
      <div className='serverContainer' key={data.id}>
        <h1 className='title'>{data.title}</h1>
        <h2 className='body'>{data.body}</h2>
        <img className='img' src={data.image} alt={data.title} />
      </div>
    ))}
  </div>
);
```

[fortnite]: https://fortnite-api.com
[endpoints]: https://dash.fortnite-api.com/endpoints/news
[formatter]: https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en
