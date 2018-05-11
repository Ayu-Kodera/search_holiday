class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def hello
    render html:"hello, world"
  end

  def which_day
    base_date = 3
    #input_date = STDIN.gets.chomp
    input_date = 10
    pass_date = input_date - base_date
    seek_date = passed_date % 6

    if (seek_date == 0 && seek_date == 1)
      result = "#{input_date}日は休日です！"
    else
      result = "#{input_date}日は出勤日です。"
    end

    print input_date
    print input_date
    print input_date
    print input_date
    print input_date
    print input_date
    print input_date
    print input_date
    print input_date
    print input_date
    print input_date
    print input_date
    print input_date
    render html:result
  end
end
