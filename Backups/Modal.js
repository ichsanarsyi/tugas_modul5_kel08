import React from "react";
import "./modal.css";
import PropTypes from "prop-types";

// const Modal = ({ handleClose, show, children }) => {
//   const showHideClassName = show ? "modal display-block" : "modal display-none";

//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
//         {children}
//         <button type="button" onClick={handleClose}>
//           Close
//         </button>
//       </section>
//     </div>
//   );
// };

// export default Modal;

export default class Modal extends React.Component {
    onClose = e => {
      this.props.onClose && this.props.onClose(e);
    };
    render() {
      if (!this.props.show) {
        return null;
      }
      return (
        <div class="modal" id="modal">
          <h2>Modal Window</h2>
          <div class="content">{this.props.children}</div>
          <div class="actions">
            <button class="toggle-button" onClick={this.onClose}>
              close
            </button>
          </div>
        </div>
      );
    }
  }
  Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };