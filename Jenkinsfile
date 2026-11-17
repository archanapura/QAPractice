pipeline
{
    agent any
    stages
    {
        stage('cloning the project')
        {
            steps
            {
                echo 'Cloning the project...'
                // git clone https://github.com/archanapura/QAPractice.git
                checkout scm
            }
        }
        stage('Environment Setup') {
             steps {
            bat 'node --version'
            bat 'npm --version'
            bat 'git --version'
            }
        }
        stage('Installation')
        {
            steps
            {
                echo 'Installing dependencies...'
                 bat 'npm ci'
                 bat 'npx playwright install chromium'
            }
        }
        stage('Code Quality Checks')
        {
            steps
            {
                echo 'Quality checks...'
                bat 'npx tsc --noEmit'
                // bat 'npx eslint .'
            }
        }
         stage('Execution')
        {
            steps
            {
                echo 'Executing tests...'
                bat '$env:UI_BASE_URL_LOCAL="https://www.qapractice.com/"  npx playwright test'
            }
        }
        stage('Reporting')
        {
            steps
            {
                echo 'Generating reports...'
            }
        }
    }
}