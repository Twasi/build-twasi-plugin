import * as exec from '@actions/exec';

async function runBuild(pluginName: string, version: string) {
  const mvn = `mvn -q -B -s ${__dirname}/../settings.xml`;
  console.log(__dirname);

  await exec.exec(`${mvn} versions:set -DnewVersion=${version}`);
  await exec.exec(
    `${mvn} clean compile package deploy -DaltDeploymentRepository=central::default::https://artifactory.twasi.net/artifactory/libs-release-local -Dserver.password=$ARTIFACTORY_PASSWORD -Dserver.username=$ARTIFACTORY_USER`
  );
}

export default {
  runBuild
};
