import React from 'react';

const Friend = ({ friend, onSelectedFriend, selectedFriend }) => {
    const isSelected = selectedFriend?.id === friend.id;

    return (
        <>
            <li className={isSelected ? 'selected' : ''}>
                <img src={friend.image} alt={`Profile ${friend.name}`} />
                <h3>{friend.name}</h3>
                {friend.balance < 0 && (
                    <p className='red'>
                        Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
                    </p>
                )}
                {friend.balance > 0 && (
                    <p className='green'>
                        Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
                    </p>
                )}
                {friend.balance === 0 && <p>Kamu dan {friend.name} tidak ada hutang</p>}
                <button className='button' onClick={() => onSelectedFriend(friend)}>
                    {isSelected ? 'Tutup' : 'Pilih'}
                </button>
            </li>
        </>
    );
};

export default Friend;
