import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Assets, Functions, Models, Navbutton } from 'utils/imports.utils';
import { testDispatch } from 'utils/redux.utils';
import './table.ui.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

interface ITableComponent {
  text?: String;
}

const TableComponent = (props: ITableComponent) => {
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

  const rowData = [
    { name: 'terms 1', date: '12:12:23', grade: 'grade a' },
    { name: 'terms 2', date: '12:12:23', grade: 'grade a' },
    { name: 'terms 3', date: '12:12:23', grade: 'grade a' },
    { name: 'terms 4', date: '12:12:23', grade: 'grade a' },
    { name: 'terms 5', date: '12:12:23', grade: 'grade a' },
    { name: 'terms 6', date: '12:12:23', grade: 'grade a' },
    { name: 'terms 7', date: '12:12:23', grade: 'grade a' },
    { name: 'terms 8', date: '12:12:23', grade: 'grade a' },
  ];

  return (
    <TableContainer component={Paper} className="table_wrapper">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="table_row">
            <TableCell component="th" scope="row" width={'50%'} align="left">
              Name
            </TableCell>
            <TableCell align="left" width={'20%'}>
              Date
            </TableCell>
            <TableCell align="left" width={'15%'}>
              Grade
            </TableCell>
            <TableCell align="left" width={'15%'} />
            {/* <TableCell align="center" /> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="left">
                {row.name}
              </TableCell>
              <TableCell align="left" className="table_row">
                {row.date}
              </TableCell>
              <TableCell align="left" className="table_row">
                <div className="table_grade_container_1">
                  <div
                    className="table_grade_wrapper"
                    style={{ backgroundColor: 'red' }}>
                    {row.grade}
                  </div>
                </div>
              </TableCell>
              {/* <TableCell align="left">
                <IconButton aria-label="edit" size="large">
                  <EditIcon />
                </IconButton>
              </TableCell> */}
              <TableCell align="left" className="table_row">
                <IconButton aria-label="delete" size="large">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
