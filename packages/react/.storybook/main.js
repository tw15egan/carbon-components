/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  stories: ['../src/**/*-story.js'],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    'storybook-readme/register',
    './addon-carbon-theme/register',
  ],
  typescript: { reactDocgen: 'none' },
};
