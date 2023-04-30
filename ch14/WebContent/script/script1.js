
//제이쿼리에서 함수 호출
$(()=>{
	externalLinks();
});

//자바스크립트 함수
function externalLinks(){
	$(()=>{
		$('a.new_window').on('click',function(e){
			let location = $(this).attr('href');  //href 속성값 읽어오기
			window.open(location);
	
		});
	});
}