import React from 'react'
import {Link} from 'react-router-dom'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'

//functions for the snackbars
const action = (type, link) => (
  <Link to={link}>
    <Button color="secondary" size="small">
      {type}
    </Button>
  </Link>
)

const buttonClick = (type, elem) => (
  <Button onClick={() => changeModal(elem)} color="secondary" size="small">
    {type}
  </Button>
)

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600
  },
  snackbar: {
    margin: theme.spacing(1),
    width: '7vw'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

const changeModal = changeVar => {
  console.log(changeVar)
  let change = !changeVar
  console.log('test', change)
  changeVar = change
  console.log('updateVar', changeVar)
}

export default function HpgModal(props) {
  const page = props.page
  const classes = useStyles()
  const divStyle = {
    position: 'fixed',
    marginTop: '13vh',
    top: '0',
    right: '0'
  }
  const modalFlag = false

  if (page === 'about') {
    return (
      <div style={divStyle}>
        <SnackbarContent
          className={classes.snackbar}
          message="Home"
          action={action('Back', '/')}
        />

        <SnackbarContent
          className={classes.snackbar}
          message="Ask Us"
          action={buttonClick('Ask a Question', modalFlag)}
        />
      </div>
    )
  } else {
    return (
      <div style={divStyle}>
        <SnackbarContent
          className={classes.snackbar}
          message="About Us"
          action={action('Learn More', '/about')}
        />

        <SnackbarContent
          className={classes.snackbar}
          message="Ask Us"
          action={buttonClick('Ask a Question', modalFlag)}
        />
      </div>
    )
  }
}
