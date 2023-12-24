import React from 'react'
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    // const chatProps = useMultiChatLogic('a71372e5-5d24-4498-bcc6-4dd36836ab19', props.user.username, props.user.secret )
  return (
    <div style={{ height: '100vh' }}>
        {/* <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}  style={{ height: '100%' }}/> */}
        <PrettyChatWindow 
        projectId='a71372e5-5d24-4498-bcc6-4dd36836ab19'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
        />
    </div>
  )
}

export default ChatsPage