import '../styles/Modal.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h1 className="modal-title">Sign Up</h1>
        <div className="modal-wrapper">
          <p className="modal-wrapper__paragraph">Username</p>
          <input
            type="text"
            placeholder="Username"
            className="modal-wrapper__input"
          />
        </div>
        <div className="modal-wrapper">
          <p className="modal-wrapper__paragraph">E-Mail</p>
          <input
            type="text"
            placeholder="E-Mail"
            className="modal-wrapper__input"
          />
        </div>
        <div className="modal-wrapper">
          <p className="modal-wrapper__paragraph">Password</p>
          <input
            type="text"
            placeholder="Password"
            className="modal-wrapper__input"
          />
        </div>
        <div className='modal-container'>
        <button className='modal-container__button'>Sign up</button>
        </div>
        <div className='modal-container__login'>
          <p className='modal-container-login__paragraph'>Already have an account?</p>
          <span className='modal-container-login__span'>Log In</span>
        </div>
      </div>
    </div>
  );
};
export default Modal;
