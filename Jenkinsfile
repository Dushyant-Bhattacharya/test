pipeline {
  agent any
  stages {
    stage('CommitStage') {
      steps {
        git(url: 'https://github.com/Dushyant-Bhattacharya/test.git', branch: 'master')
        sh 'echo "hello world"'
      }
    }

  }
}