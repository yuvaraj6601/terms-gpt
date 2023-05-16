import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Assets, Colors, Functions, Models } from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import './viewSummary.screen.scss';
import { useNavigate, useLocation } from 'react-router-dom';
interface IViewSummary {
  text?: String;
}

const ViewSummary = (props: IViewSummary) => {
  // Redux
  const testState = useSelector((state: any) => state.test);
  const terms = useSelector((state: any) => state.terms);

  // State
  const [state, setState] = useSetState({});

  //Hooks
  useEffect(() => {}, []);
  let navigate = useNavigate();

  // Network req
  const testReq = async () => {
    try {
      const res: any = await Models.test.testRequest('body');
      console.log(res);
      //dispatch
      testDispatch({});
    } catch (error: any) {
      Functions.Failure(error);
    }
  };

  //Logic
  const testLogic = () => {};

  const returnGrade = (problems) => {
    if (problems.length < 7) {
      return 'These terms and conditions seem to be fair to all parties involved.';
    } else if (problems.length >= 7 && problems.length <= 10) {
      return 'These terms and conditions are kind of meh, not good or bad.';
    } else if (problems.length > 10) {
      return 'These terms and conditions are not good';
    }
  };

  const returnGradeColor = (problems) => {
    if (problems.length < 7) {
      return Colors.successBackground;
    } else if (problems.length >= 7 && problems.length <= 10) {
      return Colors.warningBackground;
    } else if (problems.length > 10) {
      return Colors.errorBackground;
    }
  };

  return (
    <div className="view_screen">
      <div className="view_screen_header">
        <div
          className="view_back_button_container"
          onClick={() => {
            navigate(-1);
          }}>
          <div className="view_back_button_icon">
            <img src={Assets.back} />
          </div>
          <div className="view_back_button_text">Back</div>
        </div>
      </div>
      <div className="view_container">
        <div className="view_terms_container">
          <div className="view_terms_wrapper">{JSON.parse(terms.terms)}</div>
        </div>
        <div className="view_summary_problems_container">
          <div className="view_summary_problems_wrapper">
            <div
              className="view_grade_container"
              style={{
                backgroundColor: returnGradeColor(terms.problems),
              }}>
              {returnGrade(terms.problems)}
            </div>
            <div className="view_summary_problems_section">
              <div className="view_summary_container">
                <div className="view_summary_header">
                  <div className="view_summary_title">Summary</div>
                  <div className="view_summary_dropdown_icon">
                    <img src={Assets.arrowDropDown} />
                  </div>
                </div>
                <div className="view_summary_body">
                  {terms.summary.map((item) => {
                    return (
                      <div className="view_summary_points">
                        <div className="view_summary_points_icon">
                          <img src={Assets.greenTick} />
                        </div>
                        <div className="view_summary_points_text">{item}</div>
                        <div className="view_summary_warning_icon">
                          <img src={Assets.warning} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="view_problems_container no_border">
                <div className="view_problems_header">
                  <div className="view_problems_title">Problems</div>
                  <div className="view_problems_dropdown_icon">
                    <img src={Assets.arrowDropDown} />
                  </div>
                </div>
                <div className="view_problems_body">
                  {terms.problems.map((item) => {
                    return (
                      <div className="view_problems_points">
                        <div className="view_problems_points_icon">
                          <img src={Assets.redDot} />
                        </div>
                        <div className="view_problems_points_text">{item}</div>
                        <div className="view_problems_warning_icon">
                          <img src={Assets.warning} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSummary;
