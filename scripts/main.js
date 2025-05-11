


// let streak = getDataFromServer("streak");
// let calendarViewConfig = { fullYearMode: false, currentMonthIndex: new Date().getMonth() };
// const calendar = generateCalendar();



// function handleAddStreak(e) {
//   const target = e.target.closest(".day");
  
//   if (!target) return;
//   const dateString = target.dataset.date;
//   const documentId = target.dataset.id;

//   const onlyPresentDayStatusChange =
//     new Date().toLocaleDateString() ===
//     new Date(dateString).toLocaleDateString();

//    if (!onlyPresentDayStatusChange) return;

//   if (streak.hasOwnProperty(dateString + '@' + documentId)) {
//     delete streak[dateString + "@" + documentId];
//     target?.querySelector(".tick")?.remove();
//   } else {
    
//     streak[dateString + "@" + documentId] = true;
  
//     createTickIcon(target);
//   }

//   target.classList.toggle('completed')
//   saveDate("streak", streak);

//   updateLongestStreak();
// }

// // Event listeners
// document
//   .getElementById("calendar-grid")
//   .addEventListener("click", handleAddStreak);

//   const nextMonthBtn = document.getElementById("next-month")
//   const previousMonthBtn = document.getElementById("back")

//   nextMonthBtn.addEventListener("click", () => {
//     previousMonthBtn.classList.remove('stop-backward')
//   calendarViewConfig.currentMonthIndex =
//     (calendarViewConfig.currentMonthIndex + 1) % 12;
//   renderCalendarView();
// });


// previousMonthBtn.addEventListener("click", () => {
// if(calendarViewConfig.currentMonthIndex === 1) {
//   previousMonthBtn.classList.add('stop-backward')
  
// }

//   calendarViewConfig.currentMonthIndex =
//     (calendarViewConfig.currentMonthIndex - 1) % 12;

//   renderCalendarView();
// });

// document.getElementById("toggle-view").addEventListener("click", () => {
//   calendarViewConfig.fullYearMode = !calendarViewConfig.fullYearMode;

//   renderCalendarView();
// });

// renderCalendarView();


// // document.querySelector('.reload').addEventListener('click',function(){
// //   renderCalendarView()
// // })


// function getGradientByDate() {
//   const date = new Date();
//   const day = date.getDate();       // 1–31
//   const month = date.getMonth();    // 0–11
//   const seed = (day + 1) * (month + 1);

//   // Generate hue values from seed
//   const hue1 = (seed * 10) % 360;
//   const hue2 = (hue1 + 70) % 360;

//   return `linear-gradient(145deg, hsl(${hue1}, 60%, 10%), hsl(${hue2}, 70%, 0%))`;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const calendar = document.getElementById("calendar-container");
//   if (calendar) {
//     calendar.style.background = getGradientByDate();
//   }
// });


// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       .then(reg => console.log('✅ Service Worker registered:', reg.scope))
//       .catch(err => console.error('❌ Service Worker registration failed:', err));
//   });
// }



// function currentGoalContent(id){
//  const data =  JSON.parse(localStorage.getItem('data')) || []

// if(!(data.length > 0)) return
// console.log(data)
// const currentData = data.filter(data => data.id === +id)

// return currentData[0]
// }



//  function renderCalendarView() {
// let id = localStorage.getItem('documentId');
//     const data = currentGoalContent(id)
//     const container = document.getElementById("calendar-grid");
//     container.innerHTML = "";
  
//     if (calendarViewConfig.fullYearMode) {
//       calendar.months.forEach(month => {
        
//         renderMonth(month, container,calendarViewConfig.fullYearMode,data);
//       });
//       document.getElementById("next-month").style.display = "none";
//       document.getElementById("toggle-view").textContent = "Show One Month";
//     } else {
//       const month = calendar.months[calendarViewConfig.currentMonthIndex];
//       renderMonth(month, container,calendarViewConfig.fullYearMode,data);
//       document.getElementById("next-month").style.display = "inline-block";
//       document.getElementById("toggle-view").textContent = "Show Full Year";
//     }



//     console.log(data,'from render calendar view')
//   }
  
  
  
  
//   renderLongestStreak()


// function renderMonth(monthObj, container,fullYearMode,data) {
//   const documentId = localStorage.getItem('documentId')

  
//   // localStorage.setItem(`previousBestStreak@${documentId}`,0)
  
//   const streak = getDataFromServer('streak')

//     const grid = document.createElement("div");
//     grid.className = "calendar-grid"
  

//     if(fullYearMode){
//       const monthName = document.createElement('h3')
//       // monthName.textContent = `${monthObj.name} ${calendar.year}`;
//       monthName.textContent = `${monthObj.name} ${data.content}`;
//       grid.prepend(monthName)
//       document.getElementById('month-name').textContent = ''
//     }else{
//       document.getElementById('month-name').textContent = `${monthObj.name} ${data?.content}`
//     }
  
  
//     // Headers
//     const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     dayHeaders.forEach(day => {
//       const div = document.createElement("div");
//       div.className = "header";
//       div.textContent = day;
//       grid.appendChild(div);
//     });
  
//     // Empty slots before 1st day
//     const offset = new Date(calendar.year, monthObj.index, 1).getDay();
//     for (let i = 0; i < offset; i++) {
//       const empty = document.createElement("div");
//       empty.className = "day empty";
//       grid.appendChild(empty);
//     }
  
//     // Day cells
//     monthObj.days.forEach(day => {
      
//       const div = document.createElement("div");
//       div.className = "day";
//       div.setAttribute('data-date',day.date)
//       div.setAttribute('data-id',documentId)
//       if (day.isWeekend) div.classList.add("weekend");
//       if (day.isHoliday) div.classList.add("holiday");
//       if(day.dayOfMonth  === new Date().getDate())  div.classList.add("today")
//         if(day.date < formatDateLocal(new Date())){
//           //  console.log(day.date < formatDateLocal(new Date()))
//           div.classList.add("past")
//         }


//       div.innerHTML = `
//         <strong>${day.dayOfMonth}</strong>
        
//         ${day.isHoliday ? `<em>${day.holidayName}</em>` : ""}
//       `;
      
      
//       if(streak[day.date + '@' + documentId]){
//         div.classList.add('completed')
//           createTickIcon(div)
//       }
          
  
//       grid.appendChild(div);
//     });
    

//     container.appendChild(grid);
//     console.log(data,'from Render Month')



//   }

  
// function createTickIcon(appendTo){

//   const tick = document.createElement('span');
//   tick.textContent = '✔';
//   tick.className = 'tick';
//   tick.style.marginLeft = '5px';
//   appendTo.appendChild(tick);
// }



// function formatDateLocal(date) {
//   const y = date.getFullYear();
//   const m = String(date.getMonth() + 1).padStart(2, '0');
//   const d = String(date.getDate()).padStart(2, '0');
//   return `${y}-${m}-${d}`;
// }


// function getDataFromServer(key){
//   const saved = JSON.parse(localStorage.getItem(key))
  
//   return saved ? saved : {}
// }


// function saveDate(key,data){
//   localStorage.setItem(key,JSON.stringify({...data}))
// }



// function getLongestStreak(streaks){
//     const documentId = localStorage.getItem('documentId')
//   if(!streaks) return

// streaks = Object.keys(streaks) 

// streaks = streaks.filter(value => value.split('@')[1] === documentId )




// let currStreak = 1 ;
// let longestStreak = 1;

// const sortedStreak = streaks.map(date => {
//   const splitedDate = date.split('@')[0]
//  return new Date(splitedDate)
//  }).sort((a,b) => a-b)


//  for(let i = 1 ; i < sortedStreak.length ; i++){

// const prvDate = sortedStreak[i]
// const currDate = sortedStreak[i - 1]
// const diffDays = (prvDate - currDate) / (1000 * 60 * 60 * 24);
 
// if(diffDays === 1){
//   currStreak++

//   longestStreak = Math.max(longestStreak,currStreak)
  
// }else {
//   currStreak = 1;
// }

// }


// // After loop ends


// return longestStreak
  
// }



// function renderLongestStreak(longestStreak){
//  const empty = document.querySelector('.best-streak')
//   empty && empty.remove()
  
 
  
//    document.body.children[0].insertAdjacentHTML("beforebegin",`
//     <div class='best-streak' style='display:${longestStreak > 2 ? 'block': 'none'}'    >
//     <h2 >Your Longest Streak <span>${longestStreak}</span></h2>     
//     </div>
//     `)


    

//     }


// function updateLongestStreak() {

//    const longestStreak = getLongestStreak(getDataFromServer('streak'))
  
//         renderLongestStreak(longestStreak);
//     }
    
   


// const inputValue = document.getElementById('goal-input-field')
// const btn = document.getElementById('add-goal-btn')
// const goalsContainer = document.querySelector('.goals-container')


// function getDataFromLocalStorage(){
//   const data =  JSON.parse(localStorage.getItem('data')) || []

//   data.forEach(dt => {
//     createGoalElment(dt.content,dt.id)
//   });
//   return data
// }

// let data = getDataFromLocalStorage()

// function saveToLocalStorage(value){
    
//    const goalData = {
//     content:value,
//     id:Math.random()*10000
// }

//     data.push(goalData)
    
//     localStorage.setItem('data',JSON.stringify(data))

//     return goalData

    
// }

// function renderGoals(value){

//   if(value === '') return
//     // if(!value) return

    
//     const {id} =saveToLocalStorage(value)
//      createGoalElment(value,id)
    
    
  
// }

// function createGoalElment(value,id){
//     const div = document.createElement('div');
//     const goalText = document.createElement('div')
//     const goalBtnContainer = document.createElement('div')
//     const deleteButton = document.createElement('button')
//     goalBtnContainer.classList.add('goals-btn-container')
//     div.classList.add('goals')
    

    
//         deleteButton.classList.add('delete-btn')
//         deleteButton.textContent = 'delete'
//         deleteButton.setAttribute('data-id',id)
//         const setGoalBtn = document.createElement('button')
//         setGoalBtn.classList.add('set-streak')
//         setGoalBtn.textContent = 'Set Streak'
//         setGoalBtn.setAttribute('data-id',id)
//         // setGoalBtn.setAttribute('data-id',id)

        
//         goalText.textContent = value;
//     goalText.classList.add('goal-text')
//     div.append(goalText)
    
//     goalBtnContainer.append(setGoalBtn)
//     goalBtnContainer.append(deleteButton)
//     div.append(goalBtnContainer)
    
    
//     goalsContainer.append(div)
// }




// btn.addEventListener('click' , ()=>renderGoals(inputValue.value))


//     goalsContainer.addEventListener('click',function(e){
          
//         const checkDeletedButtonClicked = e.target.classList.contains('delete-btn')
//         const setStreak = e.target.classList.contains('set-streak') 
        
//         if(checkDeletedButtonClicked){
//           const id = e.target.dataset.id;
          
          
//           data = data.filter(dt => dt.id !== +id)
//           localStorage.setItem('data',JSON.stringify(data))
//           e.target.closest('.goals').remove()
          
//         }else if(setStreak){
//           const id = e.target.dataset.id;
          
//           // currentGoalContent(id)
//             renderCalendarView()
//             updateLongestStreak()
          


//           localStorage.setItem('documentId',id)
            
//         }
//       })

      
      
      
    
      

      

// function generateCalendar(year = new Date().getFullYear()) {
//     const monthNames = [
//       "January", "February", "March", "April", "May", "June",
//       "July", "August", "September", "October", "November", "December"
//     ];
//     const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
//     const holidays = {
//       "01-01": "New Year's Day",
//       "07-04": "Independence Day",
//       "12-25": "Christmas Day"
//     };
  
//     const calendar = {
//       year,
//       months: []
//     };
  
//     for (let month = 0; month < 12; month++) {
//       const daysInMonth = new Date(year, month + 1, 0).getDate();
//       const monthObj = {
//         name: monthNames[month],
//         index: month,
//         days: []
//       };
  
//       for (let day = 1; day <= daysInMonth; day++) {
//         const date = new Date(year, month, day);
//         const isoDate = formatDateLocal(date)
//         const mmdd = isoDate.slice(5);
//         const dayObj = {
//           date: isoDate,
//           dayOfMonth: day,
//           dayOfWeek: dayNames[date.getDay()],
//           isWeekend: date.getDay() === 0 || date.getDay() === 6,
//           isHoliday: holidays.hasOwnProperty(mmdd),
//           holidayName: holidays[mmdd] || null
//         };
  
//         monthObj.days.push(dayObj);
//       }
  
//       calendar.months.push(monthObj);
//     }
  
//     return calendar;
//   }
  

  

//   window.addEventListener("load", () => {
//     document.getElementById("global-loader").style.display = "none";
//   });