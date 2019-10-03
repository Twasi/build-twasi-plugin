import * as core from '@actions/core';
import * as fs from 'fs';
import * as yaml from 'yaml';
import build from './build';

async function run() {
  try {
    const pluginYmlRaw = fs.readFileSync(
      './src/main/resources/plugin.yml',
      'utf8'
    );
    const pluginYml = yaml.parse(pluginYmlRaw);

    const pluginName = pluginYml['name'];
    const pluginVersion = pluginYml['version'];

    console.log(`Building plugin ${pluginName} on ${pluginVersion}`);

    await build.runBuild(pluginName, pluginVersion);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
