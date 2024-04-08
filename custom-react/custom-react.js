function customRender(reactElement, container) {
  // let domElement = document.createElement(reactElement.type)
  //      domElement.innerHtml = reactElement.tagText
  //      domElement.setAttribute('href', reactElement.props.href)
  //      domElement.setAttribute('href', reactElement.props.target)
  //      mainDomContainer.appendChild(domElement)
  // a  better optimised code version below
  let domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.tagText;
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "__blanck",
  },
  tagText: "click me to visit google",
};

const mainDomContainer = document.querySelector("#root");

console.log(mainDomContainer);

customRender(reactElement, mainDomContainer);
