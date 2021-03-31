function filledBoxes()
{
    var checkName = document.f1.surname.value;
    var checkEmail = document.f1.email.value;
    var checkPhone = document.f1.phone.value;
    var checkRobo = document.f1.robot.checked;
    let allOk = true;

    
    if(checkName == "")
	{
        allOk = false;
        document.f1.surname.className="invalid";
    }
    else document.f1.surname.className="valid";

    if(checkEmail == "")
    {
        allOk = false;
        document.f1.email.className="invalid";
    }
    else document.f1.email.className="valid";

    if(checkPhone == "")
	{
        allOk = false;
        document.f1.phone.className="invalid";
    }
    else document.f1.phone.className="valid";

    if(checkRobo == "")
	{
        allOk = false;
        alert("Вы робот или кто?");
    }

    if(allOk)
    {
        cloudWindow();
    }
}

function cloudWindow()
{
    var Name = document.f1.surname.value;
    var Email = document.f1.email.value;
    var Phone = document.f1.phone.value;
    let answer = confirm("Ваше имя: " + Name + "\n" + "Ваш e-mail: " + Email + "\n" + "Ваш телефон: " + Phone);
    if(answer)
        alert("Добро пожаловать в Сити-17");
}

function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

function date_time()
{
    var day=new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота");
    var current_datetime = new Date();
    var current_day = day[current_datetime.getDay()];
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth()+1);
    var year = current_datetime.getFullYear();
    var hours = zero_first_format(current_datetime.getHours());
    var minutes = zero_first_format(current_datetime.getMinutes());
    var seconds = zero_first_format(current_datetime.getSeconds());

    return day+"."+month+"."+year+" "+current_day+" "+hours+":"+minutes+":"+seconds;
}

