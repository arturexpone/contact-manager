import React, {useState} from "react";
import {connect} from "react-redux";
import {editContact} from "../../store/ac";
import {TextInputGroup} from "../layout/TextInputGroup";

const EditContact = (props) => {

    const {id} = props.match.params;

    let initialState = {
        id: '',
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    if (props.data[id - 1]) {
        initialState.id = props.data[id - 1].id;
        initialState.name = props.data[id - 1].name;
        initialState.email = props.data[id - 1].email;
        initialState.phone = props.data[id - 1].phone;
    }

    const [formState, setFormState] = useState(initialState);
    const {name, email, phone, errors} = formState;

    window.vvv = formState;


    const onSubmit = e => {
        e.preventDefault();
        props.editContact(formState);
        setFormState(initialState);
        props.history.push('/');
    }


    return (
        <div className='card mb-3'>
            <div className='card-header'>
                Edit Contact
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
                        value='Update Contact'
                        className='btn btn-light btn-block'
                    />
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.data,
})

export const EditContactForm = connect(mapStateToProps, {editContact})(EditContact);