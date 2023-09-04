import InfiniteScroll from 'react-infinite-scroll-component';
import { Component } from 'react';


class Content extends Component {


    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 20 }))
            });
        }, 1500);
    };

    render() {
        return (
            <div
                id="scrollableDiv"
                
                /*style={{
                    height: 300,
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column-reverse',
                }}*/
            >
                {/*Put the scroll bar always on the bottom*/}
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                    inverse={true} //
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                >
                    {this.state.items.map((_, index) => (
                        <div key={index}>
                            div - #{index}
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        )
    }

}
