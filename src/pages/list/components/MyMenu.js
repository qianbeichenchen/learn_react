import {Accordion} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
let accordionList = [{title: '', icon:  <Icon.House />, label: 'Dashboards', children: []},
    {
        title: 'PAGES', icon: <Icon.House />, label: '', children: [
            {icon: <Icon.Person />, label: 'USERS', badge: ''},
            {icon: <Icon.PersonPlus />, label: 'USERS Profile', badge: '5',color:'rgb(55,125,255)'},
            {icon: <Icon.CalendarDate />, label: 'ACCOUNT', badge: ''},
            {icon: <Icon.Shift />, label: 'E-COMMERCE', badge: ''},
            {icon: <Icon.Projector />, label: 'Projects', badge: ''},
            {icon: <Icon.EmojiAngry />, label: 'Project', badge: ''},
            {icon: <Icon.Kanban />, label: 'Authentication', badge: ''},
            {icon: <Icon.House />, label: 'API Keys', badge: ''},
            {icon: <Icon.Eye />, label: 'Welcome Page', badge: ''},
            {icon: <Icon.Gift />, label: 'Landing Page', badge: 'new',color:'rgb(9,165,190)'},

        ]
    },
    {
        title: 'APPS', icon: <Icon.House />, label: '', children: [
            {icon: <Icon.Kanban />, label: 'Kanban', badge: ''},
            {icon: <Icon.Calendar />, label: 'Calendar', badge: ''},
            {icon: <Icon.House />, label: 'Kanban', badge: ''},
            {icon: <Icon.House />, label: 'Kanban', badge: ''},
            {icon: <Icon.House />, label: 'Kanban', badge: ''},
            {icon: <Icon.House />, label: 'Kanban', badge: ''},
            {icon: <Icon.House />, label: 'Kanban', badge: ''},
            {icon: <Icon.House />, label: 'Calendar', badge: ''},
        ]
    }].map((parentMenuItem, pIndex) => {
    if (parentMenuItem.children.length === 0) {
        return <Accordion.Item eventKey={pIndex} key={pIndex}  onChange={(index)=>getActiveIndex(index)}>
            <Accordion.Header>
                <span className='accordion-icon'> {parentMenuItem.icon}</span>
                <span>    {parentMenuItem.label}</span></Accordion.Header>
        </Accordion.Item>
    } else {
        let menu = parentMenuItem.children.map((childItem, cIndex) => {
            return <Accordion.Item eventKey={pIndex + '_' + cIndex}
                                   key={pIndex + '_' + cIndex}>

                <Accordion.Header >
                    <span className='accordion-icon'> {childItem.icon}</span>
                    <span>    {childItem.label}</span>
                    {
                        childItem.badge &&  (
                            <span className='badge-circle' style={{background:childItem.color}}>
                                {childItem.badge}
                            </span>
                        )
                    }
                </Accordion.Header>
            </Accordion.Item>
        })
        return <div>
            <div className='parent-title'>{parentMenuItem.title}</div>
            {menu}
        </div>
    }
})
const getActiveIndex= (index)=>{
    console.log(index)
}

function  MyMenu(){

    return (
        <div className='menu'>
            <Accordion >
                {accordionList}
            </Accordion>
        </div>
    )
}
export default  MyMenu;