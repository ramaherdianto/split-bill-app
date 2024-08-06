import React, { useState } from 'react';

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
    const [amount, setAmount] = useState('');
    const [myBill, setMyBill] = useState('');
    const friendBill = amount ? amount - myBill : '';
    const [whoIsPaying, setWhoIsPaying] = useState('user');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!amount || !myBill) return alert('Input field cannot be empty!');
        onSplitBill(whoIsPaying === 'user' ? friendBill : -myBill);
    };

    return (
        <>
            <form className='form-split-bill' onSubmit={onSubmit}>
                <h2>Patungan Bareng si {selectedFriend.name}</h2>

                <label htmlFor=''>💵Total Tagihan</label>
                <input
                    type='number'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder={amount.length === 0 && 'Rp. 1000'}
                />

                <label htmlFor=''>🙋🏼‍♂️Tagihan Kamu</label>
                <input
                    type='number'
                    value={myBill}
                    onChange={(e) => setMyBill(e.target.value)}
                    placeholder={myBill.length === 0 && 'Rp. 1000'}
                />

                <label htmlFor=''>🙋🏼Tagihan {selectedFriend.name}</label>
                <input type='number' value={friendBill} disabled />

                <label htmlFor=''>🤑Ditalangin sama</label>
                <select>
                    <option value='user'>Kamu</option>
                    <option value='friend'>{selectedFriend.name}</option>
                </select>

                <button className='button'>Tambah</button>
            </form>
        </>
    );
};

export default FormSplitBill;
