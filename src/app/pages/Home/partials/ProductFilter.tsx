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
    setValue('checkbox', paramsCategory);
  }

  useEffect(() => {
    setValueCheckbox();
  }, [paramsCategory]);

  const handleCheckbox = (e: any) => {
    const categoryValue = e.target.id;
    const categoryIndex = paramsCategory.findIndex((item: any) => item === categoryValue);
    if(categoryIndex > -1) {
      const newParamsCategory = paramsCategory.filter((item: any) => item !== categoryValue);
      setParamsCategory(newParamsCategory);
    } else {
      const newParamsCategory =[...paramsCategory, categoryValue];
      setParamsCategory(newParamsCategory);
    }
  };

  return (
    <form className="product-filter">
      {
        Object.keys(categories).map((key: any) => {
          return <div key={key}>
            <input {...register("checkbox")} id={key} type="checkbox" value={key} onChange={handleCheckbox} />
            <label htmlFor={key}>{categories[key]}</label>
          </div>
        })
      }
    </form>
  )
}

export default ProductFilter;
