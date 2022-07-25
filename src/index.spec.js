import { createElement, getRootFiberNode } from './index';

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

test('function component initially convert to virtual dom', () => {
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

  expect(page).toStrictEqual(
    {
      ele: 'div',
      attrs: { class: 'root' },
      children: [
        {
          ele: 'div',
          attrs: { class: 'user' },
          children: [
            {
              ele: 'div',
              attrs: { class: 'name' },
              children: ['Addy Zhou']
            },
            {
              ele: 'div',
              attrs: { class: 'age' },
              children: ['32']
            },
            {
              ele: 'ul',
              attrs: {},
              children: [
                {
                  ele: 'li',
                  attrs: { class: 'tech' },
                  children: ['React']
                },
                {
                  ele: 'li',
                  attrs: { class: 'tech' },
                  children: ['Angular']
                },
                {
                  ele: 'li',
                  attrs: { class: 'tech' },
                  children: ['Vue']
                }
              ]
            },
            {
              ele: 'div',
              attrs: {},
              children: [
                {
                  ele: 'a',
                  attrs: { href: "https://www.google.com" },
                  children: ['Navtigate to Google']
                }
              ]
            }
          ]
        }
      ]
    }
  )
});

test('render component tree', () => {
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

  const Page = () =>
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

  expect(createElement(Page)).toStrictEqual(
    {
      ele: 'div',
      attrs: { class: 'root' },
      children: [
        {
          ele: 'div',
          attrs: { class: 'user' },
          children: [
            {
              ele: 'div',
              attrs: { class: 'name' },
              children: ['Addy Zhou']
            },
            {
              ele: 'div',
              attrs: { class: 'age' },
              children: ['32']
            },
            {
              ele: 'ul',
              attrs: {},
              children: [
                {
                  ele: 'li',
                  attrs: { class: 'tech' },
                  children: ['React']
                },
                {
                  ele: 'li',
                  attrs: { class: 'tech' },
                  children: ['Angular']
                },
                {
                  ele: 'li',
                  attrs: { class: 'tech' },
                  children: ['Vue']
                }
              ]
            },
            {
              ele: 'div',
              attrs: {},
              children: [
                {
                  ele: 'a',
                  attrs: { href: "https://www.google.com" },
                  children: ['Navtigate to Google']
                }
              ]
            }
          ]
        }
      ]
    }
  )

  expect(getRootFiberNode().childFiberNode[0].component).toBe(ExampleComponent);
  expect(getRootFiberNode().childFiberNode[0].parentFiberNode.component).toBe(Page);
});
