import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { filterProduct } from '../home.actions';

const ProductFilter = () => {
  const dispatch = useDispatch();
  const { register } = useForm({
    defaultValues: { checkbox: [] }
  });

  const handleCheckbox = (e: any) => {
    dispatch(filterProduct(e.target.value));
  };

  return (
    <form>
      <input {...register("checkbox")} type="checkbox" value="1" onChange={handleCheckbox}/> JUMPSUITS
      <input {...register("checkbox")} type="checkbox" value="2" onChange={handleCheckbox}/> SHIRT
      <input {...register("checkbox")} type="checkbox" value="3" onChange={handleCheckbox}/> TROUSER
      <input {...register("checkbox")} type="checkbox" value="4" onChange={handleCheckbox}/> JEANS
    </form>
  )
}

export default ProductFilter;
