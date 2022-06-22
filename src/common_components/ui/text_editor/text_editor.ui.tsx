import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  useMemo,
  forwardRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useSetState } from 'utils/functions.utils';
import { testDispatch } from 'utils/redux.utils';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './text_editor.scss';

interface ITextEditorProps {
  onChange: any;
}

const TextEditor = forwardRef((props: any, ref) => {
  // Reference
  const quillRef: any = useRef(null);
  // State
  const [state, setState] = useSetState({ content: '' });

  //Logic

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6] }],
          [{ size: ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image', 'video'],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
        ],
      },
    }),
    [],
  );

  useImperativeHandle(ref, () => ({
    getMethods: () => {
      return quillRef?.current;
    },
  }));

  return (
    <div>
      <ReactQuill
        // value={props.value}
        // onChange={(content: String) => {
        //   setState({ content });
        //   props.onChange(content);
        // }}
        ref={quillRef}
        className="text_area"
        modules={modules}
        {...props}
      />
      {props.error &&
        props.error.map((error: any) => (
          <div className="input_field_error">
            {props.name === error?.path && error.message}
          </div>
        ))}
    </div>
  );
});

export default TextEditor;
