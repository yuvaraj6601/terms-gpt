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
} from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import './home.screen.scss';
import axios from 'axios';
import { getBaseURL } from 'utils/functions.utils';

interface IHome {
  text?: String;
}

const Home = (props: IHome) => {
  const inputFileRef: any = useRef();
  // Redux
  const testState = useSelector((state: any) => state.test);

  // State
  const [state, setState] = useSetState({
    input: '',
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
        terms: JSON.stringify(state.input),
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
      <div className="home_container">
        <div className="home_wrapper">
          <div className="input_field">
            <input
              type="file"
              onChange={(data: any) => {
                getSummaryFromPdf(data.target.files[0]);
                console.log(
                  'getSummaryFromPdf(data.target.files[0])',
                  data.target.files[0],
                );
              }}
            />
            <TextArea
              className="input_textarea"
              name="input"
              value={state.input}
              onChange={(text: any) => {
                setState({ input: text.target.value });
              }}
              placeholder="Enter your terms and conditions"
            />
          </div>
          <div className="button_field">
            <PrimaryButton onClick={() => getSummaryAndProblem()}>
              Get Summary And Problem
            </PrimaryButton>
          </div>
          <div className="output_field">
            <TextArea
              className="output_textarea"
              name="output"
              value={state.summary}
              onChange={() => {}}
              placeholder="Summary of your terms and condition"
            />
          </div>
          <div className="output_field">
            <TextArea
              className="output_textarea"
              name="output"
              value={state.problems}
              onChange={() => {}}
              placeholder="Problems of your terms and condition"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
