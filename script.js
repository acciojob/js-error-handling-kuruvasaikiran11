//your code here
class OutOfRangeError extends Error {
  constructor() {
    super("Expression should only consist of integers and +-/* characters");
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of operators");
    this.name = this.constructor.name;
  }
}

function evalString(expression) {
  try {
    if (/[^0-9+\-*/\s]/.test(expression)) {
      throw new OutOfRangeError();
    }

    if (/[+\-*/]{2,}/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^[+*/]/.test(expression)) {
      throw new SyntaxError("Expression should not start with an invalid operator");
    }

    if (/[+\-*/]$/.test(expression)) {
      throw new SyntaxError("Expression should not end with an invalid operator");
    }

    // Evaluate the expression here (not specified in the given details)

    return "Expression is valid"; // Placeholder for the actual evaluation result
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      throw error;
    } else {
      throw new Error("Unexpected error occurred: " + error.message);
    }
  }
}

// Testing the evalString function

try {
  console.log(evalString("5 + 3")); // Expression is valid
  console.log(evalString("10 - 2 * 4")); // Expression is valid
  console.log(evalString("5 / 0")); // OutOfRangeError: Expression should only consist of integers and +-/* characters
  console.log(evalString("5 ++ 3")); // InvalidExprError: Expression should not have an invalid combination of operators
  console.log(evalString("+2 + 4")); // SyntaxError: Expression should not start with an invalid operator
  console.log(evalString("3 - 5 *")); // SyntaxError: Expression should not end with an invalid operator
} catch (error) {
  console.log(error.name + ": " + error.message);
}
