document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

  if(day.toLowerCase() == "Monday".toLowerCase() || day.toLowerCase() == "Wednesday".toLowerCase() || day.toLowerCase() == "Friday".toLowerCase()) {
    document.querySelector('#placeToSee').innerText = 'BOOOORING!'
  } else if (day.toLowerCase() == "Tuesday".toLowerCase() || day.toLowerCase() == "Thursday".toLowerCase()) {
    document.querySelector('#placeToSee').innerText = 'CLASS DAY!'
  }
  else {
    document.querySelector('#placeToSee').innerText = 'WEEKEND!'
  }
}
