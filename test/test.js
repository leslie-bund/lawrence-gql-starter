const EasyGraphQLTester = require('easygraphql-tester');
const fs = require('fs');
const path = require('path');
const resolvers = require('../app/graphqlHelpers/resolvers');
const { expect } = require("chai");
const schemaCode = fs.readFileSync(
  path.join(__dirname, ".","schema.graphql"),
  "utf8"
);
const tester = new EasyGraphQLTester(schemaCode, resolvers);
describe("Test Schema, Queries and Mutation", () => {
  let tester;
  beforeAll(() => {
    tester = new EasyGraphQLTester(schemaCode, resolvers);
    //just to make sure schema comes through swiftly
    //console.log(util.inspect(tester))
  });
it("Should pass with a valid query", () => {
      
      const query = `
      {
        getAllEmployees {
          id
          last_name
        }
      }      
      `;
      // First arg: true because the query is valid
      // Second arg: query to test
      tester.test(true, query);
    });

it("Should pass with a valid query", () => {
      
      const query = `
      {
        getEmployeesRoles {
          id
          employee_id
        }
      }      
      `;
      // First arg: true because the query is valid
      // Second arg: query to test
      tester.test(true, query);
    });
it("Should fail with an invalid query", () => {
      
      const query = `
      {
        getEmployeesRoles {
          id
          employee_
        }
      }      
      `;
      // First arg: false because the query is invalid
      // Second arg: query to test
      tester.test(false, query);
    });

it("Should fail with an invalid query", () => {
      
      const query = `
      {
        getEmployeesProjects {
          id
          employee_
        }
      }      
      `;
      // First arg: false because the query is invalid
      // Second arg: query to test
      tester.test(false, query);
    });
});