import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { Colors, Functions, Models, PrimaryButton } from 'utils/imports.utils';
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
import IconButton from '@mui/material/IconButton';
import moment from 'moment';
import Modal from 'react-responsive-modal';
interface ITableComponent {
  text?: String;
  tableData: any;
  onCompleteDelete: any;
  loadMore?: any;
}

const TableComponent = (props: ITableComponent) => {
  // Redux
  const testState = useSelector((state: any) => state.test);

  // State
  const [state, setState] = useSetState({ openDeleteModal: false, id: '' });

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

  const deleteTerms = async (id) => {
    try {
      let body = {
        terms_id: id,
      };
      const res: any = await Models.terms.deleteTerms(body);
      props.onCompleteDelete();
      setState({ openDeleteModal: false });
      Functions.toastify('Deleted Successfully');
    } catch (error) {
      Functions.toastifyError(error);
      console.log('error', error);
    }
  };

  //Logic

  const returnGrade = (problems) => {
    if (problems.length < 7) {
      return 'Grade A';
    } else if (problems.length >= 7 && problems.length <= 10) {
      return 'Grade B';
    } else if (problems.length > 10) {
      return 'Grade C';
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
    <TableContainer component={Paper} className="table_wrapper">
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow className="table_row">
            <TableCell component="th" scope="row" width={'50%'} align="left">
              Name
            </TableCell>
            <TableCell align="left" width={'20%'} className="mobile_view">
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
          {props.tableData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="left">
                {row.terms.substring(0, 40).replaceAll(' ', '\n')}....
                <div className="tablet_view">
                  {moment(row.created_at).format('LL')}
                </div>
              </TableCell>
              <TableCell align="left" className="table_row mobile_view">
                {moment(row.created_at).format('LL')}
              </TableCell>
              <TableCell align="left" className="table_row">
                <div className="table_grade_container_1">
                  <div
                    className="table_grade_wrapper"
                    style={{ backgroundColor: returnGradeColor(row.problem) }}>
                    {returnGrade(row.problem)}
                  </div>
                </div>
              </TableCell>
              {/* <TableCell align="left">
                <IconButton aria-label="edit" size="large">
                <EditIcon />
                </IconButton>
              </TableCell> */}
              <TableCell align="left" className="table_row">
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => {
                    // deleteTerms(row._id);
                    setState({ openDeleteModal: true, id: row._id });
                  }}>
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {props.tableData?.length >= 20 && (
        <div className="loadmore_button_container">
          <PrimaryButton
            onClick={() => {
              props.loadMore();
            }}
            style={{
              textTransform: 'capitalize',
              backgroundColor: Colors.primaryButtonColor,
              color: Colors.buttonTextColor,
            }}>
            Load More
          </PrimaryButton>
        </div>
      )}
      <div className="modal_container">
        <Modal
          open={state.openDeleteModal}
          onClose={() => {
            setState({ openDeleteModal: false });
          }}
          center
          onOverlayClick={() => {
            setState({ openDeleteModal: false });
          }}
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}>
          <div className="modal_wrapper">
            <div className="modal_header">Are You Sure To Delete</div>
            <div className="modal_footer">
              <div className="modal_cancel_button_container">
                <PrimaryButton
                  variant="outlined"
                  style={{ textTransform: 'capitalize' }}
                  onClick={() => {
                    setState({ openDeleteModal: false });
                  }}>
                  Cancel
                </PrimaryButton>
              </div>
              <div className="modal_confirm_button_container">
                <PrimaryButton
                  variant="outlined"
                  style={{ textTransform: 'capitalize' }}
                  onClick={() => {
                    deleteTerms(state.id);
                  }}>
                  Confirm
                </PrimaryButton>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </TableContainer>
  );
};

export default TableComponent;
