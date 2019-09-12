import React from 'react'
import {Link} from 'react-router-dom'
import HpgModal from './hpgModal'
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
    maxWidth: 250,
    marginLeft: '2vw'
  },
  media: {
    height: 245,
    width: 250
  }
})

const contactStyle = {
  display: 'flex',
  width: '40%'
}

const authorArr = [
  {
    imgUrl: 'https://i.imgur.com/voCV3Yc.jpg',
    name: 'Asia',
    subtitle: 'Editor & Contributor'
  },
  {
    imgUrl: 'https://i.imgur.com/KrfSK7n.jpg',
    name: 'Amaris',
    subtitle: 'Illustrator & Contributor'
  }
]

export default function AboutPage() {
  const classes = useStyles()

  return (
    <div>
      <HpgModal page="about" />
      <div id="abtContent">
        <h1>ABOUT f(unemployed)</h1>
        <p>
          Two women navigate unemployment in the tech world, will they survive
          with only a resume and the internet to guide them? Or will they be
          destroyed by ravenous algorithm challenges that threaten to eat them
          alive? Tune in as they interview champions of the job hunt and
          employed software engineers with unconventional backgrounds willing to
          impart wisdom, advice, and tricks of the trade.
        </p>
        <div id="abtAuthors">
          {authorArr.map((elem, indx) => (
            <Card className={classes.card} key={indx}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={elem.imgUrl}
                  title={elem.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {elem.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {elem.subtitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  LinkedIn
                </Button>
                <Button size="small" color="primary">
                  GitHub
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
