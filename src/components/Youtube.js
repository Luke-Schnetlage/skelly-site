import React, { Component } from "react";

class Youtube extends Component {
    
    render() {
        console.log('apiResponse type:', typeof this.props.apiResponse);
        console.log('apiResponse content:', this.props.apiResponse);
        const { apiResponse } = this.props;

        return (
            <div>
                {apiResponse.map((videoUrl, i) => (
                    <div key={i} className="youtube">
                        <iframe
                            width="560"
                            height="315"
                            src={videoUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        );
    }
}


export default Youtube;