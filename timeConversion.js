/*Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.*/

const s = "07:05:45PM"
console.log(s)   

function timeConversion(s) {
    let period = s[8] + s.charAt(9)
    let time = parseInt(s[0] + s[1])
    if(period == "AM"){
        if(time+12==24){
            time = "00"
        }else {time += 12}
    }
    console.log(`${time}${s.substr(2,6)}`)
}

timeConversion(s)

//WORKING