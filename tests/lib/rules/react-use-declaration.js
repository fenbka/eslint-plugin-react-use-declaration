/**
 * @fileoverview Dont use React.useHook
 * @author Fenbka
 */
"use strict";

var rule = require("../../../lib/rules/react-use-declaration"),
  RuleTester = require("eslint").RuleTester;

var errorObject = {
  message: "Используйте useHook вместо React.useHook",
  type: "CallExpression",
};

var ruleTester = new RuleTester();
ruleTester.run("react-use-declaration", rule, {
  valid: ["var a = useState(false)", "useEffect(function() {}, [])"],
  invalid: [
    {
      code: "var a = React.useState(false)",
      errors: [errorObject],
    },
    {
      code: "React.useEffect(function() {}, [])",
      errors: [errorObject],
    },
  ],
});
