export const dateToLocalTime = dateString => {
  const date = new Date(dateString);
  const tzOffset = -date.getTimezoneOffset();
  const diff = tzOffset >= 0 ? '+' : '-';
  const pad = num => (num < 10 ? '0' : '') + num;

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hour = pad(date.getHours());
  const minute = pad(date.getMinutes());
  const second = pad(date.getSeconds());
  const timezone = `${diff}${pad(Math.floor(Math.abs(tzOffset) / 60))}:${pad(
    Math.abs(tzOffset) % 60,
  )}`;

  return `${year}-${month}-${day}T${hour}:${minute}:${second}${timezone}`;
};
