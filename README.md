# node-and-p5
a simple project using node and p5.js, following this tutorial: https://thecodingtrain.com/Tutorials/12-websockets/

# how to run

Be sure to have node installed: https://nodejs.org/

* install node dependencies: `npm install`
* run local server: `node server.js`


<p align="center">
  <img src="images/logo.gif" width="700" />
</p>

### Table of Contents
0. [Introduction](#introduction) <br>
1. [Aim of the project](#aim-of-the-project) <br>
  1a. [Goals](#goals) <br>
  1b. [Context of use and device](#context-of-use-and-device) <br>
2. [Architecture](#architecture) <br>
  2a. [Main page](#main-page) <br>
  2b. [Welcome page](#welcome-page) <br>
  2c. ["Cards" page](#cards-page) <br>
  2d. [Chosen card page](#chosen-card-page) <br>
  2e. [Transitioning page](#transitioning-page) <br>
  2f. [Interactive experience](#interactive-experience) <br>
3. [Design challenges](#design-challenges) <br>
  3a. [Graphic aspects](#graphic-aspects) <br>
  3b. [Sound aspects](#sound-aspects) <br>
4. [Coding challenges](#coding-challenges) <br>
5. [References](#references) <br>
6. [Credits](#credits) <br>
7. [Video demo](#video-demo) <br>
8. [Team members](#team-members) <br>
9. [Course](#course) <br>



## Introduction
2020 was an unfortunate year, therefore the concept is to wish everyone to success in the New Year and to achieve their desires and goals. The meaning is to create a brighter virtual “sky”, which represents the 2021, since 2020’s sky wasn’t so bright.
The title “De-siderium” comes from a Latin term “de” + “siderum,a”. It literally means desire/wishes, but it is also related to the “stars”.

KEYWORDS: TRACE, SHARING MULTI-SENSORY EXPERIENCE, NETWORK. <br>

## Aim of the project
The aim of the project is to create a collaborative experience where people can make a wish: each one will become a star and will be part of a bright sky. The desires will be metaphorically sent to the sky and the people can interact with other users by drawing a constellation and see the others one. <br>

### Goals
The goal is to make people able to wish what they want to reach in 2021, giving them a good omen and hope. The tradition says that a wish will never come true if it will be said out loud. So the users have to define their desires and define within one of the twelve categories proposed. After the choice the users will read an auspicious message related to their wishes and can customize the star that appears on the screen. At the end everyone will arrive in a sky full of stars where people can interact by creating constellations in the part of the sky where their category is placed. The will is to make people reflect about the sense of community that unifies us, focusing on the idea that the wishes generally expressed have something in common. <br>

### Context of use and device
The project is designed to be used every time someone reflects on a personal achievement and wants to visualize it in a metaphorical way. To be more easily accessible and enjoyable the app is developed for mobile devices. <br>

## Architecture
<p align="center">
  <img src="images/architecture.png" width="700" />
</p>

### Main page
<p align="center">
  <img src="images/1-mockup.png" width="700" />
</p>

The first interface that appears when a user access to the app is made from: the title of the project, “De-siderium”, placed in the middle of the page; a star’s animation, above the title; a generative background composed by a night sky and a shooting stars; a button, in the lower part of the screen, which allows to enter the next page. <br>

### Welcome page
<p align="center">
  <img src="images/2-mockup.png" width="700" />
</p>

In this page, a typewriter message comes up explaining some informations about the project. A button, in the lower part of the screen, allows to enter the next page. <br>

### "Cards" page
<p align="center">
  <img src="images/3-mockup.png" width="700" />
</p>

Here the twelve symbols represent the common traits of the users’ wishes. The desire won’t be written, but just symbolized by an icon, following the tradition of keeping secret your wish to make it come true. Each card is a button that allows to go ahead in the next step and the user has to choose one of them. <br>

### Chosen card page
<p align="center">
  <img src="images/sliders.gif" width="200" />
</p>

 Each symbol of the previous page reveals a meaningful message for the user depending on the category chosen. In this page everyone can customize their own star by moving three sliders to change the number of points and the inner and outer radius. In the lower part of the screen there are three buttons: "BACK" allows to go back to the "Cards" page, "SAVE" enables the download of a .png file of the customized card to always remind you your goals, "DONE" gives you the access to the following page. <br>

### Transitioning page
<p align="center">
  <img src="images/5-mockup.png" width="700" />
</p>

This is a page between the solo and the interactive experience: a five seconds countdown and a "tunnel of stars" lead the user to the final page.

### Interactive experience
<p float="left" align="center">
   <img src="images/interaction1.gif" width="200">     
   <img src="images/interaction2.gif" width="200">
</p>

The interaction between users takes place in the last page, a virtual collective space where people can simultaneously draw the constellations in their specific category in white color. The users can also see others creations in light blue. <br>

## Design challenges
<p align="center">
  <img src="images/symbols.png" width="700" />
</p>

The design choice reflects a simple and essential mood to create a relaxing and meditative ambient that reminds a night sky. Moreover, the design is intuitive to create an easy user experience. <br>

### Graphic aspects
<p align="center">
  <img src="images/colors.png" width="700" />
</p>

The most used colors in the whole app are two shades of blue and white. The other colors are related to the twelve categories and they define the customized stars. The categories which have a similar meaning have different intensity shades of the same color.

<p align="center">
  <img src="images/fonts.png" width="700" />
</p>

There are two fonts that has different usages. "Prata" is used for the logo, the all titles and the meaningful messages. "Roboto mono" instead defines all the others secondary texts, such as buttons and instructions for the user. <br>

### Sound aspects
There are three kinds of sounds. The first is a short sound effect for all the buttons; the second is a higher pitched tone related to the categories icons; the third is a contemplative track that plays in the last interface to create a more immersive and collective experience. <br>

## Coding challenges

## References
[Co--Star Astrology App](https://www.costarastrology.com/) &
[Galaxy of covers](https://galaxy-of-covers.interactivethings.io/) -
The main inspirations for De-siderium, graphic-wise, were these two projects. <br>

## Credits
[P5js](https://p5js.org/) -
P5 JavaScript library was used to develop the WebApp <br>

[P5.sound](https://p5js.org/reference/#/libraries/p5.sound) -
The p5.sound library allowed to add sound effects to the project. <br>

[Bensound](https://www.bensound.com/royalty-free-music/track/relaxing) -
Bensound is the source for the music used in the interactive part of the project. <br>

[Freesound](https://freesound.org/) -
Freesound is the source for the sound effects used for the buttons. <br>

[Google Fonts](https://fonts.google.com) -
Google Fonts is the source for the fonts used in the project. <br>

[Heroku](https://www.heroku.com/) -
The cloud platform we used to publish the website, through GitHub. <br>

## Video demo
[Video demo](https://drive.google.com/file/d/13u6w05VsdSseEWKRtU0yNKFHseeW7-By/view?usp=sharing) <br>

## Team members
<p align="center">
  <img src="images/team.png" width="700" />
</p>

## Course
[Creative Coding 2020/2021](https://drawwithcode.github.io/2020/) <br>
**Politecnico di Milano** - Scuola del Design - Communication Design <br>
**Faculty:** Michele Mauri, Andrea Benedetti, Tommaso Elli <br>
