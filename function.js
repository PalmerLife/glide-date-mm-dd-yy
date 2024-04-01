window.function = function(dateString) {
  // Ensure the dateString input is not null or undefined
  if (!dateString.value) return;

  // Attempt to parse the dateString into a Date object
  const inputDate = new Date(dateString.value);

  // Check if the date is Invalid Date
  if (isNaN(inputDate)) return "Invalid Date";

  // Extract the month, day, and year, and format them
  let month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
  let day = inputDate.getDate().toString().padStart(2, '0');
  let year = inputDate.getFullYear().toString().slice(-2);

  // Combine into the desired format
  return `${month}/${day}/${year}`;
}
