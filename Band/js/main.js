$(window).load(function(){
	
	//This listens for the back button press
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });

	//handle swipe right gesture
	$('.head').on("swiperight", function(){
		_date = _date - 1;
		if(_month == 1 || _month == 3 || _month == 5 || _month == 7 || _month == 8 || _month == 10 || _month == 12)
		{
			if(_date > 31)
				{
					_date = 31;
					selectSchedule(_year,_month,_date);
				}
			if(_date < 1)
				{
					_date = 1;
					selectSchedule(_year,_month,_date);
				}
			selectSchedule(_year,_month,_date);
		}
		
		if(_month == 4 || _month == 6 || _month == 9 || _month == 11)
		{
			if(_date > 30)
				{
					_date = 30;
					selectSchedule(_year,_month,_date);
				}
			if(_date < 1)
				{
					_date = 1;
					selectSchedule(_year,_month,_date);
				}
			selectSchedule(_year,_month,_date);
		}
		if(_month == 2)
		{
			if((((_year % 4 == 0) && (_year % 100 != 0)) || (_year % 400 == 0)) == 1)
			{
				if(_date > 29)
					_date = 29;
				if(_date < 1)
					_date = 1;
			}
			else
			{
				if(_date > 28)
					_date = 28;
				if(_date < 1)
					_date = 1;
			}
		}
		
		getDay();
	});

	//handle swipe left gesture
	$('.head').on("swipeleft", function(){
		_date = _date + 1;
		if(_month == 1 || _month == 3 || _month == 5 || _month == 7 || _month == 8 || _month == 10 || _month == 12)
		{
			if(_date > 31)
				{
					_date = 31;
					selectSchedule(_year,_month,_date);
				}
			if(_date < 1)
				{
					_date = 1;
					selectSchedule(_year,_month,_date);
				}
			selectSchedule(_year,_month,_date);
		}
		
		if(_month == 4 || _month == 6 || _month == 9 || _month == 11)
		{
			if(_date > 30)
				{
					_date = 30;
					selectSchedule(_year,_month,_date);
				}
			if(_date < 1)
				{
					_date = 1;
					selectSchedule(_year,_month,_date);
				}
			selectSchedule(_year,_month,_date);
		}
		
		if(_month == 2)
		{
			if((((_year % 4 == 0) && (_year % 100 != 0)) || (_year % 400 == 0)) == 1)
			{
				if(_date > 29)
				{
					_date = 29;
					selectSchedule(_year,_month,_date);
				}
				if(_date < 1)
				{
					_date = 1;
					selectSchedule(_year,_month,_date);
				}
			}
			else
			{
				if(_date > 28)
				{
					_date = 28;
					selectSchedule(_year,_month,_date);
				}
				if(_date < 1)
				{
					_date = 1;
					selectSchedule(_year,_month,_date);
				}
			}
		}
		
		getDay();
	});

	//handle swipe up gesture
	$('.head').on("swipeup", function(){
		_month = _month + 1;
		if(_month > 12)
		{
			_month = 12;
			_year = _year + 1;
			_month = 1;
		}
		if(_month < 1)
		{
			_month = 1;
		}
		getDay();
	});

	//handle swipe down gesture
	$('.head').on("swipedown", function(){
		//$('#textbox').html("Down");
		_month = _month - 1;
		if(_month > 12)
		{
			_month = 12;
		}
		if(_month < 1)
		{
			_month = 1;
			_year = _year - 1;
			_month = 12;
		}
		getDay();
	});
});