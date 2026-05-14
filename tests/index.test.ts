import { describe, expect, it } from 'vitest';
import { format, resolveOptions } from 'indentier';
import plugin from '../src/index.ts';

describe('@indentier/plugin-cs', () => {
  it('registers .cs extension', () => {
    expect(plugin.extensions).toContain('.cs');
  });

  it('is NOT ruby compatible', () => {
    expect(plugin.rubyCompatible).toBe(false);
  });

  it('formats a C# file in default mode (brace exiling)', () => {
    const input = 'class Foo {\n  void Bar() {\n    Console.WriteLine("hi");\n  }\n}\n';
    const out = format(input, resolveOptions({ minColumn: 60, offset: 4 }), '.cs', plugin);
    expect(out.split('\n')[0]).toMatch(/class Foo\s+\{$/);
  });

  it('does NOT inject declaration or end in ruby mode', () => {
    const input = 'class Foo {\n  void Bar() {\n    Console.WriteLine("hi");\n  }\n}\n';
    const out = format(
      input,
      resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 }),
      '.cs',
      plugin,
    );
    expect(out).not.toContain('null');
    expect(out.split('\n').some((l) => l.trim() === 'end')).toBe(false);
  });
});
