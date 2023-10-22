import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const Avatar = () => {
  const [userData, setuserData] = useState({});

  useEffect(() => {
    var data = {};

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const q = query(
          collection(db, "users"),
          where("userID", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          data = doc.data();
        });
        setuserData(data);
      }
    });
  }, []);

  return (
    <div className="avatar bg-yellow-300 inline-block rounded-2xl p-2">
      <p className="flex justify-center items-center w-full h-full">
        {userData.fname ? userData.fname.charAt(0) : " "}
        {userData.lname ? userData.lname.charAt(0) : " "}
      </p>
    </div>
  );
};

export default Avatar;
