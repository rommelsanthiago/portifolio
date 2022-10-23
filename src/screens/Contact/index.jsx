import React, { useState, useRef } from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';

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
    handleClick()
    setTimeout(() => {
      setLoading(false)
      showModal()
    }, 2000)
  };

  function showModal() {
    ref.current?.showModal();
    document.getElementById('modal').showModal();
  }

  function hideModal() {
    ref.current?.close();
    document.getElementById('modal').close();
    document.location.reload();
  }

  console.log(values)

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
      {/* <div>
        Data:
        <br />
        {JSON.stringify(values)}
      </div> */}
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
    </S.Container>
  );
};

export default Contact;
