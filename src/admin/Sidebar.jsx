import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <ul className="list-group" >
                <li className="list-group-item active " id='sidebar' aria-current="true">Admin</li>

                <li className="list-group-item" >
                    <Link to={'/admin/dashboard'} >Dashboard</Link>
                </li>

                <li className="list-group-item">
                    <Link to={'/admin/chats'} >Chats</Link>
                </li>


                <li className="list-group-item">
                    <Link to={'/admin/tickets'} >Tickets</Link>
                </li>
                <li className="list-group-item">
                    <Link to={'/admin/chat-list'} >Chat List</Link>
                </li>

                <li className="list-group-item">
                    <Link to={'/admin/bulk-message'} >Bulk Messages</Link>
                </li>

               

            </ul>
        </>
    )
}
