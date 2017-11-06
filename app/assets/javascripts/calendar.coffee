# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->
  $('#calendar').fullCalendar
    events: '/events.json'
    selectable: true
    selectHelper: true
    dayClick: (date) ->
      base_date = "2017-11-03"
      console.log(base_date)
      #parse_date = moment(base_date).format('MM/DD/YYYY')
      #console.log(parse_date)
      input_date = moment(date).format('YYYY/MM/DD')
      console.log(input_date)
      passed_date = moment(input_date).diff(base_date, 'days')
      console.log(passed_date)
      seek_date = passed_date % 6
      #console.log(seek_date)
      result = 0
      if seek_date == 0 or seek_date == 1
        result = input_date + '日は休日です！'
      else
        result = input_date + '日は出勤日です。'
      alert result
      return
  return
