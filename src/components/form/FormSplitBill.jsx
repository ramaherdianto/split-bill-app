import React from 'react';

const FormSplitBill = () => {
    return (
        <>
            <form className='form-split-bill'>
                <h2>Patungan Bareng si X</h2>

                <label htmlFor=''>💵Total Tagihan</label>
                <input type='text' />

                <label htmlFor=''>🙋🏼‍♂️Tagihan Kamu</label>
                <input type='text' />

                <label htmlFor=''>🙋🏼Tagihan X</label>
                <input type='text' disabled />

                <label htmlFor=''>🤑Ditalangin sama</label>
                <select>
                    <option value='user'>Kamu</option>
                    <option value='friend'>X</option>
                </select>

                <button className='button'>Tambah</button>
            </form>
        </>
    );
};

export default FormSplitBill;
