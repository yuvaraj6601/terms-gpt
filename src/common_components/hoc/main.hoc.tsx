import React, { useEffect, Fragment } from "react";
import { useSetState } from "utils/common.utils"
import { useSelector, useDispatch } from "react-redux";

import { SHOW_SUCCESS, THROW_ERROR } from "utils/types.utils";
import { reducers } from "interfaces/common.interface"
import connectSocket from "utils/socket.utils"

let socket:any

export default function Main(props: any) {
  const [state] = useSetState({ signout: false });
  const user = useSelector((store: reducers) => store.user);
  const dispatch = useDispatch()

  useEffect(() => {
    socket = connectSocket()
  }, []);

  const showSuccess = (text: string) => {
    dispatch({
      type: SHOW_SUCCESS,
      payload: text,
    })
  }

  const throwError = (text: string) => {
    dispatch({
      type: THROW_ERROR,
      payload: text,
    })
  }

  const renderChildren = () => {
    return React.Children.map(props.children, (child: any) => {
      if (child) {
        return React.cloneElement(child, {
          user,
          showSuccess,
          throwError,
          socket,
        });
      }
    });
  };

  if (state.signout) window.location.href = "/";
  return (
    <>
      {
        renderChildren()
      }
    </>
  )
}
