# The base structure of the project.

# Composition: React (hooks), Typescript, MobX (with decorators), Sass, moment.js and yup-validation

## Folder structure

- **/api** - Contains endpoints grouped by category
- **/components** - Contains component files. The application pages are collected from them
- **/constants** - Contains static application data (strings, objects, arrays)
- **/hooks** - Contains custom hooks React.JS
- **/pages** - Contains the application page files. One file - one page (with a unique url)
- **/routes** - Contains the routing settings in the application
- **/store** - Contains state manager files (in this case MobX)
- **/styles** - Contains application style files. Structured according to the "components" and "pages" folders
- **/tests** - Contains files and settings for automatic testing in the application
- **/types** - Contains information about the types and enums used in the application
- **/utils** - Contains additional and auxiliary methods for application components

> ESLint and Prettier are also configured in the application
