const NotificationPopupMenu = () => {
    return (
        <div className="list-group position-absolute top-0 mt-5 end-0 me-4">
            <ul className="list-group">
                <li className="list-group-item">
                    <i className="fa fa-user-circle fa-xl pe-3" /> Cras justo odio</li>
                <li className="list-group-item">
                    <i className="fa fa-user-circle fa-xl pe-3" />Dapibus ac facilisis in</li>
                <li className="list-group-item">
                    <i className="fa fa-user-circle fa-xl pe-3" />Morbi leo risus</li>
                <li className="list-group-item">
                    <i className="fa fa-user-circle fa-xl pe-3" />Porta ac consectetur ac</li>
                <li className="list-group-item">
                    <i className="fa fa-user-circle fa-xl pe-3" />Vestibulum at eros</li>
            </ul>
        </div>

    )
}

export default NotificationPopupMenu;