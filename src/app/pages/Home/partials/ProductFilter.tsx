import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

interface IProductFilterProps {
  categories: string[],
  setCategories: any
}

const ProductFilter = ({ categories, setCategories } : IProductFilterProps ) => {
  const { register, setValue } = useForm();

  const setValueCheckbox = () => {
    categories.forEach((item) => {
      setValue(item, true);
    });
  }

  useEffect(() => {
    setValueCheckbox();
  }, [categories]);

  const handleCheckbox = (e: any) => {
    const categoryValue = e.target.value;
    const categoryIndex = categories.findIndex((item: any) => item === categoryValue);
    if(categoryIndex > -1) {
      const newCategories = categories.filter((item: any) => item !== categoryValue);
      setCategories(newCategories);
    } else {
      const newCategories =[...categories, categoryValue];
      setCategories(newCategories);
    }
  };

  return (
    <form>
      <input {...register("1")} id="1" type="checkbox" value="1" onChange={handleCheckbox}/> <label htmlFor="1">JUMPSUITS</label>
      <input {...register("2")} id="2" type="checkbox" value="2" onChange={handleCheckbox}/> <label htmlFor="2">SHIRT</label>
      <input {...register("3")} id="3" type="checkbox" value="3" onChange={handleCheckbox}/> <label htmlFor="3">TROUSER</label>
      <input {...register("4")} id="4" type="checkbox" value="4" onChange={handleCheckbox}/> <label htmlFor="4">JEANS</label>
    </form>
  )
}

export default ProductFilter;
