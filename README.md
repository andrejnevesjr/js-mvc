# Node Express (MVC)

## Table of contents

- [Node Express (MVC)](<#node--express--(mvc)>)
  - [Table of contents](#table-of-contents)
  - [Project Requirements](#project-requirements)
  - [Project Structure](#project-structure)
  - [Step-by-Step](#step-by-step)
  - [References](#references)

## Project Requirements

This project was develop and tested using the following environment.

| Item               | Version  |
| ------------------ | -------- |
| Visual Studio Code | `1.71.0` |
| Node               | `9.5.1`  |

## Project Structure

This challenge is currently structured with the following specifications.

| Path        | Description                                     |
| ----------- | ----------------------------------------------- |
| config      | `Configurations to build & run this projec`     |
| controllers | `Business logic`                                |
| logs        | `API logs`                                      |
| middleware  | `Handlers (log, errors, etc)`                   |
| model       | `Layer to get data (on this project mock json)` |
| public      | `Public folder holding css, img and text`       |
| routes      | `API routes`                                    |
| views       | `Project Views`                                 |

## Step-by-Step

### 1. Clone the Repository

`git clone https://github.com/andrejnevesjr/js-mvc.git`

### 2. Setup environment

#### Exploring the project

```
cd js-mvc
```

#### Getting dependencies and running the server (DEV)

> Is required to create one file holding the variables ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET and DATABASE_URI (e.g. .env)

On a terminal inside the project path run the commands below:

```
npm install
npm run dev
```

#### Web interface app:

The Project will be available under the URL below

```
http://localhost:3500
```

## Branches

| Version | Path       | Description                                       |
| ------- | ---------- | ------------------------------------------------- |
| 1.0     | main       | `Boilerplate for node project`                    |
| 1.1     | aut        | `Adding authentication - bcrypt`                  |
| 1.2     | jwt        | `Adding JWT token`                                |
| 1.3     | roles      | `Adding roles to manage permissions on endpoints` |
| 1.4     | data-model | `Adding data models (Mongose + MongoDB) + CRUD`   |

## References

[DaveGrayTeachesCode](https://www.youtube.com/@DaveGrayTeachesCode)

[w3schools](https://www.w3schools.com/js/)

[Dev Aprender](https://www.youtube.com/@DevAprender)
