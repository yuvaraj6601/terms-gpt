import _ from 'lodash';
import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import {
  explanations,
  feminine_coded_words,
  masculine_coded_words,
  possible_codings,
  timeZones,
} from './constant.utils';

export const getBaseURL = () => {
  let baseURL = 'http://localhost:8001';
  if (process.env.REACT_APP_NODE_ENV === 'development') {
    baseURL = 'http://localhost:8001';
    // baseURL = 'http://192.168.0.102:8001'
  } else if (process.env.REACT_APP_NODE_ENV === 'stage') {
    baseURL = 'https://askhugo-client.augmo.io';
  }
  return baseURL;
};

export const useSetState = (initialState: any) => {
  const [state, setState] = useState(initialState);

  const newSetState = (newState: any) => {
    setState((prevState: any) => ({ ...prevState, ...newState }));
  };
  return [state, newSetState];
};

export const Failure = (text: string) => {
  console.log(text);
};

export const Success = (text: string) => {
  console.log(text);
};

export const modelError = (error: any) => {
  console.log(JSON.stringify(error.response));
  if (error.response.data.message) {
    return error.response.data.message;
  } else if (error.message) {
    return error.message;
  } else if (error.response) {
    return error.response;
  } else {
    return error;
  }
};

export const toastifyError = (text?: any) => {
  if (!_.isEmpty(text)) {
    toast.error(text, {
      position: 'top-center',
      duration: 3000,
    });
  }
};

export const toastify = (text?: any) => {
  toast.success(text, {
    position: 'top-center',
  });
};

export const uploadFile = (file, signedRequest, url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', signedRequest);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let data = {
          url: url,
        };
        cb(data);
      } else {
        cb({ error: 'Upload failed' });
      }
    }
  };
  xhr.send(file);
};

export const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export const getTimeZones = () => {
  let timeZone: any = [];
  timeZones.map((item: any) => timeZone.push({ label: item, value: item }));
  return timeZone;
};

export const getDropdownData = (data: any) => {
  let array: any = [];
  data?.map((item: string) => array.push({ label: item, value: item }));
  return array;
};

export const getDataFromDropdown = (data: any) => {
  let array: any = [];
  data?.map((item: any) => array.push(item.value));
  return array;
};

export const getDropdownValue = (data: string) => {
  if (!_.isEmpty(data)) {
    return { label: data, value: data };
  } else {
    return { label: '', value: '' };
  }
};

export const useAuth = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const filterObjectByKeys = (object = {}, keys) => {
  return _.omit(object, keys);
};

export const getExperience = (type?: string) => {
  let exp: any = [];
  if (type == 'max') {
    for (let i = 1; i <= 30; i++) {
      exp.push(i);
    }
    return exp;
  } else {
    for (let i = 0; i <= 30; i++) {
      exp.push(i);
    }
    return exp;
  }
};

export const filterByKeys = (obj, keys: any = []) => {
  const filtered: any = {};
  keys.forEach((key) => {
    if (obj?.hasOwnProperty(key)) {
      filtered[key] = obj[key];
    }
  });
  return filtered;
};

export const mergeArrayWithoutDuplicates = (array1: any, array2: any) => {
  if (array1.length == 0) {
    return array2;
  } else if (array2.length == 0) {
    return array1;
  } else if (array1.length > 0 && array2.length > 0) {
    array1.map((element1: any, index1: number) => {
      array2.map((element2: any, index2: number) => {
        if (element1._id == element2._id) {
          array1[index1] = array2[index2];
        } else {
        }
      });
    });
    return Array.from(new Set([...array1, ...array2]));
  }
};
export const gets3FileName = (file: any) => {
  let filename: string = file.split('/').pop();
  return filename.split('_').pop();
};

export const checkURL = (url: string) => {
  if (url.match(/\.(jpeg|jpg|gif|png|JPEG|JPG|GIF|PNG|HEIC|heic)$/) !== null) {
    return 'image';
  } else if (url.match(/\.(mp4|MP4|mov|MOV|HEVC|hevc)$/) !== null) {
    return 'video';
  } else if (url.match(/\.(pdf|docs|xls|xlsx|doc|txt|ppt|pptx)$/) !== null) {
    return 'document';
  }
};
