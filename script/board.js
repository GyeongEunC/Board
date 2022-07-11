function boardCheck() {
	if (document.frm.name.value.length == 0) {
		alert("작성자 입력 바람");
		return false;
	}
	if (document.frm.pass.value.length == 0) {
		alert("비밀번호 입력 바람");
		return false;
	}
	if (document.frm.pass_check.value.length == 0) {
		alert("비밀번호 확인 바람");
		return false;
	}
	if (document.frm.pass.value != document.frm.pass_check.value) {
		alert('암호가 일치하지 않습니다.');
		return false;
	}
	if (document.frm.title.value.lenght == 0) {
		alert("제목 입력 바람");
		return false;
	}
	return true;
}
