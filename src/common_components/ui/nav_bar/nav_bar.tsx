import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSetState } from 'utils/functions.utils';
import {
  Functions,
  Models,
  PrimaryButton,
  Navbutton,
  Assets,
  Searchbar,
} from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import './nav_bar.scss';

const Navbar = (props: any) => {
  // Redux
  const userState = useSelector((state: any) => state.user);

  // State
  const [state, setState] = useSetState({ hover: false });

  //Hooks
  useEffect(() => {}, []);
  //Logic
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div className="navbar">
      <div className="search margin_right">
        <Searchbar onChange={() => {}} value={''} name={'search'} />
      </div>
      <div className="create_button margin_right">
        <PrimaryButton
          text={'Create New'}
          icon={Assets.plus_with_box}
          className={'create_btn'}
        />
      </div>
      <div className="create_button margin_right">
        {/* <PrimaryButton
          text={'Logout'}
          // icon={Assets.plus_with_box}
          className={'create_btn'}
          onClick={() => {
            localStorage.clear();
            window.location.href = '/login';
          }}
        /> */}
        {/* <Navbutton
          icon={Assets.settings}
          onClick={() => navigate('/settings/profile')}
        /> */}
      </div>
      <div className="notification_icon margin_right">
        <Navbutton icon={Assets.bell} />
      </div>
      <div
        className="navbar_logout_wrapper"
        onMouseOver={() => setState({ hover: true })}
        onMouseLeave={() => setState({ hover: false })}>
        <div className="navbar_user_image">
          <img
            src={userState?.auth?.profile_picture || Assets.profile_placeholder}
            width={35}
            className="navbar_profile_image"
            height={35}
          />
        </div>
        <div className="navbar_logout_text">
          <div className="navbar_logout_user_name">
            {userState?.auth?.first_name}
          </div>
        </div>
        <div className="navbar_logout_icon" onClick={handleLogout}>
          <img src={Assets.logout} width={20} height={20} />
        </div>
        {state.hover && (
          <div className="navabr_profile_hover_container">
            <div className="navbar_profile_user_name">
              {userState?.auth?.first_name} {userState?.auth?.last_name}
            </div>
            <div className="navbar_profile_user_name">
              {userState?.auth?.job_title}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
