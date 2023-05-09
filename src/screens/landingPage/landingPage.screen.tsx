import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import {
  Assets,
  Colors,
  Functions,
  Models,
  PrimaryButton,
} from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import AddIcon from '@mui/icons-material/Add';
import './landingPage.screen.scss';
import { useNavigate } from 'react-router-dom';

interface ILandingPage {
  text?: String;
}

const LandingPage = (props: ILandingPage) => {
  // Redux
  const testState = useSelector((state: any) => state.test);

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

  return (
    <div className="landing_page_screen">
      <div className="landing_page_container">
        <div className="landing_page_image_container">
          <img src={Assets.landingPageImage} height={'394px'} width={'394px'} />
        </div>
        <div className="landing_page_text">
          Welcome to our term and condition checker! We provide a summary and
          analysis of website or service's terms and conditions to make things
          easier for you.
        </div>
        <div className="landing_page_button_container">
          <PrimaryButton
            startIcon={<AddIcon />}
            style={{
              backgroundColor: Colors.primaryButtonColor,
              color: Colors.buttonTextColor,
              textTransform: 'capitalize',
              fontSize: '15px',
              padding: '8px 20px',
            }}
            onClick={() => navigate('/home')}>
            New Agreement
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
