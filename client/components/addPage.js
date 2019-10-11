import React from 'react'
import {connect} from 'react-redux'
import {addContentThunk} from '../store/content'

class AddPage extends React.Component {
  constructor() {
    super()
    this.state = {
      category: '',
      name: '',
      description: '',
      URL: '',
      image: ''
    }
  }
  render() {
    return (
      <div>
        <form>
          <label>Content Category</label>
          <input
            type="text"
            name="category"
            value={this.state.category}
            onChange={evt => this.setState({category: evt.target.value})}
          />
          <label>Content Name</label>
          <input
            type="text"
            name="category"
            value={this.state.name}
            onChange={evt => this.setState({name: evt.target.value})}
          />
          <label>Content Description</label>
          <input
            type="text"
            name="category"
            value={this.state.description}
            onChange={evt => this.setState({description: evt.target.value})}
          />
          <label>Content URL</label>
          <input
            type="text"
            name="category"
            value={this.state.URL}
            onChange={evt => this.setState({URL: evt.target.value})}
          />
          <label>Content Image</label>
          <input
            type="text"
            name="category"
            value={this.state.image}
            onChange={evt => this.setState({image: evt.target.value})}
          />
          <button
            type="button"
            onClick={() => {
              this.props.addContent(this.state)
              this.setState({
                category: '',
                name: '',
                description: '',
                URL: '',
                image: ''
              })
            }}
          >
            Add Content
          </button>/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addContent: info => dispatch(addContentThunk(info))
})

export default connect(null, mapDispatchToProps)(AddPage)
