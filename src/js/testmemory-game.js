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
