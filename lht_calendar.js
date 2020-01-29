"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Joel Mendivil
   Date: 1/27/20 

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

//set the date displayed in the calendar
var thisDay = new Date("August 24, 2018");

//write the calendar to the element with the id "calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

function createCalendar(calDate){
   var calendarHTML = "<table id = 'calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}

function calCaption(calDate){
   var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   monthName[9]; //October

   //Determines the current month
   var thisMonth = calDate.getMonth();

   //Determines the current year
   var thisYear = calDate.getFullYear();

   //Writes the caption
   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

//function to write a table row of weekday abbreviations
function calWeekdayRow(){
   //array to hold weekday abbr.
   var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowHTML = "<tr>";

   //look through the dayName array
   for(var i = 0; i<dayName.length; i++){
      rowHTML += "<th class = 'calendar_weekdays'>" + dayName[i] + "</th>";
   }
   
   rowHTML += "</tr>";
   return rowHTML;
}

//function to calculate the number of days in the month
function daysInMonth(calDate){
   var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

   //extract the four digit year and month values
   var thisYear = calDate.getFullYear();

   //revise the daycount for Leapyears
   if(thisYear % 4 === 0){
      if(thisYear % 100 != 0 || thisYear % 400 != 0){
         dayCount[1] = 29;
      }
   }
   var thisMonth = calDate.getMonth();

   //return the number of days in the month
   return dayCount[thisMonth];
}

//function to write table rows for each day of the month
function calDays(calDate){
   //Determine the starting day
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1)
   var weekDay = day.getDay();

   //Write blank speaces preceding the starting day
   var htmlCode = "<tr>";
   for(var i = 0; i<weekDay; i++){
      htmlCode = "<td></td>";
   }

   //Wrtie calls for each day of the month
   var totalDays = daysInMonth(calDate);
   for(var i = 1; i<totalDays; i++){
      day.setDate(i);
      weekDay = day.getDay();

      if(weekDay === 0){
         htmlCode += "<tr>";
      }
      htmlCode += "<td class = 'calendar_dates'>" + i + "</td>";
      if(weekDay === 6){
         htmlCode += "</tr>";
      }
   }
   return htmlCode;
}