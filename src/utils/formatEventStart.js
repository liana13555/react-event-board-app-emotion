import { format } from 'date-fns';
// import { ru } from 'date-fns/locale';  // Если хотим напр. на русском

export const formatEventStart = start => {
  return format(
    Date.parse(start),
    'dd MMMM yyyy, HH:mm',
    // { locale: ru, }
  );
};
