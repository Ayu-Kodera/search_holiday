class CalendarController < ApplicationController
  def index
    render '/calendar/index.html.erb'
=begin
    base_date = 3
    #input_date = STDIN.gets.chomp
    input_date = 15
    passed_date = input_date - base_date
    seek_date = passed_date % 6

    if (seek_date == 0 || seek_date == 1)
      result = "#{input_date}日は休日です！"
    else
      result = "#{input_date}日は出勤日です。"
    end

    render html:result
=end
  end
end
