import Assets from 'imports/assets.import';
import React from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share';
import './share.ui.scss';

const Share = (props: any) => {
  return (
    <div className="share_wrapper">
      <FacebookShareButton
        url={props.facebook.url}
        quote={props.facebook.quote}
        {...props}>
        <img src={Assets.facebook_black} height={25} width={25} />
      </FacebookShareButton>
      <LinkedinShareButton
        title={props.linkedIn.title}
        summary={props.linkedIn.summary}
        source={props.linkedIn.source}
        url={props.linkedIn.url}
        {...props}>
        <img src={Assets.Linkedin} height={25} width={25} />
      </LinkedinShareButton>
      {/* <EmailShareButton
            subject={props.email.subject}
            body={props.email.body}
            url={props.email.url}
            {...props}>
            <img src={Assets.mail_black} height={25} width={25} />
          </EmailShareButton> */}
    </div>
  );
};

export default Share;
