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

inquirer
  .prompt(questions)
  .then(answers => {
   console.log(answers)
  })
  .catch(error => {
    console.log(error)
  });

fs.writeFile('README.md', createTemplate, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
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
