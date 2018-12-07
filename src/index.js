import colorPintGlass from './colorPintGlass.js'
import beerData from './beerData.js'

const wrapper = document.getElementById("wrapper");

const getTemplate = () => document.getElementById('beer-template').content.cloneNode(true)

const fill = template => (query, value, color) => {
  const el = template.querySelector(query)
  el.innerText = value || ''
  if (color) el.style.color = color
}

const renderTemplate = beer => {
  const tmpl = getTemplate()
  const templateFill = fill(tmpl)

  templateFill('h1', beer.title, beer.titleColor)
  templateFill('h2', beer.style)
  templateFill('.price', beer.price)
  //templateFill('.size', beer.size)

  // templateFill('.price-small', beer.priceSmall)
  // templateFill('.price-normal', beer.priceNormal)
  // templateFill('.price-crowler', beer.priceCrowler)
  // templateFill('.price-growler', beer.priceGrowler)

  const e = tmpl.querySelector('.pint-glass-icon');
  colorPintGlass(e, beer.colorLight, beer.colorDark)

  wrapper.appendChild(tmpl)
}


beerData.forEach(renderTemplate);