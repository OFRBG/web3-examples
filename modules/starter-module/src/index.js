/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2019
 */

import * as Utils from 'web3-utils';
import {formatters} from 'web3-core-helpers';
import {MethodModuleFactory} from 'web3-core-method';
import {ProvidersModuleFactory} from 'web3-providers';
import {Contract} from 'web3-eth-contract';
import {starterABI} from "./contracts/starter/starter-contract-abi";
import StarterMethodFactory from './factories/StarterMethodFactory'
import StarterModule from "./StarterModule";

/**
 * Returns a object of type StarterModule
 *
 * @param {EthereumProvider|HttpProvider|WebsocketProvider|IpcProvider|String} provider
 * @param {Object} options
 *
 * @returns {StarterModule}
 */
export const Starter = (provider, options) => {
  const methodModuleFactory = new MethodModuleFactory();

  return new StarterModule(
    provider,
    new ProvidersModuleFactory(),
    methodModuleFactory,
    new StarterMethodFactory(methodModuleFactory, Utils, formatters),
    options
  );
};

/**
 * Returns a object of type MyContract
 *
 * @param {EthereumProvider|HttpProvider|WebsocketProvider|IpcProvider|String} provider
 * @param {Accounts} accounts
 *
 * @returns {Contract}
 */
export const MyContract = (provider, accounts) => {
  return new Contract(provider, accounts, starterABI, '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c', {});
};

export StarterContract from "./contracts/starter/StarterContract";
