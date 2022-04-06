//깊이가 있는 곳에 데이터를 삽입하고싶은 경우는 아래와 같이 path를 /를 사용해 만들어주면된다.
//결과적으로 아래 코드는 Notice/1128/1/title doc의 모든 필드를 불러오는 동작을 한다.

const ref = doc(dbService, "Notice/1128/1", title);
let res = await getDoc(ref);
//Firestore의 모든 함수는 비동기 함수이므로 await&async 혹은 then을 적절히 사용하자.
//get은 데이터가 없을 경우 null을 반환하며, 가져온 데이터는 아래와 같이 res.data()의 형식으로 뽑아 낼 수 있다.
return res.data();
