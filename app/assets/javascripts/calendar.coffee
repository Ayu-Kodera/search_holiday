# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->
  $('#calendar').fullCalendar dayClick: ->
    base_date = 3
    input_date = 15
    passed_date = input_date - base_date
    seek_date = passed_date % 6
    result = 0
    if seek_date == 0 or seek_date == 1
      result = input_date + '日は休日です！'
    else
      result = input_date + '日は出勤日です。'
    alert result
    return
  return
