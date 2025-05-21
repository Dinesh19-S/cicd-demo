pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Dinesh19-S/https://github.com/Dinesh19-S/cicd-demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("cicd-demo")
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    dockerImage.run("-d -p 3000:3000")
                }
            }
        }
    }
}
