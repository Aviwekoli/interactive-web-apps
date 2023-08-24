const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  // Only edit below this line
   // Destructuring the data object to create variables NM372 and SV782 
  const {response: {data:{NM372, SV782}}} = data;

    /**
   * The creatHtml function creates an HTML Document fragment which,
   * holds the information about each athlete's race stats and,
   * Each athlete is distinguished by their unique ID's.
   */
  const createHtml = (athlete) => {
    const {firstName, surname, id, races} = athlete;
    const fullName = `${firstName} ${surname}`;

    /**
     * Create a new variable for race number which basically
     * assing the length of races array as the number of races
     * Also, use reverse function to reverse the number of elements in the race arrays to make it,
     * easy to access the most recent date and then grab it by its index (first index)
     * 
     */
    const raceNumber = races.length;
    const racesReversed = [...races].reverse()[0]

    // DATE
    /**
     * This basically formats the most recent date in STR standard (dd Mon Year)
     * Using the new Date constructor, it makes it easy to access day, month and year using
     * javascript date bult-in functions;
     */
    const datee = new Date(racesReversed.date);
    const day = datee.getDate();
    const month = MONTHS[datee.getMonth()];
    const year = datee.getFullYear();
    const latestDate = `${day} ${month} ${year}`;

    //TIME
    /**
     * This basically formats the time for all recent races,
     * Since the time is gives in minutes, timeFormat will return a string of time in STR format (hh:mm)
     */
     const time = racesReversed.time; 
     let seconds = 0;
     let hours = 0;
     let timeFormat ='';
     time.forEach(element =>{seconds += element});

     if (seconds < 60){
      timeFormat = `${hours.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
     }
     else{
     hours = Math.floor(seconds/60);
     seconds = seconds%60;
     timeFormat = `${hours1.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
     }

    /**
     * An HTML fragment is created to display each athletes stats and name:
     * A heading (athlete's id) for each athlete using HTML h2 element
     * And then a list is created and the appended to the fragment as its inner child
     * the list is in the form of a discription list (basically for read-ability)
     */
    const fragment = document.createDocumentFragment();
    const title = document.createElement('h2');
    title.innerHTML = athlete.id;
    fragment.appendChild(title);
    
    const list = document.createElement('dl');
    list.innerHTML = /* html*/ `
      <dt>Athlete:</dt>  
      <dd>${fullName}</dd>
      <dt>Total Races:</dt>
      <dd>${raceNumber}</dd>
      <dt>Event Date (Latest):</dt>
      <dd>${latestDate}</dd>
      <dt>Total Time (Latest):</dt>
      <dd>${timeFormat}</dd>
      `;
  fragment.appendChild(list)  
    return fragment
  }
  /**
   * The following selects each athlete's section from the HTML file and,
   * adds or appends its respective heading and a discription list which
   * contains the athletes stats.
   */
  document.querySelector('[data-athlete = "NM372"]').appendChild(createHtml(NM372));
  document.querySelector('[data-athlete = "SV782"]').appendChild(createHtml(SV782));

  // document.querySelector(NM372).appendChild(createHtml(NM372));
// document.querySelector(SV782).appendChild(createHtml(SV782));
//   const createHtml = (athlete) => {
//   firstName, surname, id, races = athlete
//   [date], [time] = races.reverse()

//   const fragment = document.createDocumentFragment();

//   title = document.createElement(h2);
//   title= id;
//   fragment.appendChild(title);

//   const list = document.createElement(dl);

//   const day = date.getDate();
//   const month = MONTHS[date.month];
//   const year = date.year;

//   first, second, third, fourth = timeAsArray;
//   total = first + second + third + fourth;

//   const hours = total / 60;
//   const minutes = total / hours / 60;

//   list.innerHTML = /* html */ `
//     <dt>Athlete</dt>
//     <dd>${firstName surname}</dd>

//     <dt>Total Races</dt>
//     <dd>${races}</dd>

//     <dt>Event Date (Latest)</dt>
//     <dd>${day month year}</dd>

//     <dt>Total Time (Latest)</dt>
//     <dd>${hours.padStart(2, 0) minutes}</dd>
//   `;

//   fragment.appendChild(list);
// }

// [NM372], [SV782] = data
// document.querySelector(NM372).appendChild(createHtml(NM372));
// document.querySelector(SV782).appendChild(createHtml(SV782));