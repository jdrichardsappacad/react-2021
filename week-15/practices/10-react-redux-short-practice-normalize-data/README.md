# Normalizing Your State

So far in your article reducer you have used an `entries` array to store the
data. Normalizing the data in your reducer can load to better optimization.

In this practice, you will normalize your `articleReducer` and make adjustments
to your components. This will allow the search for your data in the
`SingleArticle` component to be 0(1) time.

## Setup

Clone the starter repo accessible from the `Download Project` button at the
bottom of this page.

1. Run `npm install` in the **backend** directory to install dependencies.
2. Run `npm run db:setup` to set up the database.
3. Run `npm start` to start the backend server.

In a different terminal, `cd` into the **frontend** directory of the starter.

1. Run `npm install` in the **frontend** directory.
2. Run `npm start` in the **frontend** directory to start the server.

## Normalize ADD_ARTICLES case

In your __src/store/articleReducer.js__ file, locate your `initialState`
variable. Change your `entries` key from an `array` to an `object`.

Based on what you have learned, adjust your `LOAD_ARTICLES` case in your
`articleReducer` function. Your `entries` object should store each article with
a key of the article `id` and a value of the article itself.

## Adjust the ArticleList Component's useSelector function

The data type for the `entries` in your `articleReducer` has changed. In your
`ArticleList` component, adjust your `useSelector` so that you are able to map
through the data in your JSX.


## Normalize ADD_ARTICLE case

In your __src/store/articleReducer.js__ file, in your `articleReducer` function,
adjust the code, so that you store the new article in the `entries` array with a
key of the article id and value of the article. Be careful you don't mutate
nested objects.

## SingleArticle O(1)

In the `SingleArticle` component, you are now able to find your article without
using the `.find` function. Change the `singleArticle` variable so that you
directly reference the article you want to use.

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Normalize data in your reducer for more optimal performance.
2. Choose data using O(1) time complexity.