const reduceObject = (state, payload = null) => ({
  'REINITIALICE': {
    ...state,
    profileToSearch: '',
  },
  'CLEAR_ERROR_RESULT': {
    ...state,
    loading: false,
    error: false,
  },
  'CLEAR_PROFILE_RESULT': {
    ...state,
    loading: false,
    profile: null,
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
