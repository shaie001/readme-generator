const inquirer = require("inquirer");
const fs = require("fs");

function getUserInput() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of the project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What is the installation process for this project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is this project used for?",
    },
    {
      type: "input",
      name: "contributionGuidelines",
      message: "What are the contribution guidelines?",
    },
    {
      type: "input",
      name: "testInstructions",
      message: "How do you test this project?",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for this project.",
      choices: ["Apache", "MIT", "Mozilla", "Open Software"],
    },
    {
      type: "input",
      name: "username",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);
}

function generateReadme(response) {
  let template = `# Project Title: ${response.title}
  
[![License](https://img.shields.io/badge/License-${response.license}%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Tests](#Tests)
- [Questions](#Questions)

## Description

${response.description}

## Installation

${response.installation}

## Usage

${response.usage}

## Contribution

${response.contributionGuidelines}

## Tests

${response.testInstructions}

## Questions

If you have any questions, please feel free to reach out at my github username, ${response.username}, or via email at: ${response.email}

  `;

  fs.writeFile("README.md", template, (err) => {
    if (err) throw err;
    console.log("README was generated!");
  });
}

async function startProject() {
  try {
    const response = await getUserInput();
    console.log(response);
    generateReadme(response);
  } catch (err) {
    console.log(err);
  }
}

startProject();
