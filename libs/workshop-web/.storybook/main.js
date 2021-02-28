const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(...['../src/lib/**/*.stories.@(ts|tsx|mdx)']);

module.exports = rootMain;
