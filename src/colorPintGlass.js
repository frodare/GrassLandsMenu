const createCss = (light, dark) => `.beer-dark {stop-color:${dark};} .beer-light {stop-color:${light};}`

const injectCss = (svgDocument, light, dark) => {
  const style = svgDocument.createElementNS("http://www.w3.org/2000/svg", "style");
  style.textContent = createCss(light, dark);

  var svgElem = svgDocument.querySelector('svg');
  svgElem.appendChild(style, svgElem.firstChild);
}

export default (element, light, dark) => {
  element.onload = function () {
    injectCss(element.getSVGDocument(), light, dark)
  };
}

