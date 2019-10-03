import * as core from '@actions/core';
import build from './build';

async function run() {
  try {
    let pluginName = core.getInput('plugin-name', {required: true});

    console.log(`Building plugin ${pluginName}`);

    await build.runBuild(pluginName);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
