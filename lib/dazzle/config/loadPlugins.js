'use strict';

function loadPlugin(plugin, paths) {
  if (typeof plugin === 'string') {
    // Apply the plugin with default options if passing only a string
    return loadPlugin({ name: plugin }, paths);
  }

  if (typeof plugin === 'function') {
    return [plugin, {}];
  }

  // Support for not released plugins without options
  // Use plugin.object if you need options
  if (typeof plugin === 'object' && !plugin.name && !plugin.object) {
    return [plugin, {}];
  }

  if (typeof plugin.func === 'function') {
    // Used for writing plugin tests
    return [plugin.func, plugin.options];
  }

  if (typeof plugin.object === 'object') {
    // Used for writing plugin tests
    return [plugin.object, plugin.options];
  }

  const isScopedPlugin = plugin.name.startsWith('@') && plugin.name.includes('/');
  let scope;
  let scopedPluginName;
  if (isScopedPlugin) {
    const pluginNameParts = plugin.name.split("/");
    scope = pluginNameParts[0];
    scopedPluginName = pluginNameParts[1]
  }

  const completePluginNames = [
    isScopedPlugin && `${scope}/dazzle-plugin-${scopedPluginName}`,
    isScopedPlugin && plugin.name,
    `dazzle-plugin-${plugin.name}`,
    `${plugin.name}/dazzle-plugin`,
  ].filter(Boolean);

  // Try to find the plugin in node_modules
  let dazzlePlugin = null;
  for (const completePluginName of completePluginNames) {
    try {
      dazzlePlugin = require(completePluginName);
    // eslint-disable-next-line no-empty
    } catch (error) {}
    
    if (dazzlePlugin) {
      break;
    }
  }
  if (!dazzlePlugin) {
    const last = completePluginNames.pop();
    throw new Error(`Unable to find '${completePluginNames.join("', '")}' or ${last}'`);
  }

  return [dazzlePlugin, plugin.options];
}

function loadPlugins(plugins, paths) {
  return plugins.map(function(plugin) {
    return loadPlugin(plugin, paths);
  });
}

module.exports = loadPlugins;
