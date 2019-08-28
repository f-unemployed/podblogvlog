import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import HPGModal from './hpgModal'
import {getAllContentThunk} from '../store/content'
import ContentBlock from './hpgContentBox'

class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchContent()
  }

  render() {
    return (
      <div>
        <HPGModal />
        <div>
          {this.props.allContent.map(elem => {
            return <ContentBlock key={elem.id} content={elem} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allContent: state.content.all
})

const mapDispatchToProps = dispatch => ({
  fetchContent: () => dispatch(getAllContentThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
