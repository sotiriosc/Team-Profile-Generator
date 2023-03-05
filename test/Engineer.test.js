// Test to see if Engineer is created correctly
const { describe } = require("yargs");
const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "SotiriosChortogiannos";
    const employeeInstance = new Engineer("Sotirios", 2, "chortogiannoss@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});



test("Testing getGithub will return github.", () => {
    const testGithub = "SotiriosChortogiannos";
    const employeeInstance = new Engineer("Sotirios", 2, "chortogiannoss@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Sotirios", 2, "chortogiannoss@gmail.com", "SotiriosChortogiannos");;
    expect(employeeInstance.getRole()).toBe(returnValue);
});