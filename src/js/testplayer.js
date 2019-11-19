var assert = chai.assert

describe('constructor', function () {
  it('it will not use default playername when you have given it', function () {
    var newplayer = new player(123)
    assert.equal(newplayer.getplayername(), '123')
  })
})
