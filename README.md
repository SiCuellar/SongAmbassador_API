# SongAmbassador_API


## About the Project

SongAmbassador_API is the BackEnd to a full-stack application. It creates an API built in JavaScript using the Express library.
The full app will allow users to search for artists/songs and favorite them into selected playlist.

## Local Setup

You'll need to setup an API key with Musixmatch: 
[https://developer.musixmatch.com/documentation](https://developer.musixmatch.com/documentation)

## Deployment

Our app is deployed on heroku at: [https://intense-escarpment-60510.herokuapp.com]

## Front-End

Please see [Front-End](https://github.com/nicovigil1/SongAmbassador)


## Contributors

* Nico Vigil  [https://github.com/nicovigil1](https://github.com/nicovigil1)
* Silvestre Cuellar [https://github.com/sicuellar](https://github.com/SiCuellar)

## Built With
* Javascript
* Express 
* postgreSQL
* Mocha 
* Chai
* React


## Backend Endpoints

GET https://intense-escarpment-60510.herokuapp.com/api/v1/favorites
* Returns a list of your favorites songs that are stored in the database 
[
  {
    "id": 1,
    "name": "We Will Rock You",
    "artist_name": "Queen"
    "genre": "Rock",
    "rating": 88
  },
  {
    "id": 2,
    "name": "Careless Whisper",
    "artist_name": "George Michael"
    "genre": "Pop",
    "rating": 93
  },
]


GET https://intense-escarpment-60510.herokuapp.com/api/v1/favorites/:id
* Returns the favorite object with the specific :id you’ve passed in. A 404 is returned if the favorite is not found.

[
  {
    "id": 1,
    "name": "We Will Rock You",
    "artist_name": "Queen"
    "genre": "Rock",
    "rating": 88
  }
]


POST https://intense-escarpment-60510.herokuapp.com/api/v1/favorites
* creates a new favorite for database.

{
  "favorites": {
    "id": 1,
    "name": "We Will Rock You",
    "artist_name": "Queen"
    "genre": "Rock",
    "rating": 88
  }
}

PUT  https://intense-escarpment-60510.herokuapp.com/api/v1/favorites/:id
* Allows one to update an existing favorited song with the following parameters

{
  "favorites": {
    "id": 1,
    "name": "We Are the Champions",
    "artist_name": "Queen"
    "genre": "Rock",
    "rating": 77
  }
}

DELETE https://intense-escarpment-60510.herokuapp.com/api/v1/favorites/:id
*Will delete the favorite with the id passed in and return a 204 status code.




