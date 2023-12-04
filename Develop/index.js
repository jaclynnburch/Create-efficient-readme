// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFile(path.join(proces.cwd(), fileName), data);
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating Efficient README.md file');
        writeToFile('/.')
    }
}

// Function call to initialize app
init();
