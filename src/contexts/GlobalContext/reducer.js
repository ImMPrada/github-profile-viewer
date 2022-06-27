const reduceObject = (state, payload = null) => ({
  'REINITIALICE': {
    ...state,
    profileToSearch: '',
  },
  'CLEAR_RESULT': {
    ...state,
    loading: false,
    error: false,
    profile: null,
    profileToSearch: '',
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
  },
  'RESULT_IS_PROFILE': {
    ...state,
    loading: false,
    error: false,
    profile: payload,
  }
})


export const reducer = (state, action) => (reduceObject(state, action.payload)[action.type] || state);
