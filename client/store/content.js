import axios from 'axios'

const defaultContent = {
  all: [],
  clickedContent: {},
  loading: true
}

const GET_ALL_CONTENT = 'GET_ALL_CONTENT'
const GET_SINGLE_CONTENT = 'GET_SINGLE_CONTENT'

export const getAllContent = content => ({
  type: GET_ALL_CONTENT,
  content
})

export const getSingleContent = singleContent => ({
  type: GET_SINGLE_CONTENT,
  singleContent
})

export const getAllContentThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/content')
    const action = getAllContent(res.data)
    dispatch(action)
  } catch (error) {
    console.log('Error getting content in thunk', error)
  }
}

export const getSingleContentThunk = id => async dispatch => {
  try {
    const res = await axios.get(`/api/content/${id}`)
    const action = getSingleContent(res.data)
    dispatch(action)
  } catch (error) {
    console.log('Error getting content in thunk', error)
  }
}

export default function(state = defaultContent, action) {
  switch (action.type) {
    case GET_ALL_CONTENT:
      return {...state, all: action.content}
    case GET_SINGLE_CONTENT:
      return {...state, clickedContent: action.singleContent}
    default:
      return state
  }
}
