import { GET_POSTS } from '../actions/authActions';

export default function (state = [], action) {
  switch (action.type) {
    case GET_POSTS:
        return action.payload.data;
  }
  return state;
}
