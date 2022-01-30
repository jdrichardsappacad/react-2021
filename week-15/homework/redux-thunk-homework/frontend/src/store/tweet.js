// constant to avoid debugging typos
const GET_ALL_TWEETS = '/tweet/getAllTweets';

//regular action creator
const loadTweets = (tweets) => {
  return {
    type: GET_ALL_TWEETS,
    tweets
  };
};

// thunk action creator
export const getAllTweets = () => async (dispatch) => {
  const response = await fetch('/api/tweets');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadTweets(data));
    return data;
  }
};

//!!START_SILENT
export const createTweet = (message) => async (dispatch) => {
  const response = await fetch(`/api/tweets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
  });

  if (response.ok) {
    const tweet = await response.json();
    dispatch(addTweet(tweet));
    return tweet;
  }
};

//!!END

// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TWEETS: {
      const newState = {};
      action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
      return newState;
    }
    //!!START_SILENT
    case ADD_TWEET: {
      const newState = { ...state };
      newState[action.tweet.id] = action.tweet;
      return newState;
    }
    //!!END
    default:
      return state;
  }
};

export default tweetsReducer;
