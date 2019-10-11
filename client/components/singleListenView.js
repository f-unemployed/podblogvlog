import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getSingleContentThunk} from '../store/content'

class SingleListenView extends React.Component {
  componentDidMount() {
    const listenId = Number(this.props.match.params.id)
    this.props.getSingle(listenId)
  }
  render() {
    const {category, name, description, URL, image} = this.props.singleListen

    return (
      <div>
        <div>{name}</div>
        <div>{description}</div>
        <img src={image} height="42" width="42" />

        <audio ref="audio_tag" src={URL} controls />
      </div>
    )
  }
}
const mapState = state => ({
  singleListen: state.content.clickedContent
})

const mapDispatch = dispatch => ({
  getSingle: id => dispatch(getSingleContentThunk(id))
})

export default connect(mapState, mapDispatch)(SingleListenView)
