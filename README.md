# Instructions

1. Run `npm install`
2. Run `npm run start`
3. Go to `http://localhost:8000`
4. Enter PIN 1234

# Implementation
1. Own router implementation: loading JS code on link hover, code-splitting by pages, listening to back and foward events and page availability by authorization
2. Own global state management implementation: only re-render components that listen to the updated store data
3. Using Esbuild to transpile Typescript and React
4. Using Atomic CSS Framework to generate a small CSS file
5. No backend, using localStorage to save the user data

# Casetext Homework Assignment
Your task in this challenge is to build a demo web app that is a functional ATM machine. Please use a stubbed backend as if you were interacting with a server (ie reading from a file or local storage). Feel free to add any bells and whistles you’d like.

## Guidelines:
- Please work in React, using Javascript or Typescript, and utilize any additional frameworks or libraries as needed.
- Incorporate state management effectively in your application.
- Utilize React hooks for managing state and side effects.
- Match the provided mocks as closely as possible.
- Please use provided assets.
- A user should be able to check their balance, withdraw funds, and deposit funds after entering their PIN at a minimum.
- Funds should be correctly reflected after a deposit or withdrawal.
- A user's card type should be highlighted once they have entered their correct PIN.
- Please put your code up on your GitHub account.
- Please include instructions about how we can run your app. (If your solution works better in one browser over the others, let us know which one.)

## Optional:
- While a backend is not required for this assignment, if you feel like it will help you, please create one. You may consider setting up a NodeJS backend server with Express to handle all transactions on the server.
