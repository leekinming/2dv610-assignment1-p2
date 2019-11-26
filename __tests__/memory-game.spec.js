const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const {player} = require('../scripts/player.js')
let {memorygame} = require( '../scripts/memory-game.js')


// ----------------------------- mock the HTMLelement constructor
let ParentOriginal
let ParentMock
class ParentMockclass extends memorygame {
  attachShadow(abc){
    // console.log('i am attachshadow')
    this.shadowRoot = document.createElement('template')
  }
}

class mockplayer extends player {
  getplayername () {
    return 'leekinming'
  }
}

beforeAll(() => {
    ParentOriginal = Object.getPrototypeOf(memorygame)
    ParentMock = jest.fn()
    Object.setPrototypeOf(memorygame, ParentMock)
})

afterAll(()=>{
  Object.setPrototypeOf(memorygame, ParentOriginal)
})

//----------------------------------------------------------------


describe('memory-game constructor', function () {
  it('it will connect to shadowRoot when it been created', function () {
    var newgame = new ParentMockclass()
    expect(newgame.shadowRoot).toBeTruthy()
  })
})

describe('memory-game constructor', function () {
  it('it can call player object getplayername', function () {
    var newgame = new ParentMockclass()
    newgame.playername = new mockplayer('leekinming')
    // assert.equal(newgame.playername.getplayername(), 'leekinming')
    expect(newgame.playername.getplayername()).toEqual('leekinming')
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('it will not change anything when the name is not long or width', function () {
    var newgame = new ParentMockclass()
    newgame.attributeChangedCallback('abcde', 4, 3)
    // assert.equal(newgame.long, 4)
    expect(newgame.long).toEqual(4)
    // assert.equal(newgame.width, 4)
    expect(newgame.width).toEqual(4)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the long value cannot be large then 16', function () {
    var newgame = new ParentMockclass()
    newgame.attributeChangedCallback('long', 4, 100)
    // assert.equal(newgame.long, 4)
    // assert.equal(newgame.width, 4)
    expect(newgame.long).toEqual(4)
    expect(newgame.width).toEqual(4)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the long value should change to 3', function () {
    var newgame = new ParentMockclass()
    newgame.attributeChangedCallback('long', 4, 3)
    // assert.equal(newgame.long, 3)
    // assert.equal(newgame.width, 4)
    expect(newgame.long).toEqual(3)
    expect(newgame.width).toEqual(4)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the long value cannot be small then 1', function () {
    var newgame = new ParentMockclass()
    newgame.attributeChangedCallback('long', 4, 0)
    // assert.equal(newgame.long, 4)
    // assert.equal(newgame.width, 4)
    expect(newgame.long).toEqual(4)
    expect(newgame.width).toEqual(4)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the long value will change to 16', function () {
    var newgame = new ParentMockclass()
    newgame.attributeChangedCallback('width', 4, 1)
    newgame.attributeChangedCallback('long', 4, 16)
    // assert.equal(newgame.long, 16)
    // assert.equal(newgame.width, 1)
    expect(newgame.long).toEqual(16)
    expect(newgame.width).toEqual(1)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the width value cannot large then 16', function () {
    var newgame = new ParentMockclass()
    newgame.attributeChangedCallback('width', 4, 100)
    // assert.equal(newgame.long, 4)
    // assert.equal(newgame.width, 4)
    expect(newgame.long).toEqual(4)
    expect(newgame.width).toEqual(4)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the width value will change to 3', function () {
    var newgame = new ParentMockclass()
    newgame.attributeChangedCallback('width', 4, 3)
    // assert.equal(newgame.long, 4)
    // assert.equal(newgame.width, 3)
    expect(newgame.long).toEqual(4)
    expect(newgame.width).toEqual(3)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the width value cannot small then 1', function () {
    var newgame = new ParentMockclass()
    newgame.attributeChangedCallback('width', 4, 0)
    // assert.equal(newgame.long, 4)
    // assert.equal(newgame.width, 4)
    expect(newgame.long).toEqual(4)
    expect(newgame.width).toEqual(4)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the width * long cannot large then 16', function () {
    var newgame = new ParentMockclass()
    newgame.attributeChangedCallback('width', 4, 8)
    // assert.equal(newgame.long, 4)
    // assert.equal(newgame.width, 4)
    expect(newgame.long).toEqual(4)
    expect(newgame.width).toEqual(4)
  })
})

describe('memory-game attributeChangedCallback', function () {
  it('the player setplayername will be call', function () {
    var newgame = new ParentMockclass()
    newgame.playername = new mockplayer()
    const mockfunction = jest.fn(newgame.playername.setplayername())
    newgame.attributeChangedCallback('playername', 'player', 'leekinming')
    // assert.equal(newgame.long, 4)
    // assert.equal(newgame.width, 4)
    expect(mockfunction.mock.calls.length).toEqual(1)
  })
})

describe('memory-game generatenumberphoto', function () {
  it('the size of photonumber should be 16', function () {
    var newgame = new ParentMockclass()
    newgame.generatenumberphoto()
    // assert.equal(newgame.photonumber.length, 16)
    expect(newgame.photonumber.length).toEqual(16)
  })
})

describe('memory-game generatenumberphoto', function () {
  it('it contain correct element', function () {
    var newgame = new ParentMockclass()
    newgame.long = 2
    newgame.width = 2
    newgame.generatenumberphoto()
    let begin = 1
    for (let i = 0; i < newgame.photonumber.length; i = i + 2) {
      expect(newgame.photonumber[i]).toEqual(begin)
      expect(newgame.photonumber[i + 1]).toEqual(begin)
      begin++
    }
  })
})

describe('memory-game makerandomarray', function () {
  it('it make randomize the array element', function () {
    var newgame = new ParentMockclass()
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
    if (same) { expect(1).not.toEqual(1) }
  })
})

describe('memory-game checkuserselection', function () {
  it('it will not do anything when user select Done.png', function () {
    var newgame = new ParentMockclass()
    const newevent = new Event('click')
    const htmlelement = document.createElement('img')
    Object.defineProperty(newevent, 'target', { value: htmlelement, enumerable: true })
    const actual = newgame.checkuserselection(newevent)
    // assert.equal(actual, false)
    // assert.equal(newgame.selectedid1, null)
    // assert.equal(newgame.selectedid2, null)
    expect(actual).toEqual(undefined)
    expect(newgame.selectedid1).toEqual(null)
    expect(newgame.selectedid2).toEqual(null)
  })
})

describe('memory-game checkuserselection', function () {
  it('it will change the selectedid1 to user selection', function () {
    var newgame = new ParentMockclass()
    const newevent = new Event('click')
    const htmlelement = document.createElement('img')
    htmlelement.setAttribute('src', 'image/0.png')
    Object.defineProperty(newevent, 'target', { value: htmlelement, enumerable: true })
    newgame.checkuserselection(newevent)
    // assert.equal(actual, false)
    // assert.equal(newgame.selectedid1, null)
    // assert.equal(newgame.selectedid2, null)
    // expect(actual).toEqual(false)
    expect(newgame.selectedid1).not.toEqual(null)
  })
})

describe('memory-game checkuserselection', function () {
  it('if user choose same option, selectedid2 will not be definded', function () {
    var newgame = new ParentMockclass()
    const newevent = new Event('click')
    const htmlelement = document.createElement('img')
    htmlelement.setAttribute('src', 'image/0.png')
    Object.defineProperty(newevent, 'target', { value: htmlelement, enumerable: true })
    newgame.selectedid1 = newevent.target
    newgame.checkuserselection(newevent)
    // assert.equal(newgame.selectedid2, null)
    expect(newgame.selectedid2).toEqual(null)
  })
})

describe('memory-game checkuserselection', function () {
  it('if user choose different, value turns should add one', function () {
    var newgame = new ParentMockclass()
    const newevent = new Event('click')
    const htmlelement = document.createElement('img')
    htmlelement.setAttribute('src', 'image/0.png')
    Object.defineProperty(newevent, 'target', { value: htmlelement, enumerable: true })
    newgame.selectedid1 = 123
    newgame.checkuserselection(newevent)
    // assert.equal(newgame.turns, 1)
    expect(newgame.turns).toEqual(1)
  })
})

describe('memory-game checkuserselection', async function () {
  it('after check, selectedid1 and selectedid2 should be reseted', async function () {
    var newgame = new ParentMockclass()
    const newevent = new Event('click')
    const htmlelement = document.createElement('img')
    htmlelement.setAttribute('src', 'image/0.png')
    Object.defineProperty(newevent, 'target', { value: htmlelement, enumerable: true })
    newgame.selectedid1 = 123
    newgame.checkuserselection(newevent)
    setTimeout(() => {
      // assert.equal(newgame.selectedid1, null)
      // assert.equal(newgame.selectedid2, null)
      expect(newgame.selectedid1).toEqual(null)
      expect(newgame.selectedid1).toEqual(null)
    }, 300)
  })
})

describe('memory-game checktheanswer', function () {
  it('it should add new class to those html tag if two selection is match', function () {
    var newgame = new ParentMockclass()
    const select1 = document.createElement('img')
    select1.setAttribute('value', 0)
    const select2 = document.createElement('img')
    select2.setAttribute('value', 1)
    newgame.photonumber = [1, 1]
    newgame.checktheanswer(select1, select2)
    // assert.equal(select1.classList[0], 'removed')
    // assert.equal(select2.classList[0], 'removed')
    expect(select1.classList[0]).toEqual('removed')
    expect(select2.classList[0]).toEqual('removed')
  })
})

describe('memory-game checktheanswer', function () {
  it('it should not add new class to those html tag', function () {
    var newgame = new ParentMockclass()
    const select1 = document.createElement('img')
    select1.setAttribute('value', 0)
    const select2 = document.createElement('img')
    select2.setAttribute('value', 1)
    newgame.photonumber = [1, 2]
    newgame.checktheanswer(select1, select2)
    // assert.equal(select1.classList.length, 0)
    // assert.equal(select2.classList.length, 0)
    expect(select1.classList.length).toEqual(0)
    expect(select2.classList.length).toEqual(0)
  })
})

describe('memory-game checktheanswer', function () {
  it('the value pairdone add one when the two choose is same', function () {
    var newgame = new ParentMockclass()
    const select1 = document.createElement('img')
    select1.setAttribute('value', 2)
    const select2 = document.createElement('img')
    select2.setAttribute('value', 2)
    newgame.checktheanswer(select1, select2)
    // assert.equal(newgame.pairdone, 1)
    expect(newgame.pairdone).toEqual(1)
  })
})

describe('memory-game checktheanswer', function () {
  it('it should not change the value of pairdone when thoes chooses is not match', function () {
    var newgame = new ParentMockclass()
    const select1 = document.createElement('img')
    select1.setAttribute('value', 0)
    const select2 = document.createElement('img')
    select2.setAttribute('value', 1)
    newgame.photonumber = [1, 2]
    newgame.checktheanswer(select1, select2)
    // assert.equal(newgame.pairdone, 0)
    expect(newgame.pairdone).toEqual(0)
  })
})

describe('memory-game checktheanswer', function () {
  it('when those select is not match, it should setsrc equire image/0.png', function () {
    var newgame = new ParentMockclass()
    const select1 = document.createElement('img')
    select1.setAttribute('value', 0)
    const select2 = document.createElement('img')
    select2.setAttribute('value', 1)
    newgame.photonumber = [1, 2]
    newgame.checktheanswer(select1, select2)
    // assert.equal(select1.getAttribute('src'), 'image/0.png')
    // assert.equal(select2.getAttribute('src'), 'image/0.png')
    expect(select1.getAttribute('src')).toEqual('image/0.png')
    expect(select2.getAttribute('src')).toEqual('image/0.png')
  })
})

describe('memory-game drawgameboard', function () {
  it('the total number of element img should be 16', function () {
    var newgame = new ParentMockclass()
    newgame.generatenumberphoto()
    newgame.drawgameboard()
    const gameboardlocation = newgame.shadowRoot.querySelector('#gameboard').getElementsByTagName('img')
    // assert.equal(gameboardlocation.length, 16)
    expect(gameboardlocation.length).toEqual(16)
  })
})

describe('memory-game drawgameboard', function () {
  it('the total number of element br should be 4 if the size of game board is default', function () {
    var newgame = new ParentMockclass()
    newgame.generatenumberphoto()
    newgame.drawgameboard()
    const gameboardlocation = newgame.shadowRoot.querySelector('#gameboard').getElementsByTagName('br')
    const totalbrelement = newgame.long
    // assert.equal(gameboardlocation.length, totalbrelement)
    expect(gameboardlocation.length).toEqual(totalbrelement)
  })
})

describe('memory-game drawgameboard', function () {
  it('the total number of element br should be 3 if the width is 4 and long 3', function () {
    var newgame = new ParentMockclass()
    newgame.attributeChangedCallback('long', 4, 3)
    newgame.generatenumberphoto()
    newgame.drawgameboard()
    const gameboardlocation = newgame.shadowRoot.querySelector('#gameboard').getElementsByTagName('br')
    const totalbrelement = newgame.long
    // assert.equal(gameboardlocation.length, totalbrelement)
    expect(gameboardlocation.length).toEqual(totalbrelement)
  })
})




