const inquirer = require('inquirer');
const fs = require('fs');
const generateRD = require('./utils/generateMarkdown')

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'project_name',
      message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'MPL 2.0', 'None']
    },
    {
        type: 'input',
        name: 'command',
        message: 'What command should be run to install dependencies?',
        default:'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'what command should be run to run tests?',
        default:'npm test',
    },
    {
        type: 'input',
        name: 'needToKnow',
        message: 'What does the user need to know about the using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
  ])
  .then((answers) => {
    const RDPageContent = generateRD(answers);

    fs.writeFile('README.md', RDPageContent, (err) =>
      err ? console.log(err) : console.log('Generating README...')
    );
    console.log(answers)
  });

 


  