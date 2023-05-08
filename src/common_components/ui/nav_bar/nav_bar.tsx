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
  Icon,
  Colors,
} from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import './nav_bar.scss';
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = (props: any) => {
  // Redux
  const userState = useSelector((state: any) => state.user);

  // State
  const [state, setState] = useSetState({ showDropdown: false });

  //Hooks
  useEffect(() => {}, []);
  //Logic
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div className="navbar_container">
      <div className="navbar_logo_container">
        <div className="navbar_logo">
          <img src={Assets.logo} />
        </div>
        <div className="navbar_brand_text">
          <div className="navbar_brand_text_1">Terms & Condition</div>
          <div className="navbar_brand_text_2">Checker</div>
        </div>
      </div>
      <div className="navbar_end_container">
        <div className="navbar_upgrade_button_container">
          <PrimaryButton
            startIcon={<Icon src={Assets.crown} />}
            style={{
              backgroundColor: Colors.primaryLightColor,
              color: Colors.buttonTextColor,
            }}>
            Upgrade
          </PrimaryButton>
        </div>
        <div className="navbar_upgrade_button_container">
          <PrimaryButton style={{ color: Colors.primaryDarkColor }}>
            My Agreement
          </PrimaryButton>
        </div>
        <OutsideClickHandler
          onOutsideClick={() => {
            setState({ showDropdown: false });
          }}>
          <div className="navbar_profile_button_container">
            <div
              className="navbar_profile_button_wrapper"
              onClick={() => {
                setState({ showDropdown: !state.showDropdown });
              }}>
              <img src={Assets.profilePlaceholder} alt="Profile placeholder" />
            </div>
            {state.showDropdown && (
              <div className="navbar_profile_dropdown_container">
                <div className="navbar_dropdown_info_container">
                  <div className="navbar_dropdown_name">Yuvaraj</div>
                  <div className="navbar_dropdown_email">
                    Yuvaraj@yopmail.com
                  </div>
                </div>
                <div className="navbar_menu_container">
                  <div className="navbar_menu_wrapper">
                    <div className="navbar_menu_icon">
                      <img src={Assets.settings} />
                    </div>
                    <div className="navbar_menu_text">Settings</div>
                  </div>
                  <div className="navbar_menu_wrapper">
                    <div className="navbar_menu_icon">
                      <img src={Assets.billing} />
                    </div>
                    <div className="navbar_menu_text">Billing</div>
                  </div>
                  <div className="navbar_menu_wrapper">
                    <div className="navbar_menu_icon">
                      <img src={Assets.help} />
                    </div>
                    <div className="navbar_menu_text">Help And Support</div>
                  </div>
                </div>
                <div className="navbar_logout_container">
                  <div className="navbar_menu_icon">
                    <img src={Assets.logout} />
                  </div>
                  <div className="navbar_menu_text">Log out</div>
                </div>
              </div>
            )}
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Navbar;
