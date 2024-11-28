import React, { useRef } from 'react'
import moment from 'moment';

function DateMethods() {

  let dateRef=useRef();
  let courseEndRef=useRef();

  let monthArr=["January","February","March","April","May","June","July","August","September","October","November","December"];

  let dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.clear()
    // let independenceDay=new Date();
        // let independenceDay=new Date("20,august,2000")
        let independenceDay=new Date(457493439483);
      console.log(independenceDay.getFullYear());
      console.log(monthArr[independenceDay.getMonth()]);
      console.log(independenceDay.getDate());
      console.log(dayArr[independenceDay.getDay()]);
      console.log(independenceDay.getHours());
      console.log(independenceDay.getMinutes());
      console.log(independenceDay.getSeconds());
      console.log(independenceDay.getMilliseconds());
      console.log(independenceDay.getTime());

  return ( 
    <div>
      <h1>Date & Moment.js</h1>
        
      <div>
        <form>
          <div>
            <label>Enter Course Start date : </label>
            <input type='dateTime-Local' onChange={(e)=>{
              console.clear()
                let selectedDate=new Date(e.target.value);
                console.log(selectedDate.getFullYear());
                console.log(monthArr[selectedDate.getMonth()]);
                console.log(selectedDate.getDate());
                console.log(dayArr[selectedDate.getDay()]);
                console.log(selectedDate.getHours());
                console.log(selectedDate.getMinutes());
                console.log(selectedDate.getSeconds());
                console.log(selectedDate.getMilliseconds());
                console.log(selectedDate.getTime());

                let courseDurationInMS=122*24*60*60*1000;
                let courseEndDateinMS=selectedDate.getTime()+courseDurationInMS;
                let courseEndDate=new Date(courseEndDateinMS);
                console.log(courseEndDate);
                courseEndRef.current.innerHTML=`Course End Date : ${courseEndDate}`;
            }}></input>

            <p ref={courseEndRef}></p>
          </div>


            {/* Moment.js */}
          <div>
            <button className='momentBtn' type='button' onClick={()=>{
              dateRef.current.innerHTML= `Current Date & Time: ${moment().format('MMMM Do YYYY, h:mm:ss a')},<br>
              ${moment("20110620", "YYYYMMDD").fromNow()} <br>
            Subtract:  ${moment().subtract(120, 'days').calendar()} <br>
              ${moment("20241220").endOf('day').fromNow()} <br>
             Add: ${moment().add(120, 'days').calendar()} `  
            }}>Moment</button>
          </div>
        </form>
      </div>

      <p ref={dateRef}></p>

    </div>
  )
}

export default DateMethods
