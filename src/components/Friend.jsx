import React from 'react';

const Friend = ({ friend }) => {
    return (
        <>
            <li>
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
                <button className='button'>Pilih</button>
            </li>
        </>
    );
};

export default Friend;
