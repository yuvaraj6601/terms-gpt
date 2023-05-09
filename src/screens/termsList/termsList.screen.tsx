import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import {
  Colors,
  Functions,
  Input,
  Models,
  PrimaryButton,
  TableComponent,
} from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import AddIcon from '@mui/icons-material/Add';
import './termsList.screen.scss';

interface ITermsList {
  text?: String;
}

const TermsList = (props: ITermsList) => {
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
    <div className="list_screen">
      <div className="list_container">
        <div className="list_header">
          <div className="list_search_container">
            <Input
              placeholder="Search"
              label="Search"
              style={{ width: '250px' }}
            />
          </div>
          <div className="list_new_agreement_button">
            <PrimaryButton
              startIcon={<AddIcon />}
              style={{
                backgroundColor: Colors.primaryButtonColor,
                color: Colors.buttonTextColor,
                textTransform: 'capitalize',
                fontSize: '15px',
                padding: '8px 20px',
              }}>
              New Agreement
            </PrimaryButton>
          </div>
        </div>
        <div className="list_wrapper">
          <TableComponent />
        </div>
      </div>
    </div>
  );
};

export default TermsList;
