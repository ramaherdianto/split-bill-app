import React from 'react';

const FormAddFriend = () => {
    return (
        <>
            <form className='form-add-friend'>
                <label htmlFor=''>🙎🏼Nama</label>
                <input type='text' />

                <label htmlFor=''>📸Gambar</label>
                <input type='text' />

                <button className='button'>Tambah</button>
            </form>
        </>
    );
};

export default FormAddFriend;
