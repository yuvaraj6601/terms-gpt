import { testDispatch } from '../utils/redux.utils';
import instance from '../utils/axios.utils';
import axios from 'axios';
import { getBaseURL } from 'utils/functions.utils';

const terms = {
  getSummaryAndProblem: (body: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'terms/get_summary';
      instance()
        .post(url, body)
        .then((res) => {
          testDispatch(res.data.data);
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
    return promise;
  },

  getSummaryFromPdf: (body: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'terms/get_summary_from_pdf';
      instance()
        .post(url, body)
        .then((res) => {
          testDispatch(res.data.data);
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
    return promise;
  },

  getManyTerms: (body: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'terms/get_many_terms';
      instance()
        .post(url, body)
        .then((res) => {
          testDispatch(res.data.data);
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
    return promise;
  },
  deleteTerms: (body: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'terms/delete_terms';
      instance()
        .post(url, body)
        .then((res) => {
          testDispatch(res.data.data);
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
    return promise;
  },

  uploadFile: (data) => {
    let promise = new Promise((resolve, reject) => {
      let url = getBaseURL() + '/api/v1/terms/get_text_from_pdf';
      console.log('url', url);
      let token: any = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data; charset=utf-8;',
          authorization: token,
        },
      };
      const formData = new FormData();
      formData.append('file', data);

      axios
        .post(url, formData, config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
    return promise;
  },
};

export default terms;
