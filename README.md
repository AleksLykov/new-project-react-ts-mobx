# The base structure of the project.

## Composition: React (hooks), Typescript, MobX (with decorators), Sass, moment.js and yup-validation

## Folder structure

- **/api** - сontains endpoints grouped by category
- **/components** - сontains component files. The application pages are collected from them
- **/constants** - сontains static application data (strings, objects, arrays)
- **/hooks** - сontains custom hooks React.JS
- **/pages** - сontains the application page files. One file - one page (with a unique url)
- **/routes** - сontains the routing settings in the application
- **/store** - сontains state manager files (in this case MobX)
- **/styles** - сontains application style files. Structured according to the "components" and "pages" folders
- **/tests** - сontains files and settings for automatic testing in the application
- **/types** - сontains information about the types and enums used in the application
- **/utils** - сontains additional and auxiliary methods for application components

> ESLint and Prettier are also configured in the application
