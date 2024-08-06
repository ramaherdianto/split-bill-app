import FriendList from './components/FriendList';
import { Friends } from './components/FriendsData';

function App() {
    return (
        <>
            <div className='app'>
                <div className='sidebar'>
                    <FriendList friends={Friends} />
                </div>
            </div>
        </>
    );
}

export default App;
