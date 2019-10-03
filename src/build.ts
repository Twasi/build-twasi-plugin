import * as exec from '@actions/exec';

async function runBuild(pluginName: string, version: string) {
  await exec.exec(`mvn versions:set -DnewVersion=${version}`);
  await exec.exec(
    'mvn clean compile package deploy -Dregistry=https://maven.pkg.github.com/Twasi -Dtoken=GH_TOKEN'
  );
}

export default {
  runBuild
};