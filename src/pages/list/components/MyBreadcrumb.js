import {Breadcrumb} from "react-bootstrap";

function MyBreadcrumb (){
    return (<Breadcrumb>
        <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
            Users
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Overview</Breadcrumb.Item>
    </Breadcrumb>)
}

export default MyBreadcrumb