pipeline {
    agent any
     environment {
        IMAGE_TAG = "${BUILD_NUMBER}"
    }
    stages {
        stage('checkout') { 
            steps {
                checkout scmGit(branches: [[name: 'main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Harrydmc/portfolio_website.git']])
            }
           }
        stage('Build') {
            agent {
                docker {
                    image 'node:latest'
                    
                    reuseNode true
                }
            }
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        stage('Docker-Build'){
            steps {
               sh 'docker build -f Dockerfile-new -t dominicsavier/my-portfolio:${BUILD_NUMBER} .'
            }
        }
        stage('Docker Push') {
      agent any
      steps {
        withCredentials([usernamePassword(credentialsId: 'docker-hub-cred', passwordVariable: 'pwd', usernameVariable: 'user')])  {
          sh "docker login -u ${user} -p ${pwd}"
          sh 'docker push dominicsavier/my-portfolio:${BUILD_NUMBER}'
        }
      }
     }
    }
}
