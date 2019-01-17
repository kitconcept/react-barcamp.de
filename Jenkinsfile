#!groovy

pipeline {

  agent {
    label 'node'
  }

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
        sh 'yarn install'
        sh 'node_modules/gatsby/dist/bin/gatsby.js build --prefix-paths'
        sh 'tar cfz public.tgz public'
        stash includes: 'public.tgz', name: 'public.tgz'
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
            sh 'yarn install'
            sh 'yarn run format:ci'
          }
        }
        // stage('Outdated') {
        //   agent {
        //     label 'node'
        //   }
        //   steps {
        //     deleteDir()
        //     checkout scm
        //     sh 'yarn install'
        //     sh 'yarn outdated'
        //   }
        // }
      }
    }


    // Deploy
    stage('Deploy to react-barcamp.de') {
      agent {
        label 'kitconcept.io'
      }
      when {
        branch 'master'
      }
      steps {
        deleteDir()
        unstash 'public.tgz'
        sh 'tar xfz public.tgz'
        sh 'ls -al'
        sh 'rsync -avz --delete --force ./public /srv/react-barcamp/.'
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
            sh 'yarn install'
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
            sh 'yarn install'
            sh 'yarn run lighthouse:ci'
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
