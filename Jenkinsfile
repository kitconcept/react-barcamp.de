#!groovy

pipeline {

  agent any

  options {
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '20'))
    timeout(time: 15, unit: 'MINUTES')
  }

  stages {

    // Build
    stage('Build') {
      agent {
        label 'node'
      }
      steps {
        deleteDir()
        checkout scm
        sh 'npm install'
        sh 'node_modules/gatsby/dist/bin/gatsby.js build --prefix-paths'
      }
    }

    // Static Code Analysis
    stage('Static Code Analysis') {
      parallel {
        stage('Prettier') {
          agent {
            label 'node'
          }
          steps {
            deleteDir()
            checkout scm
            sh 'npm install'
            sh 'npm run format:ci'
          }
        }
        stage('Outdated') {
          agent {
            label 'node'
          }
          steps {
            deleteDir()
            checkout scm
            sh 'npm install'
            sh 'npm outdated'
          }
        }
      }
    }


    // Deploy
    stage('Deploy') {
      agent {
        label 'kitconcept.io'
      }
      when {
        branch 'master'
      }
      steps {
        sh '(cd /srv/react-barcamp.de/ && git fetch --all && git reset --hard origin/master)'
        sh '(cd /srv/react-barcamp.de/ && npm install)'
        sh '(cd /srv/react-barcamp.de/ && node_modules/gatsby/dist/bin/gatsby.js build --prefix-paths)'
      }
    }

    // Performance Tests
    stage('Performance Tests') {
      parallel {
        stage('Page Speed Insights') {
          agent {
            label 'node'
          }
          when {
            branch 'master'
          }
          steps {
            deleteDir()
            checkout scm
            sh 'npm install'
            script {
              psiExitCode = sh(
                script: 'yarn run psi',
                returnStdout: true
              )
            }
            echo "psiExitCode: ${psiExitCode}"
            echo "Pipeline result: ${currentBuild.result}"
            echo "Pipeline currentResult: ${currentBuild.currentResult}"
          }
        }
        stage('Lighthouse') {
          agent {
            label 'node'
          }
          when {
            branch 'master'
          }
          steps {
            deleteDir()
            checkout scm
            sh 'npm install'
            sh 'npm run lighthouse:ci'
          }
          post {
            always {
              publishHTML (target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: '.',
                reportFiles: 'lighthouse-report.html',
                reportName: "Lighthouse"
              ])
            }
          }
        }
      }
    }

  }
}
