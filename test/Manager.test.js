// Test to see if manager is created correctly
const { describe } = require("yargs");
const Manager = require("../lib/Manager");


test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Sotirios", 2, "chortogiannoss@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Sotirios", 2, "chortogiannoss@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Sotirios", 2, "chortogiannoss@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});