pipeline
{
    agent any
    environment {
        // Define any environment variables here if needed
        TEST_ENV = 'qa'

    }
    parameters {
        // string(name: 'UI_BASE_URL_LOCAL', defaultValue: 'https://www.qapractice.com/', description: 'Base URL for the application under test')

        choice(name: 'UI_BASE_URL_QA', choices: ['https://www.qapractice.com/', 'https://staging.qapractice.com/'], description: 'Base URL for the application under test')
    }
    options {
        // Set a timeout for the entire pipeline (e.g., 30 minutes)
        timeout(time: 30, unit: 'MINUTES')
        // Discard old builds to save space
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }
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
                withEnv(["UI_BASE_URL_LOCAL=${params.UI_BASE_URL_LOCAL}"]) {
                    bat 'npx playwright test'
                }
                
            }
        }
        
    }

    post {
        always {

           
            // Archive all reports and test artifacts
            archiveArtifacts(
                artifacts: 'playwright-report/**, test-results/**',
                allowEmptyArchive: true
            )

            // Publish HTML report
            publishHTML(target: [
                reportName: 'Playwright HTML Report',
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true
            ])
        }

        success {
            echo 'All automation stages completed successfully!'
        }

        failure {
            echo 'Automation execution failed. Check reports for details.'
        }
    }

}