if(new Date().getHours()>4){
    alert("Good Morning");
}
else if (new Date().getHours()>12){
    alert("Good Afternoon");
}
else if (new Date().getHours()>16){
    alert("Good Evening");
}
else{
    alert("Good night user. It's already too late, so go to bed");
}