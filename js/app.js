function fetchComponents(components) {
  components.forEach((component) => {
    const { name, elementId } = component;
    fetch(`components/${name}.html`)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(elementId) ? document.getElementById(elementId).innerHTML = data : '';
      });
  });
}

const componentsArray = [
  { name: "header-desktop", elementId: "desktop" },
  { name: "header-mobile", elementId: "mobile" },
  { name: "hero", elementId: "hero" },
  { name: "events", elementId: "events" },
  { name: "content", elementId: "content" },
  { name: "footer", elementId: "footer" },
];

fetchComponents(componentsArray);
