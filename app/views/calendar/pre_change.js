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

// イベントの登録
$(document).ready(function() {

    create_event = function(title, start, end){
      $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        var token;
        if (!options.crossDomain) {
          token = $('meta[name="csrf-token"]').attr('content');
          if (token) {
            return jqXHR.setRequestHeader('X-CSRF-Token', token);
          }
        }
      });
      $.ajax({
        type: "post",
        url: "/events/create",
        data: {
          title: title,
          start: start.toISOString(),
          end: end.toISOString()
        }
      }).done(function(data){
        alert("登録しました!");
      }).fail(function(data){
        alert("登録できませんでした。");
      });
    };

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      navLinks: true,
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
        var title = prompt('イベントを追加');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $('#calendar').fullCalendar('renderEvent', eventData, true);
          $('#calendar').fullCalendar('unselect');
          create_event(title, start, end);
        }
      },
      timezone: 'UTC',
      events: '/events.json',
      editable: true
    });
});


// GoogleCalendar連携
$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: '<YOUR API KEY>',
        events: {
            googleCalendarId: 'abcd1234@group.calendar.google.com'
        }
    });
});
