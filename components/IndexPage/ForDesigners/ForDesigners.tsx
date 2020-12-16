import * as React from 'react';

import {
  ForDesignersAdditionalImg,
  ForDesignersButton,
  ForDesignersContainer, ForDesignersLogoText,
  ForDesignersText,
  ForDesignersTitle,
  ForDesignerTextBlock
} from "./ForDesigners.sc";

const ForDesigners = () => {
  return (
    <ForDesignersContainer>
      <ForDesignerTextBlock>
        <ForDesignersTitle>ДИЗАЙНЕР?</ForDesignersTitle>
        <ForDesignersText>
          Приглашаем к взаимовыгодному сотрудничеству креативных дизайнеров,
          архитекторов и декораторов, дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием.
        </ForDesignersText>
        <ForDesignersButton>
          Подать заявку
        </ForDesignersButton>
      </ForDesignerTextBlock>
      <ForDesignersLogoText>DESIGNER</ForDesignersLogoText>
      <ForDesignersAdditionalImg/>
    </ForDesignersContainer>
  );
};



export default ForDesigners