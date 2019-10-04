import * as exec from '@actions/exec';

async function runBuild(pluginName: string, version: string) {
  const mvn = `mvn - q -B -s ${__dirname}/../settings.xml`;
  console.log(__dirname);

  await exec.exec(`${mvn} versions:set -DnewVersion=${version}`);
  await exec.exec(
    '${mvn} clean compile package deploy -DaltDeploymentRepository=snapshots::default::https://maven.pkg.github.com/Twasi -Dserver.password=$GH_TOKEN -Dserver.username=LarsBaertschi'
  );
}

export default {
  runBuild
};