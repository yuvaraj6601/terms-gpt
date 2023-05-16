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
  accept?: string;
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
      props.onChange(e.dataTransfer.files[0]);
    });
  }, []);

  useImperativeHandle(ref, () => ({
    openUpload() {
      inputFileRef?.current?.click();
    },
  }));

  //Network req
  

  //Logic
  

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
              props.onChange(e.target.files[0])
            }}
            // multiple
            accept={props.accept}
          />
        </label>
      </div>
    </div>
  );
});

export default FileUpload;
