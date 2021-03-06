/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
'use strict';

const runJest = require('../runJest');

describe('Correct beforeEach order', () => {
  it('ensures the correct order for beforeEach', () => {
    const result = runJest('before-each-queue');
    expect(result.stdout).toMatchSnapshot();
  });
});
