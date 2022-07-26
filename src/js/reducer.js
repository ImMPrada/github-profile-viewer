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
    repos: null,
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
    languages: [],
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
    error: false,
    profile: payload,
    oldProfileToSearch: state.profileToSearch,
  },
  'RESULT_OF_REPOS': {
    ...state,
    loading: false,
    error: false,
    repos: payload,
  },
  'ADD_REPO': {
    ...state,
    loading: false,
    error: false,
    repos: state.repos.push(payload),
  },
  'ADD_LANGUAGE': {
    ...state,
    languages: [...state.languages, payload],
  },
  'REPOS_ERROR': {
    ...state,
    loading: false,
    error: false,
    repos: null,
  },
})


export const reducer = (state, action) => (reduceObject(state, action.payload)[action.type] || state);
