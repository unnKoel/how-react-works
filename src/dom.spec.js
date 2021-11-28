import { render } from './dom';
import { createElement } from './index';

afterEach(() => {
  document.body.innerHTML = "";
});

test('dom render', () => {
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
  expect(document.body.innerHTML).toBe('<div class="root"><a href="https://www.google.com">Navtigate to Google</a></div>')
});

test('functional component dom render', () => {
  const name = 'Addy Zhou';
  const age = '32';
  const techs = ['React', 'Angular', 'Vue'];

  const ExampleComponent = ({ name, age, techs, children }) => {
    return createElement("div", {
      class: "user"
    },
      createElement("div", {
        class: "name"
      }, name),
      createElement("div", {
        class: "age"
      }, age),
      createElement("ul", null, techs.map(tech => createElement("li", {
        class: "tech"
      }, tech))),
      createElement("div", null, children)
    );
  }

  const page =
    createElement('div', { class: 'root' },
      createElement(
        ExampleComponent,
        { name, age, techs },
        createElement(
          "a",
          { href: "https://www.google.com" },
          "Navtigate to Google"
        ))
    );
  
    render(page, document.body);
    expect(document.body.innerHTML).toBe('<div class="root"><div class="user"><div class="name">Addy Zhou</div><div class="age">32</div><ul><li class="tech">React</li><li class="tech">Angular</li><li class="tech">Vue</li></ul><div><a href="https://www.google.com">Navtigate to Google</a></div></div></div>')
});
