import {Row, Col, Button,} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './index.scss'
import Header from "./components/Header";
import IconGroups from "./components/IconGroups";
import MyBreadcrumb from "./components/MyBreadcrumb";
import MyCard from "./components/MyCard";
import MyMenu from "./components/MyMenu";
import {useState} from 'react'
import MyModal from "./components/MyModal";

function ListPage() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className='container-box'>
            <Row className='row'>
                <Col xs={2} className='col-2 col'>
                    <Header/>
                    <MyMenu/>
                </Col>
                <Col xs={10} className='col-10 col'>
                    <div className='top-icon-group'>
                        <IconGroups/>
                    </div>
                    <div className='main-scroll'>
                        <div className='title-card'>
                            <MyBreadcrumb/>
                            <Button variant="primary" className='add-user-btn'>
                                <Icon.PersonPlusFill color='white' size={18}/>
                                <span>Add Users</span>
                            </Button>
                        </div>
                        <MyCard setModalShow={(visible) => setModalShow(visible)}/>
                    </div>

                    <div className='main-footer'>
                        <div>@ Font. 2022 HtmlStream</div>
                        <div>FAQ / License / <Icon.Command/> </div>
                    </div>
                </Col>
            </Row>
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default ListPage;