import axios from 'axios'
import db from '../../db'

const GET_ALL_CONTENT = 'GET_ALL_CONTENT'

export const getAllContent = content => ({
  type: GET_ALL_CONTENT,
  content
})

export const getArticlesThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/campus')
    const action = getAllCampuses(res.data)
    dispatch(action)
  } catch (error) {
    console.log('Error getting articles in thunk', error)
  }
}
