import { Dog } from 'dog'

function component() {
  const element = document.createElement('div')

  element.innerHTML = new Dog('taro').bark()

  return element
}

document.body.appendChild(component())
