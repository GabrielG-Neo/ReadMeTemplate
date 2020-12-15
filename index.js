const inquirer = require('inquirer');
const fs = require('fs');

// function to write README file
let writeToFile = (name, message) => {
  return `# ReadMeTemplate
  Description${message};
  Table of Contents${message}
      Installation
      Usage
      License
      Contributions
      Tests
      Questions
  Installation${message}
  Usage${message}
  License${message}
  Contributing${message}
  Tests${message}
  Questions${message}`;
}

const {name, message} = answers;

console.log(createTemplate);



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

    const createTemplate = writeToFile(name, message);
    fs.writeFile('README.md', createTemplate, (err) => {
      if (err) throw err;
    });
  })
  .catch(error => {
    console.log(error)
  });




// function to initialize program
function init() {

}

// function call to initialize program
init();
