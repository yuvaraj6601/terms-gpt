import React, { useEffect, useRef } from 'react';
import './list.component.scss';
import { Link } from 'react-router-dom';
import Assets from 'imports/assets.import';
import PrimaryButton from '../button/primary_Button.ui';
import { useSetState } from 'utils/functions.utils';
import { Loader } from 'utils/imports.utils';
// import { setAppRoute } from 'utils/redux.utils';
import moment from 'moment';
import { useSelector } from 'react-redux';

interface IListComponentProps {
  data?: any;
  loading?: boolean;
  titleArray?: any;
  action_btn?: string;
  action_btn_icon?: string;
  onPress?: any;
  type?: string;
  actionArray?: any;
  loadMore?: any;
  hasMore?: boolean;
}

export default function ListComponent(props: IListComponentProps) {
  const userData = useSelector((state: any) => state.user.auth);

  const [state, setState] = useSetState({
    isModalOpen: false,
  });
  const modalRef: any = useRef();
  useEffect(() => {}, []);

  return (
    <div className="list_component_container">
      <div className="list_component_row">
        {props.titleArray.map((item: any, index: number) => (
          <div
            style={{ width: item.width }}
            className={`${
              index === 0 && 'list_component_block'
            }  list_component_name_wrapper`}>
            <div className="list_component_name list_component_heading">
              {item.label}
            </div>
          </div>
        ))}
        <div className="list_component_action_wrapper">
          {props.type == 'requisition_board' && <img src={Assets.share} />}
        </div>
      </div>
      {props.loading ? (
        <Loader />
      ) : !props.loading && props?.data?.length == 0 ? (
        <div className="empty_text">No data found</div>
      ) : props.type == 'user_table' ? (
        props?.data?.map((item: any, dataIndex: number) => (
          <div className="list_component_row">
            {props.titleArray.map((titleObj: any, titleIndex: number) => (
              <div
                className={`${titleIndex === 0 && 'list_component_block'} ${
                  titleObj.className || ''
                }  list_component_name_wrapper`}
                style={{
                  width: props?.titleArray[titleIndex]?.width,
                }}
                onClick={() => {
                  if (titleObj.onPress) {
                    // setAppRoute({ current_user: item });
                    setState({ data: item });
                    modalRef?.current?.openModal();
                  }
                }}>
                <div
                  style={{
                    backgroundColor:
                      props?.titleArray[titleIndex]?.style &&
                      props?.titleArray[titleIndex]?.style?.background(
                        item[props?.titleArray[titleIndex]?.value],
                      ),
                    color:
                      props?.titleArray[titleIndex]?.style &&
                      props?.titleArray[titleIndex]?.style?.color,
                  }}
                  className={`${
                    (titleIndex !== 0 && 'list_component_subtitle') || ''
                  }  list_component_name ${
                    props?.titleArray[titleIndex]?.style?.className
                  }`}>
                  {titleObj.type === 'date'
                    ? moment(item[props?.titleArray[titleIndex]?.value]).format(
                        'MMMM d, YYYY',
                      )
                    : item[props?.titleArray[titleIndex]?.value]}
                </div>
              </div>
            ))}
            <div className="list_component_actions_wrapper">
              {props.actionArray.map((action: any) => {
                if (item.email !== userData.email) {
                  return (
                    <PrimaryButton
                      text={action.name(item)}
                      style={{ color: action.style.color(item) }}
                      width={action.style.width}
                      backgroundColor={action.style.background(item)}
                      className={'list_component_action_btn'}
                      icon={action.icon(item)}
                      onClick={() => {
                        action?.onPress(item);
                      }}
                    />
                  );
                }
              })}
            </div>
          </div>
        ))
      ) : props.type == 'requisition_table' ? (
        props?.data?.map((item: any) => (
          <div className="list_component_row">
            {props.titleArray.map((titleObj: any, titleIndex: number) => (
              <div
                className={`${
                  titleIndex === 0 && 'list_component_block'
                }  list_component_name_wrapper`}
                style={{ width: props?.titleArray[titleIndex]?.width }}>
                <div
                  className={`${
                    titleIndex !== 0 && 'list_component_subtitle'
                  }  list_component_name`}>
                  {item[props?.titleArray[titleIndex]?.value]}
                </div>
              </div>
            ))}
            <div
              className="list_component_actions_wrapper"
              style={{
                width: props.actionArray.style.width,
                justifyContent: 'space-between',
              }}>
              {props.actionArray.actions.map((item: any) => item.component())}
            </div>
          </div>
        ))
      ) : props.type == 'requisition_board' ? (
        props?.data?.map((item: any) => (
          <div className="list_component_row">
            {props.titleArray.map((titleObj: any, titleIndex: number) => (
              <div
                className={`${
                  titleIndex === 0 && 'list_component_block'
                }  list_component_name_wrapper`}
                style={{ width: props?.titleArray[titleIndex]?.width }}>
                <div
                  className={`${
                    titleIndex !== 0 && 'list_component_subtitle'
                  }  list_component_name`}>
                  {item[props?.titleArray[titleIndex]?.value]}
                </div>
              </div>
            ))}
            <div
              className="list_component_actions_wrapper"
              style={{
                width: props.actionArray.style.width,
                justifyContent: 'space-between',
              }}>
              {props.actionArray.actions.map((item: any) => item.component())}
            </div>
          </div>
        ))
      ) : props.type == 'offer_table' ? (
        props?.data?.map((item: any) => (
          <div className="list_component_row">
            {props.titleArray.map((titleObj: any, titleIndex: number) => (
              <div
                className={`${
                  titleIndex === 0 && 'list_component_block'
                }  list_component_name_wrapper`}
                style={{ width: props?.titleArray[titleIndex]?.width }}>
                <div
                  className={`${
                    titleIndex !== 0 && 'list_component_subtitle'
                  }  list_component_name`}>
                  {item[props?.titleArray[titleIndex]?.value]}
                </div>
              </div>
            ))}
            <div
              className="list_component_actions_wrapper"
              style={{
                width: props.actionArray.style.width,
                justifyContent: 'space-between',
              }}>
              {props.actionArray.actions.map((item: any) => item.component())}
            </div>
          </div>
        ))
      ) : props.type == 'requisition_board_table' ? (
        props?.data?.map((item: any) => (
          <div className="list_component_row">
            {props.titleArray.map((titleObj: any, titleIndex: number) => {
              if (titleObj?.component) {
                return titleObj.component(item);
              } else if (titleObj?.type == 'hiring_team') {
                return (
                  <div
                    className={`${
                      titleIndex === 0 && 'list_component_block'
                    }  list_component_name_wrapper`}
                    style={{ width: props?.titleArray[titleIndex]?.width }}>
                    <div
                      className={`${
                        titleIndex !== 0 && 'list_component_subtitle'
                      }  list_component_name list_component_hiring_team`}>
                      {item[props?.titleArray[titleIndex]?.value]?.map(
                        (item: any) => (
                          <div> {item} </div>
                        ),
                      )}
                    </div>
                  </div>
                );
              } else if (titleObj.type == 'id') {
                return (
                  <div
                    className={`${
                      titleIndex === 0 && 'list_component_block'
                    }  list_component_name_wrapper ${
                      titleObj?.className || ''
                    }`}
                    onClick={() => {
                      if (titleObj?.onPress) {
                        titleObj?.onPress(item);
                      }
                    }}
                    style={{ width: props?.titleArray[titleIndex]?.width }}>
                    <div
                      className={`${
                        titleIndex !== 0 && 'list_component_subtitle'
                      }  list_component_name`}>
                      JR-{item[props?.titleArray[titleIndex]?.value]}
                    </div>
                  </div>
                );
              } else if (titleObj.type == 'date') {
                return (
                  <div
                    className={`${
                      titleIndex === 0 && 'list_component_block'
                    }  list_component_name_wrapper ${
                      titleObj?.className || ''
                    }`}
                    onClick={() => {
                      if (titleObj?.onPress) {
                        titleObj?.onPress(item);
                      }
                    }}
                    style={{ width: props?.titleArray[titleIndex]?.width }}>
                    <div
                      className={`${
                        titleIndex !== 0 && 'list_component_subtitle'
                      }  list_component_name`}>
                      {moment().diff(
                        moment(
                          item[props?.titleArray[titleIndex]?.value],
                          'DD-MM-YYYY',
                        ),
                        'days',
                      )}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className={`${
                      titleIndex === 0 && 'list_component_block'
                    }  list_component_name_wrapper ${
                      titleObj?.className || ''
                    }`}
                    onClick={() => {
                      if (titleObj?.onPress) {
                        titleObj?.onPress(item);
                      }
                    }}
                    style={{ width: props?.titleArray[titleIndex]?.width }}>
                    <div
                      className={`${
                        titleIndex !== 0 && 'list_component_subtitle'
                      }  list_component_name`}>
                      {item[props?.titleArray[titleIndex]?.value]}
                    </div>
                  </div>
                );
              }
            })}
            <div
              className="list_component_actions_wrapper"
              style={{
                width: props.actionArray.style.width,
                justifyContent: 'space-between',
              }}>
              {props?.actionArray?.actions.map((action: any) =>
                action.component(item),
              )}
            </div>
          </div>
        ))
      ) : (
        props?.data?.map((item: any) => (
          <div className="list_component_row">
            {props.titleArray.map((titleObj: any, titleIndex: number) => (
              <div
                className={`${
                  titleIndex === 0 && 'list_component_block'
                }  list_component_name_wrapper`}
                style={{ width: props?.titleArray[titleIndex]?.width }}>
                <div
                  className={`${
                    titleIndex !== 0 && 'list_component_subtitle'
                  }  list_component_name`}>
                  {item[props?.titleArray[titleIndex]?.value]}
                </div>
              </div>
            ))}
            <div
              className="list_component_actions_wrapper"
              style={{ width: props.actionArray?.style?.width }}>
              {props.actionArray.actions.map((action: any) =>
                action.component(item),
              )}
            </div>
          </div>
        ))
      )}
      {props.hasMore && (
        <div className="list_component_load_button_wrapper">
          <PrimaryButton
            text={'Load more'}
            onClick={() => {
              props.loadMore();
            }}
            className="list_component_load_button"
          />
        </div>
      )}
      {/* <Details ref={modalRef} /> */}
    </div>
  );
}
