import Modal from 'react-modal';
import styled from 'styled-components';
import { theme } from 'theme';
import sprite from '../../images/sprite.svg';

const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  transition: scale ${theme.transition};
  &:hover > svg {
    transform: scale(1.2);
  }
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1300',
    padding: '50px',
    borderRadius: '12px',
    border: '1px solid rgba(104, 104, 104, 0.2)',
    backgroundColor: '#1f1f1f',
  },
  overlay: {
    backgroundColor: 'rgba(20, 20, 20, 0.6)',
  },
};
Modal.setAppElement('#root');

export const PopUp = ({ isOpen, onClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <BtnClose onClick={onClose}>
        <svg width="22" height="22">
          <use xlinkHref={`${sprite}#x`} />
        </svg>
      </BtnClose>
      {children}
    </Modal>
  );
};
