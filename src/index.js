//jsx is like html which help to display content in react
//package.json: where we put all dependences we use
//package-lock.json: version of dependences
//gitignore: where large files which can be difficult to push on github is stored
//Node-modules: where dependences come from
//public: static files
//buble: transform jsx into js (many browser does not support jsx)
import React from 'react'
import reactDom from 'react-dom'
import App from './App'
reactDom.render(<App/>,document.querySelector("#root"));
