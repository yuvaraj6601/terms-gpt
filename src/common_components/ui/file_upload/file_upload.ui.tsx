import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { useSelector } from 'react-redux';
import { toastifyError, useSetState } from 'utils/functions.utils';
import { Functions, Models, PrimaryButton } from 'utils/imports.utils';
import './file_upload.ui.scss';

interface IFileUpload {
  className?: string;
  onChange: any;
  children: any;
  type?: string;
  multiple?: boolean;
  folder?: string;
}

const FileUpload = forwardRef((props: IFileUpload, ref: any) => {
  //reference
  const inputFileRef: any = useRef();

  // State
  const [state, setState] = useSetState({});

  //Hooks
  useEffect(() => {
    const dropArea: any = document.getElementById('drag_area');
    const inputContainer = document.getElementById(
      'file_upload_box_label_content',
    );
    dropArea?.addEventListener('dragover', (e) => {
      e.preventDefault();
      // dropArea?.classList.add('upload_box_container_hover');
    });
    dropArea?.addEventListener('dragleave', () => {
      // dropArea?.classList.remove('upload_box_container_hover');
    });
    dropArea?.addEventListener('drop', (e) => {
      e.preventDefault();
      // dropArea?.classList.remove('upload_box_container_hover');
      uploadFiles(e.dataTransfer.files[0]);
    });
  }, []);

  useImperativeHandle(ref, () => ({
    openUpload() {
      inputFileRef?.current?.click();
    },
  }));

  //Network req
  const uploadFiles = async (file: any) => {
    try {
      let body: any = {
        file_type: file.type,
        file_name: file.name,
      };
      if (props.folder) {
        body.folder = props.folder;
      }
      const content: any = await Models.auth.uploadFile(body);
      Functions.uploadFile(
        file,
        content.signedRequest,
        content.url,
        function (res) {
          setState({ profile_picture: res?.url });
          props.onChange(res?.url);
        },
      );
    } catch (error) {
      toastifyError(error);
    }
  };

  //Logic
  const onChange = async (e: any) => {
    try {
      if (props.type == 'csv') {
        props.onChange(e.target.files[0]);
      } else {
        if (props.multiple) {
          let files = e.target.files;
          for (let i = 0; i <= files.length; i++) {
            await uploadFiles(files[i]);
          }
        } else {
          await uploadFiles(e.target.files[0]);
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div id="drag_area">
      {props.children}
      <div className={'file_upload_wrapper'} id="file_upload_wrapper">
        <label
          className="file_upload_box_label_content"
          id="file_upload_box_label_content">
          <input
            type={'file'}
            ref={inputFileRef}
            onClick={(e: any) => (e.target.value = null)}
            className={'file_upload_box'}
            onChange={(e: any) => {
              onChange(e);
            }}
            multiple
          />
        </label>
      </div>
    </div>
  );
});

export default FileUpload;
