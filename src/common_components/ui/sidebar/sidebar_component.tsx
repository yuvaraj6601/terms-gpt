import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Functions, Models } from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import './sidebar_component.scss';
import { Assets } from '../../../utils/imports.utils';

interface Isidebar {
  text?: String;
}

const sidebar = (props: Isidebar) => {
  return (
    <div>
      <div className="sidebar_container">
        <div className="sidebar_wrapper">
          <div className="sidebar_section">
            <div className="sidebar_logo">
              <div className="sidebar_toggle">
                <img src={Assets.toggle} width="35" alt="toggler" />
              </div>
              <div className="sidebar_brand_img">
                <img src={Assets.logo} width="150" alt="logo" />
              </div>
            </div>
            <div className="sidebar_heading">Settings</div>
            <div className="sidebar_menu">
              <div className="sidebar_menu_list">
                <div className="sidebar_icon">
                  <img src={Assets.profile} width="30" alt="icons" />
                </div>
                <div className="sidebar_list_name">Your Profile</div>
              </div>
              <div className="sidebar_menu_list">
                <div className="sidebar_icon">
                  <img src={Assets.password} width="30" alt="icons" />
                </div>
                <div className="sidebar_list_name">Change Passwords</div>
              </div>
              <div className="sidebar_menu_list">
                <div className="sidebar_icon">
                  <img src={Assets.manageusers} width="30" alt="icons" />
                </div>
                <div className="sidebar_list_name">Manage Users</div>
              </div>
              <div className="sidebar_menu_list">
                <div className="sidebar_icon">
                  <img src={Assets.email} width="30" alt="icons" />
                </div>
                <div className="sidebar_list_name">Email Templates</div>
              </div>
              <div className="sidebar_menu_list">
                <div className="sidebar_icon">
                  <img src={Assets.offer} width="30" alt="icons" />
                </div>
                <div className="sidebar_list_name">Offer Templates</div>
              </div>
              <div className="sidebar_menu_list">
                <div className="sidebar_icon">
                  <img
                    className="img"
                    src={Assets.map}
                    width="30"
                    alt="icons"
                  />
                </div>
                <div className="sidebar_list_name">Work Locations</div>
              </div>
              <div className="sidebar_menu_list">
                <div className="sidebar_icon">
                  <img src={Assets.department} width="30" alt="icons" />
                </div>
                <div className="sidebar_list_name">Departments</div>
              </div>
              <div className="sidebar_menu_list">
                <div className="sidebar_icon">
                  <img src={Assets.job} width="30" alt="icons" />
                </div>
                <div className="sidebar_list_name">Job Publishing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
