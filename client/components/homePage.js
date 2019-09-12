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
      <div id="hpgBody">
        <h1 id="logo">f(unemployed)</h1>
        <HPGModal />
        <div id="hpgContent">
          {this.props.allContent.map(elem => {
            return (
              <ContentBlock
                class="hpgContentElem"
                key={elem.id}
                content={elem}
              />
            )
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
