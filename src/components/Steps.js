
let GITHUB_URL = "https://github.com/mahmoudahmedhassan?tab=repositories";
const steps = [
  {
    id: "1",
    message: "Welcome to my portfolio!",
    trigger: "2",
  },
  {
    id: '2',
    message: 'What is your name?',
    trigger: 'write your name',
  },
  {
    id: 'write your name',
    user: true,
    trigger: 'wellcome messamge',
  },
  {
    id: 'wellcome messamge',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger:'my info'
  },
  {
    id:"my info",
    message: "Here is some personal information about me",
    trigger: "3",
  },
  {
    id: "3",
    options: [
      {
        value: "my email",
        label: "my email",
        trigger: "email",
      },
      {
        value: "my github ",
        label: "My github",
        trigger: "github",
      },
      {
        value: "my linkedin",
        label: "My linkedin",
        trigger: "linkedin",
      },
      {
        value: "my number",
        label: "My number",
        trigger: "number",
      },
    ],
  },
  {
    id: "email",
    message: "My email is <EMAIL>",
  },
  {
    id: "github",
    message: `My github is ${GITHUB_URL}`,
    trigger: "3",
  },
  {
    id: "linkedin",
    message: "My linkedin is <LINKEDIN>",
  },
  {
    id: "number",
    message: "My number is <NUMBER>",
  },
];
export default steps;
