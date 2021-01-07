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
];

var threads = defaultThreads;
if (localStorage && localStorage.getItem("threads")) {
  threads = JSON.parse(localStorage.getItem("threads"));
} else {
  threads = defaultThreads;
  localStorage.setItem("threads", JSON.stringify(defaultThreads));
}
