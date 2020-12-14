const inquirer = require('inquirer');
const fs = require('fs');

let createTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create README</title>
</head>
<body>
    <div class="container">
        <header>Title of Project</header>
        <h1>Description</h1>
            <p>description</p>
        <h1>Table of Contents</h1>
            <ul>
                <a class="#"><li>Installation</li></a>
                <a class="#"><li>Usage</li></a>
                <a class="#"><li>License</li></a>
                <a class="#"><li>Contributing</li></a>
                <a class="#"><li>Tests</li></a>
                <a class="#"><li>Questions</li></a>
            </ul>
        <hr>
        <h1>Installation</h1>
            <p>installation instructions</p>
        <hr>
        <h1>Usage</h1>
            <p>usage information</p>
        <hr>
        <h1>License</h1>
            <p>Licenses</p>
        <hr>
        <h1>Contributing</h1>
            <p>contribution guidelines</p>
        <hr>
        <h1>Tests</h1>
            <p>test instructions</p>
        <hr>
        <h1>Questions</h1>
            <p>Github Username</p>
    </div>
    
</body>
</html>`;

// console.log(createTemplate);

inquirer
  .prompt(questions)
  .then(answers => {
   console.log(answers)
  })
  .catch(error => {
    console.log(error)
  });

// fs.writeFile('index.html', createTemplate, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });





// array of questions for user
const questions = [ {
    type: 'input',
    name: 'Description',
    message: "Describe your project",
  },
  {
    type: 'input',
    name: 'Table of Contents',
    message: "List the table of contents",
    default: "no comment"
    },
    {
    type: 'input',
    name: 'Installation',
    message: "What are your installation instructions?",
    default: "no comment"
    },
    {
    type: 'input',
    name: 'Usage',
    message: "What is your usage information?",
    default: "no comment"
    },
    {
    type: 'input',
    name: 'Licenses',
    message: "Do you have an licenses?",
    default: "I don't have a license"
    },
    {
    type: 'input',
    name: 'Contributing',
    message: "What are your contributing guidelines?",
    default: "no comment"
    },
    {
    type: 'input',
    name: 'Tests',
    message: "What are your test instructions?",
    default: "no comment"
    },
    {
    type: 'input',
    name: 'Questions',
    message: "What is your github username and email?",
    default: "no comment"
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
