const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = require('chai').expect;
const submarine = require('../../src/dayTwo/dayTwo');
const sinon = require('sinon');

chai.use(chaiHTTP);

beforeEach(function () {
  sub = new submarine();
});

describe('submarine moving', () => {
  it('can move forward', () => {
    var stub = sinon.stub(sub, 'loadData');
    stub.returns([
      ['forward', '4'],
      ['forward', '5'],
    ]);
    sub.followCommands();
    expect(sub.horizontalSum).to.equal(9);
  });
});
