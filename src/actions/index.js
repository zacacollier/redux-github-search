export const REQUEST_GH_USER = 'REQUEST_GH_USER';

export const requestGitHubUser = (term = null) => {
  console.log(term);
  return {
    type: REQUEST_GH_USER,
    term
  }
}
