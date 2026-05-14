import type { IndentierPlugin } from 'indentier';

/**
 * indentier plugin for C# (.cs)
 *
 * Ruby mode is **disabled** for C# — a bare identifier expression such as `end;`
 * is not a valid statement in C#, and there is no concise file-scope variable
 * syntax that would work as a declaration.
 *
 * This plugin registers `.cs` files so indentier can apply basic formatting
 * (brace/semicolon exiling) to them.
 */
const plugin: IndentierPlugin = {
  extensions: ['.cs'],
  rubyCompatible: false,
  declarationTemplate: null,
};

export default plugin;
