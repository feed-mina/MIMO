import {
  collection,
  deleteField,
  doc,
  getDoc,
  setDoc,
  Timestamp,
  updateDoc,
} from "@firebase/firestore";
//import는 필수이다.

//현재 로그인된 user의 기본적인 데이터는 authService.currentUser에서 참조 가능하다.
const ref = doc(dbService, "User", authService.currentUser.uid);
//최상위 User > UID폴더내에 값을 넣고자 하는 경우이다.

setDoc(
  ref,
  { [nickname]: { imageUrl: imageUrl, fullName: fullName } },
  { merge: true }
);
//setDoc을 사용해서 앞서 선언한 doc와 원하는 데이터를 입력해주면된다.
//Firestore에 object 형식의 데이터를 삽입할 수 있으며, 위와 같이 입력하면
//nickname이 키 값, 이하 부분이 value 값이 된다.

//Firestore의 setDoc은 해당 doc의 모든 요소를 입력하는 변수로 대체해버리는데,
//merge : true 옵션 혹은 updateDoc를 사용시에 기존의 데이터에 합치게 된다.
const docRef = db.collection("users").doc("alovelace");

await docRef.set({
  first: "Ada",
  last: "Lovelace",
  born: 1815,
});
const aTuringRef = db.collection("users").doc("aturing");

await aTuringRef.set({
  first: "Alan",
  middle: "Mathison",
  last: "Turing",
  born: 1912,
});

const snapshot = await db.collection("users").get();
snapshot.forEach((doc) => {
  console.log(doc.id, "=>", doc.data());
});
