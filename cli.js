#!/usr/bin/env node

const cfonts = require('cfonts');
const inquirer = require('inquirer');
const chalk = require('chalk');

// 1. アスキーアートロゴ（cfontsのみで出力）
cfonts.say('ROBO-HI', {
  font: 'block',
  align: 'center',
  colors: [
    '#FF0000', // 真っ赤
    'red', 'redBright', 'yellow', 'green', 'cyan', 'blue', 'magenta', 'yellowBright', 'greenBright', 'blueBright', '#FFA500'
  ],
  background: 'transparent',
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: '0',
});

// 2. Tips
console.log(chalk.gray('Tips for getting started:'));
console.log(chalk.gray('1. Ask questions, edit files, or run commands.'));
console.log(chalk.gray('2. Be specific for the best results.'));
console.log(chalk.gray('3. /help for more information.'));
console.log();

// 3. プロンプト入力受付
inquirer
  .prompt([
    {
      type: 'input',
      name: 'userInput',
      message: chalk.cyan('>'),
    },
  ])
  .then((answers) => {
    console.log(chalk.green('You entered:'), answers.userInput);
  }); 