import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import { Link } from "react-router-dom"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Ryan',
  lastName: 'Carr',
  initials: 'rc', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🐺',
      text: 'Dog lover',
    },
    {
      emoji: '🌎',
      text: 'Based in Ontario, Canada',
    },
    {
      emoji: '⛺️',
      text: 'Camping Enthusiast',
    },
    {
      emoji: '📧',
      text: <a href="mailto:ryan.g.carr@hotmail.com">ryan.g.carr@hotmail.com</a>,
    },
    {
      emoji: '📂',
      text: <Link to="/resume">Resume</Link>,
    },
  ],
  socials: [
    {
      link: 'https://github.com/RCarr94',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/ryancarr201994/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello I'm Ryan! I have a background in tech sales and management, bringing a unique perspective to the table. Problem solving has always been my passion, and I'm excited to bring that passion to the world of software development.",
  skills: {
    proficientWith: [
      'javascript',
      'react',
      'git',
      'github',
      'bootstrap',
      'html5',
      'css3',
      'express',
      'nodejs',
      'python',
      'django',
      'postgreSQL',
      'mongoose',
      'mongoDB',
    ],
    exposedTo: ['ruby', 'bulma', 'materialize'],
  },
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'hiking/camping',
      emoji: '🏕️',
    },
    {
      label: 'golfing',
      emoji: '⛳️',
    },
    {
      label: 'Formula 1',
      emoji: '🏎️',
    },
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: 'TeamTrailz',
      live: 'https://team-trailz-e41981a5de26.herokuapp.com/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/RCarr94/team-trailz', // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: 'Facial Recognition App',
      live: 'https://facial-recognition-app-be4c84d39dbc.herokuapp.com/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/RCarr94/facial-recognition', // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock2,
    },
    {
      title: 'SlickChef',
      live: 'https://slickchef.herokuapp.com/',
      source: 'https://github.com/RCarr94/SlickChef',
      image: mock3,
    },
    {
      title: 'Giphy Search Bar',
      live: 'https://giphy-search-app-56ce62bf1f9d.herokuapp.com/',
      source: 'https://github.com/RCarr94/giphy-search-bar',
      image: mock4,
    },
  ],
};