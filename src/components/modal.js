import React from "react";

export default function Modal(props) {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal" onClick={props.onClose}>
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Live-scores React Application</h3>
          <p className="py-4">Created by BlissMaake</p>
        </div>
      </div>
    </>
  );
}
