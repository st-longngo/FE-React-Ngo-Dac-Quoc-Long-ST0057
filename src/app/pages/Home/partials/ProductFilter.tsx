import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';

interface IProductFilterProps {
  paramsCategory: string[],
  setParamsCategory: any
}

const ProductFilter = ({ paramsCategory, setParamsCategory } : IProductFilterProps ) => {
  const categories = useSelector((state: RootState) => state.categories.data);
  const { register, setValue } = useForm();

  const setValueCheckbox = () => {
    paramsCategory.map((item) => {
      setValue(categories[item], true);
    });
  }

  useEffect(() => {
    setValueCheckbox();
  }, [paramsCategory]);

  const handleCheckbox = (e: any) => {
    const categoryValue = e.target.id;
    const categoryIndex = paramsCategory.findIndex((item: any) => item === categoryValue);
    if(categoryIndex > -1) {
      const newCategories = paramsCategory.filter((item: any) => item !== categoryValue);
      setParamsCategory(newCategories);
    } else {
      const newCategories =[...paramsCategory, categoryValue];
      setParamsCategory(newCategories);
    }
  };

  return (
    <form>
      {
        Object.keys(categories).map((key: any) => {
          return <div key={key}>
            <input {...register(categories[key])} id={key} type="checkbox" value={categories[key]} onChange={handleCheckbox} />
            <label htmlFor={key}>{categories[key]}</label>
          </div>
        })
      }
    </form>
  )
}

export default ProductFilter;