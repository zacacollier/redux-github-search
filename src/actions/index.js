import request from 'superagent';

export const REQUEST_GH_USER = 'REQUEST_GH_USER';
// 52c32467d4c46675b4a32520bde09a27d485584d
const API_URL = 'https://api.github.com/search/users?q=';

export const requestGitHubUser = (term = null) => {
  const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}`)
  return {
    type: REQUEST_GH_USER,
    payload: data
  }
}
