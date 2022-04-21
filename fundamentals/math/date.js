function dateSuffix(day) {
  let digit = String(day);

  let suffix;
  if (day === 11 || day === 12 || day === 13) {
    suffix = 'th';
  } else if (day % 10 === 1) {
    suffix = 'st';
  } else if (day % 10 === 2) {
    suffix = 'nd';
  } else if (day % 10 === 3) {
    suffix = 'rd';
  } else { suffix = 'th'}

  return digit + suffix;
}

today = new Date();

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log(`Today's day is ${month}, ${day} the ${dateSuffix(date.getDate())} `)
}

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

let nextWeek= new Date(today.getTime());
console.log(today.toDateString() === nextWeek.toDateString())
nextWeek.setDate(today.getDate() + 7)
console.log(today.toDateString() === nextWeek.toDateString())

function formatTime(date) {
  let hours = date.getHours();
  let mins = date.getMinutes();

  hours = hours < 10 ? '0' + String(hours) : String(hours);
  mins = mins < 10 ? '0' + String(mins) : String(mins);

  console.log(`${hours}:${mins}`);
}

formatTime(today)