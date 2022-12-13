const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const list = document.getElementById('days');

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let newDay = document.createElement('li');
    list.appendChild(newDay);
    newDay.className = 'day';
    if (decemberDaysList[i] === 24 || decemberDaysList[i] === 25 || decemberDaysList[i] === 31) {
        newDay.className += ' holiday'
    }
    if (decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18 || decemberDaysList[i] === 25){
        newDay.className += ' friday'
    }
    newDay.innerText = decemberDaysList[i];
  } 
  
  function createHoliday (string) {
      const btnContainer = document.querySelector('.buttons-container');
      const button = document.createElement('button');
      button.id = 'btn-holiday'
      button.innerText = string;
      btnContainer.appendChild(button);
    }
    
    createHoliday('Feriados');


    function changeColor() {
        const holidays = document.querySelectorAll('.holiday');
        const button = document.getElementById('btn-holiday');
        for (let i = 0; i < holidays.length; i += 1) {
            button.addEventListener('click', () => {
                holidays[i].style.backgroundColor = 'black'
            })
        }
    }
    changeColor()


    function createFriday (string) {
        const btnContainer = document.querySelector('.buttons-container')
        const button = document.createElement('button');
        button.id = 'btn-friday';
        button.innerText = string;
        btnContainer.appendChild(button)
    }
    createFriday('Sexta-feira')


    function modifyFriday() {
        const button = document.getElementById('btn-friday');
        const days = document.querySelectorAll('.friday');
        button.addEventListener('click', (event) => {
            for (value of days) {
                value.innerText = 'Sextou'
            }
        })
    }
    modifyFriday();


    function zoom() {
        const days = document.querySelector('#days');
        days.addEventListener('mouseover', (event) => {
            event.target.style.fontSize = '32px'
        },
        days.addEventListener('mouseout', (event) => {
            event.target.style.fontSize = '20px'
        }))
    }

    zoom();