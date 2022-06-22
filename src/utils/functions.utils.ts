import _ from 'lodash';
import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
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
  toast.error(text, {
    position: 'top-center',
    // autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const toastify = (text?: any) => {
  toast(text, {
    position: 'top-center',
    // autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
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
export const isGenderBiased = (text: string) => {
  let masculineWords = masculine_coded_words;
  let feminineWords = feminine_coded_words;
  let masculineCount = 0;
  let feminineCount = 0;
  let textWords = text.split(' ');
  let genderbiasedObject = {
    masculine: {},
    feminine: {},
  };

  for (var i = 0; i < textWords.length; i++) {
    if (masculineWords.includes(textWords[i])) {
      masculineCount++;
      if (genderbiasedObject.masculine[textWords[i]] == undefined) {
        genderbiasedObject.masculine[textWords[i]] = 1;
      } else {
        genderbiasedObject.masculine[textWords[i]] =
          genderbiasedObject.masculine[textWords[i]] + 1;
      }
    } else if (feminineWords.includes(textWords[i])) {
      feminineCount++;
      if (genderbiasedObject.feminine[textWords[i]] == undefined) {
        genderbiasedObject.feminine[textWords[i]] = 1;
      } else {
        genderbiasedObject.feminine[textWords[i]] =
          genderbiasedObject.feminine[textWords[i]] + 1;
      }
    }
  }

  let genderStrength = {};
  if (masculineCount > feminineCount) {
    if (masculineCount - feminineCount > 1) {
      genderStrength['strength'] = possible_codings[4];
      genderStrength['reason'] = explanations[possible_codings[4]];
    } else {
      genderStrength['strength'] = possible_codings[3];
      genderStrength['reason'] = explanations[possible_codings[3]];
    }
  } else if (masculineCount < feminineCount) {
    if (feminineCount - masculineCount > 1) {
      genderStrength['strength'] = possible_codings[0];
      genderStrength['reason'] = explanations[possible_codings[0]];
    } else {
      genderStrength['strength'] = possible_codings[1];
      genderStrength['reason'] = explanations[possible_codings[1]];
    }
  } else {
    genderStrength['strength'] = possible_codings[2];
    genderStrength['reason'] = explanations[possible_codings[2]];
  }

  genderbiasedObject.feminine = Object.entries(genderbiasedObject.feminine);
  genderbiasedObject.masculine = Object.entries(genderbiasedObject.masculine);

  let genderData: any = {
    genderStrength: genderStrength,
    genderData: [
      { gender: 'Masculine coded words', data: genderbiasedObject.masculine },
      { gender: 'Feminine coded words', data: genderbiasedObject.feminine },
    ],
  };
  return genderData;
};

export const gets3FileName = (file: any) => {
  let filename: string = file.split('/').pop();
  return filename.split('_').pop();
};
