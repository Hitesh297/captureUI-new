import axios from 'axios';


export const AUTHORIZATION = 'AUTHORIZATION';
export const GET_POSTS = 'GET_POSTS';
export function login(data) {
  const request = axios.post('http://localhost/SurveyAPI/api/v1/Authorize',data)
    return{
    type : AUTHORIZATION,
    payload : request
  };
    }


    export function getPosts(data) {
  const request = axios.get('http://localhost/SurveyAPI/api/v1/posts?userId=1123')
    return{
    type : GET_POSTS,
    payload : request
  };
    }