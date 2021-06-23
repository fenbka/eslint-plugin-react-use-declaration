/**
 * @fileoverview Dont use React.useHook
 * @author Fenbka
 */
"use strict";

module.exports = {
  meta: {
    docs: {
      description: "Dont use React.useHook",
      category: "Possible Errors",
      recommended: true,
    },
    fixable: "code",
  },

  create: function (context) {
    return {
      'CallExpression[callee.object.name="React"]'(node) {
        var hookName =
          node.callee && node.callee.property && node.callee.property.name;
        context.report({
          node,
          message: "Используйте {{hookName}} вместо React.{{hookName}}",
          data: {
            hookName,
          },
          fix(fixer) {
            return fixer.replaceTextRange(
              [node.range[0], node.range[0] + 6],
              ""
            );
          },
        });
      },
    };
  },
};
