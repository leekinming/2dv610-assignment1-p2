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

describe('generatenumberphoto', function () {
  it('For default size the length of array should be 16', function () {
    var newgame = new memorygame()
    newgame.generatenumberphoto()
    assert.equal(newgame.photonumber.length, 16)
  })
})

describe('generatenumberphoto', function () {
  it('change the size of gameboard', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('width', 4, 2)
    newgame.generatenumberphoto()
    assert.equal(newgame.photonumber.length, 8)
  })
})

describe('makerandomarray', function () {
  it('change the order of array', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('width', 4, 2)
    newgame.attributeChangedCallback('long', 4, 2)
    newgame.generatenumberphoto()
    var origanalarray = [1, 1, 2, 2]
    newgame.makerandomarray()
    let issame = true
    let j = 0
    for (let i = 0; i < newgame.photonumber.length; i++) {
      if (newgame.photonumber[i] !== origanalarray[j]) {
        issame = false
      }
      j++
    }
    if (!issame) { assert.equal(true, true) } else { assert.fail() }
  })
})

describe('makerandomarray', function () {
  it('the length should not been change', function () {
    var newgame = new memorygame()
    newgame.generatenumberphoto()
    newgame.makerandomarray()
    assert.equal(newgame.photonumber.length, 16)
  })
})

describe('drawgameboard', function () {
  it('the total number of element img should be 16', function () {
    var newgame = new memorygame()
    newgame.generatenumberphoto()
    newgame.drawgameboard()
    const gameboardlocation = newgame.shadowRoot.querySelector('#gameboard').getElementsByTagName('img')
    assert.equal(gameboardlocation.length, 16)
  })
})

describe('drawgameboard', function () {
  it('the total number of element br should be 4 if the size of game board is default', function () {
    var newgame = new memorygame()
    newgame.generatenumberphoto()
    newgame.drawgameboard()
    const gameboardlocation = newgame.shadowRoot.querySelector('#gameboard').getElementsByTagName('br')
    const totalbrelement = newgame.long
    assert.equal(gameboardlocation.length, totalbrelement)
  })
})

describe('drawgameboard', function () {
  it('the total number of element br should be 3 if the width is 4 and long 3', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('long', 4, 3)
    newgame.generatenumberphoto()
    newgame.drawgameboard()
    const gameboardlocation = newgame.shadowRoot.querySelector('#gameboard').getElementsByTagName('br')
    const totalbrelement = newgame.long
    assert.equal(gameboardlocation.length, totalbrelement)
  })
})
