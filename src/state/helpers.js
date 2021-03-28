export const updateItem = (id, arr) => {
  const index = arr.findIndex((el) => el.id === JSON.parse(id));
  return [
    ...arr.slice(0, index),
    {
      ...arr[index],
      active: !arr[index].active,
    },
    ...arr.slice(index + 1),
  ];
};
