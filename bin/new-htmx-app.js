#!/usr/bin/env node
// File: bin/new-htmx-app.js

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const appName = process.argv[2] || '.';
const appDirectory = path.resolve(appName === '.' ? process.cwd() : appName);
const templateRepo = 'https://github.com/codegympr/create-htmx-app.git';

try {
  // Clone the repository
  execSync(`git clone ${templateRepo} ${appDirectory}`, { stdio: 'inherit' });

  // Change to the app directory and install dependencies if not in the current directory
  if(appName !== '.') {
    process.chdir(appDirectory);
    execSync('npm install', { stdio: 'inherit' });
  }

  console.log(`Success! Created htmx app in ${appDirectory}.`);
  console.log('Inside that directory, you can run several commands:');
  console.log('');
  console.log('  npm start');
  console.log('    Starts the development server.');
  console.log('');
  console.log('We suggest that you begin by typing:');
  console.log(`  cd ${appName !== '.' ? appName : ''}`);
  console.log('  npm i && npm start');
  console.log('');
} catch (error) {
  console.error('Error creating new htmx app:', error);
  process.exit(1);
}
