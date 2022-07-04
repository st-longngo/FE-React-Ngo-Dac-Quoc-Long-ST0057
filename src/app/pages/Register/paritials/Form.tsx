import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '../../../shared/contexts/cart.context';
import { IForm } from './../../../shared/interfaces/form';

const Form = () => {
  const navigate = useNavigate();
  const { setUser } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IForm>();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data: IForm) => {
    setUser(data);
    navigate('/');
  };

  return (
    <div className="form">
      <form className="form-detail" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-title txt-center">Register Account Form</h2>
        <div className="form-row">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            className={errors.email ? 'input-text input-error': 'input-text'}
            placeholder="Your Email"
            {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
          />
          <i className="bx bxs-envelope"></i>
        </div>
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className={errors.password ? 'input-text input-error': 'input-text'}
            placeholder="Your Password"
            {...register("password", {
              required: true,
              minLength: 8
            })}
          />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="form-row">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            className={errors.confirmPassword ? 'input-text input-error': 'input-text'}
            placeholder="Your Confirm Password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password.current,
            })}
          />
          <i className="bx bxs-lock"></i>
        </div>
        <div className="form-row-last">
          <button type="submit" className="register">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
