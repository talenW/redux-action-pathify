import { actionTypeGenerator, PATH } from './actionTypeGenerator';

describe('actionTypeGenerator', () => {
  it('should return correct actions', () => {
    const actionMap = {
      a: PATH,
      b: PATH,
      c: { d: PATH, e: PATH, f: { g: PATH } },
    };

    expect(actionTypeGenerator(actionMap)).toStrictEqual({
      a: 'a',
      b: 'b',
      c: { d: 'c/d', e: 'c/e', f: { g: 'c/f/g' } },
    });
  });
});
