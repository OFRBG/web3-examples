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
 * @file StarterSubscriptions.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2019
 */

import {SyncingSubscription} from 'web3-core-subscriptions';

export default class StarterSubscription extends SyncingSubscription {
  /**
   * @param {Utils} utils
   * @param {Object} formatters
   * @param {AbstractWeb3Module} moduleInstance
   *
   * @constructor
   */
  constructor(utils, formatters, moduleInstance) {
    super(utils, formatters, moduleInstance)
  }

  /**
   * This method will be executed on each new subscription item.
   *
   * @method onNewSubscriptionItem
   *
   * @param {any} subscriptionItem
   *
   * @returns {Object}
   */
  onNewSubscriptionItem(subscriptionItem) {
    // This overwrites the default behavior of SyncingSubscription it means the 'changed' event got no longer emitted.
    return this.formatters.outputSyncingFormatter(subscriptionItem);
  }
}