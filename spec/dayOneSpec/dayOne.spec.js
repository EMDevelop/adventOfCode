describe('day one', () => {
  // beforeEach
  beforeEach(function () {
    sonar = new Sonar();
  });

  it('works', () => {
    expect(sonar.data.length >= 0).toBeTruthy();
  });
});
