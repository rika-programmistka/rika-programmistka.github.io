const one = document.getElementsByClassName('one')[0]
const three = document.getElementsByClassName('three')[0]
const two = document.getElementsByClassName('two')[0]
const rtrn = document.getElementsByClassName('return')[0]
const p1 = document.getElementsByClassName('p')[0]
const p2 = document.getElementsByClassName('p')[1]
const wndw = document.getElementsByClassName('window')[0]
const input1 = document.getElementsByClassName('input1')[0]
const input2 = document.getElementsByClassName('input2')[0]
const input3 = document.getElementsByClassName('input3')[0]
const button = document.getElementsByClassName('button')[0]
const windowdiv1 = document.getElementsByClassName('windowdiv1')[0]
const windowdiv2 = document.getElementsByClassName('windowdiv2')[0]
const menudiv = document.getElementsByClassName('menudiv')[0]
const reset = document.getElementById('reset')
const checkbox1 = document.getElementById('checkbox1')
const checkbox2 = document.getElementById('checkbox2')
const checkbox3 = document.getElementById('checkbox3')
const menu = document.getElementById('menu')
const menuclose = document.getElementById('menuclose')
const attention = document.getElementById('attention')
const im = document.getElementById('im')
const spacetxt = document.getElementById('spacetxt')
const bd = document.getElementsByTagName('body')[0]
three.style.top = '297px'
three.style.left = '270px'
one.style.top = '35px'
one.style.left = '354px'
two.style.top = '199px'
two.style.left = '475px'
one.style.zIndex = 1
two.style.zIndex = 2
three.style.zIndex = 3
let interval1
const f = (txt, param) => {
  const arr = txt.split('')
  let num = arr
  num.pop()
  num.pop()
  num = num.join('')
  num = Number(num)
  num = num + param
  num = String(num)
  num = num + 'px'
  return num
}
const size = (txt, param) => {
  const arr = txt.split('')
  let num = arr
  num.pop()
  for (let i = 0; i < 5; i++) {
    num.shift()
  }
  num.shift()
  num = num.join('')
  num = Number(num)
  num = num + param
  g = num
  num = String(num)
  num = 'scale(' + num + ')'
  if (g > 0) {
    return num
  }
}
const size1 = (txt) => {
  const arr = txt.split('')
  let num = arr
  num.pop()
  for (let i = 0; i < 5; i++) {
    num.shift()
  }
  num.shift()
  num = num.join('')
  num = Number(num)
  return num
}
const size2 = (num) => {
  num = 'scale(' + num + ')'
  return num
}
let moonmotion = 1
d1 = 0
d2 = 0
d3 = 0
let v = 0
let r = 0
let att = 0
const tm = () => {
  setTimeout(() => {
    three.style.left = f(three.style.left, 600)
    setTimeout(() => {
      three.style.transition =
        'all 0.2s, left 17s, top 17s, z-index 0s, transform 17s'
    }, 1000)
    setTimeout(() => {
      three.style.transform = transform(three.style.transform, 0)
    }, 8500)
    setTimeout(() => {
      three.style.zIndex = 1
      three.style.left = f(three.style.left, -600)
    }, 17000)
    setTimeout(() => {
      three.style.transform = transform(three.style.transform, 1)
    }, 25000)
    setTimeout(() => {
      three.style.zIndex = 3
    }, 34000)
  }, 1)
  interval1 = setInterval(() => {
    three.style.left = f(three.style.left, 600)
    setTimeout(() => {
      three.style.transform = transform(three.style.transform, 0)
    }, 8500)
    setTimeout(() => {
      three.style.zIndex = 1
    }, 17000)
    setTimeout(() => {
      three.style.left = f(three.style.left, -600)
    }, 17000)
    setTimeout(() => {
      three.style.transform = transform(three.style.transform, 1)
    }, 25000)
    setTimeout(() => {
      three.style.zIndex = 3
    }, 34000)
  }, 34000)
}
tm()
document.addEventListener('keydown', (event) => {
  const key = event.code
  if (key == 'ArrowUp') {
    three.style.transition =
      'all 0.2s, left 17s, top 1s, z-index 0s, transform 1s'
    three.style.top = f(three.style.top, -30)
    setTimeout(() => {
      three.style.transition =
        'all 0.2s, left 17s, top 17s, z-index 0s, transform 1s'
    }, 1000)
  } else if (key == 'ArrowDown') {
    three.style.transition =
      'all 0.2s, left 17s, top 1s, z-index 0s, transform 1s'
    three.style.top = f(three.style.top, 30)
    setTimeout(() => {
      three.style.transition =
        'all 0.2s, left 17s, top 17s, z-index 0s, transform 1s'
    }, 1000)
  } else if (key == 'ArrowRight') {
    if (moonmotion == 0) {
      three.style.transition = 'all 1s'
      three.style.left = f(three.style.left, 30)
      setTimeout(() => {
        three.style.transition =
          'all 0.2s, left 17s, top 17s, z-index 0s, transform 1s'
      }, 1000)
    } else if (moonmotion == 1) {
      if (att == 0) {
        att = att + 1
        attention.style.display = 'block'
        setTimeout(() => {
          attention.style.opacity = 1
        }, 1)
        setTimeout(() => {
          attention.style.opacity = 0
        }, 5000)
        setTimeout(() => {
          attention.style.display = 'none'
          att = att - 1
        }, 6000)
      }
    }
  } else if (key == 'ArrowLeft') {
    if (moonmotion == 0) {
      three.style.transition = 'all 1s'
      three.style.left = f(three.style.left, -30)
      setTimeout(() => {
        three.style.transition =
          'all 0.2s, left 17s, top 17s, z-index 0s, transform 1s'
      }, 1000)
    } else if (moonmotion == 1) {
      if (att == 0) {
        att = 1
        attention.style.display = 'block'
        setTimeout(() => {
          attention.style.opacity = 1
        }, 1)
        setTimeout(() => {
          attention.style.opacity = 0
        }, 5000)
        setTimeout(() => {
          attention.style.display = 'none'
          att = 0
        }, 6000)
      }
    }
  } else if (key == 'KeyW') {
    one.style.top = f(one.style.top, -30)
  } else if (key == 'KeyS') {
    one.style.top = f(one.style.top, 30)
  } else if (key == 'KeyD') {
    one.style.left = f(one.style.left, 30)
  } else if (key == 'KeyA') {
    one.style.left = f(one.style.left, -30)
  } else if (key == 'KeyI') {
    two.style.top = f(two.style.top, -30)
    three.style.top = f(three.style.top, -30)
    sat.style.top = f(sat.style.top, -30)
  } else if (key == 'KeyK') {
    two.style.top = f(two.style.top, 30)
    three.style.top = f(three.style.top, 30)
    sat.style.top = f(sat.style.top, 30)
  } else if (key == 'KeyJ') {
    two.style.left = f(two.style.left, -30)
    three.style.left = f(three.style.left, -30)
    sat.style.left = f(sat.style.left, -30)
  } else if (key == 'KeyL') {
    two.style.left = f(two.style.left, 30)
    three.style.left = f(three.style.left, 30)
    sat.style.left = f(sat.style.left, 30)
  } else if (key == 'KeyR') {
    three.style.transition =
      ' all 0.2s, left 1s, top 1s, z-index 0s, transform 17s'
    attention.style.opacity = 0
    setTimeout(() => {
      three.style.zIndex = 3
      clearInterval(interval1)
      clearTimeout(timeout1)
      attention.style.display = 'none'
    }, 1000)
    setTimeout(() => {
      tm()
    }, 1001)
    setTimeout(() => {
      three.style.transition =
        ' all 0.2s, left 17s, top 17s, z-index 0s, transform 17s'
    }, 1002)
    three.style.transform = size2(input3.value / 100)
    att = 0
    moonmotion = 1
    one.style.top = '35px'
    one.style.left = '354px'
    two.style.top = '199px'
    two.style.left = '475px'
    three.style.top = '297px'
    three.style.left = '270px'
    sat.style.top = '530px'
    sat.style.left = '560px'
    three.style.transform = 'scale(1)'
    one.style.transform = 'scale(1)'
    two.style.transform = 'scale(1)'
    sat.style.transform = 'scale(1)'
    one.style.opacity = '1'
    two.style.opacity = '1'
    three.style.opacity = '1'
  } else if (key == 'Digit1' && d1 == 0) {
    checkbox1.checked = false
    one.style.opacity = '0'
    d1 = 1
  } else if (key == 'Digit1' && d1 == 1) {
    checkbox1.checked = true
    one.style.opacity = '1'
    d1 = 0
  } else if (key == 'Digit2' && d2 == 0) {
    checkbox2.checked = false
    two.style.opacity = '0'
    d2 = 1
  } else if (key == 'Digit2' && d2 == 1) {
    checkbox2.checked = true
    two.style.opacity = '1'
    d2 = 0
  } else if (key == 'Digit3' && d3 == 0) {
    checkbox3.checked = false
    three.style.opacity = '0'
    d3 = 1
  } else if (key == 'Digit3' && d3 == 1) {
    checkbox3.checked = true
    three.style.opacity = '1'
    d3 = 0
  } else if (key == 'KeyX') {
    three.style.transition =
      ' all 0.2s, left 1s, top 1s, z-index 0s, transform 17s'
    for (let i = 0; i < 1000; i++) {
      clearInterval(i)
    }
    three.style.transform = size2(input3.value / 100)
    attention.style.opacity = 0
    setTimeout(() => {
      attention.style.display = 'none'
    }, 1000)
    three.style.left = '270px'
    moonmotion = 0
    att = 0
  } else if (key == 'KeyZ') {
    three.style.zIndex = 3
  }
})
p1.onclick = () => {
  p1.style.display = 'none'
  p2.style.display = 'none'
  menuclose.style.display = 'none'
  rtrn.style.display = 'block'
  windowdiv1.style.display = 'block'
  menudiv.style.display = 'none'
  but1.style.display = 'flex'
  but2.style.display = 'flex'
  but3.style.display = 'flex'
  but4.style.display = 'flex'
  but5.style.display = 'flex'
}
rtrn.onclick = () => {
  menudiv.style.display = 'block'
  menuclose.style.display = 'block'
  windowdiv2.style.display = 'none'
  windowdiv1.style.display = 'none'
  p1.style.display = 'block'
  p2.style.display = 'block'
  rtrn.style.display = 'none'
}
p2.onclick = () => {
  menudiv.style.display = 'none'
  menuclose.style.display = 'none'
  p1.style.display = 'none'
  p2.style.display = 'none'
  rtrn.style.display = 'block'
  windowdiv2.style.display = 'block'
}
const transform = (txt, param) => {
  const arr = txt.split('')
  let num = arr
  num.pop()
  for (let i = 0; i < 5; i++) {
    num.shift()
  }
  num.shift()
  num = num.join('')
  num = Number(num)
  if (param == 0) {
    num = num * 0.8
  } else if (param == 1) {
    num = num / 0.8
  }
  g = num
  num = String(num)
  num = 'scale(' + num + ')'
  return num
}
one.style.transform = size2(input1.value / 70)
two.style.transform = size2(input2.value / 100)
three.style.transition = 'all 0.2s, left 17s, top 17s, z-index 0s, transform 1s'
three.style.transform = size2(input3.value / 100)
button.onclick = () => {
  one.style.transform = size2(input1.value / 70)
  two.style.transform = size2(input2.value / 100)
  three.style.transition =
    'all 0.2s, left 17s, top 17s, z-index 0s, transform 1s'
  three.style.transform = size2(input3.value / 100)
  setTimeout(() => {
    three.style.transition =
      'all 0.2s, left 17s, top 17s, z-index 0s, transform 17s'
  }, 1000)
}
reset.onclick = () => {
  input1.value = 80
  input2.value = 70
  input3.value = 60
  one.style.transform = size2(input1.value / 70)
  two.style.transform = size2(input2.value / 100)
  three.style.transition =
    'all 0.2s, left 17s, top 17s, z-index 0s, transform 1s'
  three.style.transform = size2(input3.value / 100)
  setTimeout(() => {
    three.style.transition =
      'all 0.2s, left 17s, top 17s, z-index 0s, transform 17s'
  }, 1000)
}
checkbox1.onclick = () => {
  if (checkbox1.checked) {
    one.style.opacity = 1
    d1 = 0
  } else {
    one.style.opacity = 0
    d1 = 1
  }
}
checkbox2.onclick = () => {
  if (checkbox2.checked) {
    d2 = 0
    two.style.opacity = 1
  } else {
    two.style.opacity = 0
    d2 = 1
  }
}
checkbox3.onclick = () => {
  if (checkbox3.checked) {
    d3 = 0
    three.style.opacity = 1
  } else {
    d3 = 1
    three.style.opacity = 0
  }
}
menu.onclick = () => {
  wndw.style.display = 'block'
  wndw.style.transform = 'scale(1)'
  setTimeout(() => {
    wndw.style.opacity = 1
  })
  menu.style.display = 'none'
  wndw.style.top = '10px'
  wndw.style.left = '10px'
}
menuclose.onclick = () => {
  wndw.style.transform = 'scale(0)'
  menu.style.display = 'block'
  wndw.style.top = '-75px'
  wndw.style.left = '-213px'
}
setTimeout(() => {
  im.style.opacity = 0
  setTimeout(() => {
    im.style.display = 'none'
  }, 3000)
}, 5000)
const onmouse = (arr, o = 0) => {
  if (o == 0) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.cursor = 'none'
    }
  } else if (o == 1) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.cursor = "url('normal.cur'), auto"
    }
  } else if (o == 2) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.cursor = "url('link.cur'), auto"
    }
  }
}
let cltm = 0
let timeoutID
setInterval(() => {
  if (cltm == 0) {
    cltm = 1
    timeoutID = setTimeout(() => {
      onmouse([
        one,
        two,
        three,
        rtrn,
        p1,
        p2,
        wndw,
        input1,
        input2,
        input3,
        button,
        windowdiv1,
        windowdiv2,
        menudiv,
        reset,
        checkbox1,
        checkbox2,
        checkbox3,
        menu,
        menuclose,
        attention,
        im,
        bd,
        spacetxt,
      ])
      cltm = 0
    }, 5000)
  }
}, 100)
document.onmousemove = () => {
  clearTimeout(timeoutID)
  cltm = 0
  onmouse(
    [
      one,
      two,
      three,
      wndw,
      input1,
      input2,
      input3,
      windowdiv1,
      windowdiv2,
      menudiv,
      checkbox1,
      checkbox2,
      checkbox3,
      attention,
      im,
      bd,
      spacetxt,
    ],
    1
  )
  onmouse([reset, rtrn, p1, p2, button, menu, menuclose], 2)
}
