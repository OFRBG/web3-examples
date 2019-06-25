# Web3 Examples

## IN PROGRESS

This repository contains the example scripts for the Web3.js documentation,
several starter projects and examples of Web3.js modules.

# Web3 Documentation

Documentation, API reference, and templates for the web3js library.

## Getting Started

Install docsify and serve the docs locally.

```bash
npm install
npm run compile
npm run start
```

### Prerequisites

NodeJS, Python, git (for git bash), and npm are required to run and test.

## Running the tests

```bash
npm run build
npm run test
```

## Repo Structure

The project is divided into two main directories, `documentation` and `example-src`.

Inside `documentation` are all the files that contain the documentation like the Docsify files, a `getting-started` directory, and a `reference` directory.

`getting-started` contains the information required to use, set up, and clear up web3js concepts. `reference` contains the information about each module. For example, inside `reference` you'll find a directory called `web3-eth` and a file called `web3-eth.md`. The directory contains the Markdown files describing each method in the `web3-eth` module. These files are then auto-compiled with `npm run compile` into `web3-eth.md`. (This is done to load the whole page at once for the module instead of only one Markdown file per method.)

Inside `example-src` you'll find a lerna monorepo that contains the examples for the documentation. Using `--hoist` we can install `web3` once for all the examples and symlink it across for testing. Each example should be independent, since the docs use CodeSandbox to load the code by pointing at the individual directories.

## Testing with your branch

Inside `documentation` you'll find a file called `config.js`. This JS object contains the paths used by the plugins to replace the `<codesandbox>` tag with the embed. To test your examples, set `orgName` to your Github username, and `branch` to the live branch (i.e. live on Github) with the example code.

### Break down into end to end tests

Each test checks if the example is working and up-to-date.

## Contributing

In [CONTRIBUTING.md](CONTRIBUTING.md) you can find the templates for the API docs reference, as well as the structure for the example packages.

## Authors

* **Oscar "Cehhiro" Fonseca** - contributor - [OFRBG](https://github.com/OFRBG)
* **Samuel Furter** - contributor - [nivida](https://github.com/nivida)

See also the list of [contributors](https://github.com/ethereum/web3-examples/contributors) who participated in this project.
