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
        name: 'features',
        message: 'Please list features, if not mentioned above.',
    },

];


inquirer.prompt(questions).then(({ title, description, installation, usage, credits, license, feature }) => {
    // readme template
    const READMEfile = `# ${title}\n\n[Description](#description)\n\n[Installation](#installation)\n\n[Usage](#usage)\n\n[Credits](#credits)\n\n[License](#license)\n\n[Feature](#feature)\n\n## Description\n\n${description}\n\n## Installation\n\n${installation}\n\n## Usage\n\n${usage}\n\n## Credits\n\n${credits}\n\n## License\n\n${license}\n\n## Feature\n\n${feature}`;

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