import React from 'react'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

class SignUp extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    axios({
      method: 'POST',
      url: 'api/contact/send',
      data: {
        name,
        email,
        message
      }
    }).then(response => {
      if (response.data.msg === 'success') {
        alert('Thank you for the note!')
        this.resetForm()
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.')
      }
    })
  }
  resetForm() {
    document.getElementById('contact-form').reset()
  }

  render() {
    return (
      <div id="signup-container">
        <div id="signup">
          <p>
            Have a question for our next guest? Know someone with an
            unconventional story? Just want to say hi?
          </p>
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <TextField
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                required
              />
            </div>
            <div className="form-group">
              <TextField
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-control" rows="5" id="message" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp
