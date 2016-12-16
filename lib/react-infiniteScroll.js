import React from 'react';
import loadingImg from './svg/loading.svg';


const Loading = () => (
  <div className="loading-infinite">
    <div dangerouslySetInnerHTML={{__html:loadingImg}} />
  </div>
);

export default class InfiniteScroll extends React.Component {

  constructor(){
    super()
    this.infiniteScrollId = "infiniteScroll_"+Math.floor((Math.random() * 1000) + 1);

  }

  handleScroll(event) {
    let currentOffsetHeight = parseInt(this.props.offsetHeight, 10) || 50;
    if (event && event.srcElement && !this.props.isFetching && this.props.onLoad) {
      let offsetHeight = (event.srcElement.scrollHeight - event.srcElement.offsetHeight)
      let scrollTop = event.srcElement.scrollTop;
      if ((scrollTop + currentOffsetHeight) > offsetHeight) {
        this.props.onLoad()
      }
    }
  }

  componentDidMount() {
    const infiniteScroll = document.getElementById(this.infiniteScrollId)
    infiniteScroll.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    const infiniteScroll = document.getElementById(this.infiniteScrollId)
    infiniteScroll.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  render() {
    return (
      <div style={{height: '100%', overflowY: 'scroll'}} className={this.props.styleScrollBarClass || "styleScrollBar"}
           id={this.infiniteScrollId}>
        {this.props.children}
        {
          this.props.isFetching &&
          <div>
            {
              (this.props.loaderComponent)
                ? this.props.loaderComponent : <Loading />
            }
          </div>

        }
      </div>
    )
  }

}
