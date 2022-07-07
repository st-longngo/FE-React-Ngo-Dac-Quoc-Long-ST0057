import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import { filterProduct } from '../home.actions';

const ProductFilter = () => {
  const dispatch = useDispatch();
  const [ searchParams, setSearchParams ] = useSearchParams({});
  const { categories } = useSelector((state: RootState) => state.home)
  const { register } = useForm();

  const handleCheckbox = (e: any) => {
    setSearchParams({ category: categories.join(' ') });
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
