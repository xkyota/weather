import '../styles/Modal.css';
import { useState } from 'react';

const Modal = ({ isOpen, onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Введите никнейм';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Введите почту';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Некорректная почта';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Введите пароль';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Минимум 6 символов';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      onRegister(formData.username);
      onClose();
    }
  };

  return (
    <div className="modal__overlay">
      <div className="modal" onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <h1 className="modal-title">Sign Up</h1>
          
          {}
          <div className="modal-wrapper">
            <p className="modal-wrapper__paragraph">Username</p>
            <input
              type="text"
              placeholder="Username"
              className={`modal-wrapper__input ${errors.username ? 'error' : ''}`}
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
            {errors.username && <span className="error-text">{errors.username}</span>}
          </div>

          {}
          <div className="modal-wrapper">
            <p className="modal-wrapper__paragraph">E-Mail</p>
            <input
              type="email"
              placeholder="E-Mail"
              className={`modal-wrapper__input ${errors.email ? 'error' : ''}`}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {}
          <div className="modal-wrapper">
            <p className="modal-wrapper__paragraph">Password</p>
            <input
              type="password"
              placeholder="Password"
              className={`modal-wrapper__input ${errors.password ? 'error' : ''}`}
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <div className='modal-container'>
            <button type="submit" className='modal-container__button'>Sign up</button>
          </div>
          
          <div className='modal-container__login'>
            <p className='modal-container-login__paragraph'>Already have an account?</p>
            <span className='modal-container-login__span'>Log In</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;