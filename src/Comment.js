//your code here
// use the class x extends Component {} syntax
// export the class so it can be used in other files
// import the class in BlogPost
// this comment when used will display content that is passed down to it, allowing us to pass
// different content to multiple Comment components. 
import React, { Component } from 'react';
export default class Comment extends Component {
    render() {
        return ( 
            <div className='comment'>
            {this.props.commentText}
            </div>
        )

    }
}



