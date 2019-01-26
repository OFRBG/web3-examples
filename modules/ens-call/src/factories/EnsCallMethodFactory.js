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
 * @file StarterMethodFactory.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2019
 */

import {AbstractMethodFactory} from 'web3-core-method';
import EnsCallMethod from '../methods/EnsCallMethod';

export default class EnsCallMethodFactory extends AbstractMethodFactory {
  /**
   * @param {MethodModuleFactory} methodModuleFactory
   * @param {Utils} utils
   * @param {Object} formatters
   * @param {Ens} ens
   *
   * @constructor
   */
  constructor(methodModuleFactory, utils, formatters, ens) {
    super(methodModuleFactory, utils, formatters);

    this.ens = ens;
    this.methods = {
      call: EnsCallMethod
    }
  }

  /**
   * Returns an MethodModel
   *
   * @param {String} name
   *
   * @returns {AbstractMethod}
   */
  createMethod(name) {
    if (name === 'call') {
      return new EnsCallMethod(
        this.utils,
        this.formatters,
        this.methodModuleFactory.accounts,
        this.methodModuleFactory.createMessageSigner(),
        this.ens
      );
    }

    return super.createMethod(name);
  }


}
