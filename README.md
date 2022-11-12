![CircleCI](https://img.shields.io/circleci/build/github/Mandonglawrence/dnar-assessment/main?style=for-the-badge&token=c9a400a55e9353ea81f9cba0940c85b12a333d30)

# dnar assessment backend
## How to test the code locally
- clone this repository
- cd into the root folder
- create .env file in the root folder
- include the following fields in the .env file you created:
- - MONGODB_URI=your mongodb connection string
- - PORT=4000
- - SALTROUNDS=10
- run the following commands:
- - npm install ==> to install dependencies
- - npm test ==> to run test
- - npm start ==> to start the app
- navigate to localhost:4000/graphql ==> to test the app on the graphql playground

## deployed app link
- The link takes you directly to the graphql playground.
- You can just jump right into testing the queries and mutations by following the hosted app link below: 
- - Link: https://dnar-assessment.herokuapp.com/graphql
