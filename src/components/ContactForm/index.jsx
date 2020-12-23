import React, { useState } from 'react';
import './styles.css';

export const ContactForm = ({ onClose, setContactFormOpen }) => {
  const [inputValue, setInputValue] = useState({
    name: '',
    place: '',
    details: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('name', inputValue.name);
    data.append('place', inputValue.place);
    data.append('details', inputValue.details);

    fetch('https://formsubmit.co/ajax/mamikamjdem@gmail.com', {
      method: 'POST',
      body: data,
    })
      .then(() => {
        setContactFormOpen(false);
        setTimeout(() => alert('Vaše zpráva byla odeslána. Děkujeme.'), 100);
      })
      .catch(() => alert('Odeslání se nezdařilo, zkuste to prosím znovu.'));
  };

  return (
    <div className="modal-drop--form">
      <article className="form-container">
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
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label">
            Vaše jméno:
            <input
              className="form__input"
              type="text"
              name="name"
              autoFocus
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
            />
          </label>
          <label className="form__label">
            Místo, které chcete doporučit: *
            <input
              className="form__input"
              type="text"
              name="place"
              required
              onChange={(e) =>
                setInputValue({ ...inputValue, place: e.target.value })
              }
            />
          </label>
          <label className="form__label">
            Detaily o místě:
            <textarea
              className="form__input form__input--lg"
              type="text"
              name="details"
              placeholder="např. adresa a web místa, specializace doktora apod."
              onChange={(e) =>
                setInputValue({ ...inputValue, details: e.target.value })
              }
            />
          </label>
          <button
            className="form__send-button"
            type="submit"
            disabled={inputValue.place.length > 0 ? false : true}
          >
            Odeslat
          </button>
        </form>
      </article>
    </div>
  );
};
