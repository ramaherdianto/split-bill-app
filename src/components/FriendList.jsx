import React from 'react';
import Friend from './Friend';

const FriendList = ({ friends, onSelectedFriend, selectedFriend }) => {
    return (
        <>
            <ul>
                {friends.map((friend) => {
                    return (
                        <Friend
                            key={friend.id}
                            friend={friend}
                            onSelectedFriend={onSelectedFriend}
                            selectedFriend={selectedFriend}
                        />
                    );
                })}
            </ul>
        </>
    );
};

export default FriendList;
