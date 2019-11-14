// import { Memorygame } from '../js/memory-game.js'
var assert = chai.assert

describe('attributeChangedCallback', function () {
  it('when set long large than 4, should not change the default size', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('long', 4, 100)

    assert.equal(newgame.long, 4)
    assert.equal(newgame.width, 4)
  })
})

describe('attributeChangedCallback', function () {
  it('when set long <= 4, should change long to 2', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('long', 4, 2)

    assert.equal(newgame.long, 2)
    assert.equal(newgame.width, 4)
  })
})

describe('attributeChangedCallback', function () {
  it('when set width large than 4, should not change the default size', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('width', 4, 100)

    assert.equal(newgame.long, 4)
    assert.equal(newgame.width, 4)
  })
})

describe('attributeChangedCallback', function () {
  it('when set width <= 4, should change width to 2', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('width', 4, 2)

    assert.equal(newgame.long, 4)
    assert.equal(newgame.width, 2)
  })
})

describe('attributeChangedCallback', function () {
  it('when name not equire "long" or "width" , should not change the default size', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('llkdjslfkjlajsd', 4, 2)

    assert.equal(newgame.width, 4)
    assert.equal(newgame.long, 4)
  })
})
