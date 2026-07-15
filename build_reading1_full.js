const fs = require('fs');

// ─── PART 6: 4 passages (Q131-146) ───
const part6Passages = [
  {
    passageId: "P6_1",
    title: "Announcement (Maxley Heights Center)",
    type: "single",
    texts: [
      `Come to the Maxley Heights Center for Horticulture and learn how to create a beautiful, eco-friendly garden for your home or business. ___(131)___. We will teach you how to plant a rain garden, which is simply a shallow sunken garden ___(132)___ a special soil mix to filter pollutants from rainwater flowing from nearby roads and rooftops. These gardens can be landscaped with native plants and flowers. ___(133)___, rain gardens are always beneficial to the local environment. Among other things, ___(134)___ improve drainage and protect rivers and streams. To register, visit www.maxley-horticulture.org.`
    ],
    questions: [
      {
        id: 131,
        options: {
          A: "We hope that we can host this program again soon.",
          B: "Please contact our main office for registration forms.",
          C: "We will also offer classes in the evening.",
          D: "Next Saturday at 4 P.M., we are hosting a free workshop for the public."
        },
        answer: "D",
        explanation: "Câu này cung cấp thông tin chuyển tiếp cần thiết đến các chi tiết của hội thảo được đề cập ở câu sau."
      },
      {
        id: 132,
        options: {
          A: "uses",
          B: "used",
          C: "using",
          D: "that uses"
        },
        answer: "D",
        explanation: "Sử dụng mệnh đề quan hệ 'that uses' để bổ nghĩa cho danh từ phía trước 'a shallow sunken garden'."
      },
      {
        id: 133,
        options: {
          A: "Best of all",
          B: "In contrast",
          C: "On the other hand",
          D: "As a result"
        },
        answer: "A",
        explanation: "Cụm từ 'Best of all' (Tốt nhất là) dùng để giới thiệu một điểm tích cực đúc kết về lợi ích của vườn mưa."
      },
      {
        id: 134,
        options: {
          A: "who",
          B: "they",
          C: "there",
          D: "which"
        },
        answer: "B",
        explanation: "Đại từ 'they' thay thế cho danh từ số nhiều 'rain gardens' đóng vai trò chủ ngữ trong câu."
      }
    ]
  },
  {
    passageId: "P6_2",
    title: "Letter (Guild of Fashion Designers)",
    type: "single",
    texts: [
      `31 July\n\nAkwasi Dombo\nFourth Avenue\nGA 105\nAccra, Ghana\n\nDear Mr. Dombo,\n\nThank you for your ___(135)___ support in helping me to plan the opening gala for Tokyo's fashion week. The event was a huge success, and I was honored to work with you. I know that our attendees follow your work closely, and they loved the designs you contributed for this event.\n\nYour designs received a lot of ___(136)___ on social media. Shows like this will keep Tokyo on the map as a premier fashion centre. ___(137)___. The auction ___(138)___ our Young Designers Award program is coming soon and I look forward to working with you on that as well.\n\nSincerely,\n\nAsahi Ishioka\nDirector, Japanese Guild of Fashion Designers`
    ],
    questions: [
      {
        id: 135,
        options: {
          A: "amazed",
          B: "amazement",
          C: "amazing",
          D: "amazingly"
        },
        answer: "C",
        explanation: "Cần một tính từ để bổ nghĩa cho danh từ 'support'. 'Amazing support' = sự ủng hộ tuyệt vời."
      },
      {
        id: 136,
        options: {
          A: "attention",
          B: "proposals",
          C: "innovation",
          D: "criticism"
        },
        answer: "A",
        explanation: "'attention' = sự chú ý/sự quan tâm. Thiết kế nhận được nhiều sự chú ý trên mạng xã hội."
      },
      {
        id: 137,
        options: {
          A: "Several other events have gone surprisingly well.",
          B: "Thank you also for your flexibility in planning the event.",
          C: "Please stop by our office the next time you are in the city.",
          D: "Tokyo is a top tourism destination for many reasons."
        },
        answer: "B",
        explanation: "Câu sau nói về việc lập kế hoạch không dễ dàng do nhiều sự trì hoãn ('multiple delays'), vì vậy cảm ơn sự linh hoạt ('flexibility') là hoàn toàn logic."
      },
      {
        id: 138,
        options: {
          A: "will benefit",
          B: "to benefit",
          C: "has benefited",
          D: "benefits"
        },
        answer: "B",
        explanation: "Cụm 'The auction to benefit our program' = buổi đấu giá nhằm gây quỹ/ủng hộ cho chương trình của chúng tôi."
      }
    ]
  },
  {
    passageId: "P6_3",
    title: "E-mail (Mena Chin Library)",
    type: "single",
    texts: [
      `From: Patron Services <patronservices@menachinlibrary.org>\nTo: Edgar Hughes <hughese98@villachesta.com>\nSubject: Card expiration date approaching\nDate: December 3\n\nDear Mr. Hughes,\n\nPlease be advised that your Mena Chin Library card will expire one month from today.\n\n___(139)___ must be renewed if you intend to keep your membership for the coming year. ___(140)___. This can be done at the information desk at any branch location.\n\n___(141)___ you decide to close your account, no action is necessary. Failure to complete your renewal by the ___(142)___ date will result in the expiration of your library privileges.\n\nIf you have any questions about this notice, or about general library services, you may reply directly to this e-mail.\n\nSincerely,\n\nPatron Services`
    ],
    questions: [
      {
        id: 139,
        options: {
          A: "It",
          B: "You",
          C: "Our",
          D: "Each"
        },
        answer: "A",
        explanation: "Đại từ 'It' làm chủ ngữ thay thế cho danh từ 'Mena Chin Library card' ở câu trước."
      },
      {
        id: 140,
        options: {
          A: "To sign up for a card, visit your local library branch.",
          B: "For questions about library membership, please visit our Web site.",
          C: "Renewal must be completed at least one week before your card expires.",
          D: "You may opt out of this program at any time."
        },
        answer: "C",
        explanation: "Câu sau nói 'This can be done at...' ('This' chỉ việc gia hạn). Phương án C đề cập 'Renewal' hợp ngữ cảnh nhất."
      },
      {
        id: 141,
        options: {
          A: "Also",
          B: "Should",
          C: "Because",
          D: "Although"
        },
        answer: "B",
        explanation: "Cấu trúc đảo ngữ điều kiện loại 1: 'Should you decide...' tương đương với 'If you decide...'"
      },
      {
        id: 142,
        options: {
          A: "specifically",
          B: "specifications",
          C: "specified",
          D: "specificity"
        },
        answer: "C",
        explanation: "Cần một tính từ dạng phân từ 'specified' để bổ nghĩa cho danh từ 'date'. 'Specified date' = ngày đã được quy định/chỉ định."
      }
    ]
  },
  {
    passageId: "P6_4",
    title: "Letter (Droplight Studio)",
    type: "single",
    texts: [
      `April 7\n\nNaomi Burwell\n43 Waymire Road\nSouth Portland, ME 04109\n\nDear Ms. Burwell,\n\nI am Omar Ridha, the manager of Droplight Studio. ___(143)___. We offer a full range of photography services for real estate professionals like you. We take pride in composing interior and exterior shots that make a property look its best. Droplight Studio spares no effort in ___(144)___ superior digital images. ___(145)___, our professional-grade equipment, lighting, and staging techniques allow us to highlight the best features of a property. And once the photo shoot is over, every image ___(146)___ expert editing. All these services come standard in every package.\n\nPlease visit our Web site to view our work as well as our pricing and scheduling information. We are happy to work with you to customize orders.\n\nSincerely,\n\nOmar Ridha, Droplight Studio`
    ],
    questions: [
      {
        id: 143,
        options: {
          A: "I would like to introduce you to our business.",
          B: "Great photographs can make your property stand out.",
          C: "We are looking forward to your visit.",
          D: "It was the first studio of its kind to open in this area."
        },
        answer: "A",
        explanation: "Người viết giới thiệu bản thân là quản lý của studio, câu tiếp theo giới thiệu dịch vụ → Phương án A 'Tôi muốn giới thiệu doanh nghiệp chúng tôi với bạn' mở đầu rất phù hợp."
      },
      {
        id: 144,
        options: {
          A: "researching",
          B: "creating",
          C: "purchasing",
          D: "displaying"
        },
        answer: "B",
        explanation: "'creating superior digital images' = tạo ra các hình ảnh kỹ thuật số vượt trội. Phù hợp với dịch vụ chụp ảnh của studio."
      },
      {
        id: 145,
        options: {
          A: "If not",
          B: "By comparison",
          C: "Otherwise",
          D: "Indeed"
        },
        answer: "D",
        explanation: "'Indeed' (Thực vậy) dùng để nhấn mạnh cho tuyên bố trước đó về việc không ngừng nỗ lực để tạo ra hình ảnh đẹp."
      },
      {
        id: 146,
        options: {
          A: "receives",
          B: "is receiving",
          C: "had received",
          D: "had to receive"
        },
        answer: "A",
        explanation: "Sử dụng thì hiện tại đơn diễn tả sự thật hiển nhiên hoặc dịch vụ tiêu chuẩn. Chủ ngữ 'every image' là số ít nên đi với động từ số ít 'receives'."
      }
    ]
  }
];

// ─── PART 7: 15 passages (Q147-200) ───
const part7Passages = [
  {
    passageId: "P7_1",
    title: "Assembly Guidelines",
    type: "single",
    texts: [
      `STOP! PLEASE READ FIRST.\n\nThank you for purchasing this item.\n\nAs you do the unpacking, please verify that all components are included and place them in a safe area to avoid loss or damage. Assemble the item on a soft surface or on the flattened empty box.\n\nFollow the pictures and begin the assembly by placing the main part on its side. Never overtighten any screws or bolts, or you may damage the wood or cushioning. Please visit our Web site to obtain maintenance tips and register your product for warranty coverage: www.indoordelight.com.`
    ],
    questions: [
      {
        id: 147,
        text: "Where is the information most likely found?",
        options: {
          A: "On a door",
          B: "On a receipt",
          C: "In a box",
          D: "On a Web site"
        },
        answer: "C",
        explanation: "Đoạn văn hướng dẫn mở hộp ('unpacking') và lắp ráp vật phẩm trên bề mặt phẳng của hộp giấy đã trải rộng ('flattened empty box') → thông tin này nằm trong hộp (in a box)."
      },
      {
        id: 148,
        text: "What kind of item is most likely discussed?",
        options: {
          A: "A desktop computer",
          B: "A piece of furniture",
          C: "A household appliance",
          D: "A power tool"
        },
        answer: "B",
        explanation: "Hướng dẫn lắp ráp có đề cập việc cẩn thận để không làm hỏng gỗ hoặc phần đệm ('wood or cushioning'), là những thành phần đặc trưng của đồ nội thất (furniture)."
      }
    ]
  },
  {
    passageId: "P7_2",
    title: "Meeting Schedule",
    type: "single",
    texts: [
      `We are asking all Winnipeg staff to keep a copy of this schedule at their desks as a quick reference tool for scheduling interoffice meetings. Whenever possible, please schedule these meetings during one of the underlined hours, that is, after 7:00 A.M. but before 11:00 A.M.\n\nWinnipeg        Toulouse\n7:00 A.M.   —   2:00 P.M.\n8:00 A.M.   —   3:00 P.M.\n9:00 A.M.   —   4:00 P.M.\n10:00 A.M.  —   5:00 P.M.\n11:00 A.M.  —   6:00 P.M.\n12:00 noon  —   7:00 P.M.`
    ],
    questions: [
      {
        id: 149,
        text: "What is suggested by the schedule?",
        options: {
          A: "A conference has been scheduled.",
          B: "A firm has offices in two time zones.",
          C: "Administrative assistants make travel plans.",
          D: "Some meeting times have been changed."
        },
        answer: "B",
        explanation: "Lịch trình so sánh múi giờ giữa Winnipeg và Toulouse để sắp xếp cuộc họp giữa các văn phòng ('interoffice meetings') → Công ty có văn phòng ở hai múi giờ khác nhau."
      },
      {
        id: 150,
        text: "What is indicated about 11:00 A.M. Winnipeg time?",
        options: {
          A: "It is when the Winnipeg office closes for lunch.",
          B: "It is when staff in Toulouse begin their workday.",
          C: "It is not a preferred time to schedule a meeting.",
          D: "It has just been added to the schedule."
        },
        answer: "C",
        explanation: "Văn bản yêu cầu sắp xếp cuộc họp vào các khung giờ gạch chân: sau 7:00 A.M. và trước 11:00 A.M. (tức là từ 7:00 đến 10:00 A.M.). Khung giờ 11:00 A.M. không được gạch chân nên đây không phải là khung giờ ưu tiên."
      }
    ]
  },
  {
    passageId: "P7_3",
    title: "Brochure",
    type: "single",
    texts: [
      `The Bryant Foyer is one of the premier event spaces in our area. Set on a hill, it has expansive windows that provide sweeping views of the adjacent botanical gardens and the river. Built in 1897, it was the home of the Francona Charitable Trust until its renovation just over a year ago. Today, the space can accommodate up to 200 guests and is ideal for wedding receptions, office parties, and panel presentations. With its marble floors, cathedral ceiling, and stunning artwork, the Bryant Foyer is the ideal location for your next gathering.\n\nThe on-site restaurant, Andito's, caters our events and also operates as its own business. This farm-to-table restaurant, headed by chef Michaela Rymond, meets all dietary needs and has revolutionized the local food scene. Area residents know to plan far in advance to get a seat.\n\nTo reserve the event space or to make a dinner reservation, give us a call at 216-555-0157.`
    ],
    questions: [
      {
        id: 151,
        text: "What is indicated about the Bryant Foyer?",
        options: {
          A: "It is located on the shores of a lake.",
          B: "It has recently been renovated.",
          C: "It will build a botanical garden for guests.",
          D: "It is reserved solely for corporate events."
        },
        answer: "B",
        explanation: "Đoạn văn có nhắc: 'until its renovation just over a year ago' (cho tới khi được trùng tu cách đây hơn một năm) → (B) mới được cải tạo gần đây là đúng."
      },
      {
        id: 152,
        text: "What is suggested about Andito's?",
        options: {
          A: "It was started by an international chef.",
          B: "It offers limited menu options.",
          C: "It is now funded by a charitable organization.",
          D: "It is very popular with local residents."
        },
        answer: "D",
        explanation: "Đoạn văn ghi: 'Area residents know to plan far in advance to get a seat' (Người dân trong vùng biết là phải đặt bàn trước từ rất sớm để có chỗ) → chứng tỏ nhà hàng rất được ưa chuộng (very popular)."
      }
    ]
  },
  {
    passageId: "P7_4",
    title: "Text-Message Chain",
    type: "single",
    texts: [
      `Joan Chi (12:39 P.M.)\nHello Mina. Are you almost finished with the field measurements? I'm getting hungry.\n\nMina Evers (12:40 P.M.)\nSorry, Joan. I'm afraid you and Ms. Lim will have to go to lunch without me today. There's a problem with the site coordinates. This is going to take some time.\n\nJoan Chi (12:51 P.M.)\nOh no. Should we bring something back for you?\n\nMina Evers (12:59 P.M.)\nGet me a chicken sandwich.\n\nJoan Chi (1:00 P.M.)\nSure thing, Mina. See you in a while.`
    ],
    questions: [
      {
        id: 153,
        text: "At 1:00 P.M., what does Ms. Chi most likely mean when she writes, \"Sure thing, Mina\"?",
        options: {
          A: "She will bring lunch for Ms. Evers.",
          B: "She can provide a tool that Ms. Evers needs.",
          C: "Some site coordinates are correct.",
          D: "Some measurements must be double-checked."
        },
        answer: "A",
        explanation: "Ở tin nhắn trước, Mina Evers yêu cầu: 'Get me a chicken sandwich' (Mua cho tôi một cái sandwich gà). Joan Chi trả lời: 'Sure thing, Mina' → Joan sẽ mang bữa trưa về cho cô Evers."
      },
      {
        id: 154,
        text: "What will happen next?",
        options: {
          A: "Ms. Chi will get new site coordinates.",
          B: "Ms. Chi and Ms. Lim will be out for a while.",
          C: "Ms. Evers will share a recipe.",
          D: "Ms. Lim will begin taking measurements."
        },
        answer: "B",
        explanation: "Mina nói Joan và cô Lim hãy đi ăn trưa trước đi. Do đó Joan và cô Lim sẽ ra ngoài ăn trưa một lúc ('will be out for a while')."
      }
    ]
  },
  {
    passageId: "P7_5",
    title: "Notice",
    type: "single",
    texts: [
      `This season's excellent weather has yielded a substantial harvest of fruits and vegetables, in many cases more than growers may find buyers for. Those of you wishing to donate surplus produce to community organizations can do so by visiting Vosey Farm and Garden's Web site (www.vfgrdn.org), where you will find our list of drop-off locations.\n\nIf you need us to come to you instead, please contact us. We will reach out to one of the many independent truck drivers who have kindly volunteered to transport and quickly distribute your food donations to vetted groups that need it. Check our Web site for more information about this service as well as for insights into topics related to farming and gardening in the Northern Great Plains region.`
    ],
    questions: [
      {
        id: 155,
        text: "For whom is the notice most likely intended?",
        options: {
          A: "Farmers",
          B: "Professional chefs",
          C: "Truck drivers",
          D: "Supermarket managers"
        },
        answer: "A",
        explanation: "Thông báo này gửi tới những người thu hoạch rau quả dư thừa ('growers', 'harvest of fruits and vegetables') để khuyên họ quyên góp → hướng tới những người nông dân (farmers)."
      },
      {
        id: 156,
        text: "What does the notice indicate about the weather?",
        options: {
          A: "It caused transportation delays.",
          B: "It included heavier rain than usual.",
          C: "It was frequently a topic in the local news.",
          D: "It was beneficial for crops."
        },
        answer: "D",
        explanation: "Thời tiết tuyệt vời ('excellent weather') giúp mùa màng bội thu ('substantial harvest of fruits and vegetables') → thời tiết có lợi cho cây trồng (beneficial for crops)."
      },
      {
        id: 157,
        text: "What service does the notice mention?",
        options: {
          A: "Staffing for local businesses",
          B: "Food collection and distribution",
          C: "Farm machinery repair",
          D: "Gardening workshops"
        },
        answer: "B",
        explanation: "Thông báo đề cập việc thu gom nông sản thừa và vận chuyển/phân phối miễn phí cho các nhóm cần chúng ('transport and quickly distribute your food donations') → dịch vụ thu nhận và phân phối thực phẩm."
      }
    ]
  },
  {
    passageId: "P7_6",
    title: "Notice",
    type: "single",
    texts: [
      `We are delighted that you are joining us for today's event. — [1] —. We ask that you adhere to the following guidelines to ensure that all attendees have an enjoyable experience.\n\nUpon entering the venue, please put any and all electronic devices in silent mode. Ringtones and lit screens are very distracting to both the performers and your fellow audience members. — [2] —. Moreover, audience members are not allowed to make an audio or visual recording of the performance.\n\nBags and other items in the aisles pose a safety concern. — [3] —. If your bag is too big to fit properly under a seat, consider storing it in a locker for just $2. — [4] —. One of our attendants will gladly assist you with that.\n\nThank you for your cooperation.`
    ],
    questions: [
      {
        id: 158,
        text: "Where most likely is the notice posted?",
        options: {
          A: "In an airplane",
          B: "In a concert hall",
          C: "At a restaurant",
          D: "At a post office"
        },
        answer: "B",
        explanation: "Văn bản đề cập đến 'performers' (người biểu diễn), 'audience members' (khán giả), 'performance' (buổi biểu diễn) → Phù hợp nhất là ở phòng hòa nhạc/nhà hát (concert hall)."
      },
      {
        id: 159,
        text: "What is stated about large bags?",
        options: {
          A: "They can be put in a locked box for a fee.",
          B: "They must be left outside the building.",
          C: "They will be inspected by an attendant.",
          D: "They must be stored under a seat."
        },
        answer: "A",
        explanation: "Thông báo ghi: 'consider storing it in a locker for just $2' (cân nhắc cất túi trong tủ khóa với giá 2 đô) → (A) đúng."
      },
      {
        id: 160,
        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Please refrain from making phone calls or texting at all times.\"",
        options: {
          A: "[1]",
          B: "[2]",
          C: "[3]",
          D: "[4]"
        },
        answer: "B",
        explanation: "Câu 'Hãy hạn chế gọi điện thoại hoặc nhắn tin mọi lúc' nói về việc dùng thiết bị điện tử. Vị trí [2] nằm ngay sau câu yêu cầu tắt âm điện thoại vì nhạc chuông/màn hình sáng gây xao nhãng biểu diễn, và ngay trước câu cấm quay phim chụp ảnh → Rất hợp logic."
      }
    ]
  },
  // Passages 7-15 are placeholders referencing the left-side PDF.
  {
    passageId: "P7_7",
    title: "Questions 161-164",
    type: "single",
    texts: ["(Vui lòng xem đoạn văn Questions 161-164 trong PDF bên trái)"],
    questions: [
      {
        id: 161,
        text: "Why did Ms. Adachi send the e-mail?",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "A",
        explanation: "Xem câu hỏi và đoạn văn trong PDF bên trái để chọn A."
      },
      {
        id: 162,
        text: "What is indicated about Ms. Ayala?",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem câu hỏi và đoạn văn trong PDF bên trái để chọn C."
      },
      {
        id: 163,
        text: "What is suggested about the multilayer cake?",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "D",
        explanation: "Xem câu hỏi và đoạn văn trong PDF bên trái để chọn D."
      },
      {
        id: 164,
        text: "In the e-mail, the word 'judged' is closest in meaning to",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem câu hỏi và đoạn văn trong PDF bên trái để chọn C."
      }
    ]
  },
  {
    passageId: "P7_8",
    title: "Questions 165-167",
    type: "single",
    texts: ["(Vui lòng xem đoạn văn Questions 165-167 trong PDF bên trái)"],
    questions: [
      {
        id: 165,
        text: "Câu 165",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      },
      {
        id: 166,
        text: "Câu 166",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "D",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là D."
      },
      {
        id: 167,
        text: "Câu 167",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "A",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là A."
      }
    ]
  },
  {
    passageId: "P7_9",
    title: "Questions 168-171",
    type: "single",
    texts: ["(Vui lòng xem đoạn văn Questions 168-171 trong PDF bên trái)"],
    questions: [
      {
        id: 168,
        text: "Câu 168",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "D",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là D."
      },
      {
        id: 169,
        text: "Câu 169",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "B",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là B."
      },
      {
        id: 170,
        text: "Câu 170",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      },
      {
        id: 171,
        text: "Câu 171",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "A",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là A."
      }
    ]
  },
  {
    passageId: "P7_10",
    title: "Questions 172-175",
    type: "single",
    texts: ["(Vui lòng xem đoạn văn Questions 172-175 trong PDF bên trái)"],
    questions: [
      {
        id: 172,
        text: "Câu 172",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "D",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là D."
      },
      {
        id: 173,
        text: "Câu 173",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "B",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là B."
      },
      {
        id: 174,
        text: "Câu 174",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      },
      {
        id: 175,
        text: "Câu 175",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      }
    ]
  },
  {
    passageId: "P7_11",
    title: "Questions 176-180",
    type: "single",
    texts: ["(Vui lòng xem đoạn văn Questions 176-180 trong PDF bên trái)"],
    questions: [
      {
        id: 176,
        text: "Câu 176",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "B",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là B."
      },
      {
        id: 177,
        text: "Câu 177",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      },
      {
        id: 178,
        text: "Câu 178",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      },
      {
        id: 179,
        text: "Câu 179",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "A",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là A."
      },
      {
        id: 180,
        text: "Câu 180",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "B",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là B."
      }
    ]
  },
  {
    passageId: "P7_12",
    title: "Questions 181-185",
    type: "single",
    texts: ["(Vui lòng xem đoạn văn Questions 181-185 trong PDF bên trái)"],
    questions: [
      {
        id: 181,
        text: "Câu 181",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "D",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là D."
      },
      {
        id: 182,
        text: "Câu 182",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      },
      {
        id: 183,
        text: "Câu 183",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "B",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là B."
      },
      {
        id: 184,
        text: "Câu 184",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      },
      {
        id: 185,
        text: "Câu 185",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      }
    ]
  },
  {
    passageId: "P7_13",
    title: "Questions 186-190",
    type: "single",
    texts: ["(Vui lòng xem đoạn văn Questions 186-190 trong PDF bên trái)"],
    questions: [
      {
        id: 186,
        text: "Câu 186",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      },
      {
        id: 187,
        text: "Câu 187",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "D",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là D."
      },
      {
        id: 188,
        text: "Câu 188",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "B",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là B."
      },
      {
        id: 189,
        text: "Câu 189",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "A",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là A."
      },
      {
        id: 190,
        text: "Câu 190",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "B",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là B."
      }
    ]
  },
  {
    passageId: "P7_14",
    title: "Questions 191-195",
    type: "single",
    texts: ["(Vui lòng xem đoạn văn Questions 191-195 trong PDF bên trái)"],
    questions: [
      {
        id: 191,
        text: "Câu 191",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "D",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là D."
      },
      {
        id: 192,
        text: "Câu 192",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      },
      {
        id: 193,
        text: "Câu 193",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "A",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là A."
      },
      {
        id: 194,
        text: "Câu 194",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "B",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là B."
      },
      {
        id: 195,
        text: "Câu 195",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      }
    ]
  },
  {
    passageId: "P7_15",
    title: "Questions 196-200",
    type: "single",
    texts: ["(Vui lòng xem đoạn văn Questions 196-200 trong PDF bên trái)"],
    questions: [
      {
        id: 196,
        text: "Câu 196",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "A",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là A."
      },
      {
        id: 197,
        text: "Câu 197",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      },
      {
        id: 198,
        text: "Câu 198",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "C",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là C."
      },
      {
        id: 199,
        text: "Câu 199",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "D",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là D."
      },
      {
        id: 200,
        text: "Câu 200",
        options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
        answer: "B",
        explanation: "Xem chi tiết câu hỏi trong PDF bên trái. Đáp án đúng là B."
      }
    ]
  }
];

// ─── Update tests.json ───
const filePath = "data/tests.json";
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
const idx = data.tests.findIndex(t => t.id === "test1");
if (idx === -1) {
  console.error("❌ test1 not found");
  process.exit(1);
}

const R = data.tests[idx].reading;

// Update Part 6 → passages mode
const p6 = R.parts.find(p => p.id === "part6");
if (p6) {
  delete p6.questions;
  p6.passages = part6Passages;
  p6.description = "Choose the best word or phrase to complete each passage.";
}

// Update Part 7 → passages mode
const p7 = R.parts.find(p => p.id === "part7");
if (p7) {
  delete p7.questions;
  p7.passages = part7Passages;
  p7.description = "Choose the best answer to each question about the reading passages.";
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

const p6total = part6Passages.reduce((s, p) => s + p.questions.length, 0);
const p7total = part7Passages.reduce((s, p) => s + p.questions.length, 0);
console.log("✅ Done!");
console.log(`   Part 6: ${part6Passages.length} passages, ${p6total} câu (FULL)`);
console.log(`   Part 7: ${part7Passages.length} passages, ${p7total} câu (FULL)`);
