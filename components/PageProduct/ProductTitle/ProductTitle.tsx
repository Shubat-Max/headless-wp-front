import * as React from 'react';
import {Title, Name, Subtitle, AdminEditButton} from "./ProductTitle.sc";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {CONFIG} from "../../../constants/config";


const ProductTitle = () => {

  const {name, subtitle, id}: { name: string; subtitle?: string; id: number; } = useSelector((state: RootState) => state.product.entity)

  if (!name) return null;

  return (
    <Title>
      <Name>{name}
        { CONFIG.enable_admin &&
          <AdminEditButton
            href={`http://130.193.62.187/wp-admin/post.php?post=${id}&action=edit`}
            target="_blank"
          >
            редактировать
          </AdminEditButton>
        }
      </Name>
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
    </Title>
  );
};


export default ProductTitle;