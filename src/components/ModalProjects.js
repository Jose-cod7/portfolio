const Modal = ({ title, tools, description, readmore, deployed }) => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {title}
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ borderRadius: "7px", padding: "1px 6px" }}
            >
              x
            </button>
          </div>
          <div className="modal-body">
            <p>{tools}</p>
            <p>{description}</p>
            <span>{deployed}</span>
          </div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-info">
              Check it out!
            </button> */}
            <button type="button" className="btn btn-primary">
              <a className="tag-read" href={readmore} target="blank">
                Read more!
              </a>
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
