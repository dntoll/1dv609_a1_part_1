


//Java Version 1 Correct Password
class SwedishSocialSecurityNumber {
    #helper;
    #ssn;
    
    constructor(stringInput, helper) {
        this.#helper = helper;

        const trimmedSS = stringInput.trim(); 

        if (helper.isCorrectLength(trimmedSS) === false) {
            throw new Error("To short, must be 11 characters");
        }
        if (helper.isCorrectFormat(trimmedSS) === false) {
            throw new Error("Incorrect format, must be: YYMMDD-XXXX");
        }

        this.#ssn = trimmedSS;

        if (helper.isValidMonth(this.getMonth()) === false) {
            throw new Error("Invalid month in SSN");
        }
        if (helper.isValidDay(this.getDay()) === false) {
            throw new Error("Invalid day in SSN");
        }
        if (helper.luhnisCorrect(this.#ssn) === false) {
            throw new Error("Invalid SSN according to Luhn's algorithm");
        }
    }

    getYear() {
        return this.#ssn.substring(0, 2); //YYMMDD-XXXX
    }

    getMonth() {
        return this.#ssn.substring(2, 4); //YYMMDD-XXXX
    }

    getDay() {
        return this.#ssn.substring(4, 6); //YYMMDD-XXXX  0123456-8901
    }

    getSerialNumber() {
        return this.#ssn.substring(7, 11); //YYMMDD-XXXX
    }
}

// Export Password as main export for backward compatibility, and Helper as a property
export { SwedishSocialSecurityNumber }
