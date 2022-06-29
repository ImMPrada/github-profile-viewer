const reduceObject = (state, payload = null) => ({
  'REINITIALICE': {
    ...state,
    profileToSearch: '',
  },
  'CLEAR_RESULT': {
    ...state,
    loading: false,
    error: false,
    profileToSearch: '',
  },
  'ROLLBACK_PROFILE_TO_SEARCH': {
    ...state,
    loading: false,
    error: false,
    profileToSearch: state.oldProfileToSearch,
  },
  'WRITE_PROFILE_TO_SEARCH': {
    ...state,
    profileToSearch: payload,
  },
  'SEARCHING': {
    ...state,
    loading: true,
  },
  'RESULT_IS_ERROR': {
    ...state,
    loading: false,
    error: true,
    profile: null,
    oldProfileToSearch: state.profileToSearch,
  },
  'RESULT_IS_PROFILE': {
    ...state,
    loading: false,
    error: false,
    profile: payload,
    oldProfileToSearch: state.profileToSearch,
  }
})


export const reducer = (state, action) => (reduceObject(state, action.payload)[action.type] || state);
