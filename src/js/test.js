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

describe('checktheanswer', function () {
  it('it should add new class to those html tag', function () {
    var newgame = new memorygame()
    const select1 = document.createElement('img')
    select1.setAttribute('value', 0)
    const select2 = document.createElement('img')
    select2.setAttribute('value', 1)
    newgame.photonumber = [1, 1]
    newgame.checktheanswer(select1, select2)
    assert.equal(select1.classList[0], 'removed')
    assert.equal(select2.classList[0], 'removed')
  })
})

describe('checktheanswer', function () {
  it('it should not add new class to those html tag', function () {
    var newgame = new memorygame()
    const select1 = document.createElement('img')
    select1.setAttribute('value', 0)
    const select2 = document.createElement('img')
    select2.setAttribute('value', 1)
    newgame.photonumber = [1, 2]
    newgame.checktheanswer(select1, select2)
    assert.equal(select1.classList.length, 0)
    assert.equal(select2.classList.length, 0)
  })
})

describe('checktheanswer', function () {
  it('the value pairdone add one when the two choose is same', function () {
    var newgame = new memorygame()
    const select1 = document.createElement('img')
    select1.setAttribute('value', 2)
    const select2 = document.createElement('img')
    select2.setAttribute('value', 2)
    newgame.checktheanswer(select1, select2)
    assert.equal(newgame.pairdone, 1)
  })
})

describe('checktheanswer', function () {
  it('it should not change the value of pairdone when thoes chooses is not match', function () {
    var newgame = new memorygame()
    const select1 = document.createElement('img')
    select1.setAttribute('value', 0)
    const select2 = document.createElement('img')
    select2.setAttribute('value', 1)
    newgame.photonumber = [1, 2]
    newgame.checktheanswer(select1, select2)
    assert.equal(newgame.pairdone, 0)
  })
})

describe('checktheanswer', function () {
  it('when those select is not match, it should setsrc equire image/0.png', function () {
    var newgame = new memorygame()
    const select1 = document.createElement('img')
    select1.setAttribute('value', 0)
    const select2 = document.createElement('img')
    select2.setAttribute('value', 1)
    newgame.photonumber = [1, 2]
    newgame.checktheanswer(select1, select2)
    assert.equal(select1.getAttribute('src'), 'image/0.png')
    assert.equal(select2.getAttribute('src'), 'image/0.png')
  })
})

describe('checkuserselection', function () {
  it('when user choose Done.png it should return false', function () {
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

describe('checkuserselection', function () {
  it('if user choose same option, selectedid2 will not be definded', function () {
    var newgame = new memorygame()
    const newevent = new Event('click')
    const htmlelement = document.createElement('img')
    htmlelement.setAttribute('src', 'image/Done.png')
    Object.defineProperty(newevent, 'target', { value: htmlelement, enumerable: true })
    newgame.selectedid1 = newevent.target
    newgame.checkuserselection(newevent)
    assert.equal(newgame.selectedid2, null)
  })
})

describe('checkuserselection', function () {
  it('if user choose different, value turns should add one', function () {
    var newgame = new memorygame()
    const newevent = new Event('click')
    const htmlelement = document.createElement('img')
    htmlelement.setAttribute('src', 'image/0.png')
    Object.defineProperty(newevent, 'target', { value: htmlelement, enumerable: true })
    newgame.selectedid1 = 123
    newgame.checkuserselection(newevent)
    assert.equal(newgame.turns, 1)
  })
})

describe('checkuserselection', async function () {
  it('after check, selectedid1 and selectedid2 should be reseted', async function () {
    var newgame = new memorygame()
    const newevent = new Event('click')
    const htmlelement = document.createElement('img')
    htmlelement.setAttribute('src', 'image/0.png')
    Object.defineProperty(newevent, 'target', { value: htmlelement, enumerable: true })
    newgame.selectedid1 = 123
    newgame.checkuserselection(newevent)
    setTimeout(() => {
      assert.equal(newgame.selectedid1, null)
      assert.equal(newgame.selectedid2, null)
    }, 300)
  })
})
