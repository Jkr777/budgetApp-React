* For this project I used Visual Studio Code, my OS is Ubuntu 18.04.
* heroku app link:  https://frontend-budget-app-react.herokuapp.com/

* In this project, you can follow your monthly cash flow. A user can add Assets, Liabilities, Earnings, Spendings. He also can remove Assets and Liabilities and check his monthly history. You have email/password authentication. You can reset your pasword and you can change or delete your account. 

* about:
  - To run this project you need to change process.env.BUDGET_APP_API (./src/services/axios.js) with your enviroment variable or url. 
  - I created this project using create-react-app tool.
  - I used react lifecycle methods to handle custom functionality that gets executed during the different phases of a component.
  - I used redux to manage the app state.
  - I used react props system and redux to pass data through components.
  - I run this project in heroku using a buildpack, --buildpack https://github.com/mars/create-react-app-buildpack.git.

* dependencies:   
    - "axios" // used to handle server req
    - "moment" // a JavaScript date library for parsing, validating, manipulating, and formatting dates
    - node-sass // used to compile .scss files to css.
    - "normalize.css" // used for better cross-browser consistency.
    - "react-redux" // It lets your React components to read data from a Redux store, and dispatch actions to the store to update data.
    - "react-router-dom" // used to navigate between different components.
    - "redux" // a predictable state container for JavaScript applications
    - "redux-devtools-extension" // used to visualize actions and state changes that take place in a redux application.
    - "redux-thunk" // a middleware used to handle async actions
