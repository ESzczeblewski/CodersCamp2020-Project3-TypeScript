/**
 * @jest-environment jsdom
 */

import uiEngine from '../src/uiEngine';


describe('Testing uiEngine class', () => {
  // document.body.innerHTML = '<canvas id="canvas"></canvas>';

  const myCanvas = document.createElement('canvas');

  const engine = new uiEngine(myCanvas);

  test('Class initialization', () => {
    expect(engine).toEqual({ canvas: myCanvas })
  })

  test('Create canvas overlay', () => {
    expect(engine['createOverlay'](myCanvas)).toBeTruthy();
  })

  test('Create heading', () => {
    expect(engine['createHeading']()).toBeTruthy();
  })

})