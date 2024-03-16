import { useEffect, useState } from 'react';

function useReadableDate(inputDate) {
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    function formatDate(inputDate) {
      let dateParts = inputDate.split('-');
      let year = dateParts[0];
      let month = parseInt(dateParts[1], 10) - 1;
      let day = dateParts[2];
    
      let formattedDate = new Date(year, month, day);
    
      let dayWithSuffix = getDayWithSuffix(formattedDate.getDate());
      let monthName = formattedDate.toLocaleString('default', { month: 'short' });
      let fullYear = formattedDate.getFullYear();
    
      return `${dayWithSuffix} ${monthName} ${fullYear}`;
    }
    
    function getDayWithSuffix(day) {
      if (day >= 11 && day <= 13) {
        return day + 'th';
      }
      switch (day % 10) {
        case 1: return day + 'st';
        case 2: return day + 'nd';
        case 3: return day + 'rd';
        default: return day + 'th';
      }
    }

    setFormattedDate(formatDate(inputDate));
  }, [inputDate]);

  return formattedDate;
}

export default useReadableDate;
