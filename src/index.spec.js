import { createElement } from './index';

test('create element', () => {
  const eleObj = createElement(
    "div",
    { class: 'root' },
    createElement(
      "a",
      { href: "https://www.google.com" },
      "Navtigate to Google"
    )
  );
  expect(eleObj).toStrictEqual(
    {
      ele: 'div',
      attrs: { class: 'root' },
      children: [
        {
          ele: 'a',
          attrs: { href: "https://www.google.com" },
          children: ['Navtigate to Google']
        }
      ]
    }
  );
});
