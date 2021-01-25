#!/bin/bash
coverage_file="coverage/lcov.info"
npm run test -- --coverage --watchAll=false
echo "uploading to sonar..."
npm run sonar-scanner -- \
  -Dsonar.projectKey=404Bandits_Frontend \
  -Dsonar.sources=src \
  -Dsonar.exclusions="**.test.js, src/lib/*.js, src/components/chatbot/*.js, src/App.js, src/components/WkaMarker.js" \
  -Dsonar.host.url=https://www.robert-magnus.de/sonar \
  -Dsonar.login=619bfdb5a111b6f429c2b5efe4c014b77c9ea8ec \
  -Dsonar.links.ci=https://www.robert-magnus.de/jenkins/job/404Bandits_Build/ \
  -Dsonar.links.scm=https://www.robert-magnus.de/gitlab/htw/404bandits/wka \
  -Dsonar.javascript.lcov.reportPaths=$coverage_file
echo "done"
