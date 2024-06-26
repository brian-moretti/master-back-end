# Master Back-End Development

Welcome to my final project for the Master in Back-End Development for Star2Impact University.

- [Master Back-End Development](#master-back-end-development)
  - [:computer: The project: My Fitness Journey :muscle:](#computer-the-project-my-fitness-journey-muscle)
    - [:spiral_notepad: Notes](#spiral_notepad-notes)
  - [:gear: Instructions](#gear-instructions)
  - [:open_book: Documentation](#open_book-documentation)
    - [:technologist: Project Structure](#technologist-project-structure)
  - [:bookmark_tabs: REST API](#bookmark_tabs-rest-api)
    - [:information_source: Routes and Data](#information_source-routes-and-data)
      - [Users Data](#users-data)
      - [Exercise Data](#exercise-data)
      - [Training Program Data](#training-program-data)
      - [Exercise Training Data](#exercise-training-data)
  - [:incoming_envelope: Contact me](#incoming_envelope-contact-me)

## :computer: The project: My Fitness Journey :muscle:

This project involves a REST API designed for persons who want to stay healthy and keep track of their progress. Here's a list of what you can do:

- Create, modify and delete Users.
- Login and Logout to your personal account through authentication functions and JsonWebToken.
- Create, modify and delete Exercises.
- Filter the exercises through params of name, target and body part involved
- Create, modify and delete Training Programs linked to the user created.
- Create, modify and delete the single exercise link to the program created.

### :spiral_notepad: Notes

The project use MySql Database and has been build as follow:

![Database Schema](./public/database-schema.png)

## :gear: Instructions

- Copy the repository from my GitHub: `git clone https://github.com/brian-moretti/master-back-end.git`
- Open the file `migrations.sql` and copy the code inside the SQL query to create the Database, the Tables, the Colums and the relations between them.
- Check the file `config.js` then create an `.env` file or simply rename `.env.example` in `.env` with the correct data based on the example itself.i
- Start the web server (Apache, SQL) such as Laragon (as I do) or the one you used to use.
- Install the dependencies with `npm install` _(check `package.json`)_ then open the terminal and digit `npm run dev`
- Now test it through POSTMAN or similar
- _If you to start at 100% of the functionality pre-load all the exercises with the terminal code `node ./Api/importExercises.js`_

## :open_book: Documentation

Take a look a the docs to understand the routes and the fully API

### :technologist: Project Structure

```.
├── Api/
│   ├── gif_exercises/
│   │   └── ...list of gif
│   ├── exercisesDatabaseList.json
│   └── importExercise.js
├── App/
│   ├── controllers/
│   │   ├── exercisesController.js
│   │   ├── exercisesTrainingController.js
│   │   ├── logController.js
│   │   ├── trainingProgramsController.js
│   │   └── usersController.js
│   └── models/
│       ├── exercisesModel.js
│       ├── exercisesTrainingModel.js
│       ├── trainingProgramsModel.js
│       └── usersModel.js
├── Core/
│   ├── routes/
│   │   ├── exercisesRoute.js
│   │   ├── exercisesTrainingRoute.js
│   │   ├── logRoute.js
│   │   ├── trainingProgramsRoute.js
│   │   └── usersRoute.js
│   └── utilities/
│   │   ├── authentication.js
│   │   ├── hashCreation.js
│   │   ├── paginations.js
│   │   └── tokenModel.js
│   ├── Database.js
│   └── Router.js
├── .env
├── app.js
├── config.js
├── migrations.sql
```

## :bookmark_tabs: REST API

Base Path: `http://localhost:3000`

### :information_source: Routes and Data

`users`:

```json data
{
  "id": 1,
  "username": "your-username",
  "email": "your-email",
  "password": "jwt hash"
}
```

`exercises`:

```json data
{
  "id": "exercise-id",
  "name": "exercise-name",
  "target": "exercise-focus",
  "gifUrl": "exercise-gif",
  "instructions": "exercise-help",
  "bodyPart": "exercise-body-part-involved",
  "secodaryMuscles": "exercise-muscles-involved",
  "equipment": "exercise-optional-equip"
}
```

`training-programs`:

```json data
{
  "id": "program-id",
  "name": "program-name",
  "date_start": "program-starting-date",
  "date-end": "program-ending-date",
  "id_user": "user-linked-to-program-id"
}
```

`exercises-training`:

```json data
{
  "id_exercise": "exercise-linked-to-exercise-table",
  "id_scheda": "exercise-linked-to-the-program-id",
  "series": "series-to-do",
  "reps": "reps-to-do",
  "rest": "rest-to-take",
  "weight": "exercise-weight-uses",
  "weight_max_rm": "exercise-max-weight-RM",
  "video": "video-tutorial"
}
```

#### Users Data

`:get/users`: Return all the users in the database.

```json
[
  {
    "id": 1,
    "username": "your-username",
    "email": "your-email",
    "password": "jwt hash"
  }, ...
]
```

`:get/users/{id}`: Return the user with the ID selected.

```json
"User": {
    "id": 1,
    "username": "your-username",
    "email": "your-email"
 },
"Programs": {
    "name": "program-name",
    "date_start": "program-starting-date",
    "date-end": "program-ending-date",
 }
```

`:post/users`: Create a new user in the database. The body is required as follow:

```json
{
  "username": "your-username",
  "email": "your-email",
  "password": "jwt hash"
}
```

`:put/users/{id}`: Update an existing user. One of the property is required

```json
{
  "username": "new-username",
  "email": "new-email"
}
```

`:delete/users/{id}`: Delete an existing user.

```json
"User deleted": {
    "id": 1,
    "username": "username",
    "email": "email"
  }
```

#### Exercise Data

`:get/exercises`: Return all the exercises in the database

```json data
[
  {
    "id": "exercise-id",
    "name": "exercise-name",
    "target": "exercise-focus",
    "gifUrl": "exercise-gif",
    "instructions": "exercise-help",
    "bodyPart": "exercise-body-part-involved",
    "secodaryMuscles": "exercise-muscles-involved",
    "equipment": "exercise-optional-equip"
  } ...
]
```

`:get/exercises/{id}`: Return the exercise with the ID selected

```json data
{
  "id": "exercise-id",
  "name": "exercise-name",
  "target": "exercise-focus",
  "gifUrl": "exercise-gif",
  "instructions": "exercise-help",
  "bodyPart": "exercise-body-part-involved",
  "secodaryMuscles": "exercise-muscles-involved",
  "equipment": "exercise-optional-equip"
}
```

`:post/exercises`: Create a new exercise. The body is required as follow (the other property can be `null`):

```json data
{
  "name": "exercise-name",
  "target": "exercise-focus",
  "bodyPart": "exercise-body-part-involved"
}
```

`:put/exercises/{id}`: Update an existing exercise. One of the property is required

```json data
{
  "name": "exercise-name",
  "target": "exercise-focus",
  "bodyPart": "exercise-body-part-involved"
}
```

`:delete/exercises/{id}`: Delete an existing exercise.

```json data
"Exercise Deleted": {
  "id": "exercise-id",
  "name": "exercise-name",
  "target": "exercise-focus",
  "gifUrl": "exercise-gif",
  "instructions": "exercise-help",
  "bodyPart": "exercise-body-part-involved",
  "secodaryMuscles": "exercise-muscles-involved",
  "equipment": "exercise-optional-equip"
}
```

#### Training Program Data

`:get/training-programs`: Return all the programs created by the user logged

```json data
{
  "id": "program-id",
  "name": "program-name",
  "date_start": "program-starting-date",
  "date-end": "program-ending-date",
  "id_user": "user-linked-to-program-id",
  "username": "your-username"
}
```

`:get/training-programs/{id}`: Return the program with the ID selected

```json data
"Training program": {
        "program-name": {
            "date_start": "program-starting-date",
            "date_end": "program-ending-date",
            "User": {
                "id_user": 1,
                "username": "your-username"
            },
            "Exercise": [
                {
                    "id_exercise": null,
                    "series": null,
                    "reps": null,
                    "rest": null,
                    "weight": null,
                    "video": null
                } ...
            ]
        }
}
```

`:post/training-programs`: Create a new program. The body is required as follow

```json data
{
  "name": "program-name",
  "date_start": "program-starting-date",
  "date_end": "program-ending-date"
}
```

`:put/training-programs/{id}`: Update the program with the ID selected. One of the property is required

```json data
{
  "name": "program-name",
  "date_start": "program-starting-date",
  "date_end": "program-ending-date"
}
```

`:delete/training-programs/{id}`: Delete the program with the ID selected

```json data
{
  "id": 1,
  "name": "program-name",
  "date_start": "program-starting-date",
  "date_end": "program-ending-date",
  "id_user": 1
}
```

#### Exercise Training Data

`:get/exercises-training`: Return all the programs created by the user logged

```json data
NOT PROVIDED
```

`:get/exercises-training/{id}`: Return the program with the ID selected

```json data
        "User ID": 1,
        "Training Program": {
            "ID": 1,
            "name": "program-name",
            "date_start": "program-starting-date",
            "date_end": "program-ending-date",
        },
        "Exercise": {
            "series": "series-to-do",
            "reps": "reps-to-do",
            "rest": "rest-to-take",
            "weight": "exercise-weight-uses",
            "weight_max_rm": "exercise-max-weight-RM",
            "video": "video-tutorial"
        },
        "Info Exercise": {
            "id": "exercise-id",
            "name": "exercise-name",
            "target": "exercise-focus",
            "gifUrl": "exercise-gif",
            "instructions": "exercise-help",
            "bodyPart": "exercise-body-part-involved",
            "secodaryMuscles": "exercise-muscles-involved",
            "equipment": "exercise-optional-equip"
        }
```

`:post/exercises-training`: Create a new program. The body is required as follow

```json data
{
  "id_scheda": "program-id",
  "id_exercise": "exercise-id",
  "series": "series-to-do",
  "reps": "reps-to-do",
  "rest": "rest-to-take"
}
```

`:put/exercises-training/{id}`: Update the program with the ID selected. One of the property is required

```json data
{
  "id_scheda": "program-id",
  "series": "series-to-do",
  "reps": "reps-to-do",
  "rest": "rest-to-take"
}
```

`:delete/exercises-training/{id}`: Delete the program with the ID selected

```json data
"Exercise Deleted from Training": {
        "id_user": 1,
        "id_exercise": 1,
        "id_scheda": 1,
        "series": "series-to-do",
        "reps": "reps-to-do",
        "rest": "rest-to-take",
        "weight": "exercise-weight-uses",
        "weight_max_rm": "exercise-max-weight-RM",
        "video": "video-tutorial",
        "exe-name": "exercise-name",
        "target": "exercise-focus",
        "gifUrl": "exercise-gif",
        "instructions": "exercise-help",
        "bodyPart": "exercise-body-part-involved",
        "secodaryMuscles": "exercise-muscles-involved",
        "equipment": "exercise-optional-equip",
        "program-name": "program-name",
        "date_start": "program-starting-date",
        "date_end": "program-ending-date",
    }
```

## :incoming_envelope: Contact me

If you find some bugs to fix or simply you want to send me a message please write me at [**brianmoretti2512@gmail.com**](mailto:brianmoretti2512@gmail.com) or [**LinkedIn | Brian Moretti**](https://www.linkedin.com/in/brian-moretti/)
