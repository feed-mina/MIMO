//데이터 삭제시는 아래와 같이 update함수와 함께 (merge : true를 사용해도 동일함)
//해당 Field에 deleteField() 함수를 입력해주면 된다.

const ref = doc(dbService, "User", authService.currentUser.uid);
updateDoc(ref, { [nickname]: deleteField() });
