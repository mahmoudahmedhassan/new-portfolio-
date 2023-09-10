import React from 'react'
import ChatBot from 'react-simple-chatbot';
import classes from '../../Styles/chat.module.css'

export const TestComp = () => {

  return (
    <div>
    <div style={{width : "256px"}}>
      <img style={{width : "100%"}} src="https://wotnot-conversation-attachment.storage.googleapis.com/111835_48367_YzFccrmkqCLm121630555156jelu8o4I_attachment.png" alt="example"/>
    </div>

  </div>
    )
}

const steps = [
    {
        id: '1',
        message: 'What can i do to reveal your beauty?',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Book An Appointment', trigger: '3' },
        ],
      },
      {
        id: '3',
        message: 'Please select the department',
        trigger: '4',
      },
      {
        id: '4',
        options : [
          {value : 'laser' , label : "Laser" , trigger : '5'},
        ],
      },
      {
        id : '5',
        component: (
           <TestComp />
        ),
        trigger : '6'
      },
      {
        id : '6',
        options : [
          {value : 'ticket' , label : "Book Me A Ticket" , trigger : '7'},
        ]
      },
      {
        id : '7',
        message : "Ticket Has Been Booked , Do You Want Anything Else ?",
        trigger : '8'
      },
      {
        id : '8',
        options : [
          {value : "yes" , label : "Yes" , trigger : '2'},
          {value : "no" , label : "No" , trigger : '9'}
        ]
      },
      {
        id: '9',
        message: 'Thank You So Much ;)',
        end: true,
      },
]
const Chat = () => {
  return (
    <div >
        <ChatBot steps={steps} />
    </div>
  )
}

export default Chat