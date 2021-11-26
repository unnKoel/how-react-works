import { render } from './dom';
import { createElement } from './index';

test('test dom render function', () => {
  const eleObj = createElement(
    "div",
    { class: 'root' },
    createElement(
      "a",
      { href: "https://www.google.com" },
      "Navtigate to Google"
    )
  );

  render(eleObj, document.body);
});
