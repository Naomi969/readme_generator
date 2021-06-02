function renderLicenseBadge(license) {

  if (license === 'MIT') {

    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

  }

  if (license === 'MPL 2.0') {

    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'

  }

  if (license === 'APACHE 2.0') {

    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

  }
  if (license === 'GPL 3.0') {

    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

  }
  if (license === 'None') {

    return ''

  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === 'MIT') {

    return 'Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)'
  }
  if (license === 'MPL 2.0') {

    return 'Licensed under the [MPL 2.0 License](https://choosealicense.com/licenses/mpl-2.0/#)'
  }
  if (license === 'APACHE 2.0') {

    return 'Licensed under the [Apache License](https://choosealicense.com/licenses/apache-2.0/)'
  }
  if (license === 'GPL 3.0') {

    return 'Licensed under the [GPL 3.0 License](https://choosealicense.com/licenses/gpl-3.0/)'
  }
  if (license === 'None') {

    return ''
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  } else {
    return '## License:'
  }
}
const generateRD = (answers) =>
  `# ${answers.project_name}

  ${renderLicenseBadge(answers.license)}
  ${renderLicenseSection(answers.license)}
  ${renderLicenseLink(answers.license)}
  
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

module.exports = generateRD;
