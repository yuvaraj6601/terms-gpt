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
import { useNavigate } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import IconButton from '@mui/material/IconButton';

interface ITermsList {
  text?: String;
}

const TermsList = (props: ITermsList) => {
  // Redux
  const testState = useSelector((state: any) => state.test);

  // State
  const [state, setState] = useSetState({
    tableData: [],
    search: '',
    skip: 0,
    limit: 20,
  });

  //Hooks
  useEffect(() => {
    getTerms();
  }, [state.search]);

  useEffect(() => {
    getManyTerms();
  }, [state.skip]);

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

  const getTerms = async () => {
    try {
      let body = {
        skip: state.skip,
        limit: state.limit,
        search: state.search,
      };
      const res: any = await Models.terms.getManyTerms(body);
      setState({ tableData: res.data.docs });
    } catch (error) {
      if (error) {
        Functions.Failure('Failed to get terms List');
        console.log('error', error);
      }
    }
  };

  const getManyTerms = async () => {
    try {
      let body = {
        skip: state.skip,
        limit: state.limit,
        search: state.search,
      };
      const res: any = await Models.terms.getManyTerms(body);

      const tableData = Functions.mergeArrayWithoutDuplicates(
        state.tableData,
        res.data.docs,
      );
      setState({ tableData: tableData });
    } catch (error) {
      console.log('error', error);
    }
  };

  //Logic
  const testLogic = () => {};

  const debounced = useDebouncedCallback((search) => {
    console.log('debounce');
    setState({ search });
  }, 500);

  return (
    <div className="list_screen">
      <div className="list_container">
        <div className="list_header">
          <div className="list_search_container">
            <Input
              placeholder="Search"
              label="Search"
              style={{ width: '250px' }}
              onChange={(e) => {
                debounced(e.target.value);
              }}
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
              }}
              className="new_agreement_button"
              onClick={() => {
                navigate('/home');
              }}>
              New Agreement
            </PrimaryButton>
            <IconButton
              style={{
                backgroundColor: Colors.primaryButtonColor,
                color: Colors.buttonTextColor,
              }}
              className="add_button"
              aria-label="delete"
              onClick={() => {
                navigate('/home');
              }}
              size="large">
              <AddIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className="list_wrapper">
          <TableComponent
            tableData={state.tableData}
            onCompleteDelete={() => getTerms()}
            loadMore={() => {
              setState({ skip: state.skip + 20 });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TermsList;
