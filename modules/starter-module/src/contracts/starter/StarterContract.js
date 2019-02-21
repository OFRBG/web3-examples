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
 * @file StarterContract.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2019
 */

import {AbstractContract} from 'web3-eth-contract';
import {starterABI} from './starter-contract-abi';

export default class StarterContract extends AbstractContract {
  /**
   * @param {EthereumProvider|HttpProvider|WebsocketProvider|IpcProvider|String} provider
   * @param {ProvidersModuleFactory} providersModuleFactory
   * @param {MethodModuleFactory} methodModuleFactory
   * @param {ContractModuleFactory} contractModuleFactory
   * @param {PromiEvent} PromiEvent
   * @param {AbiCoder} abiCoder
   * @param {Utils} utils
   * @param {Object} formatters
   *
   * @constructor
   */
  constructor(
    provider,
    providersModuleFactory,
    methodModuleFactory,
    contractModuleFactory,
    PromiEvent,
    abiCoder,
    utils,
    formatters,
  ) {
    super(
      provider,
      providersModuleFactory,
      methodModuleFactory,
      contractModuleFactory,
      PromiEvent,
      abiCoder,
      utils,
      formatters,
      starterABI,
      '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c',
      {}
    )
  }
}