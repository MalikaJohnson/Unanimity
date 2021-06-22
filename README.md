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

- Successfully render all 9 screens to the DOM 
- Successfully incorporate CRUD for the Gratitude List
- Use CSS animation to stimulate diaphraghmic breathing for the guided breathing 
- Incorporate Bootstrap to display Carousels
- Fully functional and deployed front and backend 

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                                                                                         |
| :--------------: | :------------------------------------------------------------------------------------------------------------------ |
|      React       | A front-end JavaScrpit library for building UI components                                                           |
|   React Router   | A standard library for routing components in React                                                                  |
|      Rails       | Web-application framework which allows you to create a database using the MVC pattern                               |
|     Bootstrap    | CSS framework directed at responsive and front-end Web Development that contains templates for interface components |


<br>

### Client (Front End)

#### Wireframes

> This High Fidelity Wireframe showcases the intented layout for the Unamimity app including and not limited to, the Splash page, Homescreen, both login and signup screens as well three seperate content screens.
 
- https://www.figma.com/file/3JJflxZnDoftHTXsWKnda4/Unanimity?node-id=0%3A1


#### Component Tree

>  This section displays the structure of how the React components are being rendered. It shows the parent to child relation between my components, or in other words, show which components are rendering the other components. 

- https://whimsical.com/unanimity-E77qpaT95JJMxAoF72CqtF

#### Component Architecture

> This section to defines the React components and the data architecture of the Unanimity app. This is  direct reflection of how I expect the directory/file tree to look like. 

``` structure

client
|__ screens/
      |__ Splashpage.jsx
      |__ Homepage.jsx
      |__ List.jsx
      |__ Meditation.jsx
      |__ ListCreate.jsx
      |__ ListEdit.jsx
      |__ Yoga.jsx
      |__ Login.jsx
      |__ Signup.jsx
|__ layout/
      |__ Header.jsx
      |__ Footer.jsx
|__ services/

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Set up M/V/C        |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Set up Enpoints     |          |                |               |             | 
| Set up Auth(backend)|          |                |               |             |
| Seed Database       |          |                |               |             |
| File structure      |          |                |               |             |
| Auth(frontend)      |          |                |               |             |
| Test endpoints      |          |                |               |             |
| Backend Deployment  |          |                |               |             |
| Render Splashpage   |          |                |               |             |
| Render Homepage     |          |                |               |             |
| Render Page 1       |          |                |               |             |
| Render Page 2       |          |                |               |             |
| Render Page 3       |          |                |               |             |
| Render Login Page   |          |                |               |             |
| Render Signup Page  |          |                |               |             |
| Style Pages 1-3     |          |                |               |             |
| Style Login/Signup  |          |                |               |             |
| Style SpalshPage    |          |                |               |             |
| Style Homepage      |          |                |               |             |
| Media Queries       |          |                |               |             |
| Deployment          |          |                |               |             |

| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

> https://drive.google.com/file/d/1ZnOnzNBkvl3B-iRIS2nrmLKd1v3edqZC/view?usp=sharing

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
