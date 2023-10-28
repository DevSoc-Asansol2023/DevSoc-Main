import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const Avatar = () => {
  const [userData, setuserData] = useState({});
  const [photo, setphoto] = useState("");

  useEffect(() => {
    var data = {};

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        if (user.photoURL) {
          setphoto(user.photoURL);
        } else {
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
      }
    });
  }, []);

  return (
    <>
      {/* <div className="avatar w-10 h-10 text-black bg-yellow-300 inline-block rounded-2xl p-2"> */}
      {photo ? (
        <img
          src={photo}
          alt="DP"
          className="w-10 h-10 rounded-2xl"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="avatar w-10 h-10 text-black bg-yellow-300 inline-block rounded-2xl p-2">
          <p className="flex justify-center items-center w-full h-full">
            {userData.fname ? userData.fname.charAt(0) : " "}
            {userData.lname ? userData.lname.charAt(0) : " "}
          </p>
        </div>
      )}
      {/* </div> */}
    </>
  );
};

export default Avatar;
