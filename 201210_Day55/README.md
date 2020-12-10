# JSP(Java Servlet Page)
- ms : asp, asp.net
- php(window, linux, mos) : cgi

# jsp의 특징

- 웹페이지를 쉽게 개발, 유지 -> 자바기반의 기술
- 일반적으로 확장자 jsp
- j2ee 규약의 일부(웹규약)
- jvm 을 사용

# jsp의 구조

- Directive (지시자, 지시문) => <%@ ... %>
- Scripting element
  1) 선언문(전역형 멤버:필드, 메서드) => <%! ... %>
  2) 스크럽틀릿(지역형) => <% ... %>
  3) 표현식(출력문) => <%= ... %>

- 주석
  1) html 타입 : `<!-- 주석내용 -->`
  2) jsp 타입 : `<%-- 주석 내용--%>`
  3) java 타입 : // or /* ... */

- Action Tag : <jsp: .../>

# jsp에서 외부 페이지 삽입
1) 동적삽입 <jsp:include page='F'/>
   1) 해당위치에 실행결과가 복사된다.
   2) page속성에 파일명이나 변수를 사용할 수 있음.

2) 정적삽입 <%@ include file='F' %>
   1) 해당위치에 소스가 그대로 복사된다.