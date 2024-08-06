import { useState } from 'react';
import FormAddFriend from './form/FormAddFriend';
import FormSplitBill from './form/FormSplitBill';
import FriendList from './FriendList';

function SplitBill() {
    const [friends, setFriends] = useState([]);
    const [showFormFriend, setShowFormFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    const handleFormFriend = () => {
        setShowFormFriend((showFormFriend) => !showFormFriend);
        setSelectedFriend(null);
    };

    const handleAddFriend = (friend) => {
        setFriends((friends) => [...friends, friend]);
    };

    const handleSelectedFriend = (friend) => {
        setSelectedFriend((selectedFriend) => (selectedFriend?.id === friend.id ? null : friend));
        setShowFormFriend(false);
    };

    const handleSplitBill = (value) => {
        setFriends(
            friends.map((friend) => {
                if (friend.id === selectedFriend?.id) {
                    return {
                        ...friend,
                        balance: friend.balance + value,
                    };
                }

                return friend;
            })
        );
        setSelectedFriend(null);
    };

    return (
        <>
            <div className='app'>
                <div className='sidebar'>
                    <FriendList
                        friends={friends}
                        onSelectedFriend={handleSelectedFriend}
                        selectedFriend={selectedFriend}
                    />
                    {showFormFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
                    <button className='button' onClick={handleFormFriend}>
                        {!showFormFriend ? 'Tambah Teman' : 'Tutup'}
                    </button>
                </div>
                {selectedFriend && (
                    <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />
                )}
            </div>
        </>
    );
}

export default SplitBill;
