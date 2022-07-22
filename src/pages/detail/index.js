import {Button, Form, Nav, Row, Col, InputGroup, DropdownButton,Dropdown} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import {useState} from 'react'
import ImgArea from './detail.png'

import './index.scss'

function Detail() {
    const [activeNavIndex, setActiveNavIndex] = useState(0);
    let navItemList = [
        {icon: <Icon.Person color='black' size={16}/>, label: 'Profile'},
        {icon: <Icon.Line color='black' size={16}/>, label: 'Billing Address'},
        {icon: <Icon.ShieldLock color='black' size={16}/>, label: 'Change Password'},
        {icon: <Icon.Bell color='black' size={16}/>, label: 'Notifications'},
    ].map((item, index) => {

        return <Nav.Item key={index} className='nav-item '>
            <Nav.Link eventKey={index}>
                <div variant="light"
                     className={["nav-btn", index === activeNavIndex ? "nav-active-btn" : null].join(' ')}>
                    {item.icon}
                    <span>{item.label}</span>
                </div>
            </Nav.Link>
        </Nav.Item>
    })

    return (
        <div className='modal-container'>
            <Nav
                activeKey="/Profile" className='my-navs'
                onSelect={(selectedKey,) => setActiveNavIndex(parseInt(selectedKey))}
            >
                {navItemList}
            </Nav>
            <div className='img-area'>
                <img src={ImgArea} alt=""/>
            </div>
            <Form className='myForm'>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Full Name
                    </Form.Label>
                    <Col sm="10" className='full-name-input-group'>
                        <Form.Control type='text'  defaultValue="Elia" />
                        <Form.Control type='text'  defaultValue="Lauda" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" defaultValue="ellia@grapecity.com" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Phone<span className='sub-title'>(optional)</span>
                    </Form.Label>
                    <Col sm="10">
                        <InputGroup className="mb-3">
                            <Form.Control aria-label="Text input with dropdown button" />

                            <DropdownButton
                                variant="outline-secondary"
                                title="Mobile"
                                id="input-group-dropdown-2"
                                align="end"
                            >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>

                    </Col>
                </Form.Group> <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Organization
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" defaultValue="china"  />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Department
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder="your department" />
                </Col>
            </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Account type
                    </Form.Label>
                    <Col sm="10">
                        <InputGroup>
                            <Form.Control placeholder={<> <Icon.Person color='black' size={16}/>individual</>}/>
                            <InputGroup.Radio />
                        </InputGroup>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Detail;