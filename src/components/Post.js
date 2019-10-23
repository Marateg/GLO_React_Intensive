import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                    src="https://avatars.mds.yandex.net/get-pdb/1447163/fb46c8f8-622b-4f74-9234-9195acb610f8/s800"
                    alt="man"
                    name="MisterB"
                    min
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div> 
            </div>
        )
    }
}
 