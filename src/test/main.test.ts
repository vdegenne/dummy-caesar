import * as chai from 'chai';
import { caesar } from '../dummy-caesar';

const expect = chai.expect;

suite('Caesar', () => {
  test('github returns qsdrel (10)', () => {
    expect(caesar('github', 10)).to.equal('qsdrel');
  });

  test('GITHUB returns QSDREL (10)', () => {
    expect(caesar('GITHUB', 10)).to.equal('QSDREL');
  })
});
