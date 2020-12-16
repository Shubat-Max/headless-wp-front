import * as React from "react";
import Link from "next/link";
import {Col, Container, Row} from "../Grid";
import {BackwardLink, Breadcrumbs, PageBody, PageHead} from "./Pay.sc";

const Pay = () => {
    return (
        <div>
            <Breadcrumbs>
                <Link href="/"><a><BackwardLink>На главную</BackwardLink></a></Link>
            </Breadcrumbs>

            <Container>
                <Row>
                    <Col xs={12}>
                        <PageHead>Способы оплаты</PageHead>
                        <PageBody>
                            <p>Чтобы упростить покупку дизайнерской мебели в SK Design, мы предлагаем наиболее удобный для каждого клиента способ оплаты.</p>

                            <p>Например, Вы можете оплатить свой заказ следующими способами:</p>

                            <ul style={{paddingLeft: '20px'}}>
                                <li><b>Наличными</b> или оплатой <b>картой</b> в салоне официальных дилеров;</li>
                                <li>Через сервис Вашего <b>интернет-банкинга</b>, либо внесением денежных средств <b>в кассу любого банка</b> по выставленному счету;</li>
                            </ul>

                            <p>Для <b>юридических лиц</b> предусмотрена возможность перечисления оплаты по предъявленному счету. После получения денежных средств клиенту обязательно предоставляются все необходимые для бухгалтерии документы. При получении, необходимо предоставить официальный разрешительный документ с печатью организации, например, доверенность на предъявителя.</p>

                            <p>В любом случае, мы обеспечим Вам возможность оплатить свой заказ таким способом, который Вам максимально удобен. Сотрудничая с SK Design, Вы получаете не только качественную дизайнерскую мебель, но и профессиональный сервис!</p>

                        </PageBody>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};



export default Pay;