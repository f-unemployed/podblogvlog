import React from 'react'
import {Link} from 'react-router-dom'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'

const action = (type, link) => (
  <Link to={link}>
    <Button color="secondary" size="small">
      {type}
    </Button>
  </Link>
)

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600
  },
  snackbar: {
    margin: theme.spacing(1)
  }
}))

export default function HpgModal() {
  const classes = useStyles()
  return (
    <div>
      <SnackbarContent
        className={classes.snackbar}
        message="About Us"
        action={action('Learn More', '/about')}
      />
      <SnackbarContent
        className={classes.snackbar}
        message="Ask Us"
        action={action('Ask away', '/about')}
      />
    </div>
  )
}
