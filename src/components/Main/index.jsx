import React from "react";

import * as S from "./styles";
import Aside from "../Aside";
import Routers from '../../Routes/routes';

export default function Main() {

    return(
        <S.Main>
            <Aside/>
            <S.Section>
                <Routers />
            </S.Section>
        </S.Main>
    );
};
