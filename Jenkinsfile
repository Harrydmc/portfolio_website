pipeline {
    agent any
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
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                    reuseNode true
                }
            }
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Docker-Build'){
            steps {
               sh 'docker build -f Dockerfile-new -t dominicsavier/my-portfolio .'
            }
        }
    }
}
