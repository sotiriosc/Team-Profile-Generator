// Test to see if Intern is created correctly
const { default: expect } = require("expect");

const Intern = require("../lib/Intern");

// Different syntax for writing test

describe("getSchool", () => {
    it("Can create school.", () => {
        const testSchool = "School Name"
        const employee = new Intern("Sotirios", 2, "chortogiannoss@gmail.com", testSchool);

        expect(testSchool).toBe(employee.school)
    })
})

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Sotirios", 2, "chortogiannoss@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Sotirios", 2, "chortogiannoss@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Sotirios", 2, "chortogiannoss@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});