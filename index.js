const inquirer = require('inquirer');
const fs = require('fs');

let createTemplate = `# ReadMeTemplate


Description


Table of Contents
    Installation
    Usage
    License
    Contributions
    Tests
    Questions


Installation


Usage


License


Contributing


Tests


Questions`;

console.log(createTemplate);


fs.writeFile('README.md', createTemplate, (err) => {
    if (err) throw err;
    
});

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
    },
    {
    type: 'input',
    name: 'Installation',
    message: "What are your installation instructions?",
    },
    {
    type: 'input',
    name: 'Usage',
    message: "What is your usage information?",
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
    },
    {
    type: 'input',
    name: 'Tests',
    message: "What are your test instructions?",
    },
    {
    type: 'input',
    name: 'Questions',
    message: "What is your github username and email?",
    },
];

inquirer
  .prompt(questions)
  .then(answers => {
   console.log(answers)
  })
  .catch(error => {
    console.log(error)
  });


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
