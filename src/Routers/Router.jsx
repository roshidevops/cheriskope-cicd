import React from 'react'
import { Route, Routes } from "react-router-dom"
import Auth from '../pages/Auth'
import Authenticate from '../admin/Authenticate'
import Dashboard from '../admin/dashboard/Dashboard'
import Chats from '../admin/chats/Chats'
import Tickets from '../admin/tickets/Tickets'
import ChatList from '../admin/chat-list/ChatList'
import BulkMessages from '../admin/bulk-messages/BulkMessages'

export default function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Auth />} />

                <Route path='/admin' element={<Authenticate />}>
                    <Route path='dashboard' element={<Dashboard/>} />
                    <Route path='chats' element={<Chats/>} />
                    <Route path='tickets' element={<Tickets/>} />
                    <Route path='chat-list' element={<ChatList/>} />
                    <Route path='bulk-messages' element={<BulkMessages/>} />



                </Route>





            </Routes>

        </>
    )
}
