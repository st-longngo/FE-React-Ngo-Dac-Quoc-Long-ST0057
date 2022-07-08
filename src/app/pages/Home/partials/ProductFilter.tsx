import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

const ProductFilter = () => {
  const [ categories, setCategories ] = useState<string[]>([]);
  const [ searchParams, setSearchParams ] = useSearchParams({});
  const { register } = useForm();

  useEffect(() => {
    if(categories.length) {
      setSearchParams({category: categories.join(' ')});
    } else {
      searchParams.delete('category');
      setSearchParams(searchParams);
    }
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
      <input {...register("checkbox")} type="checkbox" value="1" onChange={handleCheckbox}/> JUMPSUITS
      <input {...register("checkbox")} type="checkbox" value="2" onChange={handleCheckbox}/> SHIRT
      <input {...register("checkbox")} type="checkbox" value="3" onChange={handleCheckbox}/> TROUSER
      <input {...register("checkbox")} type="checkbox" value="4" onChange={handleCheckbox}/> JEANS
    </form>
  )
}

export default ProductFilter;
