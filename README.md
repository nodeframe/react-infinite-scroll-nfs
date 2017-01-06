#React Infinite Scroll
React component for infinite scroll container.

##Getting started
#####Install
    npm install react-infinite-scroll

#####Usage
```js
  import InfiniteScroll  from 'react-infinite-scroll';
```

```html
 <div> // <-- Parent panel that have specific height.
    <InfiniteScroll
      onLoad={this.onLoad}
      isFetching={true}
    >
      .... // <-- This is the "stuffs" you want to load by infinite scroll
    </InfiniteScroll>
 </div>
```

##Configuration Props
   - **Function** `onLoad` : Function that will be called when the scroll is at the position related to offsetHeight

   - **Boolean** `isFetching` : Set true/false to show/hide LoaderComponent.

   - **React Component**`loaderComponent` :  Component loader will be shown related to isFetching props.

   - **String** `styleScrollBarClass` : CSS class name for scroll bar style.

   - **Number** `offsetHeight | (default) 50`  : Offset height from bottom to specific when the onLoad function will be activated.

##License
MIT.