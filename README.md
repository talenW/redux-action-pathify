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

Import the actionTypeGenerator function and use it to create an object of action types.

```
import { actionTypeGenerator, DEFAULT } from 'redux-action-pathify';

const actionMap = {
  a: DEFAULT,
  b: DEFAULT,
  c: { d: DEFAULT, e: DEFAULT, f: { g: DEFAULT } },
};

const types = actionTypeGenerator(actionMap);
console.log(types);
```

The output will be:

```
{
  "a": "a",
  "b": "b",
  "c": { "d": "c/d", "e": "c/e", "f": { "g": "c/f/g" } }
}
```

## Features

- Clear Action Types: Easily generate clear, intuitive action types through a structured path method.
- Avoid Duplicates: Ensure each action type is unique throughout the application.
- Easy Integration: Seamlessly integrate into your existing Redux application.
