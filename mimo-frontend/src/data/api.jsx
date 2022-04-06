import { useEffect } from "react";
import React from "react";

export async function getReviews({ order = "id", offset = 0, limit = 6 }) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    "https://mimo-49f6d-default-rtdb.firebaseio.com/review.json"
  );
  const body = await response.json();
  return body;
}

export default async function createReviews(formData) {
  const response = await fetch(
    "https://mimo-49f6d-default-rtdb.firebaseio.com/createdReviews.json",
    {
      method: "POST",
      body: formData,
      headers: {
        "content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  // const data = await response.json();
  // console.log(data);
}
export async function setSkin({ skinType, toneType }) {
  const skinquery = `skinType=${skinType}&toneType=${toneType}`;
  const response = await fetch(
    "https://mimo-49f6d-default-rtdb.firebaseio.com/detail/1.json"
  );
  const body = await response.json();
  return body;
}

//   const response = await fetch(
//     "https://mimo-49f6d-default-rtdb.firebaseio.com/review.json", {
// method:'POST',
// body:FormData,}
//   );
//   const body = await response.json();
//   return body;
// }
