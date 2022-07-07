import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';

const ProductFilter = () => {
  const [ categories, setCategories ] = useState<string[]>([]);
  const [ searchParams, setSearchParams ] = useSearchParams({});
  const { register } = useForm();
  const categoriesList = useSelector((state: RootState) => state.categories.categories);

  useEffect(() => {
    if(categories.length) {
      setSearchParams({category: categories.join(' ')});
    } else {
      searchParams.delete('category');
      setSearchParams(searchParams);
    }
  }, [categories])

  const handleCheckbox = (e: any) => {
    const categoryValue: string = e.target.value;
    const categoryIndex = categories.findIndex((item: any) => item === categoryValue);
    if(categoryIndex > -1) {
      const newCategories = categories.filter((item: any) => item !== categoryValue);
      setCategories(newCategories);
    } else {
      const newCategories =[...categories, categoryValue];
      setCategories(newCategories);
    }
  }

  return (
    <form action="">
      {
        categoriesList.map((item: any) => {
          return <div key={item.id}>
            <input {...register(`${item.name}`)} type="checkbox" value={item.id} onChange={handleCheckbox}/>
            <label htmlFor="checkbox">{item.name}</label>
          </div>
        })
      }
    </form>
  )
}

export default ProductFilter;