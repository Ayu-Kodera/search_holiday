$(document).ready ->
  $('#calendar').fullCalendar
    #events: '/events.json'

    # 選択中の日程の色を変える
    selectable: true
    selectHelper: true

    ### エラーでわからん
    header: center: 'month,agendaWeek'
    views: month: titleFormat: 'YYYY, MM, DD'
    ###
    
    # 6日間カレンダー（１日あたりの予定を書ける、機能はまだ無し）
    header: center: 'month,agendaFourDay'
    views: agendaFourDay:
      type: 'agenda'
      buttonText: '6 day'
      defaultView: 'timeline'
      duration: days: 6

    dayClick: (date) ->
      base_date = "2017-11-03"
      input_date = moment(date).format('YYYY/MM/DD')
      passed_date = moment(input_date).diff(base_date, 'days')
      seek_date = passed_date % 6
      result = 0
      if seek_date == 0 or seek_date == 1
        result = input_date + '日は休日です！'
      else
        result = input_date + '日は出勤日です。'
      alert result
      return
  return
###
$(document).ready ->
  $('#calendar').fullCalendar
    #events: '/events.json'
    selectable: true
    selectHelper: true
    dayClick: (date) ->
      base_date = "2017-11-03"
      input_date = moment(date).format('YYYY/MM/DD')
      passed_date = moment(input_date).diff(base_date, 'days')
      seek_date = passed_date % 4
      result = 0
      if seek_date == 0
        result = input_date + '日は休日です！'
      else
        result = input_date + '日は出勤日です。'
      alert result
      return
  return
###
