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
    console.log(`Building plugin ${pluginYml['name']}`);

    await build.runBuild(pluginYml['name']);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
