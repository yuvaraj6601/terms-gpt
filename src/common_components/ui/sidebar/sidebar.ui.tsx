import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useSetState } from 'utils/functions.utils';
import { Functions, Models, Assets } from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import './sidebar.ui.scss';

const Sidebar = (props: any) => {
  // Redux
  const userState = useSelector((state: any) => state.user);
  // State
  const [state, setState] = useSetState({ hide: false });


  const navigate = useNavigate();


  //Logic
  const getActiveRoute = () => {
    let route = window.location.href.split('/').pop();
    if (window.location.href.includes('settings')) {
      return `/settings/${route}`;
    } else {
      return `/${route}`;
    }
  };

  //sample data
  const settings_data = [
    {
      name: 'Your Profile',
      route: '/settings/profile',
      inactive_icon: Assets.profile,
      active_icon: Assets.profile_active,
    },
    {
      name: 'Change Password',
      route: '/settings/change_password',
      inactive_icon: Assets.password,
      active_icon: Assets.password_active,
    },
    {
      name: 'Manage Users',
      route: '/settings/manage_users',
      inactive_icon: Assets.manageusers,
      active_icon: Assets.manageusers_active,
    },
    {
      name: 'Email Template',
      route: '/settings/email_template',
      inactive_icon: Assets.email,
      active_icon: Assets.email_active,
    },
    
    {
      name: 'Work Locations',
      route: '/settings/work_locations',
      inactive_icon: Assets.map,
      active_icon: Assets.map_active,
    },
    {
      name: 'Departments',
      route: '/settings/departments',
      inactive_icon: Assets.department,
      active_icon: Assets.department_active,
    },
    {
      name: 'Business Unit',
      route: '/settings/business_unit',
      inactive_icon: Assets.department,
      active_icon: Assets.department_active,
    },
    
    {
      name: 'Staffing Partners',
      route: '/settings/agencies',
      inactive_icon: Assets.buildings,
      active_icon: Assets.buildings_active,
    },
  ];

  const home_data = [
    {
      name: 'Home',
      route: '/home',
      inactive_icon: Assets.house,
      active_icon: Assets.house_active,
    },
   
    {
      name: 'Requisition',
      route: '/requisition_board',
      inactive_icon: Assets.requisition,
      active_icon: Assets.requisition_active,
    },
    
    {
      name: 'Resume Search',
      route: '/resume_search',
      inactive_icon: Assets.search_inactive,
      active_icon: Assets.search_active,
    },
    {
      name: 'Settings',
      route: '/settings/profile',
      inactive_icon: Assets.settings_inactive,
      active_icon: Assets.settings,
    },
  ];

  const getSidebarData = () => {
    let route = window.location.href;
    if (route.includes('settings')) {
      return settings_data;
    } else {
      return home_data;
    }
  };

  const toggleSidebar = () => {
    
  };

  return (
    <div
      className={`${state.hide && 'sidebar_hide_container'} sidebar_container`}>
      <div className="sidebar_content">
        <div className="sidebar_header">
          <img
            src={Assets.toggle}
            alt="burger icon"
            onClick={() => {
              setState({ hide: !state.hide });
              props.onHide(!state.hide);
              toggleSidebar();
            }}
            className="sidebar_hamburger_icon"
          />
          {!state.hide && (
            <img
              src={Assets.logo}
              alt="sidebar logo"
              className="sidebar_logo"
            />
          )}
        </div>
        <div className="sidebar_heading">
          <div className="sidebar_active_route">
            {getActiveRoute().includes('settings') && (
              <img
                src={Assets.back}
                onClick={() => {
                  navigate('/home');
                }}
                className="sidebar_back_icon"
              />
            )}
            {!state.hide && getActiveRoute().includes('settings') && 'Settings'}
          </div>
        </div>
        <div className="sidebar_element_container">
          {getSidebarData().map((item: any) => (
            <Link
              to={item.route}
              className={`${
                getActiveRoute() == item.route.toLowerCase() ? 'active_tab' : ''
              } sidebar_element`}
              onClick={() => setState({ active_tab: item.name })}>
              <div
                className={`${
                  (state.hide && 'sidebar_hide_icon') || ''
                } sidebar_icon`}>
                <img
                  src={
                    getActiveRoute() == item.route.toLowerCase()
                      ? item.active_icon
                      : item.inactive_icon
                  }
                  alt="icon"
                />
              </div>
              {!state.hide && (
                <div
                  className={`${
                    getActiveRoute() == item.route.toLowerCase()
                      ? 'element_name_active'
                      : ''
                  } sidebar_element_name`}>
                  {item.name}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
