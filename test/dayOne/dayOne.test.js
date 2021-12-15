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

describe('Sonar Depth Comparison', () => {
  it('parse .txt into array', () => {
    expect(testSonar.loadData().length).to.be.gt(0);
  });

  it('two idendical values', () => {
    var stub = sinon.stub(testSonar, 'loadData');
    stub.returns(['0', '0']);
    expect(testSonar.compareDepths()).to.equal(0);
  });

  it('an increasing value', () => {
    var stub = sinon.stub(testSonar, 'loadData');
    stub.returns(['0', '1']);
    expect(testSonar.compareDepths()).to.equal(1);
  });

  it('checks for more than one increase', () => {
    var stub = sinon.stub(testSonar, 'loadData');
    stub.returns(['0', '1', '2']);
    expect(testSonar.compareDepths()).to.equal(2);
  });
});
