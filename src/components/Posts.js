import React,{Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://avatars.mds.yandex.net/get-pdb/879561/4a1e744c-033a-47a4-a19f-18528a301e05/s1200?webp=false" alt="inst"/>
                <Post src="https://avatars.mds.yandex.net/get-pdb/2296887/b299b1a4-61ae-42ab-8b41-d877b271176b/s800" alt="second" />
            </div>
        )
    }
}   