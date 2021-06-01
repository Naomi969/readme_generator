const inquirer = require('inquirer');
const fs = require('fs');

const generateRD = (answers) =>
  `# ${answers.project_name}

  liscence|${answers.license}
  
  ## Description
  
  ${answers.description}
  
  ## Table of Content
  * [Instalation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contribution)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  <a name="Instalation"></a>
  To install the necessary dependencies, run the following command:
  
  ${answers.command}
 
  
  ## Usage
  <a name="Usage"></a>
  ${answers.needToKnow}.
  
  ## License
  <a name="License"></a>
  This project is licensed under the ${answers.license} license.
  
  ## Contributing
  <a name="Contribution"></a>
  ${answers.contributing}.
  
  ## Tests
  <a name="Tests"></a>
  To run tests, run the following command:
 ${answers.test}
  
  ## Questions
  <a name="Question"></a>
  If you have any questions about the repo, open and issue or contact me directly at ${answers.email}. You can find more of my work at 
  [${answers.username}](https://github.com/${answers.username})`;

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
        choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
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
