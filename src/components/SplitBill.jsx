import { useState } from 'react';
import FormAddFriend from './form/FormAddFriend';
import FormSplitBill from './form/FormSplitBill';
import FriendList from './FriendList';
import { Friends } from './FriendsData';

function SplitBill() {
    const [showFormFriend, setShowFormFriend] = useState(false);

    const handleFormFriend = () => {
        setShowFormFriend((showFormFriend) => !showFormFriend);
    };

    return (
        <>
            <div className='app'>
                <div className='sidebar'>
                    <FriendList friends={Friends} />
                    {showFormFriend && <FormAddFriend />}
                    <button className='button' onClick={handleFormFriend}>
                        {!showFormFriend ? 'Tambah Teman' : 'Tutup'}
                    </button>
                </div>
                <FormSplitBill />
            </div>
        </>
    );
}

export default SplitBill;
