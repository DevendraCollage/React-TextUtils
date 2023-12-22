import React, { Component } from "react";
import { AiOutlineGithub } from "react-icons/ai";

export class Footer extends Component {
  render() {
    let styles = {
      fontSize: "2em",
      color: "black",
      marginLeft: ".9rem",
    };
    return (
      <div>
        <footer className="footer mt-auto py-3 bg-light">
          <div className="container text-center">
            <span className="text-muted">
              Made by Devendra-parmar
              <a
                style={styles}
                href="https://github.com/DevendraCollage/React-TextUtils"
              >
                <AiOutlineGithub />
              </a>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
