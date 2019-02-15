const beerData = [
  {
    title: 'Guava Gold',
    style: 'Fruited Blonde',
    titleColor: '#fc5',
    price: 6,
    size: '16oz',
    price10oz: 0,
    price12oz: 5,
    price16oz: 6,
    priceCrowler: 12,
    priceGrowler: 19,
    colorLight: '#fc5',
    colorDark: '#f80',
    abv: 4.5
  },{
    title: 'Papaya Don’t Preach',
    titleColor: '#ff5',
    style: 'East-coast IPA w/Papaya',
    price: 6,
    size: '16oz',
    price10oz: 0,
    price12oz: 6,
    price16oz: 7,
    priceCrowler: 14,
    priceGrowler: 20,
    colorLight: '#ff5',
    colorDark: '#fa0',
    abv: 6.5
  },{
    title: 'G-Street',
    titleColor: '#ffc',
    font: 'Faster One',
    style: 'American Blonde',
    description: '',
    price: 5,
    size: '16oz',
    price10oz: 0,
    price12oz: 4,
    price16oz: 5,
    priceCrowler: 10,
    priceGrowler: 17,
    colorLight: '#ff5',
    colorDark: '#fc5',
    abv: 4.5
  },{
    title: 'Advanced Darkness',
    titleColor: '#e4a',
    style: 'Robust porter w/coffee & chocolate',
    description: '',
    price: 6,
    size: '16oz',
    price10oz: 0,
    price12oz: 5,
    price16oz: 6,
    priceCrowler: 12,
    priceGrowler: 19,
    colorLight: '#420',
    colorDark: '#2d0a00',
    abv: 5.9
  },{
    title: 'Fourth Orbit',
    titleColor: '#fff',
    style: 'Red Ale',
    description: '',
    price: 6,
    size: '16oz',
    price10oz: 0,
    price12oz: 5,
    price16oz: 6,
    priceCrowler: 12,
    priceGrowler: 19,
    colorLight: '#f50',
    colorDark: '#c30',
    abv: 5.5
  },{
    title: 'LeBron Jams',
    titleColor: '#fff',
    style: 'Florida-style Berliner Weiss',
    description: '',
    price: 6,
    size: '12oz',
    price10oz: 0,
    price12oz: 6,
    price16oz: 0,
    priceCrowler: 14,
    priceGrowler: 0,
    colorLight: '#ff5',
    colorDark: '#fc5',
    abv: 3.7
  },{
    title: 'Blonde Claude Van Damme',
    titleColor: '#fff',
    font: 'Metamorphous',
    style: 'Belgian Blonde',
    description: '',
    price: 6,
    size: '16oz',
    price10oz: 0,
    price12oz: 5,
    price16oz: 6,
    priceCrowler: 12,
    priceGrowler: 19,
    colorLight: '#ff5',
    colorDark: '#fc5',
    abv: 6.9
  },{
    title: 'Firedrake Märzen',
    titleColor: '#fff',
    style: 'Crisp, amber German lager',
    description: '',
    price: 6,
    size: '16oz',
    price10oz: 0,
    price12oz: 5,
    price16oz: 6,
    priceCrowler: 12,
    priceGrowler: 19,
    colorLight: '#b60',
    colorDark: '#940',
    abv: 5.9
  },{
    title: 'Donut Disco',
    titleColor: '#fff',
    font: 'Fredoka One',
    style: 'Imperial Stout w/cinnamon, coconut, vanilla',
    description: '',
    price: 8,
    size: '10oz',
    price10oz: 8,
    price12oz: 0,
    price16oz: 0,
    priceCrowler: 20,
    priceGrowler: 0,
    colorLight: '#210',
    colorDark: '#100',
    abv: 10.2
  },{
    title: 'SPACE RAPTOR: Hop Ascension',
    titleColor: '#fff',
    font: 'Bungee Shade',
    style: 'New England-style IPA',
    description: '',
    price: 7,
    size: '16oz',
    price10oz: 0,
    price12oz: 6,
    price16oz: 7,
    priceCrowler: 14,
    priceGrowler: 0,
    colorLight: '#420',
    colorDark: '#2d0a00',
    abv: 7.5
  },{
    title: '152 Mile Friendship',
    titleColor: '#f93',
    style: 'Tangerine Belgian Pale Ale',
    description: '',
    price: 6,
    size: '16oz',
    price10oz: 0,
    price12oz: 5,
    price16oz: 6,
    priceCrowler: 12,
    priceGrowler: 19,
    colorLight: '#fc5',
    colorDark: '#f80',
    abv: 6.1
  },{
    title: 'BOOMTOWN!',
    titleColor: '#4f4',
    style: 'Gose w/DILL PICKLES',
    description: '',
    price: 6,
    size: '12oz',
    price10oz: 0,
    price12oz: 6,
    price16oz: 0,
    priceCrowler: 14,
    priceGrowler: 0,
    colorLight: '#af0',
    colorDark: '#ff5',
    abv: 3.8
  }
]

const createCss = (light, dark) => `.beer-dark {stop-color:${dark};} .beer-light {stop-color:${light};}`

const injectCss = (svgDocument, light, dark) => {
  console.log(svgDocument)
  const style = svgDocument.createElementNS("http://www.w3.org/2000/svg", "style");
  style.textContent = createCss(light, dark);

  var svgElem = svgDocument.querySelector('svg');
  svgElem.appendChild(style, svgElem.firstChild);
}

const colorPintGlass = (element, light, dark) => {
  element.onload = function (ev) {
    console.log(element.getElementsByClassName('glassSvg'))
    injectCss(element.getElementsByClassName('glassSvg'), light, dark)
  };
}


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