
# 조건

`<ul>`태그와` <a>`태그를 사용하여 아래 조건에 일치하는 navigator를 만들었는데 문제가 발생하였다. 조건과 작성한 코드를 분석하여 발생하는 문제점과 원인을 서술하고, 해결방안을 작성하시오.

- navigator 조건 -
1. navi 항목은 HTML5, CSS3, JavaScript, jQuery로 총4개이며, 각각 클릭 시 해당하는 페이지로 이동해야한다.
2. navi의 메뉴 각각의 크기는 150 x 50 px 크기로 지정하며 가로로 한줄로 배치된다.
3. 배경색은 검정색, 글씨색은 흰색으로 하며, 좌/우, 상/하로 가운데정렬 되어있어야 한다.
되어있음
4. 메뉴에 마우스가 올라간 경우 글씨는 두꺼워지고, 클씨크기는 1.2배로 커진다.
되어있음
5. 마우스로 메뉴글씨 뿐아니라 해당 메뉴영역에 마우스가 올라가더라도 동일한 효과가 발생해야 한다.
   
# 원인

2. 
    크기지정을 조건에 맞게 다시지정해주고 가로로 배치되어있어야하는 코드가 없기 때문에 가로로 배치해주는 코드를 넣어야한다.


5. 
    글씨에 마우스가 올라갔을 때만 효과가 발생하였기 때문에 해당 메뉴영역에 마우스가 올라갔을때 동일한 효과를 발생하도록 코드를 변경해줘야한다.

# 조치내용

2. navi의 메뉴 각각의 크기는 150 x 50 px 크기로 지정하며 가로로 한줄로 배치되야하면 코드를 아래와 같이 변경해야 한다.​
   
```HTML
    변경 전 코드)
        .navi>li {
                background-color: black;
                list-style-type: none;
                width: 100px;
                height: 50px;
                text-align: center;
            }​

    변경 후 코드)
    .navi>li {
                background-color: black;
                list-style-type: none;
                width: 150px;
                height: 50px;
                text-align: center;
                //방법 1
                float: left; //​​<li>태그들이 왼쪽에 흐르게 설정해준다
                //방법 2
                display : inline-block;
                margin-right : -6px;
                vertical-align : top; 
            }​
```

5. 마우스로 메뉴글씨 뿐아니라 해당 메뉴영역에 마우스가 올라가더라도 동일한 효과가 발생해야 하면 코드를 아래와 같이 변경해야 한다.


```HTML
변경 전 코드)
.navi>li>a:hover {
            font-size: 1.2em;
            font-weight: bold;
        }​
변경 후 코드)
.navi>li:hover {
            font-size: 1.2em;
            font-weight: bold;
        }​
```