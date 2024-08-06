import React, { useState } from 'react';

const FormAddFriend = ({ onAddFriend }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48');

    const onSubmitFriend = (e) => {
        e.preventDefault();

        if (!name) return alert('Input field cannot be empty!');

        const id = crypto.randomUUID();

        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onAddFriend(newFriend);
        setName('');
    };

    return (
        <>
            <form className='form-add-friend' onSubmit={onSubmitFriend}>
                <label htmlFor=''>🙎🏼Nama</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

                <label style={{ visibility: 'hidden' }} htmlFor=''>
                    📸Gambar
                </label>
                <input
                    style={{ visibility: 'hidden' }}
                    type='text'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    disabled
                />

                <button className='button'>Tambah</button>
            </form>
        </>
    );
};

export default FormAddFriend;
