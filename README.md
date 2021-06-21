#### Unanimity


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

#### Overview

_**Unanimity** is lorem ipsum dolor sit amet. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._


<br>

#### MVP

## Server (Back End)

- Have a RESTful JSON API.
- Build a Ruby on Rails server, exposing RESTful JSON endpoints.
- Build a database with at least 3 tables:
- There must be at least 1 association between your tables. (1:m or m:m)
- Utilize Rails to define models for interacting with the database.
- Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between non-User tables

## Client (Front End)

- Have a working, interactive React app, built using npx create-react-app.
- Have at least 8 separate, rendered components in an organized and understandable React file structure.
- Utilize functional or class React components appropriately.
- Utilize state and props in your components efficiently.
- Use only React for DOM Manipulation.
- Consume data from your Ruby on Rails API, and render that data in your components.
- Utilize React Router, for client-side routing.
- Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end.

## Styling

- Be styled with CSS (or SCSS, if you'd prefer).
- Use Flexbox or Grid in your layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).
- Linting
- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow camelCase, snake_case, and kebab-case convention.
- Remove unnecessary boilerplate React files and code.
- Remove all console.log()s and commented out code (functional notes and comments are okay).

## Deployment

- Deploy the fully functional front-end via Surge or Netlify.
- Deploy the back-end via Heroku.
- Deploy early and often(this will help to debug small issues before they become large issues)

## Procedural

- Initialize a git repo on Github, with a link to your hosted project.
- Have frequent commits, making a robust commit history at least every day. (75 commits minimum)
- Use effective and safe branching and merging processes.


_The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

> This High Fidelity Wireframe showcases the intented layout for the Unamimity app including and not limited to, the Splash page, Homescreen, both login and signup screens as well three seperate content screens.
 
- https://www.figma.com/file/3JJflxZnDoftHTXsWKnda4/Unanimity?node-id=0%3A1


#### Component Tree

>  This section displays the structure of how the React components are being rendered. It shows the parent to child relation between my components, or in other words, show which components are rendering the other components. 

- https://whimsical.com/unanimity-E77qpaT95JJMxAoF72CqtF

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

https://drive.google.com/file/d/1ZnOnzNBkvl3B-iRIS2nrmLKd1v3edqZC/view?usp=sharing

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
