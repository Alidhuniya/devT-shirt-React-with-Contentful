import React, { Fragment, Component} from 'react';
import MailchimpSubscribe from './MailchimpSubscribe';



// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

    const Msg = {
        color: "green",
        textAlign: "center",
        maxWidth: "80ch"
    }

  return (
    <div className = "inputfield">
      {status === "sending" && <div >sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
        style={Msg}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
      className = "nameinput"
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <input
      className = "nameinput"
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <div className ="send">
      <button className = "sbmt"  onClick={submit}>
        Submit
      </button>
      </div>
    </div>
  );
};

class Subscribe extends Component {
  render() {
    const url =
      "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e";
    return (

      <Fragment>
            <section className = "home " >
           

            <div className = "home__rightContainer">

            <div className = "mail">
            <h1>Subscribe to Get Early Update</h1>
            <p>Notify Me</p>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />
            </div>

           

            </div>
            
            </section>
            </Fragment>
    );
  }
}


export default Subscribe;