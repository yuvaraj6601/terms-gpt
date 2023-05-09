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
} from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import './home.screen.scss';
import axios from 'axios';
import { getBaseURL } from 'utils/functions.utils';
import DoneIcon from '@mui/icons-material/Done';

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
  });

  //Hooks
  useEffect(() => {}, []);

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
      let body = {
        terms: JSON.stringify(state.terms),
      };
      console.log('body', body);
      const res: any = await Models.test.getSummaryAndProblem(body);
      setState({ problems: res.data.problems, summary: res.data.summary });
      console.log('res', res);
    } catch (error: any) {
      console.log('error', error);
      Functions.Failure(error);
    }
  };

  const getSummaryFromPdf = async (file: any) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      console.log('file', file);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data; charset=utf-8;',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTMyNjIxMTIsImRhdGEiOnsiaWQiOiI2NDI2NmM2NGFkMTQwYWJiOWQ3ZmUwNjkiLCJlbWFpbCI6Inl1dmFyYWpAeW9wbWFpbC5jb20ifSwiaWF0IjoxNjgxNzI2MTEyfQ.-iSP6_Cx1KRt8WTdTC9QjB6kcVgrFpjjPZd7afqhTcM',
        },
      };
      let res: any = await axios.post(
        'http://localhost:8001/api/v1/terms/get_summary_from_pdf',
        formData,
        config,
      );
      setState({
        problems: res.data.data.problems,
        summary: res.data.data.summary,
      });
      console.log('res.data.problems', res.data.problems);
      console.log('state.summary', state.summary);

      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    }
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
            />
          </div>
          <div className="home_file_upload_container">
            <FileUpload onChange={() => {}}>
              <div className="home_file_upload_wrapper">
                <div className="home_file_upload_icon">
                  <img src={Assets.upload} />
                </div>
                <div className="home_file_upload_text">
                  Drag and drop or browse your file
                </div>
              </div>
            </FileUpload>
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
              }}>
              Check Agreement
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
