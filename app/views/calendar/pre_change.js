// クリック時発火イベント
$(document).ready(function() {
    $('#calendar').fullCalendar({
        dayClick: function() {
          var base_date = 3;
        	var input_date = 15;
        	var passed_date = input_date - base_date;
        	var seek_date = passed_date % 6;
        	var result = 0;
          if (seek_date === 0 || seek_date === 1) {
            result = input_date + "日は休日です！"
          } else {
            result = input_date + "日は出勤日です。"
          };
          alert(result);
        }
    });
});


// 休日計算
var base_date = 3;
var input_date = 15;
var passed_date = input_date - base_date;
var seek_date = passed_date % 6;
var result;

if (seek_date == 0 || seek_date == 1) {
  result = input_date + "日は休日です！"
} else {
  result = input_date + "日は出勤日です。"
};
