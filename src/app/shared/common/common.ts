export const getData = (key: string, value: any) => {
  const data = JSON.parse(localStorage.getItem(key)!);
  return data ? data : value;
};

export const setData = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const formatFixed = (value: number) => {
  const number = 2;
  return value.toFixed(number);
}
