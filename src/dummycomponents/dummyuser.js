import React, { useEffect, useState } from "react";
import { Orders } from "./../components/orders";
import { useOnScreen } from "./../components/useOnScreen";
import { useOnScreenAccountHeader } from "./../components/useOnScreenAccountHeader";
import { OverlayLeft } from "./../components/overlayleft";
import { TopHeader } from "./../components/topheader";
import { getUser } from "./../services/ApiService";
import { useParams } from "react-router-dom";
export function DummyUser() {
  const [ref, visible] = useOnScreen({ threshold: 0.7 });
  const [refOne, visibleOne] = useOnScreenAccountHeader({ threshold: 0 });
  const [isAddressClicked, setISAddressClicked] = useState(false);
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const { userName, city, userId } = useParams();
  useEffect(() => {
    getUser(userId).then((data) => {
      setPhoneNumber(data.data[0].phoneNumber);
      setEmail(data.data[0].email);
    });
  }, []);

  return (
    <>
      {isAddressClicked ? (
        <OverlayLeft
          onExit={() => {
            setISAddressClicked(false);
          }}
        >
          {" "}
        </OverlayLeft>
      ) : (
        ""
      )}

      <TopHeader
        setISAddressClicked={setISAddressClicked}
        userName={userName}
        city={city}
        userId={userId}
      ></TopHeader>
      <div ref={ref}>
        {visible ? (
          <>
            <div className="h-40  flex teal-blue justify-center w-full">
              <div
                className="flex  justify-between items-center text-white font-bold text-3xl "
                style={{ width: 1200 }}
              >
                <div className="flex flex-col ">
                  <div>{userName}</div>
                  <div className="flex space-x-8 text-base font-normal">
                    <div>{phoneNumber}</div>
                    <div>{email}</div>
                  </div>
                </div>

                <button className="border border-white text-base py-2 px-6">
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="teal-blue">
              <div className="h-12 bg-white mx-6"></div>
            </div>
          </>
        ) : (
          <>
            <div className="h-20  fixed top-0 z-40 flex teal-blue justify-center w-full">
              <div
                className="flex  justify-between items-center text-white font-bold text-3xl "
                style={{ width: 1200 }}
              >
                <div className="flex flex-col ">
                  <div>{userName}</div>
                  <div className="flex space-x-8 text-base font-normal">
                    <div>{phoneNumber}</div>
                    <div>{email}</div>
                  </div>
                </div>

                <button className="border border-white text-base py-2 px-6">
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="h-20 bg-white top-0 z-10 fixed"></div>
          </>
        )}
      </div>

      <div ref={refOne}>
        {visibleOne ? (
          <>
            {" "}
            <div className="bg-white">
              <div className="mx-20">
                {" "}
                <Orders visible={visible} />
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="teal-blue">
              <div className="bg-white mx-6">
                <div className="mx-10">
                  <Orders visible={visible} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
