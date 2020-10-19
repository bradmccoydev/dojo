import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Agile from '.././images/Agile.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
      maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[200],
  },
}));

export default function UpskillYourTeam() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            BM
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Kubernetes Journey - How to upskill your team"
        subheader="May 15, 2020"
      />
      <CardMedia
        className={classes.media}
        image={Agile}
        title="Agile Team"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This blog is for DevOps Managers/ Tech Leads who want to upskill there team for the Kubernetes journey.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          featured on All day DevOps: https://www.alldaydevops.com/blog/kubernetes-journey-how-to-upskill-your-team <br /><br />
            I’m the Engineering Manager for the Cloud Innovation team at Temenos where I manage 7 senior DevOps engineers. As our company is getting into more cloud providers, we decided to get into Kubernetes so that we can run our solutions across all clouds and save money in costs. We decided that rather than going to market we would train everyone internally to upskill employees, give them job satisfaction and retain them. This initiative turned out to be more successful than I thought and therefore I would like to share my journey for other managers and tech leads wanting to start.
          </Typography>
          <Typography paragraph>
            The overall plan was to get everyone through the Certified Kubernetes Administrator (CKA). We first set out to do the Introduction to Kubernetes first, as this was the prerequisite for the Kubernetes certification, and a great starter to get into study mode. After my team was skilled up we would then go and teach other teams what we had learnt.
          </Typography>
          <Typography paragraph>
            After we finished the Introduction to Kubernetes course, we found that Kubernetes wasn’t as scary as we thought, and we started using it straight away for our Internal DevOps toolset. We had our Jenkins server sitting inside AWS ECS, running Docker slaves so we decided to put that setup into Kubernetes as a nice fun project to start off with.
          </Typography>
          <Typography paragraph>
          Already we found that we were reducing “new tech debt” as we were developing solutions that we wouldn’t have to go back and change in two month’s time and employees could increase code throughput and get more projects to market faster, with increased employee satisfaction.
          </Typography>
          <Typography paragraph>
          Here are some tips to make your Kubernetes upskilling journey successful:
          </Typography>
          <Typography paragraph>
          <br />
          1.Have weekly one-on-ones with your team.<br />
          2.Complete the journey as a team.<br />
          3.Lead by example.<br />
          4.Get executive buy in.<br />
          5.Get your company to pay for the training.<br />
          6.Reach out to the DevOps community for help.<br />
          7.Setup weekly discussion sessions.<br />
          8.Get a real Kubernetes project to work on.<br />
          </Typography>
          <Typography>
            <b>Have Weekly One-on-Ones With Your Team</b><br />
            A weekly one-on-one is the most powerful tool you can invest in for this journey and it only costs 30 minutes of your time, with each direct per week. We follow a manager framework called Manager Tools that has a lot of great podcasts on how to provide effective one-on-ones. Each week I set a milestone for the engineer to achieve by the next week and then follow up on it for the next one-on-one and give positive feedback. I found that with two of the engineers I needed to set smaller milestones for them to achieve. Otherwise, they would context switch and not meet the deadline of the training.
          </Typography>
          <Typography paragraph>
            <b>Complete the Journey as a Team</b><br />
            It is important that the journey is done as a team. I found that half the team were able to finish the first course fast and the rest of the team was a lot slower. The first people to finish were the tech leads and senior engineers. So as we waited for the rest of the engineers to finish, I focused on upskilling the ones that finished early on their soft skills, particularly on coaching and mentoring, and then they helped coach the others to get them over the line. This was more successful than I thought it would be, and it completely changed the team’s collaboration and performance. 
          </Typography>
          <Typography paragraph>
            <b>Lead By Example</b><br />
            It is important that you lead by example and also do the training yourself. Pushing yourself to complete the training milestones first will help push the others to focus on finishing. This also helped a lot initially to get everyone started.
          </Typography>
          <Typography paragraph>
            <b>Get Executive Buy In</b><br />
            An important part to the success of this journey is to get executive buy in. Changing the company culture can be hard so it’s important to do your research and present why you want to use Kubernetes. After you start the journey it’s all about making the work visible. Executives like reports, so it’s important from the start to show savings in costs and employee satisfaction. This will help you in our next step to train other teams and really roll out Kubernetes. 
          </Typography>
          <Typography paragraph>
            <b>Pay for the Training</b><br />
            One other key thing to do is to get approval to pay for the training. At the start of the training I hadn’t yet asked for the funding and I soon realized without this not everyone was going to pay out of their own pocket. If there were some people that didn’t want to pay then we wouldn’t achieve our goal of finishing as a team.
            <br />
            A lot of companies won’t pay for contractors. So, if they are not willing to pay for the course themselves you have to bring it up as a performance requirement in their one-on-ones. Generally this won’t be a problem for contractors since they make a lot of money.
          </Typography>
          <Typography paragraph>
            <b>Reach Out to the DevOps Community for Help</b><br />
            The great thing about being in DevOps is the community. As I started reaching out to my network regarding my journey everyone was excited to help, from our partners helping with training sessions, and advocates that I have met in conferences connecting me to the right people for advice. One of them actually inspired me to write this blog post!
          </Typography>
          <Typography paragraph>
            <b>Get a Real Kubernetes Project</b><br />
            This is very important. You need a real-life example because you can only do so much theory and labs. This will give true training.
          </Typography>
          <Typography paragraph>
          Brad McCoy is Engineering Manager for the Cloud Innovation team at Temenos. He started his career as an engineer working offshore on a number of subsea engineering projects around the world and then moved into software engineering. He transitioned over to DevOps three years ago and has a huge passion for it, and loves to share his knowledge and journey with others in this great community.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
