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
    newgame.attributeChangedCallback('width', 4, 1)
    newgame.attributeChangedCallback('long', 4, 16)
    assert.equal(newgame.long, 16)
    assert.equal(newgame.width, 1)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the width value cannot large then 16', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('width', 4, 100)
    assert.equal(newgame.long, 4)
    assert.equal(newgame.width, 4)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the width value will change to 3', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('width', 4, 3)
    assert.equal(newgame.long, 4)
    assert.equal(newgame.width, 3)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the width value cannot small then 1', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('width', 4, 0)
    assert.equal(newgame.long, 4)
    assert.equal(newgame.width, 4)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the width * long cannot large then 16', function () {
    var newgame = new memorygame()
    newgame.attributeChangedCallback('width', 4, 8)
    assert.equal(newgame.long, 4)
    assert.equal(newgame.width, 4)
  })
})

describe('memory-game generatenumberphoto', function () {
  it('the size of photonumber should be 16', function () {
    var newgame = new memorygame()
    newgame.generatenumberphoto()
    assert.equal(newgame.photonumber.length, 16)
  })
})

describe('memory-game generatenumberphoto', function () {
  it('it contain correct element', function () {
    var newgame = new memorygame()
    newgame.long = 2
    newgame.width = 2
    newgame.generatenumberphoto()
    let begin = 1
    for (let i = 0; i < newgame.photonumber.length; i = i + 2) {
      if (newgame.photonumber[i] !== begin || newgame.photonumber[i + 1] !== begin) {
        assert.fail()
      }
      begin++
    }
  })
})

describe('memory-game makerandomarray', function () {
  it('it make randomize the array element', function () {
    var newgame = new memorygame()
    newgame.long = 2
    newgame.width = 2
    newgame.generatenumberphoto()
    const origanal = [1, 1, 2, 2]
    newgame.makerandomarray()
    let same = true
    let j = 0
    for (let i = 0; i < newgame.photonumber.length; i++) {
      if (newgame.photonumber[i] !== origanal[j]) {
        same = false
      }
      j++
    }
    if (same) { assert.fail() }
  })
})

describe('memory-game checkuserselection', function () {
  it('it will not do anything when user select Done.png', function () {
    var newgame = new memorygame()
    const newevent = new Event('click')
    const htmlelement = document.createElement('img')
    htmlelement.setAttribute('src', 'image/Done.png')
    Object.defineProperty(newevent, 'target', { value: htmlelement, enumerable: true })
    const actual = newgame.checkuserselection(newevent)
    assert.equal(actual, false)
    assert.equal(newgame.selectedid1, null)
    assert.equal(newgame.selectedid2, null)
  })
})
