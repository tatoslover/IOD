# Module 1.1 Introduction To Programming

# Module 1.2 Web Development 101

# Module 1.3 Managing Code

# Module 1.4 Intro To NodeJS

# Module 1.5 Package Managers

## Packages
Mostly rely on pre-existing packages.
A developer’s main job is to almost “fill in the gaps” by evaluating and using existing libraries and adding custom code to link them together.
Building complex applications comes from experience, and that experience translates into common architectural patterns and packages.
Re-writing these for every project does not make sense, so instead we make use of well-established libraries.

## Node Package Manager
npm (originally short for Node Package Manager) is a package manager for the JavaScript runtime environment Node.js maintained by npm, Inc.
It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.
The registry is accessed via the NodeJS client, and the available packages can be browsed and searched via the npm website.
Written entirely in JavaScript and was developed by Isaac Z. Schlueter.
Released in 2010, the npm supports over 17 million developers globally, offering elegant, productive, and safe JavaScript development through the world's largest software registry, hosting over two million packages.

[npmjs](https://www.npmjs.com/package/robust-sum)
[npm rank](https://gist.github.com/anvaka/8e8fa57c7ee1350e3491)

### Class Exercise
Find three packages on NPM that you could use to build some application, to add features such as encryption, logging, AI support, parsing content from files, or sending emails.

- [css-loader](https://www.npmjs.com/package/css-loader)
- [winston](https://www.npmjs.com/package/winston)
- [colors](https://www.npmjs.com/package/colors)

## Usage
NPM can manage packages that are local dependencies of a particular project, as well as globally-installed JavaScript tools.
All the dependencies of a project are defined through the package.json file.
It allows users to consume and distribute JavaScript modules that are available in the registry.
We can use packages published by others.
We can publish packages for others to use.

Tha package.json file is used to keep track of packages we use locally.
The part called dependencies, are all the packages downloaded and managed through NPM.
It is not abnormal to have 90% of an application made up of packages, and not our own code.

# Module 1.6 Debugging



# Module 1.7 Variables & Data Structures

Variables contain data.

In JavaScript, var used to be the primary way to declare variables.
It allowed variables to be created without considering the scope (where they were defined) and could lead to bugs and unexpected behavior in complex code.
We don't use var anymore due to:
- Scope Issues: var variables can lead to bugs because they are function-scoped rather than
block-scoped. This often leads to unexpected behaviour.
- Readability and Maintainability: by using let for variables that can change and const for
constants, code becomes more readable and easier to understand.
- Strictness and Errors: let and const enforce stricter rules, which can prevent common pitfalls
and improve code quality.

Overall, while var is still valid JavaScript syntax and works in older codebases, let and const offer
more predictable and safer ways to declare variables in modern JavaScript development.
They promote best practices and help developers write cleaner, more maintainable code.



#	Module 1.8 Software Requirements Specifications (SRS)

#	Module 1.9 Testing
