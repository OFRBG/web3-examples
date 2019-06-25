# Contribution Template

## API Reference

Below is the suggested format to follow for the documentation files. 

---

## methodNameOrProperty
```js
web3.module.methodNameOrProperty(params [, optionalParams]);
```
> Description 
>
> <hr>
>
> #### Parameters
>
> | Parameter | Type | Optional | Default | Description |
> |:-|:-:|:-:|:-:|:-|
> | `paramName` | `type` |  |  |  |
>
> #### Returns: `type`
>
> | Property | Type | Description |
> |:-|:-:|:-|
> | `propName` | `type` | 7-12 word description |
>
> <hr>
> 
> ?> Info
> 
> !> Warning
>
> <codesandbox>module-path/methodNameOrProperty</codesandbox>

---

## Example Microproject

Below is the directory structure of the project documentation and its examples. The `reference` directory has a mirror structure to `example-src`. This allows us to use the CodeSandbox API easily by referencing the example counterpart with the codesandbox HTML tag. Instead of posting the files, CodeSandbox fetches them directly from GitHub. 

#### Directory Structure

The name of the example directory **must** match its counterpart in `documentation/reference`.

```
.
+-- documentation/
|   +-- getting-started/
|   |-- ...
|   +-- reference/
|       +-- module-name/
|           +-- methodNameOrProperty/
|               +-- index.js
|               |-- sandbox.config.js
|               |-- package.json
|               +-- test/
|                    +-- index.spec.js
+-- example-src/
    +-- module-name/
        +-- methodNameOrProperty/
            +-- index.js
            |-- sandbox.config.js
            |-- package.json
            +-- test/
                +-- index.spec.js
```

#### `example-src` files

###### `package.json`
```js
{
  "name": "methodNameOrProperty",
  "version": "x.x.x",
  "main": "index.js",
  "scripts": {
    "start": "parcel index.html --open",
    "build": "parcel build index.html"
  },
  "dependencies": {
    "web3": "latest"
  }
}
```

###### `sandbox.config.js`
```js
{
  "infiniteLoopProtection": true,
  "hardReloadOnChange": false,
  "view": "browser",
  "template": "parcel"
}
```

###### `index.js`
```js
import Web3 from "web3";
const web3 = new Web3("https://kovan.infura.io/metamask");

async function main() {
  /* demo here */
}

main();

export default main;
```

###### `test/index.spec.js`
```js
import example from '../index.js';
import Web3 from "web3";
const web3 = new Web3("https://kovan.infura.io/metamask");

it('testDescription', async () => {
  expect().toBe();
});
```
