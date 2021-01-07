var defaultThreads = [
  {
    id: 1,
    title:
      "I tested positive today in Chapel Hill. Be careful if you've been at UNC.",
    author: "",
    date: Date.now(),
    content: "Thread content",
    comments: [
      {
        author: "",
        date: Date.now(),
        content: "Thank you for the heads up!",
      },
      {
        author: "",
        date: Date.now(),
        content: "Get well soon",
      },
    ],
  },
  {
    id: 2,
    title: "I am having headaches post Covid. Anybody else dealing with this?",
    author: "",
    date: Date.now(),
    content: "Thread content 2",
    comments: [
      {
        author: "",
        date: Date.now(),
        content: "Yes I had this issue.",
      },
      {
        author: "",
        date: Date.now(),
        content: "I recommend resting well and drinking lots of water.",
      },
    ],
  },
  {
    id: 3,
    title: "I am currently at the hospital. Covid is no joke!",
    author: "",
    date: Date.now(),
    content: "Thread content 2",
    comments: [
      {
        author: "",
        date: Date.now(),
        content: "Praying for you!",
      },
    ],
  },
  {
    id: 4,
    title:
      "I am currently a nurse at Duke Hospital. ICU's are reaching capacity. Please stay home!",
    author: "",
    date: Date.now(),
    content: "Thread content 2",
    comments: [],
  },
  {
    id: 5,
    title:
      "I am a college student who got covid. I couldn't taste anything for a month.",
    author: "",
    date: Date.now(),
    content: "Thread content 2",
    comments: [
      {
        author: "",
        date: Date.now(),
        content: "I hope you get well soon.",
      },
      {
        author: "",
        date: Date.now(),
        content: "That sucks man.",
      },
    ],
  },
  {
    id: 6,
    title: "I am experiencing a running nose. Should I get tested?",
    author: "",
    date: Date.now(),
    content: "Thread content 2",
    comments: [
      {
        author: "",
        date: Date.now(),
        content: "wait a couple days to see if it gets worse.",
      },
    ],
  },
  {
    id: 7,
    title:
      "If you are a university student, they should have free testing there!",
    author: "",
    date: Date.now(),
    content: "Thread content 2",
    comments: [
    ],
  },
  {
    id: 8,
    title:
      "I am a doctor. Please don't do anything stupid over the holidays.",
    author: "",
    date: Date.now(),
    content: "Thread content 2",
    comments: [
    ],
  },
];

var threads = defaultThreads;
if (localStorage && localStorage.getItem("threads")) {
  threads = JSON.parse(localStorage.getItem("threads"));
} else {
  threads = defaultThreads;
  localStorage.setItem("threads", JSON.stringify(defaultThreads));
}
