import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import {
  Functions,
  Models,
  Input,
  PrimaryButton,
  TextArea,
  FileUpload,
  Assets,
  Colors,
  CameraComponent,
  FullPageLoader,
} from 'utils/imports.utils';
import { testDispatch, getTermsDetails } from 'utils/redux.utils';
import './home.screen.scss';
import axios from 'axios';
import { getBaseURL } from 'utils/functions.utils';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Tesseract from 'tesseract.js';

interface IHome {
  text?: String;
}

const Home = (props: IHome) => {
  const inputFileRef: any = useRef();
  // Redux
  const testState = useSelector((state: any) => state.test);

  // State
  const [state, setState] = useSetState({
    terms: '',
    problems: '',
    summary: '',
    activity: '',
    file: [],
    openCamera: '',
    fullPageLoader: false,
  });

  //Hooks
  useEffect(() => {}, []);

  let navigate = useNavigate();

  // Network req
  const testReq = async () => {
    try {
      const res: any = await Models.test.testRequest('body');
      console.log(res);
      testDispatch({});
    } catch (error: any) {
      Functions.Failure(error);
    }
  };

  const getSummaryAndProblem = async () => {
    try {
      console.log('qazwsx');
      setState({ activity: true });
      let body = {
        terms: JSON.stringify(state.terms),
      };
      console.log('body', body);
      const res: any = await Models.terms.getSummaryAndProblem(body);
      setState({
        problems: res.data.problems,
        summary: res.data.summary,
        activity: false,
      });
      console.log('res', res);
      getTermsDetails(res.data);
      navigate('/view_summary');
      Functions.toastify('Got summary and problems');
    } catch (error: any) {
      console.log('error', error);
      Functions.toastifyError(error);
      setState({ activity: false });
    }
  };

  const getTextFromPdf = async (file) => {
    try {
      setState({ file: file });
      const res: any = await Models.terms.uploadFile(file);
      setState({ terms: res.data.text });
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    }
  };

  const uploadFile = async (file) => {
    setState({ fullPageLoader: true, file: file });
    const fileType = Functions.checkURL(file.name);
    if (fileType == 'image') {
      let res: any = await Tesseract.recognize(file, 'eng', {
        logger: (m) => console.log('m', m),
      });
      setState({ terms: res.data.text });
    } else {
      getTextFromPdf(file);
    }
    setState({ fullPageLoader: false });
  };

  //Logic
  const testLogic = () => {};

  return (
    <>
      <div className="home_screen">
        <div className="home_container">
          <div className="home_header_container">
            <div className="home_header_text1">Simplify your agreements;</div>
            <div className="home_header_text2">
              Identify key points & issues.
            </div>
          </div>
          <div className="home_input_container">
            <TextArea
              name="input"
              value={state.terms}
              onChange={(text: any) => {
                setState({ terms: text.target.value });
              }}
              placeholder="Paste your terms and conditions"
              count={state.terms?.length > 0 ? state.terms?.length : '0'}
            />
          </div>
          <div className="home_file_upload_container">
            {isMobile ? (
              <div className="mobile_file_upload_container">
                <div className="mobile_file_upload_image">
                  <img src={Assets.camera} />
                </div>
                <div className="mobile_file_upload_text">
                  <div>Take a</div>
                  <div
                    className="bold_text"
                    onClick={() => setState({ openCamera: true })}>
                    picture
                  </div>
                  <div> or </div>
                  <FileUpload
                    ref={inputFileRef}
                    multiple={false}
                    onChange={(file) => {
                      uploadFile(file);
                    }}>
                    <div
                      className="bold_text"
                      onClick={() => inputFileRef.current.openUpload()}>
                      browse
                    </div>
                  </FileUpload>
                  <div> your file </div>
                </div>
              </div>
            ) : (
              <FileUpload
                ref={inputFileRef}
                multiple={false}
                onChange={(file) => {
                  uploadFile(file);
                }}>
                <div
                  className="home_file_upload_wrapper"
                  onClick={() => inputFileRef.current.openUpload()}>
                  <div className="home_file_upload_icon">
                    <img src={Assets.upload} />
                  </div>
                  <div className="home_file_upload_text">
                    {state.file.name
                      ? state.file.name
                      : 'Drag and drop or browse your file'}
                  </div>
                </div>
              </FileUpload>
            )}
          </div>
          <div className="home_check_agreement_button">
            <PrimaryButton
              startIcon={<DoneIcon />}
              style={{
                backgroundColor: Colors.primaryButtonColor,
                color: Colors.buttonTextColor,
                textTransform: 'capitalize',
                fontSize: '15px',
                padding: '8px 20px',
              }}
              activity={state.activity}
              onClick={() => {
                if (state.terms.length > 100) {
                  getSummaryAndProblem();
                } else {
                  Functions.toastifyError('Please enter some more Terms');
                }
              }}>
              Check Agreement
            </PrimaryButton>
          </div>
        </div>
        <CameraComponent
          open={state.openCamera}
          onClose={(data) => {
            console.log('data', data);
            setState({ openCamera: false, terms: data });
          }}
        />
        {state.fullPageLoader && <FullPageLoader />}
      </div>
    </>
  );
};

export default Home;
