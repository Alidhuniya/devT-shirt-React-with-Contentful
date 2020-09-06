import React, { Fragment, Component} from 'react';
import MailchimpSubscribe from './MailchimpSubscribe';
import "../sass/3-layout/_footer.scss";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
  
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
     
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
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <div className ="send">
      <button className = "sbmt"  onClick={submit}>
        Sign up
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
            <h1 className = "mail__h1">Want to be in the loop?</h1>
            <p className = "mail__p0">3000+ people get notified of new swag opportunities! </p>

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

            <div className = "footer">
            <h1 className = "footer__h1">CALL NOW: +977-9811435099</h1>
            <p className = "footer__p0">Developed by Ali Dhuniya  </p>
            <p className = "footer__p1">All Right Reserved &copy; 2020 </p>
            </div>


            </Fragment>
    );
  }
}


export default Subscribe;