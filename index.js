// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// array of questions for user input
const questions = [
     {
        type: 'input',
        name: 'title',
        message: 'Your Project Title',
     },
     {
        type: 'input',
        name: 'description',
        message: 'A short description of the purpose and functionality of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Steps required to install your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instruction and examples for use, including screenshots. To add a screenshot, create an \'assets/images\' folder in your repot to upload your files to.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, with links to their GitHub profiles. For other resouces, please provide links'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license application to this project',
        choices: ['MIT', 'Apache 2.0', 'GNU', 'Creative Commons Licesnses'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },

];


inquirer.prompt(questions).then(({ title, description, installation, usage, credits, license, username, email }) => {

    // readme template
    const READMEfile = `# ${title}
    
## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This application is covered under the ${license} license.

## Contributing
Contributions to this project are welcome. Please refer to the [Contributor Covenant](https://www.contributor-covenant.org/) for more information.

## Tests
Command tests:np
\`\`\` npm test \`\`\`

## Questions
For any questions or inquiries, please contact me via GitHub or email:
- GitHub: [${username}](https://github.com/${username})
- Email: ${email}
`;

    // function to create README with fs
    function createNewFile(fileName, content) {
        fs.writeFile(fileName, content, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('README.md created.');
            }
        });
    }

    // function call to create README
    createNewFile('README.md', READMEfile);
});