import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export const Form = () => {
  return (
    <>
      <div className="modal-drop--form">
        <div className="form-container">
          <button className="form-container-button">
            <Link className="form-container--link" to="/">
              ×
            </Link>
          </button>
          <h2 className="form-heading">Napište nám Vaše oblíbené místo</h2>
          <p>
            Pokud nevidíte místo nebo lékaře, kterého byste chtěli doporučit,
            vyplňte prosím tento formulář. Rádi ho do naší aplikace doplníme.
          </p>
          <form className="form-items">
            <label className="form-label">
              Vaše jméno:
              <input className="form-input" type="text" />
            </label>
            <label className="form-label">
              Místo, které chcete doporučit:
              <input className="form-input" type="text" />
            </label>
            <label className="form-label">
              Popis místa:
              <input className="form-description" type="text" />
            </label>
            <button className="form-button">Odeslat</button>
          </form>
        </div>
      </div>
    </>
  );
};
