import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Functions, Models, Navbutton, Assets } from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import '../cards/cards.ui.scss';

interface ICardsComponent {
  title?: String;
  description: String;
  name?: String;
  time?: String;
  edit?: boolean;
  className?: String;
  iconOnClick?: any;
  editOnClick?: any;
}

const CardsComponent = (props: ICardsComponent) => {
  return (
    <div className="cards_wrapper">
      <div className={`${props.className || ''} cards_container`}>
        {props.title && <div className="title">{props.title}</div>}
        <div className="decsription">{props.description}</div>
        <div className="cards_container_footer">
          <div className="cards_info_container">
            <div className="cards_name">{props.name}</div>
            <div className="cards_time">{props.time}</div>
          </div>
          <div className="nav">
            {/* {props.edit && ( */}
            <div className="edit_icon" onClick={props.editOnClick}>
              <Navbutton icon={Assets.edit} />
            </div>
            {/* )} */}
            <div className="trash_icon" onClick={props.iconOnClick}>
              <Navbutton icon={Assets.trash} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
