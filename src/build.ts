import * as exec from '@actions/exec';

async function runBuild(pluginName: string, version: string) {
  await exec.exec(`mvn -q -B versions:set -DnewVersion=${version}`);
  await exec.exec(
    'mvn -q -B clean compile package deploy -DaltDeploymentRepository=snapshots::default::https://maven.pkg.github.com/Twasi -Dtoken=$GH_TOKEN'
  );
}

export default {
  runBuild
};