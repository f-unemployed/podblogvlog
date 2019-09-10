import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

export default function ContentBlock(props) {
  const classes = useStyles()
  const content = props.content

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={content.image}
          title={content.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {content.category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/content/${content.id}`}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
