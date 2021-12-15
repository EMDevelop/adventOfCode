const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = require('chai').expect;
const sonar = require('../../src/dayOne/dayOne');

console.log(sonar);

chai.use(chaiHTTP);

beforeEach(function () {
  testSonar = new sonar();
});

describe('hello', () => {
  it('parse .txt into array', () => {
    expect(testSonar.loadData().length).to.be.gt(0);
  });
});
