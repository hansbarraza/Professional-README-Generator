// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('It is important to link your GitHub repo so users know where to find more of you work.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('It is important to provide email address for anyone with questions to contact you.');
                return false;
            }
        }
    },
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
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('It is important to provide a detailed description of the project.');
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Provide instructions for installation to ensure users have proper software installed to run application.');
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for usage?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Providing instructions for usage will help users learn how to navigate application.');
                return false;
            }
        }  
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GNU', 'GPL'],
        default: ['MIT'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Provide instructions on how other users can contribute to your project.');
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe the tests in your application and how to use them.',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Provide tests instructions.');
                return false;
            }
        }  
    },
];

// Create a function to write README file
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

// Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
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
