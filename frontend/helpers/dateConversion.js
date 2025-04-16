function formatDate(isoDateString) {
  if (!isoDateString) {
    return 'Invalid Date';
  }

  const [year, month, day] = isoDateString.split('T')[0].split('-');
  return `${month}/${day}/${year}`;
}

export default formatDate;