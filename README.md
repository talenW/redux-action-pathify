# Redux-Action-Pathify

## Introduction

`redux-action-pathify` is a utility library designed for Redux applications to generate clear and unique action type strings. By using a nested path approach, it helps in avoiding duplicate action names, making action types more readable and maintainable.

## Installation

Install using npm:

```bash
npm install redux-action-pathify
```

Or using yarn:

```
yarn add redux-action-pathify
```

## Usage

Import the `actionTypeGenerator` function and `PATH` and use it to create an object of action types.

```
import { actionTypeGenerator, PATH } from 'redux-action-pathify';

// Define action types
const actionMap = {
  USER: {
    CREATE: PATH,
    UPDATE: PATH,
    DELETE: PATH
  },
  PRODUCT: {
    ADD: PATH,
    REMOVE: PATH
  },
  ORDER: {
    SUBMIT: PATH,
    CANCEL: PATH
  }
};

// Generate action types with unique paths
const actionTypes = actionTypeGenerator(actionMap);
```

```
// console.log(actionTypes);
{
  "USER": {
    "CREATE": "USER/CREATE",
    "UPDATE": "USER/UPDATE",
    "DELETE": "USER/DELETE"
  },
  "PRODUCT": {
    "ADD": "PRODUCT/ADD",
    "REMOVE": "PRODUCT/REMOVE"
  },
  "ORDER": {
    "SUBMIT": "ORDER/SUBMIT",
    "CANCEL": "ORDER/CANCEL"
  }
}
```

Generate redux actions:

```
// Action creator functions
const createUser = (user) => ({
  type: actionTypes.USER.CREATE,
  payload: user
});

const updateUser = (userId, updates) => ({
  type: actionTypes.USER.UPDATE,
  payload: { userId, updates }
});

const deleteUser = (userId) => ({
  type: actionTypes.USER.DELETE,
  payload: userId
});

// Example: create an action
const newUserAction = createUser({ name: 'Jane Doe', age: 30 });
```

```
//console.log(newUserAction);
{
  "type": "USER/CREATE",
  "payload": {"name": "Jane Doe", "age": 30}
}
```

## Features

- Clear Action Types: Easily generate clear, intuitive action types through a structured path method.
- Avoid Duplicates: Ensure each action type is unique throughout the application.
- Easy Integration: Seamlessly integrate into your existing Redux application.
