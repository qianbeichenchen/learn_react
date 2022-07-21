import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.scss'
import Icon from './icons/icon.png'
import Notice from './icons/notice.png'
import Avatar from './icons/avater.png'

function ListPage() {
    return (
        <div className='container-box'>
            <Row className='row'>
                <Col xs={2} className='col-2 col'>
                    <div className='header'>
                        <div className='icon'>
                            <img src={Icon}/>
                        </div>
                        <div className='title'>Front</div>
                    </div>
                    <div className='menu'></div>
                </Col>
                <Col xs={10} className='col-10 col'>
                    <div className='top-icon-group'>
                        <ul className="groups">
                            <li> <img src={Notice}/></li>
                            <li><img src={Notice}/></li>
                            <li><img src={Notice}/></li>
                            <li ><img className='avatar' src={Avatar}/></li>

                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ListPage;