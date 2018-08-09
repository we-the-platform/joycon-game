import Controller from 'unswitch';
import { defaultAction } from './actions';

const actions = side => ({
  b: p => defaultAction(p, side, 'b'),
  a: p => defaultAction(p, side, 'a'),
  y: p => defaultAction(p, side, 'y'),
  x: p => defaultAction(p, side, 'x'),
  sl: p => defaultAction(p, side, 'sl'),
  sr: p => defaultAction(p, side, 'sr'),
  minus: p => defaultAction(p, side, 'minus'),
  plus: p => defaultAction(p, side, 'plus'),
  lstick: p => defaultAction(p, side, 'lstick'),
  rstick: p => defaultAction(p, side, 'rstick'),
  home: p => defaultAction(p, side, 'home'),
  screenshot: p => defaultAction(p, side, 'screenshot'),
  bumper: p => defaultAction(p, side, 'bumper'), // L or R
  trigger: p => defaultAction(p, side, 'trigger'), // ZL or ZR
  axes: p => console.log('p', p),
});

const joycons = {
  left: new Controller({
    side: 'L', // or R
    ...actions('L'),
  }),
  right: new Controller({
    side: 'R', // or R
    ...actions('R'),
  }),
};

export default joycons;
