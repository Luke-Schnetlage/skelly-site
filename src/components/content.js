import InfiniteScroll from 'react-infinite-scroll-component';
import React, { Component } from 'react';
import Youtube from './Youtube';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeAPIResponse: [],
    };
  }

  componentDidMount() {
    this.fetchMoreData(); // Initially load some data
  }

  fetchMoreData = () => {
    var numVideos = this.state.youtubeAPIResponse.length + 10;
    console.log("youtubeAPIResponse.length", this.state.youtubeAPIResponse.length);
    console.log("numVideos", numVideos);
    fetch(`http://localhost:9000/getYT?numVideos=${numVideos}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Replace the existing data with the new data
        this.setState((prevState) => ({
          youtubeAPIResponse: prevState.youtubeAPIResponse.concat(data.slice(prevState.youtubeAPIResponse.length))
        }));
      })
      .catch((error) => {
        console.error('Error fetching more data:', error);
      });
  }


  render() {
    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.youtubeAPIResponse.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.youtubeAPIResponse.map((item, index) => (
            <div key={index}>
              <Youtube apiResponse={item.link} />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
export default Content;

  /*
  render() {
    const { youtubeAPIResponse } = this.state;

    return (
      <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }} >
        <InfiniteScroll
          dataLength={youtubeAPIResponse.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Scroll Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {youtubeAPIResponse.map((item, index) => (
            <div key={index}>
              <Youtube apiResponse={item.link} />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
  */
//}


/*
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            youtubeAPIResponse: [], // Initialize with an empty array
        };
    }

    componentDidMount() {
        this.fetchMoreData();
    }

    fetchMoreData = () => {
        var numVideos = this.state.youtubeAPIResponse.length + 10; // Use this.state to determine the number of videos to retrieve
        console.log("numVideos", numVideos);
        fetch(`http://localhost:9000/getYT?numVideos=${numVideos}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // Replace the existing data with the new data
                this.setState((prevState) => ({
                    youtubeAPIResponse: data,
                }));
            })
            .catch((error) => {
                console.error('Error fetching more data:', error);
            });
    };
    
        fetchMoreData = () => {
            var numVideos = this.state.youtubeAPIResponse.length + 10; // Use this.state to determine the number of videos to retrieve
            console.log("numVideos", numVideos);
            fetch(`http://localhost:9000/getYT?numVideos=${numVideos}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    // Replace the existing data with the new data
                    /*this.setState({
                        youtubeAPIResponse: data,
                    });
                    this.setState({
                        youtubeAPIResponse: this.state.youtubeAPIResponse.concat(data)
                      });
                })
                .catch((error) => {
                    console.error('Error fetching more data:', error);
                });
        };
    
    render() {
        // Use this.state.youtubeAPIResponse instead of this.props.youtubeAPIResponse
        const { youtubeAPIResponse } = this.state;
        //return ("test");

        //console.log("api response#2", youtubeAPIResponse );
        return (
            <div id="scrollableDiv">
                <InfiniteScroll
                      dataLength={this.state.youtubeAPIResponse.length}
                      next={this.fetchMoreData} // This should trigger fetchMoreData when scrolling to the bottom
                      hasMore={true}
                      loader={<h4>Scroll Loading...</h4>}
                      scrollableTarget="scrollableDiv"
                >
                    {this.state.youtubeAPIResponse.map((item, index) => (
                        <div key={index}>
                            <Youtube apiResponse={item.link} />
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        );

    }
}

export default Content;
*/