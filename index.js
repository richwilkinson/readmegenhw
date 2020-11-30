//node modules
const inquirer = require('inquirer');
const fs = require('fs');

//question
inquirer.prompt([
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title",
        validate: (value)=>{ if(value){return true} else {return "I need input to proceed."}}
    },
    {
        type: "input",
        message: "Does your app have any dependencies? If so, please list.",
        name: "dependency",
        default: "none"
    },
    {
        type: "input",
        message: "How do you use your app?",
        name:"instructions",
        validate: (value)=>{ if(value){return true} else {return "I need input to proceed."}}
    },
    {
        type: "input",
        message: "Did anyone contribute to your app?",
        name: "contributors",
        default: "none"
    },
    {
        type: "list",
        message: "Choose your license",
        name: "license",
        choices: ["MIT, Apache License 2.0, General Public License V3.0, Eclipse Public License 2.0, Boost Software License 1.0"],
        default: "MIT License"
    },
    {
        type: "input",
        message: "GitHub Username:",
        name: "githubName",
        validate: (value)=>{ if(value){return true} else {return "I need input to proceed."}}
    },
    {
        type: "input",
        message: "Email:",
        name: "userEmail",
        validate: (value)=>{ if(value){return true} else {return "I need input to proceed."}}
    }

]).then(({
    title,
    dependency,
    instructions,
    contributors,
    license,
    githubName,
    userEmail
}))