import React, {useState} from "react";
import {connect} from "react-redux";
import {addContact} from "../../store/ac";
import {TextInputGroup} from "../layout/TextInputGroup";

const AddContact = ({addContact}) => {

    const initialState = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    const [formState, setFormState] = useState(initialState);
    const {name, email, phone, errors} = formState;

    window.state = formState;

    const validationForm = () => {
        if (!name) {
            setFormState({...formState, errors: {...formState.errors, name: 'Name is required'}});
        } else if (!email) {
            setFormState({...formState, errors: {...formState.errors, email: 'Email is required'}});
        } else if (!phone) {
            setFormState({...formState, errors: {...formState.errors, phone: 'Phone is required'}});
        }

        if (name && email && phone) {
            return true;
        } else {
            return false;
        }
    }


    const onSubmit = e => {
        e.preventDefault();
        if (validationForm()) {
            addContact(formState);
            setFormState(initialState);
        }
    }

    return (
        <div className='card mb-3'>
            <div className='card-header'>
                Add Contact
            </div>
            <div className="card-body">
                <form onSubmit={onSubmit}>

                        <TextInputGroup
                            label='Name'
                            type='text'
                            name='name'
                            className='form-control form-control-lg'
                            placeholder='Please, enter Name'
                            value={name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                            error={errors.name}
                        />



                        <TextInputGroup
                            label='Email'
                            type='email'
                            name='email'
                            className='form-control form-control-lg'
                            placeholder='Please, enter Email'
                            value={email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                            error={errors.email}
                        />



                        <TextInputGroup
                            label='Phone'
                            type='text'
                            name='phone'
                            className='form-control form-control-lg'
                            placeholder='Please, enter Phone'
                            value={phone}
                            onChange={(e) => setFormState({...formState, phone: e.target.value})}
                            error={errors.phone}
                        />

                    <input
                        type='submit'
                        value='Add Contact'
                        className='btn btn-light btn-block'
                    />
                </form>
            </div>
        </div>
    )
}

export const AddContactForm = connect(null, {addContact})(AddContact);