#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const boxen = require("boxen");
const chalk = require("chalk");

// Because we like console, and captains.log sounds cool
const captains = console;

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "single",
};

// Text + chalk definitions
const data = {
  name: chalk.white("Jean Londero /"),
  age: chalk.white("26 /"),
  handle: chalk.cyan("Dev"),
  work: chalk.white("Desenvolvedor Web"),
  twitter: chalk.cyan("https://twitter.com/jclondero"),
  github: chalk.cyan("https://github.com/jclondero"),
  linkedin: chalk.cyan("https://linkedin.com/in/jean-londero"),
  npx: chalk.white("npx @jclondero/card"),
  labelWork: chalk.white.bold("      Work:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelCard: chalk.white.bold("      Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  newline +
  newline +
  carding;

const cardMessage = chalk.green(boxen(output, options));
captains.log(cardMessage);
