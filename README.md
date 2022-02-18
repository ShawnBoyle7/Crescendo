# [Crescendo](https://crescendo-application.herokuapp.com/)

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Documentation](#documentation)
4. [Development](#development)
5. [How To Use](#how-to-use)
6. [What I Learned](#what-i-learned)
7. [Future Plans](#future-plans)

## Introduction

Crescendo is a full-stack Spotify clone. If you're not familiar with Spotify, it's an application centralized around listening, organizing, and discovering music. I love music, so I thought, why not clone Spotify? With Crescendo, you can centralize your interests by adding artists & albums you love to your library. You can create and add your favorite songs to playlists, which you can view in the sidebar or your library. While using the application, you can use the entire functionality you'd expect from Spotify's audio player (sans Shuffle, coming soon) for a music session. You have full control over playing the next or previous song, and and looping a song, album, or playlist.

## Browse Crescendo [here!](https://crescendo-application.herokuapp.com/)

## Technologies

* PostgreSQL
* Sequelize
* Express
* React
* Redux

## Documentation

* [Database Schema](https://github.com/ShawnBoyle7/Crescendo/wiki/Database-Schema)
* [Feature List](https://github.com/ShawnBoyle7/Crescendo/wiki/Feature-List)
* [API Routes](https://github.com/ShawnBoyle7/Crescendo/wiki/API-Routes)
* [Frontend Routes](https://github.com/ShawnBoyle7/Crescendo/wiki/Frontend-Routes)

## Development

1. Clone the repository at https://github.com/ShawnBoyle7/Zoolodex
2. Install dependencies
```
  cd backend
  npm install
  cd ../frontend
  npm install
```
3. Create your local .env file. ensuring your settings will match your local database. <br></br>
4. Set up your Postgres user matching your env settings.
```
  psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"
```
5. Create the database with sequelize & migrate/seed your database.
```js
  cd backend
  npx dotenv sequelize db:create
  npx dotenv sequelize db:migrate
  npx dotenv sequelize db:seed:all
```
6. Launch the application
```js
  cd backend
  npm start
  cd ../frontend
  npm start
``` 

## How To Use

### Landing Page

When you first load up the website, you'll encounter this splash page where you can sign up or log in.

![Splash](https://i.imgur.com/XtmaEmS.png)

You will need to be signed in to use the website, since it's a very personalized application. If you'd like to skip the sign-up process, go ahead and use the Demo login!

### Home

After logging in, you'l see a lot of different options.

![Home](https://i.imgur.com/RKhg0l8.png)

You can check out popular artists and albums, or just browse them all. You can navigate to your library, create a new playlist, the choices are yours.

### Library

Here you can browse your own playlists, followed artists, and liked albums.

![Library](https://i.imgur.com/Qa5oIFg.png)

### Playlist

Here you can listen to, remove, and like songs in your playlists. You can also add them to other playlists, and edit the playlist details.

![Playlist](https://i.imgur.com/jP3KdMg.png)

### Artist

This is the page for an artist, where you can listen to their most popular songs, add them to a playlist, or follow the artist.

![Artist](https://i.imgur.com/bbwIioo.png)

### Album

This is the page for an album, where you can listen to the songs, add them to a playlist, or like the album.

![Album](https://i.imgur.com/jt3a2AZ.png)

## What I Learned

* This was originally my first React project, so throughout development I've learned an enormous amount in regards to complex implementation of hooks, state management practices, styling convention, and so much more. 

* I've gained a lot of experience refactoring code as I've revisited this project. I realized after doing a few more projects that I could have done so many things more efficiently, so I constantly find myself coming back and optimizing.

## Future Plans

* Liked songs, search, genres, shuffle, artist discography, and styling gradients are the primary features that I have worked on, but are not yet production ready. There are a lot of small styling changes that I'm making all the time, since Spotify is an incredibly detailed application full of nooks and crannies to perfect.

* After I'm happy with the above features, I plan to implement some graphing logic for discovery features within the platform. This is very much a continuous project for me that I see myself working on for a long time because honestly, I've had so much fun developing it.
