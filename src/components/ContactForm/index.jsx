import React, { useState } from 'react';
import './styles.css';

export const ContactForm = ({ onClose, setContactFormOpen }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setContactFormOpen(false);
    alert('Vaše zpráva byla odeslána. Děkujeme.');
  };

  return (
    <div className="modal-drop--form">
      <div className="form-container">
        <button className="form-container__close-button" onClick={onClose}>
          ×
        </button>
        <h2 className="form-container__heading">
          Napište nám Vaše oblíbené místo
        </h2>
        <p className="form-container__text">
          Pokud nevidíte místo, kroužek, školku či lékaře, které byste chtěli
          doporučit, vyplňte prosím tento formulář. Rádi je do naší aplikace
          doplníme.
        </p>
        <form
          className="form"
          action="https://formsubmit.co/mamikamjdem@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label className="form__label">
            Vaše jméno:
            <input className="form__input" type="text" autoFocus />
          </label>
          <label className="form__label">
            Místo, které chcete doporučit: *
            <input
              className="form__input"
              type="text"
              name="name"
              required
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <label className="form__label">
            Detaily o místě:
            <textarea
              className="form__input form__input--lg"
              type="text"
              name="place"
              placeholder="např. adresa a web místa, specializace doktora apod."
            />
          </label>
          <button
            className="form__send-button"
            type="submit"
            name="details"
            disabled={inputValue.length > 0 ? false : true}
          >
            Odeslat
          </button>
        </form>
      </div>
    </div>
  );
};
