import React, { useState } from "react";

interface ModalProps {
  children: React.ReactNode;
  shown: boolean;
  close: () => void;
}

export default function Modal({ children, shown, close }: ModalProps) {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  ) : null;
}
