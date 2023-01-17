// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Every project must have a title.');
                return false;
            }
        }
    }];

// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log('Your README has been successfully created!')
        }
    })
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// // Function call to initialize app
init()

.then(answers => {
    return generateMarkdown(answers);
})

.then(data => {
    return writeFile(data);
})

.catch(err => {
    console.log(err)
})
