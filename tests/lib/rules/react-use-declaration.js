/**
 * @fileoverview Dont use React.useHook
 * @author Fenbka
 */
"use strict";

var rule = require("../../../lib/rules/react-use-declaration"),
  RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("react-use-declaration", rule, {
  valid: ["var a = useState(false)", "useEffect(function() {}, [])"],
  invalid: [
    {
      code: "var a = React.useState(false)",
      errors: [
        {
          message: "Используйте useState вместо React.useState",
          type: "CallExpression",
        },
      ],
      output: "var a = useState(false)",
    },
    {
      code: "React.useEffect(function() {}, [])",
      errors: [
        {
          message: "Используйте useEffect вместо React.useEffect",
          type: "CallExpression",
        },
      ],
      output: "useEffect(function() {}, [])",
    },
  ],
});
