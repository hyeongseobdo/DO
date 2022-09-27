		var selectMenu = document.testForm.major;  // 셀렉트 메뉴를 가져와 selectMenu로 저장
		function displaySelect() {
			var selectedText = selectMenu.options[selectMenu.selectedIndex].innerText; //selectMenu뒤에 추가 작성하여 완성해 보세요		
			alert("[" + selectedText + "]를 선택했습니다.");
		}		 