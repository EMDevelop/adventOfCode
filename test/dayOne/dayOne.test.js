const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = require('chai').expect;
const sonar = require('../../src/dayOne/dayOne');
const sinon = require('sinon');

chai.use(chaiHTTP);

beforeEach(function () {
  testSonar = new sonar();
});

describe('Sonar Depth Comparison - Exercise 1', () => {
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

  it('checks their dummy data', () => {
    var stub = sinon.stub(testSonar, 'loadData');
    stub.returns([
      '199',
      '200',
      '208',
      '210',
      '200',
      '207',
      '240',
      '269',
      '260',
      '263',
    ]);
    expect(testSonar.compareDepths()).to.equal(7);
  });
});

// describe('Sonar Depth Comparison - Exercise 2', () => {
//   it('creates array with 3 values summed', () => {
//     var stub = sinon.stub(testSonar, 'loadData');
//     stub.returns(['1', '1', '1', '2']);
//     expect(testSonar.sumThreeElements()[0]).to.equal(3);
//     expect(testSonar.sumThreeElements()[1]).to.equal(4);
//   });
// });
