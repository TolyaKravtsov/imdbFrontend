## The task
- Build a web application (client) with Javascript or Typescript as the client side language
- Build an API service (server) with PHP or NodeJs as the server side technology
- Use MySQL, MariaDB, PostgreSQL, SQL Server or SQLite as the database

Build an SPA (Single Page Application) that shows everyone's favourite movies from database, it should at least show movie Title, Poster, and Plot synopsis using [OMDb API](https://www.omdbapi.com) or any other public movie API that supports IMDb ID (e.g. tt8526872)

It should also be able to add or remove list of favourite movies.

Please use the data set provided in the SQL dump in this repo as a base.
You can change original asset that you think will make the solution better.
You are allowed to use any library or framework to help you with the task.

## Bonus task
You are not required to complete all of the bonus tasks, but great if you do! We may want to discuss your approach to the bonus tasks during interview so please think of your approach to these challenges even if you do not complete them.

- Use client side framework such as AngularJS, Angular, ReactJS, Vue, etc.
- Add simple authentication for any user (or all users) and only authenticated user could view or edit their favourite movies. You could adjust the database structure if needed.
- Add unit tests
- Serve your solution somewhere on cloud hosting solution e.g. Heroku, DigitalOcean, etc. (just use the free tier one if available, we don't expect you to spend any money for hosting)
- Any other improvement or modification (please add it into the readme and explain your reasoning of the improvement or modification)

## Expectations
Make a copy of this repo. Solve the task. Push your code to a public repo, and send us the link as a reply to our email.

Your solution should include a short readme describing your assumptions regarding the task, technology choice, your solution, how to use/test it and any final considerations such as known errors, limitation, something you struggle with, next steps, security concerns etc.

Don't worry we are not expecting this thing to be perfect.

## Note
To get an API key in [OMDb API](https://www.omdbapi.com), you will need to register with your name and email address. If you do not consent to give such details to OMDb API, please let us know and we will happily give you an API key for this assignment.



# IMDB FrontEnd Part

## Description

Basically the app is present as a single-page application presented in the React framework version 18.

According to the assumption to work the main task was creating an application that show favorite movies from the database and able to add and remove movies from it

This logic in my point of view should look like routes, where the first route is a list of all of the movies in which we can choose and pick up favorites, and the route of favorite movies is where we able to remove or see the actual favorite films.

Obviously, if you're not authorized it you can't see our favorite films so in my realization I remove the possibility to open the favorite films tab when you're not logged in

## Technologies

### ``React``
A JavaScript library for building user interfaces. The most popular and easy library to write SPA applications

### ``Typescript``
The best way to write scalable and maintainable code in Javascript

### ``Axios``
Small library to convenient work with HTTP requests

### ``Material UI``
The most popular design system with easy customization. Best solution instead of writing your own components

### ``ESLint and prettier``
Standardized code is our everything

