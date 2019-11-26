const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const{player}=require('../scripts/player.js')

describe('player constructor', function () {
  it('it will not use default playername when you have given it', function () {
    var newplayer = new player(123)
    expect(newplayer.getplayername()).toEqual('123')
  })
})

describe('player constructor', function () {
  it('it will use default playername when you have not given it', function () {
    var newplayer = new player()
    // assert.equal(newplayer.getplayername(), 'Player')
    expect(newplayer.getplayername()).toEqual('Player')
  })
})

describe('player constructor', function () {
  it('it can handle different kinds of sysbal', function () {
    var newplayer = new player('!@#$% %$$#?":{}')
    // assert.equal(newplayer.getplayername(), '!@#$% %$$#?":{}')
    expect(newplayer.getplayername()).toEqual('!@#$% %$$#?":{}')
  })
})

describe('player setplayername', function () {
  it('it will return the name angus', function () {
    var newplayer = new player()
    newplayer.setplayername('angus')
    // assert.equal(newplayer.getplayername(), 'angus')
    expect(newplayer.getplayername()).toEqual('angus')
  })
})
