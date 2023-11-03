import ChatBot from "react-simple-chatbot";
// import steps from "./Steps";
// import { logo } from "../assets";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { my_info } from "../constants";
import CV from "./My";

const Chat = () => {

 

  const steps = [
    {
      id: "1",
      message: "Welcome to my portfolio!",
      trigger: "2",
    },
    {
      id: "2",
      message: "What's your name?",
      trigger: "user_name",
    },
    {
      id: "user_name",
      user: true,
      validator: (value) => {
        if ((value || "").trim().length === 0) {
          return  "Please enter your name";
        }
        return true;
      },
      trigger: "welcome_message",
    },
    {
      id: "welcome_message",
      message: "Hi {previousValue}, nice to meet you!",
      trigger: "my_info",
    },
    {
      id: "my_info",
      message: "Here's some information about me:",
      trigger: "3",
    },
    {
      id: "3",
      options: [
        {
          value: "my_email",
          label: "My email",
          trigger: "email_info",
        },
        {
          value: "my_github",
          label: "My GitHub",
          trigger: "github_info",
        },
        {
          value: "my_linkedin",
          label: "My LinkedIn",
          trigger: "linkedin_info",
        },
        {
          value: "my_number",
          label: "My phone number",
          trigger: "phone_number_info",
        },
        {
          value:"my_CV",
          label:"My CV",
          trigger: "my_CV",
        }
      ],
    },
    {
      id: "email_info",
      component: (
        <p className="github text-[12px]">
          Email: 
          {/* <br/> */}
          <a href="mailto:mahmoudahmedd4800@gmail.com" className="flex justify-center items-center"><AiOutlineMail/> </a>
        </p>
      ),
      trigger: "3",
    },
    {
      id: "github_info",
      component: (
        <div className="font-bold github">
          My GitHub: <span className="ml-2"><a href={my_info.github} rel="noreferrer" target="_blank" className="text-[20px]"><AiFillGithub/></a></span>
        </div>
      ),
      trigger: "3",
    },
    {
      id: "linkedin_info",
      component: (
        <div className="font-bold github">
          My LinkedIn: <span className="ml-2"><a href={my_info.linkedin} rel="noreferrer" target="_blank" className="text-[20px]"><AiFillLinkedin /></a></span>
        </div>
      ),
      trigger: "3",
    },
    {
      id: "phone_number_info",
      message: "My phone number is +201096759755",
      trigger: "3",
    }, 
      {
      id: "my_CV",
      component: (
        <div>
          <CV/>
        </div>
      ),
      trigger: "3",
    },

  ];
  
 
  return <ChatBot steps={steps} headerTitle="My Portfolio Chatbot" />;
 };

export default Chat;
