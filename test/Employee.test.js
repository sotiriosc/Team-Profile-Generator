// Test to see if Employee is created correctly

const Employee = require("../lib/Employee");

// Different syntax for writing test

describe("Employee", () => {
    describe("getName", () => {
        it("Can create an new employee.", () => {
            const employeeInstance = new Employee();
    
            expect(typeof(employeeInstance)).toBe("object");

    })
   
    })
})

// Different syntax for writing test

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Sotirios";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Sotirios", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "chortogiannoss@gmail.com";
    const employeeInstance = new Employee("Sotirios", 2, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Sotirios";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("Sotirios", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "chortogiannoss@gmail.com";
    const employeeInstance = new Employee("Sotirios", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Sotirios", 2, "chortogiannoss@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})