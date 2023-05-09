import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Assets, Functions, Models } from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import './viewSummary.screen.scss';

interface IViewSummary {
  text?: String;
}

const ViewSummary = (props: IViewSummary) => {
  // Redux
  const testState = useSelector((state: any) => state.test);

  // State
  const [state, setState] = useSetState({});

  //Hooks
  useEffect(() => {}, []);

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

  return (
    <div className="view_screen">
      <div className="view_container">
        <div className="view_terms_container">
          <div className="view_terms_wrapper">
            Acceptance of Terms: Acceptance of Terms: By accessing and using
            this website, you agree to be bound by these terms and conditions.
            Use of Website: You may only use this website for lawful purposes
            and in compliance with all applicable laws and regulations. You may
            not use this website in any way that may cause harm to the website,
            its users, or any other person or entity. Privacy: Our privacy
            policy outlines how we collect, use, and disclose your personal
            information. By using this website, you consent to our use of your
            personal information in accordance with our privacy policy.
            Intellectual Property: All content on this website, including text,
            graphics, logos, and images, is the property of the website owner
            and is protected by copyright laws. You may not use any of this
            content without prior written consent from the website owner.
            Disclaimer of Warranties: This website is provided "as is" and we
            make no warranties, express or implied, about the accuracy,
            reliability, completeness, or timeliness of the content on this
            website. Acceptance of Terms: By accessing and using this website,
            you agree to be bound by these terms and conditions. Use of Website:
            You may only use this website for lawful purposes and in compliance
            with all applicable laws and regulations. You may not use this
            website in any way that may cause harm to the website, its users, or
            any other person or entity. Privacy: Our privacy policy outlines how
            we collect, use, and disclose your personal information. By using
            this website, you consent to our use of your personal information in
            accordance with our privacy policy. Intellectual Property: All
            content on this website, including text, graphics, logos, and
            images, is the property of the website owner and is prot ected by
            copyright laws. Intellectual Property: All content on this website,
            including text, graphics, logos, and images, is the property of the
            website owner and is protected by copyright laws. Intellectual
            Property: All content on this website, including text, graphics,
            logos, and images, is the property of the website owner and is
            protected by copyright laws. Intellectual Property: All content on
            this website, including text, graphics, logos, and images, is the
            property of the website owner and is protected by copyright laws.
            Intellectual Property: All content on this website, including text,
            graphics, logos, and images, is the property of the website owner
            and is protected by copyright laws.
          </div>
        </div>
        <div className="view_summary_problems_container">
          <div className="view_summary_problems_wrapper">
            <div
              className="view_grade_container"
              style={{ backgroundColor: '#00A124' }}>
              These terms and conditions seem to be fair to all parties
              involved.
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
                  <div className="view_summary_points">
                    <div className="view_summary_points_icon">
                      <img src={Assets.greenTick} />
                    </div>
                    <div className="view_summary_points_text">
                      thi whbdw edihbwed edjbhd dbdewb ejbdw
                    </div>
                  </div>
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
                  <div className="view_problems_points">
                    <div className="view_problems_points_icon">
                      <img src={Assets.redDot} />
                    </div>
                    <div className="view_problems_points_text">
                      thi whbdw edihbwed edjbhd dbdewb ejbdw
                    </div>
                  </div>
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
