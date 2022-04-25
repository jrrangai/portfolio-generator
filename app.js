const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers))
  .catch((error) => {
    if (error.isTtyError) {
      console.log('Prompt could not be rendered.')
    } else {
      console.log('Something else went wrong!')
    }
  });

// const fs = require( 'fs' );
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.htm to see the output!');
// });
















// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
//   };
  
//   printProfileData(profileDataArgs);