import React from 'react';
import Friend from './Friend';

const FriendList = ({ friends }) => {
    return (
        <>
            <ul>
                {friends.map((friend) => {
                    return <Friend key={friend.id} friend={friend} />;
                })}
            </ul>
        </>
    );
};

export default FriendList;
