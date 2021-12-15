const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = require('chai').expect;
const sonar = require('../../src/dayOne/dayOne');
const sinon = require('sinon');

console.log(sonar);

chai.use(chaiHTTP);

beforeEach(function () {
  testSonar = new sonar();
});

describe('hello', () => {
  it('parse .txt into array', () => {
    expect(testSonar.loadData().length).to.be.gt(0);
  });

  it('two 0 values should return 0', () => {
    var stub = sinon.stub(testSonar, 'loadData');
    stub.returns(['0', '0']);
    expect(testSonar.compareDepths()).to.equal(0);
  });
});
