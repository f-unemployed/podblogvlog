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
    maxWidth: '30vw',
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
    subtitle: 'Editor & Contributor',
    bio:
      'Asia Gagnon graduated Carnegie Mellon with her BFA in Directing Theatre. She has spent the last six years writing, producing, and performing her own mulit-media performance art with a focus on female empowerment. She completed the Grace Hopper program at Fullstack University in 2019 and is currently seeking a Technical Evangelist position where she can combine her performance and technical knowledge in order to pay her rent. Her hobbies include baking, dancing, and forcing Amaris to record superfluous outro takes.',
    linkedin: 'https://www.linkedin.com/in/asia-gagnon/',
    github: 'https://github.com/AsiaJoyG'
  },
  {
    imgUrl: 'https://i.imgur.com/KrfSK7n.jpg',
    name: 'Amaris',
    subtitle: 'Illustrator & Contributor',
    bio:
      'Amaris also graduated with a BFA, but in Studio Art from the University of Texas at Austin. Like many art students, she ended up working in a profession that had nothing to do with art. For the last 5 years she has worked as an e-commerce merchandiser for Anthropologie and the Philadelphia Museum of Art. After a big move to New York City, she made the leap into Software Engineering where she met Asia. Currently Amaris is starting her career in engineering at a small start up that combines her past e-commerce experience with her new career path.',
    linkedin: 'https://www.linkedin.com/in/amarisachang/ ',
    github: 'https://github.com/Amic4353'
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
        <div id="abtAuthImg">
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {elem.bio}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={elem.linkedin}>
                  LinkedIn
                </Button>
                <Button size="small" color="primary" href={elem.github}>
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
