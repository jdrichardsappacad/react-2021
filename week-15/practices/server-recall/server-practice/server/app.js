const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));

app.disable('etag');

let posts = {
  1: {
    postId: 1,
    title: 'Hello World!',
    description: 'first post!'
  },
  2: {
    postId: 2,
    title: 'Hola!',
    description: 'second post!'
  }
};

app.get('/', (req, res) => {
  const data = { message: 'Base URL' };

  return res.json(data);
});

app.get('/posts', (req, res) => {
  const data = {
    posts
  };

  return res.json(data);
});

let nextPostId = 3;

app.post('/posts', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) throw new BodyError();

  const postId = nextPostId;
  nextPostId++;

  const newPost = {
    postId,
    title,
    description
  };

  posts[postId] = newPost;
  res.json(newPost);
  res.redirect('/posts/' + postId);
});

app.get('/posts/:postId', (req, res) => {
  const postId = req.params.postId;
  const post = posts[postId];

  if (!post) throw new NotFoundError('Post not found');

  const data = {
    post
  };

  res.json(data);
});

app.put('/posts/:postId/edit', (req, res) => {
  const postId = req.params.postId;
  const post = posts[postId];

  if (req.body.title) {
    post.title = req.body.title;
  }

  if (req.body.description) {
    post.description = req.body.description;
  }

  if (!post) throw new NotFoundError('Post not found');

  const data = {
    post
  };

  res.json(data);
});

app.delete('/posts/:postId/delete', (req, res) => {
  const postId = req.params.postId;
  const post = posts[postId];

  if (!post) throw new NotFoundError('Post not found');

  delete posts[postId];
  res.json({ message: 'success' });
  // res.redirect('/posts');
});

app.use(
  '/assets',
  express.static('assets', {
    etag: false,
    lastModified: false
  })
);

app.use((req, res) => {
  res.status(404);

  const data = {
    title: '404 - Page Not Found'
  };
  return res.json(data);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const data = {
    title: err.message
  };
  return res.json(data);
});

class NotFoundError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }

    if (!this.message) this.message = 'Not Found';
    this.name = 'NotFoundError';
    this.status = 404;
    this.statusCode = 404;
  }
}

class BodyError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BodyError);
    }

    if (!this.message) this.message = 'Something is wrong with the body';
    this.name = 'BodyError';
    this.status = 422;
    this.statusCode = 422;
  }
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server is listening on port', port));
