/**
 * @fileoverview Dont use React.useHook
 * @author Fenbka
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Dont use React.useHook",
      category: "Fill me in",
      recommended: true,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      'CallExpression[callee.object.name="React"]'(node) {
        context.report({
          node,
          message: "Используйте useHook вместо React.useHook",
          fix(fixer) {
            fixer;
          },
        });
      },
    };
  },
};
