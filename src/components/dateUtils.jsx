export const formatDate = (date) => {
  const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
  const months = [
    'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
    'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
  ];
  
  const d = new Date(date);
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
};

export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
};

export const getCurrentDateString = () => {
  const date = new Date();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayName = days[date.getDay()];
  const day = date.getDate();
  const suffix = day === 1 || day === 21 || day === 31 ? 'st' :
                 day === 2 || day === 22 ? 'nd' :
                 day === 3 || day === 23 ? 'rd' : 'th';
  
  return `${month} ${year} ${dayName}, ${day}${suffix}`;
};

