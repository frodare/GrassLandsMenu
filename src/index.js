import colorPintGlass from './colorPintGlass.js'
import beerData from './beerData.js'

const wrapper = document.getElementById("wrapper");

const getTemplate = () => document.getElementById('beer-template').content.cloneNode(true)

const fill = template => (query, value = '', color) => {
  const el = template.querySelector(query)
  el.innerText = value
  if (!value || value === '0') el.className += ' hidden'
  if (color) el.style.color = color
}


/*

font-family: 'Bungee Shade', cursive;
font-family: 'Fredoka One', cursive;

WebFont.load({
          google: {
                  families: ['Droid Sans', 'Droid Serif']
          }
});
*/

const uniq = a => Array.from(new Set(a))

const loadFonts = beerData => {

  const fonts = uniq(beerData.map(e => e.font).filter(f => f))

  console.log('fonts ', fonts)

  WebFont.load({
    google: {
      families: fonts
    }
  })

}

const removeClass = (e, className) => {
  e.className = e.className.split(/\s+/).filter(c => c !== className).join(' ')
}

const renderTemplate = beer => {
  const tmpl = getTemplate()
  const templateFill = fill(tmpl)

  templateFill('h1', beer.title, beer.titleColor)
  templateFill('h2', beer.style)
  templateFill('.description', beer.description)
  templateFill('.price', beer.price)

  if (beer.font) tmpl.querySelector('h1').style.fontFamily = beer.font

  templateFill('.price-10oz', beer.price10oz)
  templateFill('.price-12oz', beer.price12oz)
  templateFill('.price-16oz', beer.price16oz)
  templateFill('.price-crowler', beer.priceCrowler)
  templateFill('.price-growler', beer.priceGrowler)

  templateFill('.abv', beer.abv)

  let beerIconClass
  if (beer.size === '10oz') {
    beerIconClass = 'glass-icon-10oz'
  } else if (beer.size === '12oz') {
    beerIconClass = 'glass-icon-12oz'
  } else if (beer.size === '6oz') {
    beerIconClass = 'glass-icon-6oz'
  } else {
    beerIconClass = 'glass-icon-pint'
  }

  const e = tmpl.querySelector('.' + beerIconClass);

  removeClass(e, 'hidden')
  colorPintGlass(e, beer.colorLight, beer.colorDark)

  wrapper.appendChild(tmpl)
}

const colorFlightGlasses = () => {
  colorPintGlass(document.querySelector('.glass-icon-1'), '#fc5', '#f80')
  colorPintGlass(document.querySelector('.glass-icon-2'), '#420', '#2d0a00')
  colorPintGlass(document.querySelector('.glass-icon-3'), '#ff5', '#fa0')
  colorPintGlass(document.querySelector('.glass-icon-4'), '#f50', '#c30')
}

loadFonts(beerData)
colorFlightGlasses()
beerData.forEach(renderTemplate)