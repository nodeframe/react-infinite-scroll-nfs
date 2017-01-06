#React Infinite Scroll

##Getting started
install using this command;

    npm install react-infinite-scroll-nfs


###Example
```js
  Import InfiniteScroll  from 'react-infinite-scroll-nfs'

  <div> // <-- Set height in CSS.
    <InfiniteScroll
      onLoad={Function}
      isFetching={true}
    >
      {items} // <-- This is the "stuff" you want to load
    </InfiniteScroll>
  </div>
```

####Props
   - `onLoad` : This function is called when the user scrolls down and we need to load stuff.

   - `isFetching` :  Set true or  false to handle show hide  LoaderComponent.

   - `loaderComponent` :  Component loader

   - `styleScrollBarClass` : Set style scroll bar

   - `offsetHeight` : Set offset height
