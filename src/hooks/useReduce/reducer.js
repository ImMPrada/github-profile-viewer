export const actionTypes = {
  writeProfileToSearch: 'WRITE_PROFILE_TO_SEARCH',
  searching: 'SEARCHING',
  resultError: 'RESULT_IS_ERROR',
  successResult: 'RESULT_IS_PROFILE',
}

const reduceObject = (state) => {

}

export const reducer = (state, action) => (reduceObject(state)[action.type] || state);
