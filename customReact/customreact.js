function customRender(reactElement, root) {
  /*
  //=> place holder or parameter
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  root.appendChild(domElement);
  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const i in reactElement.props) {
    domElement.setAttribute(i, reactElement.props[i]);
  }
  root.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const root = document.getElementById("root");

customRender(reactElement, root);
