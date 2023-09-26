# React Firebase Authentication Guide

This repository contains the source code for a React project that demonstrates how to implement Firebase authentication using React and Firebase. The project was created using Vite.

## Overview

The React Firebase Authentication Guide provides step-by-step instructions and code samples to help you integrate Firebase authentication into your React applications. It covers topics such as setting up a Firebase project, creating authentication components, handling user sign-up and login, protecting routes, and more.

## Preview
https://github.com/ateebasif/react-firebase-authentication-guide/assets/22915645/c6c7b4ca-1e19-4187-b9cd-9b650f233064

## Blog Explanation
[How to Implement Firebase Authentication in Your React App for Seamless User Authentication](https://www.ateebay.com/blog/how-to-implement-firebase-authentication-in-your-react-app-for-seamless-user-authentication)

## Features

- Sign up and login with email and password
- Private and protected routes
- User authentication state management using React Context
- Error handling and loading states
- Integration with Firebase for authentication functionalities

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/ateebasif/react-firebase-authentication-guide.git

2. Navigate to the project directory:

   ```shell
    cd react-firebase-authentication-guide

3. Install the dependencies:

   ```shell
   npm install

4. Configure Firebase:
- Create a Firebase project in the Firebase Console.
- Go to the project settings and copy the Firebase configuration.
- Paste the Firebase configuration into src/firebase.js.
```
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
```

5. Start the development server:
 
   ```shell
   npm run dev  
   
6. Open your browser and navigate to http://localhost:3000 to view the application.

## Author

- [@ateeb asif](https://github.com/ateebasif)
