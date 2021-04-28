// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const generatorMarkdown = require("./utils/generateMarkdown")
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'input',
    message: 'Please enter your project description',
    name: 'description',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'input',
    message: 'Please describe the Installation',
    name: 'installation',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'input',
    message: 'Please describe the usage',
    name: 'usage',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'input',
    message: 'Please list your Contributors',
    name: 'contributors',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'input',
    message: 'Please list your Instructions',
    name: 'instructions',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'input',
    message: 'Please list your credits',
    name: 'credits',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'list',
    message: 'Please choose your license',
    name: 'license',
    choices: ['GNU', 'Apache', 'Boost'],
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'input',
    message: 'Please enter your GitHub path',
    name: 'gitHub',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'input',
    message: 'Please enter your email address',
    name: 'email',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  }
]
)
  .then((data) => {
    let licenseLink = ""
    if (data.license === "Apache") {
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.txt"
    }
    else if (data.license === "GNU") {
      licenseLink = "https://choosealicense.com/licenses/lgpl-3.0/#"
    }
    else {
      licenseLink = "Boost"
    }
    const filename = 'README.md';
    const readMe = `
  # 🏁 ${data.title} 🏁
  # Description ✏️
  ### ${data.description}
  # Table of Contents 🗃️
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contributors)
  * [Credits](#credits)
  * [License](#license)
  
  # Installation 📖
  ${data.installation}
  ## Usage 📜
  ${data.usage}
  ## Contribution 🤝
  ${data.contributors}
  ### Instructions 📝
  ${data.instructions}
  ## Credits 📋
  ${data.credits}
  ## License
  The application you're enjoying is covered under the ${data.license} license.
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](${licenseLink})
  # Questions 💡
    For questions, please email me, or contact me via GitHub.
  * Email ✉️: ${data.email}
  * GitHub 🖥️: ${data.gitHub}`;
    console.log(readMe);
    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();


