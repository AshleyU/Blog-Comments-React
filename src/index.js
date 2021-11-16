import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" time="Today at 6:30PM" comment="Great article!" />
            <CommentDetail author="Jordan" time="July 5th at 2:32PM" comment="I am going to save this for later. Thanks." />
            <CommentDetail author="Alex" time="October 28th at 11:58AM" comment="Wow! This really changed my perspective."/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))