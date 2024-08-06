import FormAddFriend from './form/FormAddFriend';
import FormSplitBill from './form/FormSplitBill';
import FriendList from './FriendList';
import { Friends } from './FriendsData';

function SplitBill() {
    return (
        <>
            <div className='app'>
                <div className='sidebar'>
                    <FriendList friends={Friends} />
                    <FormAddFriend />
                </div>
                <FormSplitBill />
            </div>
        </>
    );
}

export default SplitBill;
