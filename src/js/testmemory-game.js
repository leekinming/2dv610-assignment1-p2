// import { Memorygame } from '../js/memory-game.js'
var assert = chai.assert

describe('memory-game constructor', function () {
  it('it will connect to shadowRoot when it been created', function () {
    var newgame = new memorygame()
    if (!newgame.shadowRoot) {
      assert.fail()
    }
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('it will not change anything when the name is not long or width', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('abcde', 4, 3)
    assert.equal(newgame.long, 4)
    assert.equal(newgame.width, 4)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the long value cannot be large then 16', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('long', 4, 100)
    assert.equal(newgame.long, 4)
    assert.equal(newgame.width, 4)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the long value should change to 3', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('long', 4, 3)
    assert.equal(newgame.long, 3)
    assert.equal(newgame.width, 4)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the long value cannot be small then 1', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('long', 4, 0)
    assert.equal(newgame.long, 4)
    assert.equal(newgame.width, 4)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the long value will change to 16', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('long', 4, 16)
    assert.equal(newgame.long, 16)
    assert.equal(newgame.width, 4)
  })
})
