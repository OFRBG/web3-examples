const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const ignoreComponent = {'node_modules': true};
const coreFile = {'package.json': true};
const isCoreFile = (file) => !!coreFile[file];

const join = (basePath) => (file) => path.join(basePath,file);
const removeNodeModules = (component) => !!!ignoreComponent[component];
const splitPath = (dirPath) => dirPath.split(path.sep);

const directoryRoot = join(__dirname)('packages');


/**
 * Recursively find package.json files in the directory
 *
 * @param {Array} packages Paths to package.json files
 * @param {String} currentPath Current path at the recursive call
 * @returns {Array} package.json paths
 */
const findPackages = (packages = [], currentPath = '') => {
  if (fs.lstatSync(join(directoryRoot)(currentPath)).isDirectory()) {
    const content = fs.readdirSync(join(directoryRoot)(currentPath));

    content.filter(isCoreFile).forEach((component) => {
        packages.push(join(currentPath)(component))
    });

    return content
      .filter(removeNodeModules)
      .map(join(currentPath))
      .reduce(findPackages, packages);
  } else {
    return packages;
  }
}

/**
 * Parse an array of path components to an object
 *
 * @param {Array} components Path components
 * @returns {Object} Path as an object
 */
const componentsToObject = (components) => {
  components.pop();
  return _.set({}, components.join('.'), true)
}

/**
 * Parse an array of paths into an object
 *
 * @param {Array} packages Paths to merge into the object
 * @returns {Object} Javascript object with the path routes
 */
const buildDir = (packages) => {
  return _.merge({}, ...packages.map(splitPath).map(componentsToObject));
}

const directory = JSON.stringify(buildDir(findPackages()), null, 2);

fs.writeFileSync(join(__dirname)('directory.json'), directory);
