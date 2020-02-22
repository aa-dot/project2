var url = location.href;
// url is ( file:///F:/courses/iti%20Minia/responsive%20&%20bootstrap/project/feedbacks.html?userName=ahmad&mail=ahmaed.yousseef%40gmail.com&subject=problem&message=call+me+back )

var feedback = url.split('?');
// feedback[0] is ( file:///F:/courses/iti%20Minia/responsive%20&%20bootstrap/project/feedbacks.html )
// feedback[1] is ( userName=ahmad&mail=ahmaed.yousseef%40gmail.com&subject=problem&message=call+me+back )

var arr1 = feedback[1].split('&');
// arr1[0] is ( userName=ahmad )
// arr1[1] is ( mail=ahmaed.yousseef%40gmail.com&subject=problem&message=call+me+back )

var name = arr1[0].split('=');
//name[0] is ( userName )
// name[1] is ( ahmad )

var arr2 = arr1[1].split('&');
// arr2[0] is ( mail=ahmaed.yousseef%40gmail.com )
// arr2[1] is ( subject=problem&message=call+me+back )

var mail = arr2[0].split('=');
// mail[0] is ( mail )
// mail[1] is ( ahmaed.yousseef%40gmail.com )

var arr3 = arr2[1].split('&');
// arr3[0] is ( subject=problem )
// arr3[1] is ( message=call+me+back )

var title = arr3[0].split('=');
// // title[0] is ( subject )
// // title[1] is ( problem )

var message = arr3[1].split('=');
// // message[0] is ( message )
// // message[1] is ( call+me+back )

document.getElementById('userName').innerHTML=name[1];
document.getElementById('userMessage').innerHTML=message[1];