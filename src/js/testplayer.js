var assert = chai.assert

describe('player constructor', function () {
  it('it will not use default playername when you have given it', function () {
    var newplayer = new player(123)
    assert.equal(newplayer.getplayername(), '123')
  })
})

describe('player constructor', function () {
  it('it will use default playername when you have not given it', function () {
    var newplayer = new player()
    assert.equal(newplayer.getplayername(), 'Player')
  })
})

describe('player constructor', function () {
  it('it can handle different kinds of sysbal', function () {
    var newplayer = new player('!@#$% %$$#?":{}')
    assert.equal(newplayer.getplayername(), '!@#$% %$$#?":{}')
  })
})
