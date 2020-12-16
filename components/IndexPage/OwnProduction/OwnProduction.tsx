import * as React from 'react';
import {
  OwnProductionBlock,
  OwnProductionBlockContent,
  OwnProductionButton,
  OwnProductionText,
  OwnProductionTitle
} from "./OwnProduction.sc";

const OwnProduction = () => {
  return (
          <OwnProductionBlock>
            <OwnProductionBlockContent>
              <div>
                <OwnProductionTitle>СОБСТВЕННОЕ ПРОИЗВОДСТВО</OwnProductionTitle>
                <OwnProductionText>
                  Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев.
                </OwnProductionText>
              </div>
              <OwnProductionButton>Подробнее</OwnProductionButton>
            </OwnProductionBlockContent>
          </OwnProductionBlock>

  );
};



export default OwnProduction