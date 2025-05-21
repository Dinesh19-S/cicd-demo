pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', credentialsId: 'git-HuB', url: 'https://github.com/Dinesh19-S/cicd-demo.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t cicd-demo:latest .'
            }
        }
        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 cicd-demo:latest'
            }
        }
    }
}
