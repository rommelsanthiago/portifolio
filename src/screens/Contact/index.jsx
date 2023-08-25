import React, { useState, useRef } from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";
import { EnvelopeOpen, WhatsappLogo } from "phosphor-react"

import * as S from "./styles";

const Contact = () => {
  const [values, setValues] = useState();
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    setLoading(true);
  };

  const onSubmit = (data) => {
    setValues(data);
    handleClick();

    axios.post(import.meta.env.VITE_API_URL, data)
      .then(() => {
        showModal();
      })
      .catch(err => {
        showModalError()
      });
    
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  };

  function showModal() {
    ref.current?.showModal();
    document.getElementById('modal').showModal();
  }

  function showModalError() {
    ref.current?.showModal();
    document.getElementById('modalError').showModal();
  }

  function hideModal() {
    ref.current?.close();
    document.getElementById('modal').close();
    document.location.reload();
  }

  function hideModalError() {
    ref.current?.close();
    document.getElementById('modalError').close();
  }

  return (
    <S.Container>
      <h1>Contato</h1>
      <S.Content>

        <FormContainer onSuccess={onSubmit} >
          <TextFieldElement
            required
            validation={{
              required: "Este campo é obrigatório",
            }}
            label={"Nome"}
            name={"name"}
            margin={"dense"}
            fullWidth={true}
            color="success"
            border-color='red'
          />
          <br />
          <TextFieldElement
            required
            validation={{
              required: "Este campo é obrigatório",
            }}
            type={"email"}
            margin={"dense"}
            label={"Email"}
            name={"email"}
            fullWidth={true}
            color="success"
          />
          <br />
          <TextFieldElement
            required
            validation={{
              required: "Este campo é obrigatório",
            }}
            type={"subject"}
            margin={"dense"}
            label={"Assunto"}
            name={"subject"}
            fullWidth={true}
            color="success"
          />
          <br />
          <TextFieldElement
            required
            validation={{
              required: "Este campo é obrigatório",
            }}
            type={"text"}
            label={"Mensagem"}
            name={"message"}
            margin={"dense"}
            multiline
            rows={7}
            fullWidth={true}
            color="success"
          />
          <br />
          <Stack sx={{ '& > button': { mt: 1 }, width:['8rem'] }}>
            <S.SendButton
              size="small"
              type={"submit"}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              Send
            </S.SendButton>
          </Stack>
        </FormContainer>
      </S.Content>
      <S.Modal id="modal">
        <S.SendButton onClick={hideModal}>OK</S.SendButton>
        <h2> 
          Gostaría de agradecê-lo pela visitar
        </h2>
        <p>
          Espero ter uma colaboração frutífera com você no futuro
        </p>
        <p>
          retornarei o contato o mais breve possível.
        </p>
      </S.Modal>
      <S.Modal id="modalError">
        <S.SendButton onClick={hideModalError}>OK</S.SendButton>
        <h2> 
          Desculpe algo deu errado 😢
        </h2>
        <p>
          Tente novamente mais tarde ou entre em contato direto
        </p>
        <p>
          <strong>
            <EnvelopeOpen weight="fill" />Email:  
          </strong> 
          <a href="mailto:rommel.santhiago@gmail.com" target="_blank">rommel.santhiago@gmail.com</a>
        </p>
        <p>
          <strong>
            <WhatsappLogo weight="fill" />WhatsApp: 
          </strong>
            <a href="http://wa.me/5588988750959" target="_blank">(88) 9.8875-0959</a>
        </p>
      </S.Modal>  
    </S.Container>
  );
};

export default Contact;
