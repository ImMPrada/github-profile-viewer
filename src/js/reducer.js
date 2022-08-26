const reduceObject = (state, payload = null) => ({
  'REINITIALICE': {
    ...state,
    profileToSearch: '',
  },
  'CLEAR_ERROR_RESULT': {
    ...state,
    loading: false,
    error: false,
    message: null,
  },
  'CLEAR_PROFILE_RESULT': {
    ...state,
    loading: false,
    profile: null,
    message: null,
    repos: [],
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
    firstRun: false,
    loading: true,
    repos: [],
  },
  'RESULT_IS_ERROR': {
    ...state,
    loading: false,
    error: true,
    profile: payload?.profile,
    repos: payload?.repos,
    message: payload?.message,
    oldProfileToSearch: state.profileToSearch,
  },
  'LOAD_RESULTS': {
    ...state,
    loading: false,
    error: false,
    profile: payload?.profile,
    repos: payload?.repos,
    message: payload?.message,
    oldProfileToSearch: state.profileToSearch,
  }
})


export const reducer = (state, action) => (reduceObject(state, action.payload)[action.type] || state);
