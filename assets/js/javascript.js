const formatDate = (num) => {
    let selector;

    if (num <= 0) {
        selector = 4;
    } else if ((num > 3 && num < 21) || num % 10 > 3) {
        selector = 0;
    } else {
        selector = num % 10;
    }

    return num + ['th', 'st', 'nd', 'rd', ''][selector];
};

document.getElementById('currentDay').innerText = `${moment().format('dddd')}, ${moment().format('MMMM')} ${formatDate(moment().date())}`;

const getBlock = (status, time) => {
    let hour = '';
    if (time < 12){
        hour = time+'AM';
    }
    if (time === 12){
        hour = time+'PM';
    }
    if (time > 12){
        hour = time-12+'PM';
    }
    return "<div class='row "+status+"'><div class='hour'>"+hour+"</div><textarea></textarea><button class='saveBtn'>💾</button></div>";
}

const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let i=0; i<hours.length; i++){
    const currentHour = moment().format('H');
    if (currentHour > hours[i]){
        $('#blocks').append(getBlock('past', hours[i]));
    }
    else if (currentHour == hours[i]){
        $('#blocks').append(getBlock('present', hours[i]));
    }
    else if (currentHour < hours[i]){
        $('#blocks').append(getBlock('future', hours[i]));
    }
}
