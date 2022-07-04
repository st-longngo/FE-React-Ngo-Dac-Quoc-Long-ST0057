import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IForm } from './../../../shared/interfaces/form';

const initialState: IForm = {
  email: '',
  password: '',
  confirmPassword: ''
};

type FormAction = {
  type: string,
  payload: string
};

type FormErrorState = {
  emailError: boolean,
  passwordError: boolean,
  confirmPasswordError: boolean
}

const initialErrorState: FormErrorState = {
  emailError: false,
  passwordError: false,
  confirmPasswordError: false
}

type FormErrorAction = {
  type: string,
  payload: IForm
}

const formReducer = (state: IForm, action: FormAction): IForm => {
  switch(action.type){
    case 'UPDATE_EMAIL':
      return {
        ...state, email: action.payload
      }
    case 'UPDATE_PASSWORD':
      return {
        ...state, password: action.payload
      }
    case 'UPDATE_CONFIRM_PASSWORD':
      return {
        ...state, confirmPassword: action.payload
      }
    default: 
      return state;
  };
};

const formErrorReducer = (state: FormErrorState, action: FormErrorAction): FormErrorState => {
  let isError: boolean = false;
  switch(action.type){
    case 'CHECK_EMAIL':
      const regex = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      isError = (regex.test(action.payload.email) && action.payload.email.length > 0) ? true: false;
      return {
        ...state,
        emailError: isError
      };
    case 'CHECK_PASSWORD':
      isError = action.payload.password.length > 7 ? true : false;
      return {
        ...state,
        passwordError: isError
      };
    case 'CHECK_CONFIRM_PASSWORD':
      isError = (action.payload.password.length > 0 && action.payload.password === action.payload.confirmPassword) ? true : false;
      return {
        ...state,
        confirmPasswordError: isError
      }
    default:
      return state;
  }
}

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useReducer(formReducer, initialState);
  const [formErrorData, setFormErrorData] = useReducer(formErrorReducer, initialErrorState);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({type: 'UPDATE_EMAIL', payload: e.target.value});
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({type: 'UPDATE_PASSWORD', payload: e.target.value});
  }

  const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({type: 'UPDATE_CONFIRM_PASSWORD', payload: e.target.value});
  }

  const handleBlurEmail = () => {
    setFormErrorData({type: 'CHECK_EMAIL', payload: formData});
  }

  const handleBlurPassword= () => {
    setFormErrorData({type: 'CHECK_PASSWORD', payload: formData});
  }

  const handleBlurConfirmPassword = () => {
    setFormErrorData({type: 'CHECK_CONFIRM_PASSWORD', payload: formData});
  }

  const handleSubmitValidate = (e: any) => {
    e.preventDefault();
    if(formErrorData.emailError && formErrorData.passwordError && formErrorData.confirmPasswordError) {
      navigate('/');
    }
  }

  return (
    <div className="form">
      <form className="form-detail" onSubmit={handleSubmitValidate}>
        <h2 className="form-title txt-center">Register Account Form</h2>
        <div className="form-row">
          <label htmlFor="your-email">Your Email</label>
          <input
            type="text"
            name="your-email"
            id="your-email"
            className={!formErrorData.emailError && formData.email.length ? 'input-text input-error': 'input-text'}
            placeholder="Your Email"
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
            required
          />
          <i className="bx bxs-envelope"></i>
        </div>
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className={!formErrorData.passwordError && formData.password.length ? 'input-text input-error': 'input-text'}
            placeholder="Your Password"
            onChange={handleChangePassword}
            onBlur={handleBlurPassword}
          />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="form-row">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            className={!formErrorData.confirmPasswordError && formData.confirmPassword.length ? 'input-text input-error': 'input-text'}
            placeholder="Your Confirm Password"
            onChange={handleChangeConfirmPassword}
            onBlur={handleBlurConfirmPassword}
          />
          <i className="bx bxs-lock"></i>
        </div>
        <div className="form-row-last">
          <button type="submit" className="register">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
