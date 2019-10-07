# Formation React

By Safarte and Soudini

## Install

* Install NodeJS
* Install yarn
* Run:

```bash
git clone https://gitlab.viarezo.fr/LinkCS/react-tutorial-front.git
cd react-tutorial-front
yarn install
```

## Usage

To run this website locally execute `yarn start` in the working directory.

## API

`GET /users => [Object]` -> Lists all users

`GET /users/id => Object` -> Get the info about the user with asked id

`GET /boards => [Object]` -> Lists all boards

`GET /boards/id => Object` -> Get the info about the board with asked id

`GET /messages?board=id => [Object]` -> Get the messages from the board with asked id

To post a message from specified user on specified board:

```json
POST /messages
body:
{
  "content": "blabla",
  "userId": 42,
  "boardId": 1
}
```

To register a new user (returns the user):

```json
POST /users => Object
body:
{
  "username": "blabla",
  "paswword": "verysecure"
}
```

To login an user (returns a list containing the matching users):

```json
POST /login => [Object]
body:
{
  "username": "blabla",
  "paswword": "verysecure"
}
```
