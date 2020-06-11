import React, {useState} from "react";
import {connect} from "react-redux";
import {addContact} from "../../store/ac";

const AddContact = ({addContact}) => {

    const initialState = {
        name: '',
        email: '',
        phone: ''
    }
    const [formState, setFormState] = useState(initialState);
    const {name, email, phone} = formState;

    window.state = formState;

    return (
        <div className='card mb-3'>
            <div className='card-header'>
                Add Contact
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type='text'
                            name='name'
                            className='form-control form-control-lg'
                            placeholder='Please, enter Name'
                            value={name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type='email'
                            name='email'
                            className='form-control form-control-lg'
                            placeholder='Please, enter Email'
                            value={email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type='text'
                            name='phone'
                            className='form-control form-control-lg'
                            placeholder='Please, enter Phone'
                            value={phone}
                            onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        />
                    </div>
                    <input
                        type='submit'
                        value='Add Contact'
                        className='btn btn-light btn-block'
                        onClick={(e) => {
                            e.preventDefault();
                            addContact(formState);
                            setFormState(initialState);
                        }}
                    />
                </form>
            </div>
        </div>
    )
}

export const AddContactForm = connect(null, {addContact})(AddContact);