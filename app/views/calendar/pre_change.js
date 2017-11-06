// クリック時発火イベント
$(document).ready(function() {
    $('#calendar').fullCalendar({
        events: '/events.json',
        selectable: true,
        selectHelper: true,
        dayClick: function(date) {
          var base_date = 3;
          var input_date = 15;
          var passed_date = input_date - base_date;
          var seek_date = passed_date % 6;
          var result = 0;
          var str = moment( date ).format( 'YYYY/MM/DD' );
          if (seek_date === 0 || seek_date === 1) {
            result = input_date + "日は休日です！"
          } else {
            result = input_date + "日は出勤日です。"
          };
          alert(result);
          alert(str);
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


// クリックした日付を取得
$(function(){
  $('#calendar').fullCalendar({
        events: '/events.json',
        selectable: true,
        selectHelper: true,
        dayClick: function(date) {
            var str = moment( data ).format( 'YYYY/MM/DD' );
            console.log(date);
        }
    });
});
