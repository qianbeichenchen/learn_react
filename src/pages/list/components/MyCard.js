import {Button, Card, DropdownButton, Form, Pagination, ProgressBar, Table} from "react-bootstrap";
import Avatar from "../icons/avater.png";
import * as Icon from "react-bootstrap-icons";
import Dropdown from 'react-bootstrap/Dropdown';

function MyCard(props) {
    return (
        <Card className="my-card">
            <Card.Body className='my-card-body' style={{padding: 0}}>
                <Table className='table'>
                    <thead className='thead'>
                    <tr>
                        <th><Form.Check
                            inline
                            name="group1"
                            type='checkbox'
                        /></th>
                        <th>Name</th>
                        <th>POSITION</th>
                        <th>Country</th>
                        <th>STATUS</th>
                        <th>PORTFOLIO</th>
                        <th>ROLE</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody className='tbody'>

                    <tr>
                        <td><Form.Check
                            inline
                            name="group1"
                            type='checkbox'
                        /></td>
                        <td className='name-box'>
                            <img src={Avatar} alt=""/>
                            <div>
                                <div className='name'>Amanda Harvey</div>
                                <span className='email'>amanda@site.com</span>
                            </div>
                        </td>
                        <td className='director'>
                            <div>Director</div>
                            <div>Human resources</div>
                        </td>
                        <td className='address'>
                            United Kingdom
                        </td>
                        <td className='status'>
                            <span className='circle green'></span><span>Active</span>
                        </td>
                        <td className='progress'><span>50%</span><ProgressBar className='progressBar' now={50}/></td>
                        <td className='employee'>employee</td>
                        <td className='operate'>
                            <Button className='edit-btn'  variant="light"onClick={() => props.setModalShow(true)}>
                                <Icon.Pencil color='black' size={16}/>
                                <span>Edit</span>
                            </Button></td>
                    </tr>
                    <tr>
                        <td><Form.Check
                            inline
                            name="group1"
                            type='checkbox'
                        /></td>
                        <td className='name-box'>
                            <img src={Avatar} alt=""/>
                            <div>
                                <div className='name'>Amanda Harvey</div>
                                <span className='email'>amanda@site.com</span>
                            </div>
                        </td>
                        <td className='director'>
                            <div>Director</div>
                            <div>Human resources</div>
                        </td>
                        <td className='address'>
                            United Kingdom
                        </td>
                        <td className='status'>
                            <span className='circle yellow'></span><span>Active</span>
                        </td>
                        <td className='progress'><span>29%</span><ProgressBar className='progressBar' now={29}/></td>
                        <td className='employee'>employee</td>
                        <td className='operate'>
                            <Button className='edit-btn'  variant="light"onClick={() => props.setModalShow(true)}>
                                <Icon.Pencil color='black' size={16}/>
                                <span>Edit</span>
                            </Button></td>
                    </tr>   <tr>
                        <td><Form.Check
                            inline
                            name="group1"
                            type='checkbox'
                        /></td>
                        <td className='name-box'>
                            <img src={Avatar} alt=""/>
                            <div>
                                <div className='name'>Amanda Harvey</div>
                                <span className='email'>amanda@site.com</span>
                            </div>
                        </td>
                        <td className='director'>
                            <div>Director</div>
                            <div>Human resources</div>
                        </td>
                        <td className='address'>
                            United Kingdom
                        </td>
                        <td className='status'>
                            <span className='circle green'></span><span>Active</span>
                        </td>
                        <td className='progress'><span>88%</span><ProgressBar className='progressBar' now={88}/></td>
                        <td className='employee'>employee</td>
                        <td className='operate'>
                            <Button className='edit-btn'  variant="light"onClick={() => props.setModalShow(true)}>
                                <Icon.Pencil color='black' size={16}/>
                                <span>Edit</span>
                            </Button></td>
                    </tr>   <tr>
                        <td><Form.Check
                            inline
                            name="group1"
                            type='checkbox'
                        /></td>
                        <td className='name-box'>
                            <img src={Avatar} alt=""/>
                            <div>
                                <div className='name'>Amanda Harvey</div>
                                <span className='email'>amanda@site.com</span>
                            </div>
                        </td>
                        <td className='director'>
                            <div>Director</div>
                            <div>Human resources</div>
                        </td>
                        <td className='address'>
                            United Kingdom
                        </td>
                        <td className='status'>
                            <span className='circle green'></span><span>Active</span>
                        </td>
                        <td className='progress'><span>100%</span><ProgressBar className='progressBar' now={100}/></td>
                        <td className='employee'>employee</td>
                        <td className='operate'>
                            <Button className='edit-btn'  variant="light"onClick={() => props.setModalShow(true)}>
                                <Icon.Pencil color='black' size={16}/>
                                <span>Edit</span>
                            </Button></td>
                    </tr>   <tr>
                        <td><Form.Check
                            inline
                            name="group1"
                            type='checkbox'
                        /></td>
                        <td className='name-box'>
                            <img src={Avatar} alt=""/>
                            <div>
                                <div className='name'>Amanda Harvey</div>
                                <span className='email'>amanda@site.com</span>
                            </div>
                        </td>
                        <td className='director'>
                            <div>Director</div>
                            <div>Human resources</div>
                        </td>
                        <td className='address'>
                            United Kingdom
                        </td>
                        <td className='status'>
                            <span className='circle yellow'></span><span>Active</span>
                        </td>
                        <td className='progress'><span>10%</span><ProgressBar className='progressBar' now={10}/></td>
                        <td className='employee'>employee</td>
                        <td className='operate'>
                            <Button className='edit-btn'  variant="light"onClick={() => props.setModalShow(true)}>
                                <Icon.Pencil color='black' size={16}/>
                                <span>Edit</span>
                            </Button></td>
                    </tr>   <tr>
                        <td><Form.Check
                            inline
                            name="group1"
                            type='checkbox'
                        /></td>
                        <td className='name-box'>
                            <img src={Avatar} alt=""/>
                            <div>
                                <div className='name'>Amanda Harvey</div>
                                <span className='email'>amanda@site.com</span>
                            </div>
                        </td>
                        <td className='director'>
                            <div>Director</div>
                            <div>Human resources</div>
                        </td>
                        <td className='address'>
                            United Kingdom
                        </td>
                        <td className='status'>
                            <span className='circle green'></span><span>Active</span>
                        </td>
                        <td className='progress'><span>72%</span><ProgressBar className='progressBar' now={72}/></td>
                        <td className='employee'>employee</td>
                        <td className='operate'>
                            <Button className='edit-btn'  variant="light"onClick={() => props.setModalShow(true)}>
                                <Icon.Pencil color='black' size={16}/>
                                <span>Edit</span>
                            </Button></td>
                    </tr>   <tr>
                        <td><Form.Check
                            inline
                            name="group1"
                            type='checkbox'
                        /></td>
                        <td className='name-box'>
                            <img src={Avatar} alt=""/>
                            <div>
                                <div className='name'>Amanda Harvey</div>
                                <span className='email'>amanda@site.com</span>
                            </div>
                        </td>
                        <td className='director'>
                            <div>Director</div>
                            <div>Human resources</div>
                        </td>
                        <td className='address'>
                            United Kingdom
                        </td>
                        <td className='status'>
                            <span className='circle yellow'></span><span>Active</span>
                        </td>
                        <td className='progress'><span>20%</span><ProgressBar className='progressBar' now={20}/></td>
                        <td className='employee'>employee</td>
                        <td className='operate'>
                            <Button className='edit-btn'  variant="light"onClick={() => props.setModalShow(true)}>
                                <Icon.Pencil color='black' size={16}/>
                                <span>Edit</span>
                            </Button></td>
                    </tr>
                    </tbody>
                </Table>
            </Card.Body>
            <Card.Footer className="my-card-footer">
                <div className='pagination-count'>
                    <span>Showing:</span>
                    <span>  <DropdownButton className="dropdown-item-button" title="15" >
      <Dropdown.Item as="button">5</Dropdown.Item>
      <Dropdown.Item as="button">10</Dropdown.Item>
      <Dropdown.Item as="button">15</Dropdown.Item>
    </DropdownButton></span>
                    <span>of 24</span>
                </div>
                <Pagination className='pagination'>
                    <Pagination.Prev/>
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Next/>
                    </Pagination></Card.Footer>
        </Card>


    )

}

export default MyCard;
