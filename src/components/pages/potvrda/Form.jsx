/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  width: 100%;
`;

const FormFields = styled.ul`
  padding: 0;
  width: 100%;
  list-style: none;
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  li {
    label {
      /* font-family: ${p => p.theme.font.header}; */
      color: rgba(102, 102, 102, 1);
      font-size: 14px;
    }
    input, select {
      outline: none;
      /* font-family: ${p => p.theme.font.header}; */
      background: rgba(255, 255, 255, 1);
      box-sizing: border-box;
      width: 100%;
      border: 1px solid rgba(234, 234, 234, 1);
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 1px;
      color: rgba(68, 68, 68, 1);
      padding: 14px;
      resize: none;
      -webkit-appearance: none;
      /* border-radius: .5em; */
      transition: all 300ms ease-in-out;
      &:hover,
      &:focus {
        border: 1px solid rgba(85, 187, 192, 1);
      }
    }
  }
`;

const MessageField = styled.ul`
  padding: 0;
  width: 100%;
  list-style: none;
  margin-top: 10px;
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 5px;
  grid-template-columns: 1fr;
  li {
    label {
      /* font-family: ${p => p.theme.font.header}; */
      color: rgba(102, 102, 102, 1);
      font-size: 14px;
    }
    &.show {
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(234, 234, 234, 1);
      margin: 0 0 15px;
      width: auto;
      &:hover {
        border: 1px solid rgba(85, 187, 192, 1);
      }
      input[type='checkbox'] {
        display: none;
      }
      label {
        opacity: 1;
        visibility: visible;
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        position: relative;
        z-index: 9;
        &:hover {
          span {
            border-left: 1px solid rgba(234, 234, 234, 1);
            &:before {
              width: 12px;
              transition: width 100ms ease;
            }
            &:after {
              width: 25px;
              transition: width 150ms ease 100ms;
            }
          }
        }
        p {
          padding: 20px 1em 15px;
          margin: 0;
        }
        span {
          position: relative;
          background-color: transparent;
          width: 50px;
          height: 50px;
          transform-origin: center;
          border-left: 1px solid rgba(234, 234, 234, 1);
          vertical-align: -6px;
          transition: background-color 150ms 200ms,
            transform 350ms cubic-bezier(0.78, -1.22, 0.17, 1.89);
          &:before {
            content: '';
            width: 0px;
            height: 2px;
            border-radius: 2px;
            background: rgba(85, 187, 192, 1);
            position: absolute;
            transform: rotate(45deg);
            top: 26px;
            left: 15px;
            transition: width 50ms ease 50ms;
            transform-origin: 0% 0%;
          }
          &:after {
            content: '';
            width: 0;
            height: 2px;
            border-radius: 2px;
            background: rgba(85, 187, 192, 1);
            position: absolute;
            transform: rotate(305deg);
            top: 35px;
            left: 22px;
            transition: width 50ms ease;
            transform-origin: 0% 0%;
          }
        }
      }
      &.checked {
        label {
          span {
            background-color: rgba(85, 187, 192, 1);
            transition: all 300ms ease-in-out;
            &:after {
              width: 25px;
              background: rgba(255, 255, 255, 1);
              transition: all 300ms ease-in-out;
            }
            &:before {
              width: 12px;
              background: rgba(255, 255, 255, 1);
              transition: all 300ms ease-in-out;
            }
          }
          &:hover {
            span {
              background-color: rgba(85, 187, 192, 1);
              &:after {
                width: 25px;
                background: rgba(255, 255, 255, 1);
              }
              &:before {
                width: 12px;
                background: rgba(255, 255, 255, 1);
              }
            }
          }
        }
      }
    }
    textarea {
      /* font-family: ${p => p.theme.font.header}; */
      outline: none;
      box-sizing: border-box;
      width: 100%;
      border: 1px solid rgba(234, 234, 234, 1);
      /* border-radius: .5em; */
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 1px;
      color: rgba(68, 68, 68, 1);
      padding: 14px;
      resize: none;
      -webkit-appearance: none;
      transition: all 300ms ease-in-out;
      &:hover,
      &:focus {
        border: 1px solid rgba(85, 187, 192, 1);
      }
    }
  }
`;

const Submit = styled.input`
  outline: none;
  box-shadow: none;
  background: rgba(85, 187, 192, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 13px;
  letter-spacing: 2px;
  line-height: 20px;
  text-transform: uppercase;
  padding: 14px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  /* border-radius: 0.5em; */
  resize: none;
  border: none;
  &:hover {
    background: rgba(69, 152, 156, 1);
  }
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background: rgba(85, 187, 192, 1);
    }
  }
  margin-top: 20px;
  /* position: relative;
  left: 50%;
  transform: translateX(-50%); */
`;

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const Form = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: '',
  };

  const [state, setState] = useState(initialState);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => {
        alert(`Poruka poslata. Vidimo se uskoro 😉 `);
        setState(initialState);
      })
      .catch(error => alert(error));
  };

  const { firstName, lastName, number } = state;

  const formVerified = firstName === '' || lastName === '' || number === '';

  return (
    <FormContainer
      name="potvrda_dolaska"
      method="POST"
      action="#"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="potvrda_dolaska" />
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <FormFields>
        <li>
          <label hidden htmlFor="firstName">
            Ime
          </label>
          <input
            required
            name="firstName"
            id="firstName"
            type="text"
            value={state.firstName}
            placeholder="Ime"
            onChange={handleChange}
          />
        </li>
        <li>
          <label hidden htmlFor="lastName">
            Prezime
          </label>
          <input
            required
            name="lastName"
            id="lastName"
            type="text"
            value={state.lastName}
            placeholder="Prezime"
            onChange={handleChange}
          />
        </li>
        <li>
          <label hidden htmlFor="email">
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            value={state.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </li>
        <li>
          <label hidden htmlFor="number">
            Broj gostiju
          </label>
          <select
            required
            name="number"
            id="number"
            value={state.number}
            placeholder="Broj gostiju"
            onChange={handleChange}
          >
            <option value="false">Broj gostiju</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </li>
      </FormFields>
      <MessageField>
        <li>
          <label hidden htmlFor="message">
            Dodatna poruka
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Dodatna poruka"
            rows={5}
            cols={50}
            value={state.message}
            onChange={handleChange}
          />
        </li>
      </MessageField>
      <Submit
        disabled={formVerified}
        type="submit"
        id="submit"
        value={!formVerified ? 'Pošalji' : 'Potvrdite prisustvo'}
      />
    </FormContainer>
  );
};

export default Form;
