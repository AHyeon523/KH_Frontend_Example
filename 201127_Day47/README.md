# jQuery

 # 특징 
 1. html + CSS + javascript 를 통합한 하나의 라이브러리
 2. 굉장히 쉬운 접근 방법을 제공한다. -> 전체 처리 속도 감소.
 3. 모든 javascript 문법은 그대로 사용 가능.
 4. 대소문자 구별.
 5. " or ** 은 구별하지 않음.
 6. 라이브러리를  사용하는 방법
    1. CDN
    2. 라이브러리를 해당 프로젝트내에 복사해서 사용.
 7. jQuery는 모든것이 함수화되어 있기 때문에 함수에 대한 이해가 좋을수록 jQuery의 이해도가 높아질 수 있다.
   
    ```
    ex) id='abc'인 요소를 선택
        javascript : var id = document.getElementById('abc');
        javascript function : 
                var getID = function(id) {
                    return document.getElementById(id);
                }

                var id = getID('abc');
        jquery : var id = $('#abc');
    ```
 8. http://www.jquery.com 

# eclipse EE 버전 설치 후 환경 설정

1. 한글 인코딩 : utf-8
   1. Preferences 에서 enc 치고 content Types 에 text textEditor 에 utf-8 update
   2. workspace 에서 맨밑에 other 에서 utf-8바꾸고 적용
   3. CSS filles 에서 맨위에 UTF-8로 바꾸기
   4. HTTL filles 도 맨위에 UTF-8로 바꾸기
   5. JSP files 도 맨위 UTF-8로 바꾸기
   6. xml files 도 맨위 UTF-8로 바꾸기
2. 자바 연결 확인
   1. Preferences 에서 java안에 install JRES 확인
3. 웹서버 설정 : JSP 컨테이너 (톰캣)
   1. Preferences 에서 server안에 Runtime Envlronments 확인
4. 현재 프로젝트에 웹서버 설정

<%@ <= 이부분 빨간 오류 해결 (톰캣 서버 인식 못해서 오류)
해당 파일에서 Build Path -> Configure Build Path... -> Libraries ->
Classpath에 있는 톰캣 지우고 Modulepath 선택 후 Add Library해서 Server Runtime 클릭 후 Next> 톰캣 추가 후 Apply and Close 하면 사라진다.


# DOM ?

 - DOM 은 동일한 문서를 표현하고, 저장하고, 조작하는 방법을 제공한다. DOM 은 웹 페이지의 객체 지향 표현이며, 자바스크립트와 같은 스크립팅 언어를 이용해 DOM 을 수정할 수 있다. W3C DOM, WHATWG DOM 표준은 대부분의 브라우저에서 DOM 을 구현하는 기준이다.
 - HTML을 트리구조로 표현한 것.
 - selectors, Attribute, Tracvsing, Manipulation, CSS, Event, Effects, Ajax

# JSON 표기방법
1. KEY:VALUE => { KEY : VALUE, KEY: VALUE , ... }
2. 배열 => [v1, v2, v3, ...]
3. 혼합형 
   1. 배열안에 map : [{ }, {}, ...]
   2. map 안에 배열 : { key : [...] }

index.jsp? inc = ./jquery/filter.jsp
