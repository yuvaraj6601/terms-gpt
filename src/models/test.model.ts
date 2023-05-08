import { testDispatch } from '../utils/redux.utils';
import instance from '../utils/axios.utils';

const test = {
  testRequest: (id: string) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'user/public_profile_details';
      let body = {
        id: id,
      };
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
      let url = 'user_terms/get_summary_from_pdf';
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
};

export default test;
