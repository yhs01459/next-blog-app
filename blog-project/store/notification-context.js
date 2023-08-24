"use client";
import { createContext, useState, useEffect } from "react";

// 알람 context 객체
export const NotificationContext = createContext({
  state: { title: "1", message: "1", status: "1" },
  action: {
    showNotification: (notificationData) => {},
    hideNotification: () => {},
  },
});

// context provider
export const NotificationProvider = (props) => {
  
  const [activeNotification, setActiveNotification] = useState();

  useEffect(()=>{
    if(activeNotification && (activeNotification.status==='success')){
      const timer = setTimeout(()=>{
        setActiveNotification(null);
      },1000);

      return () => {clearTimeout(timer)};
    }
  },[activeNotification]);

  const showNotificationHandler = (notificationData) => {
    setActiveNotification({
      title: notificationData.title,
      message: notificationData.message,
      status: notificationData.status,
    });
 
  };

  const hideNotificationHandler = () => {
    setActiveNotification({});
  };

  // 현자 상태, show handler, hide handler 를 자식들에게 전달



  const context = {
    state: activeNotification,
    action: {
      showNotification: showNotificationHandler,
      hideNotification: hideNotificationHandler,
    },
  };

  //provider에 의해 감싸진 컴포넌트들은 value값으로 전달된 context를 조회하고 사용할 수 있다.
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};