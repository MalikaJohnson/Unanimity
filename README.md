### Unanimity


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

**Unanimity** is a full stack app with the goal of helping the user bring themselves closer to experiencing oneness within the self, by providing straightforward ways to easily incorporate daily mindfulness. 

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


<br>

### Goals

- Successfully render all 9 screens to the DOM 
- Successfully incorporate CRUD for the Gratitude Lists
- Use CSS animation to stimulate diaphraghmic breathing for the guided meditation screen
- Incorporate Bootstrap to display Carousels
- Fully functional and deployed front and backend 

<br>

### Libraries and Dependencies

> This section lists all supporting libraries and dependencies, as well as their role in the project. 

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
|__ components/
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
| Set up M/V/C        |    H     |   1/2 hr       |               |             |
| Create CRUD Actions |    H     |     2 hrs      |               |             |
| Set up Enpoints     |    H     |     4 hrs      |               |             | 
| Set up Auth(backend)|    H     |     2 hr       |               |             |
| Seed Database       |    H     |     2 hrs      |               |             |
| File structure      |    H     |   1/2 hr       |               |             |
| Auth(frontend)      |    H     |     2 hr       |               |             |
| Test endpoints      |    H     | 1 1/2 hrs      |               |             |
| Backend Deployment  |    H     |   1/2 hr       |               |             |
| Render Splashpage   |    H     |     1 hr       |               |             |
| Render Homepage     |    H     | 1 1/2 hrs      |               |             |
| Render Page 1       |    H     |     2 hrs      |               |             |
| Render Page 2       |    H     |     2 hrs      |               |             |
| Render Page 3       |    H     |     2 hrs      |               |             |
| Render Login Page   |    H     | 1 1/2 hrs      |               |             |
| Render Signup Page  |    H     | 1 1/2 hrs      |               |             |
| Style Pages 1-3     |    H     |    12 hrs      |               |             |
| Style Login/Signup  |    H     |     4 hrs      |               |             |
| Style SplashPage    |    H     | 2 1/2 hrs      |               |             |
| Style Homepage      |    H     | 2 1/2 hrs      |               |             |
| Media Queries       |    H     | 1 1/2 hrs      |               |             |
| Deployment          |    H     |   1/2 hr       |               |             |
| TOTAL               |          |    48 hrs      |       hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

> https://drive.google.com/file/d/1ZnOnzNBkvl3B-iRIS2nrmLKd1v3edqZC/view?usp=sharing

<br>

***

## Post-MVP

-  To create a function that displays the time/ date a Gratitude List was created 
-  Add a "soft focus" Meditation component/page 

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
