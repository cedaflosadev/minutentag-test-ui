export const getLocaleId = (id: string, name: string): string => {
  const nameConvert = name.toLowerCase().replace(/\s/g, '');
  return `${id}-${nameConvert}`;
};
