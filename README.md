# how react works

To understand react better, fullfill a exprimental react within a playaround full of thinking, guess and validation.

## destructure React

- JSX compiler

  Compile JSX syntax to React.creactElement function.

- Render phase

  - creation of Fiber tree
  - Diff of Fiber tree

- Commit phase

  Convert Fiber tree to real-word dom tree

- Time slices based on browser API

  Using some native browser API to impliment Time slices which allow the process of render phase is able to be interrupt and recovered, that actually means scheduling among multiple updates. Aim to make the update with high priority be executed in advance to avoid delay that's caused by that the main process is occupied by update in low priority.

  **One question** this will bring is when some nodes in Fiber tree are updated repeatedly by a few updates in different priority, what can we do to merge those updates that works on the same node to ensure the latest state is reflected.

- Functional Component and Hooks based on closure

  - useState
  - useEffect
  - useMemo
  - useContext
  - useRef
  - useCallback

- Context, ErrorBoundary and Suspense based on Stack

  How to find out the closest Context, ErrorBoundary and Suspense component, then apply them where nested components need. Introducing Stack to keep the relevant and closest Context, ErrorBoundary and Suspense on the top of Stack to access it in a simply way.

## reference

- [[@babel/preset-env] useBuiltIns for libraries?](https://github.com/babel/babel/issues/7267)
- [react18 parsing: The implementation of Automatic Batching](https://juejin.cn/post/7196313603426910269)

## Q&A

- An error occurs when jest's running which says `Error: You must provide the URL of lib/mappings.wasm by calling SourceMapConsumer.initialize`

  As another workaround, export NODE_OPTIONS=--no-experimental-fetch should work
