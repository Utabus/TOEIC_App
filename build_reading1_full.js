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
    title: "E-mail",
    type: "single",
    texts: [
      `To: Camille Ayala <ayala@esplinelectronics.com>\nFrom: Masae Adachi <madachi@sweeterspecialties.com>\nDate: February 12\nSubject: Event order\nAttachment: Sweeter Specialties Request Form\n\nDear Ms. Ayala,\n\nThank you for selecting our business to provide baked goods for the Esplin Electronics conference event in March. We are honored that you chose us for a fourth year in a row! On March 29, we will provide a large vanilla cake for each of the ten venues you indicated, and we will deliver a custom-baked multilayer cake on the following day. You will be billed on March 28. Please review the attached order form and return it to me within seven days.\n\nRegarding the cake you ordered for March 30, our head pastry chef will produce it according to your specifications. In fact, he created a sample of the complete recipe earlier today—almond crème cake with fresh raspberry filling. We have judged it to be a delectable treat, and we are sure that you will be pleased.\n\nIf you have any concerns, just send me an e-mail. As always, we value your business.\n\nMasae Adachi, Owner\nSweeter Specialties`
    ],
    questions: [
      {
        id: 161,
        text: "What is the main purpose of the e-mail?",
        options: {
          A: "To request confirmation of an order",
          B: "To adjust some delivery dates",
          C: "To announce the expansion of a business",
          D: "To promote new dessert products"
        },
        answer: "A",
        explanation: "Email yêu cầu khách hàng xem xét và gửi lại mẫu đơn đặt hàng đính kèm trong vòng 7 ngày ('Please review the attached order form and return it to me within seven days') để xác nhận đơn hàng. Chọn A."
      },
      {
        id: 162,
        text: "What is suggested about Ms. Ayala?",
        options: {
          A: "She is receiving a professional award.",
          B: "She has worked as a pastry chef.",
          C: "She has been a Sweeter Specialties client in the past.",
          D: "She received a positive recommendation about a chef."
        },
        answer: "C",
        explanation: "Người gửi viết: 'We are honored that you chose us for a fourth year in a row!' (Chúng tôi rất vinh dự khi bạn đã chọn chúng tôi trong năm thứ tư liên tiếp!) cho thấy cô Ayala đã là khách hàng của Sweeter Specialties từ trước. Chọn C."
      },
      {
        id: 163,
        text: "What is indicated about the multilayer cake?",
        options: {
          A: "It has been a best-selling product with clients.",
          B: "It is the most expensive cake at Sweeter Specialties.",
          C: "It is baked for Esplin Electronics annually.",
          D: "It is a new flavor combination for Sweeter Specialties."
        },
        answer: "D",
        explanation: "Đầu bếp bánh ngọt trưởng của cửa hàng vừa mới tạo mẫu công thức hoàn chỉnh ngày hôm nay ('he created a sample of the complete recipe earlier today') cho thấy đây là một sự kết hợp hương vị mới. Chọn D."
      },
      {
        id: 164,
        text: "The word 'judged' in paragraph 2, line 3, is closest in meaning to",
        options: {
          A: "criticized",
          B: "settled",
          C: "determined",
          D: "described"
        },
        answer: "C",
        explanation: "Trong ngữ cảnh 'We have judged it to be a delectable treat' (Chúng tôi đánh giá/xác định món ăn này rất ngon miệng), từ 'judged' có nghĩa là xác định/đánh giá, gần nghĩa nhất với từ 'determined'. Chọn C."
      }
    ]
  },
  {
    passageId: "P7_8",
    title: "Product Review",
    type: "single",
    texts: [
      `Great Dishwasher!\n\nI never had a dishwasher before. After remodeling my kitchen, I finally had room for a compact dishwasher. I did a lot of research, and the Dish Magic 300 seemed to be the best choice. It was pricier than other models, but all of the reviews were excellent. So, I decided to spend the extra money. I have had the dishwasher for one month now, and I could not be happier with my decision. Most importantly, the dishes come out sparkling clean, no matter how dirty they were going in. Also, the machine is so quiet, you do not even know it is running. Lastly, it is designed to use water efficiently, which is very important to me. Overall, I am very pleased with this dishwasher.\n\n– Anna Yakovleva`
    ],
    questions: [
      {
        id: 165,
        text: "Why did Ms. Yakovleva choose the Dish Magic 300 dishwasher?",
        options: {
          A: "It was less expensive than most models.",
          B: "It was the largest model available.",
          C: "It was rated very highly.",
          D: "It was the same brand as her other appliances."
        },
        answer: "C",
        explanation: "Cô Yakovleva cho biết: 'all of the reviews were excellent' (tất cả các đánh giá đều rất xuất sắc). Điều này có nghĩa là thiết bị này được xếp hạng/đánh giá rất cao. Chọn C."
      },
      {
        id: 166,
        text: "The word 'running' in paragraph 1, line 7, is closest in meaning to",
        options: {
          A: "adjusting",
          B: "controlling",
          C: "moving",
          D: "operating"
        },
        answer: "D",
        explanation: "Từ 'running' trong câu 'you do not even know it is running' nói về máy móc đang hoạt động, vận hành, nên gần nghĩa nhất với 'operating'. Chọn D."
      },
      {
        id: 167,
        text: "What is indicated about Ms. Yakovleva?",
        options: {
          A: "She cares about saving water.",
          B: "She recently moved to a new home.",
          C: "She bought the dishwasher a year ago.",
          D: "She remodels kitchens professionally."
        },
        answer: "A",
        explanation: "Cô Yakovleva viết: 'it is designed to use water efficiently, which is very important to me' (thiết kế sử dụng nước hiệu quả là điều rất quan trọng đối với tôi) chứng tỏ cô ấy quan tâm đến việc tiết kiệm nước. Chọn A."
      }
    ]
  },
  {
    passageId: "P7_9",
    title: "Information",
    type: "single",
    texts: [
      `Skyler Airlines employs more than 20,000 people from all over the world. We're growing fast and have many positions available. — [1] —. So regardless of your background, there's probably a place for you on our team. Skyler employees enjoy many perks. — [2] —. For example, our discount program enables them to fly to any of our destinations for a fraction of the average ticket price. — [3] —. We offer upward and global mobility, tuition reimbursement, a mentorship program, and a generous compensation package. — [4] —. Annual paid vacations enable a comfortable work-life balance. It's no wonder that Skyler Airlines was named “Best Airline to Work For” by Travel Vista Journal three years in a row.`
    ],
    questions: [
      {
        id: 168,
        text: "For whom is the information intended?",
        options: {
          A: "Skyler Airlines employees",
          B: "Skyler Airlines customers",
          C: "Potential journal subscribers",
          D: "Current job seekers"
        },
        answer: "D",
        explanation: "Thông tin nói về việc hãng đang tuyển dụng nhiều vị trí ('have many positions available', 'place for you on our team') nên nó hướng tới người tìm việc. Chọn D."
      },
      {
        id: 169,
        text: "In the information, what is NOT mentioned as being offered to employees?",
        options: {
          A: "Payment for educational expenses",
          B: "Free airline tickets",
          C: "Opportunities for mentoring",
          D: "Paid days off"
        },
        answer: "B",
        explanation: "Hãng đề cập đến chương trình giảm giá vé máy bay ('fly... for a fraction of the average ticket price') chứ không phải vé máy bay miễn phí. Các phúc lợi khác như học phí (A), người hướng dẫn (C), và ngày nghỉ phép có lương (D) đều có trong bài. Chọn B."
      },
      {
        id: 170,
        text: "What is mentioned about Skyler Airlines?",
        options: {
          A: "It flies to the most destinations around the world.",
          B: "It is planning to merge with another airline.",
          C: "It has been praised by a trade publication.",
          D: "It has replaced its seats with more comfortable ones."
        },
        answer: "C",
        explanation: "Skyler Airlines được vinh danh là 'Best Airline to Work For' bởi Travel Vista Journal (một tạp chí chuyên ngành). Chọn C."
      },
      {
        id: 171,
        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n“Our openings cover a broad range of skill sets.”",
        options: {
          A: "[1]",
          B: "[2]",
          C: "[3]",
          D: "[4]"
        },
        answer: "A",
        explanation: "Câu 'Các cơ hội việc làm của chúng tôi bao gồm nhiều nhóm kỹ năng khác nhau' nối tiếp hoàn hảo câu nói về việc có nhiều vị trí trống và trước câu kết luận 'Vì vậy bất kể xuất phát điểm của bạn là gì, luôn có một vị trí cho bạn trong đội ngũ của chúng tôi' ở vị trí [1]. Chọn A."
      }
    ]
  },
  {
    passageId: "P7_10",
    title: "Online Chat Discussion",
    type: "single",
    texts: [
      `Susan Gowan 9:16 A.M.\nGood morning. The presentation slides about the new line of headphones are almost ready for distribution to our many partner stores. We are on track to send them out next Monday.\n\nMaggie Lorenz 9:17 A.M.\nHow do they look?\n\nSusan Gowan 9:20 A.M.\nThere are still some missing elements.\n\nAlan Woodson 9:21 A.M.\nWe mainly need the information from the user studies that reviewed the headphones for sport use. We should have that report from the research and development office by Wednesday.\n\nMaggie Lorenz 9:22 A.M.\nYes, let's not overlook that. And if you're concerned about the report not arriving by Wednesday, please contact Matt Harven and remind him to expedite a summary to us.\n\nSusan Gowan 9:23 A.M.\nAssuming we receive that summary soon enough to incorporate its findings into the slides, should the three of us schedule a trial run through the presentation on Thursday or Friday?\n\nMaggie Lorenz 9:24 A.M.\nLet's try for Thursday afternoon. Then we will still have Friday to make any necessary changes.\n\nAlan Woodson 9:25 A.M.\nFine by me. I'm free after 2 P.M.`
    ],
    questions: [
      {
        id: 172,
        text: "What is indicated about a presentation?",
        options: {
          A: "It will be expensive to produce.",
          B: "It will highlight some best-selling products.",
          C: "It will be Ms. Gowan's first project.",
          D: "It will be sent to multiple locations."
        },
        answer: "D",
        explanation: "Susan Gowan ghi là các slide thuyết trình sẵn sàng để phân phối đến nhiều cửa hàng đối tác ('distribution to our many partner stores') tức là gửi tới nhiều địa điểm khác nhau. Chọn D."
      },
      {
        id: 173,
        text: "At 9:22 A.M., what does Ms. Lorenz imply when she writes, \"let's not overlook that\"?",
        options: {
          A: "More staff should attend a meeting.",
          B: "Information from the user studies is important.",
          C: "The presentation must run smoothly.",
          D: "Partner stores must be notified about an upcoming report."
        },
        answer: "B",
        explanation: "Cô Lorenz đang phản hồi ý kiến của Alan về việc cần thông tin từ nghiên cứu người dùng ('information from the user studies'). Do đó, câu 'đừng bỏ qua điều đó' ngụ ý rằng thông tin này rất quan trọng. Chọn B."
      },
      {
        id: 174,
        text: "Who most likely is Mr. Harven?",
        options: {
          A: "A store manager",
          B: "An amateur athlete",
          C: "A product researcher",
          D: "An advertising executive"
        },
        answer: "C",
        explanation: "Ông Matt Harven là người gửi báo cáo từ văn phòng nghiên cứu và phát triển ('research and development office') về nghiên cứu người dùng sử dụng tai nghe cho thể thao. Do đó ông ấy là một nhà nghiên cứu sản phẩm. Chọn C."
      },
      {
        id: 175,
        text: "When do the writers plan to meet to review a slide presentation?",
        options: {
          A: "On Monday",
          B: "On Wednesday",
          C: "On Thursday",
          D: "On Friday"
        },
        answer: "C",
        explanation: "Maggie Lorenz đề xuất gặp duyệt thử vào chiều thứ Năm ('Let's try for Thursday afternoon') và Alan Woodson đồng ý ('Fine by me'). Chọn C."
      }
    ]
  },
  {
    passageId: "P7_11",
    title: "Press Release and Review",
    type: "double",
    texts: [
      `Aparna Kothari, Media Contact\nKitchen Swifts\nakothari@kitchenswifts.com.au\n\nFOR IMMEDIATE RELEASE\n\nSYDNEY (4 June)—Kitchen Swifts and Chef Darius Cordero are joining together to give home cooks a new culinary experience. The award-winning chef is the owner of restaurants in both the Philippines and Australia, including the recently opened Enriqua's. He says his cooking reflects his Filipino heritage, which is a blend of many cultures.\n\n“I've designed these simplified recipes for Kitchen Swifts so that cooks at home can enjoy new and exciting flavours with ease,” he said. “While preparing and eating these meals, you can feel like you are travelling the world with me.”\n\nZahra Chambers, vice president of Kitchen Swifts, says she is pleased to work with Chef Cordero and to offer delicious new recipes to their customers. Kitchen Swifts supplies menus, recipes, and ingredients for two people, four people, or six people, including a range of vegetarian selections. Customers choose the most appropriate meal options, and then a box is delivered weekly. Current customers will see no price increase with the partnership. To find out more, visit the Kitchen Swifts Web site at www.kitchenswifts.com.au.`,
      `https://www.sydneyrestaurants.com.au\n\nA colleague arranged for us to eat at Enriqua's while I was at a conference in Sydney. It is usually fully booked for dinner; you may need to call months in advance for a table. We had a wonderful lunch there instead. Everything was delicious, and the bread and desserts are baked on-site! It was a worthwhile treat before I flew back to Hong Kong.\n\n—Meili Guan`
    ],
    questions: [
      {
        id: 176,
        text: "What is the purpose of the press release?",
        options: {
          A: "To promote the opening of a restaurant",
          B: "To announce a business partnership",
          C: "To introduce a travel program",
          D: "To congratulate an award recipient"
        },
        answer: "B",
        explanation: "Thông cáo báo chí thông báo rằng Kitchen Swifts và Đầu bếp Darius Cordero đang liên kết với nhau ('joining together') để mang đến trải nghiệm mới cho người nấu ăn tại nhà. Đây là sự hợp tác kinh doanh. Chọn B."
      },
      {
        id: 177,
        text: "In the press release, the word 'reflects' in paragraph 1, line 4, is closest in meaning to",
        options: {
          A: "results in",
          B: "changes",
          C: "shows",
          D: "thinks about"
        },
        answer: "C",
        explanation: "Trong ngữ cảnh 'his cooking reflects his Filipino heritage' (cách nấu ăn của ông thể hiện di sản Philippines của ông), từ 'reflects' gần nghĩa nhất với 'shows' (thể hiện, biểu lộ). Chọn C."
      },
      {
        id: 178,
        text: "What is indicated about Kitchen Swifts?",
        options: {
          A: "It raised its prices for all customers.",
          B: "It revised its delivery schedule.",
          C: "It offers several meal options.",
          D: "It has a new vice president."
        },
        answer: "C",
        explanation: "Văn bản ghi: 'Kitchen Swifts supplies menus... for two people, four people, or six people, including a range of vegetarian selections' (Kitchen Swifts cung cấp thực đơn... cho 2, 4, hoặc 6 người, bao gồm cả các lựa chọn ăn chay). Điều này có nghĩa là công ty cung cấp nhiều lựa chọn bữa ăn. Chọn C."
      },
      {
        id: 179,
        text: "What is most likely true about Ms. Guan?",
        options: {
          A: "She went to Mr. Cordero's restaurant.",
          B: "She recently went to Sydney for a vacation.",
          C: "She is a colleague of Ms. Chambers.",
          D: "She regularly orders from Kitchen Swifts."
        },
        answer: "A",
        explanation: "Ms. Guan đã ăn tại nhà hàng Enriqua's. Đoạn 1 cho thấy nhà hàng Enriqua's thuộc sở hữu của đầu bếp Darius Cordero ('The award-winning chef is the owner of... Enriqua's'). Do đó, cô ấy đã đến nhà hàng của ông Cordero. Chọn A."
      },
      {
        id: 180,
        text: "What did Ms. Guan suggest about Enriqua's in the review?",
        options: {
          A: "It has a limited lunch menu.",
          B: "It takes dinner reservations.",
          C: "It serves bread from a local bakery.",
          D: "It has a location in Hong Kong."
        },
        answer: "B",
        explanation: "Cô Guan nhận xét: 'It is usually fully booked for dinner; you may need to call months in advance for a table' (Thường kín chỗ vào bữa tối; bạn có thể cần gọi trước hàng tháng để đặt bàn) chứng tỏ nhà hàng có nhận đặt bàn bữa tối. Chọn B."
      }
    ]
  },
  {
    passageId: "P7_12",
    title: "E-mail and Ticket",
    type: "double",
    texts: [
      `To: laura.savard@orbitmail.scot\nFrom: cboyle@ceoleire.co.uk\nDate: 25 May\nSubject: RE: Some suggestions\n\nDear Ms. Savard,\n\nThank you for your kind offer to either pick up your online order from my shop or to pay extra for air or train transport. Neither arrangement is necessary, as I am happy to deliver your items to you in Stranraer myself. It so happens that my sister and her children live nearby in Kirkcolm. Before seeing them, I will drive my rental car to your house and hand deliver the items to you.\n\nAs you know, my merchandise is 100 percent handcrafted. If any damage occurs in transit, the repair turns into an expensive, time-consuming ordeal. Over the years, I've seen too much damage done by inattentive baggage handlers. My policy is to deliver items personally whenever feasible or hire a ground- or sea-based courier service I trust.\n\nI look forward to meeting you on 5 June. I expect to arrive at your house no later than 5 p.m.\n\nSincerely,\n\nConor Boyle\nCeoleire Classics`,
      `Northern Ireland Ferry Service\nDate of Issuance: 26 May\nPassenger Name: Conor Boyle\n\nDeparting Belfast: Friday, 5 June, 1:05 PM\nDocking at Cairnryan: Friday, 5 June, 3:20 PM\n\nBaggage: 1 suitcase (small), 2 instrument cases (1 mandolin, 1 guitar)\nVehicle transport: No\n\nAdult Standard Class: £55.00\n\nPlease arrive 30 minutes prior to departure.`
    ],
    questions: [
      {
        id: 181,
        text: "What is the purpose of the e-mail?",
        options: {
          A: "To finalize a plan",
          B: "To accept an invitation",
          C: "To promote a new service",
          D: "To request feedback on a policy"
        },
        answer: "A",
        explanation: "Email chốt phương án và thời gian giao hàng tận nhà cho cô Savard vào ngày 5/6 ('I look forward to meeting you on 5 June. I expect to arrive... no later than 5 p.m.'). Chọn A."
      },
      {
        id: 182,
        text: "Why will Mr. Boyle travel from Stranraer to Kirkcolm?",
        options: {
          A: "To make a delivery",
          B: "To attend a meeting",
          C: "To drop off a rental car",
          D: "To visit with family members"
        },
        answer: "D",
        explanation: "Ông Boyle nói Kirkcolm là nơi chị gái và các con của cô ấy sinh sống, ông sẽ đến thăm họ sau khi giao hàng xong ở Stranraer ('Before seeing them, I will drive... to your house'). Do đó mục đích đi Kirkcolm là thăm người thân. Chọn D."
      },
      {
        id: 183,
        text: "What is indicated in the e-mail?",
        options: {
          A: "Mr. Boyle's sister is a cofounder of Ceoleire Classics.",
          B: "Mr. Boyle has been disappointed by air- and train-freight companies.",
          C: "Ms. Savard has purchased items from Mr. Boyle in the past.",
          D: "Ms. Savard prefers a specific brand of luggage."
        },
        answer: "B",
        explanation: "Ông Boyle phàn nàn: 'I've seen too much damage done by inattentive baggage handlers' (Tôi đã chứng kiến quá nhiều thiệt hại gây ra bởi nhân viên bốc xếp hành lý thiếu cẩn thận) trên tàu hỏa hoặc máy bay, nên ông tránh sử dụng các hình thức này. Chọn B."
      },
      {
        id: 184,
        text: "What is most likely true about Ms. Savard?",
        options: {
          A: "She often travels for her job.",
          B: "She paid extra to have items hand delivered.",
          C: "She recently purchased musical instruments.",
          D: "She will meet Mr. Boyle at the rental car office."
        },
        answer: "C",
        explanation: "Vé đi phà của ông Conor Boyle có mang theo '2 instrument cases (1 mandolin, 1 guitar)'. Do cửa hàng của ông là Ceoleire Classics chuyên đồ thủ công nhạc cụ, nên Ms. Savard chính là người mua nhạc cụ này. Chọn C."
      },
      {
        id: 185,
        text: "How is Mr. Boyle traveling to Cairnryan on June 5?",
        options: {
          A: "By car",
          B: "By train",
          C: "By boat",
          D: "By plane"
        },
        answer: "C",
        explanation: "Tấm vé là của hãng phà 'Northern Ireland Ferry Service' đi từ Belfast đến Cairnryan. Phà là phương tiện đường thủy (boat). Chọn C."
      }
    ]
  },
  {
    passageId: "P7_13",
    title: "Advertisement, Forum Posting, and Outline",
    type: "triple",
    texts: [
      `Train to Achieve (TTA)—Our classes prepare you to succeed!\nProfiled in the latest Business Directions Nigeria newsletter, Train to Achieve (TTA) is one of the most innovative training providers in West Africa. By offering our classes entirely in online format, we bring the classroom to your home. All classes include individualized instruction and are taught by recognized professionals in their respective fields. Upon successful completion of a class, you will receive an official Certificate of Training, a valuable addition to any résumé. For a complete list of class fees and schedules, visit our Web site at www.traintoachieve.org.ng. The following are some of our most popular classes.\n\nIntroduction to Social Media Marketing (TTA1504): Taught by marketing consultant Marcus Akpan, the class equips you with the know-how to promote your business online.\n\nBecome a Successful Freelance Writer (TTA3283): Business writer Brenda Akande gives you expert guidance on how to hone your writing skills and sell your writing services.\n\nStarting an Internet Radio Station (TTA7629): Online radio host Natalie Kabiru shows you how to appeal to your target market and gives practical tips for setting up your broadcast service.\n\nBasics of Graphic Design (TTA7633): Veteran graphic designer Doug Umaru helps you acquire the basic skills needed to start a graphic design business.`,
      `Discussion forum for students enrolled in Train to Achieve Class TTA1504\nPosted on: 21 May, 9:41 A.M.      Posted by: Joseph Egbe      Subject: Presentations\n\nViewing the list of students enrolled in this class, I remembered chatting with some of you on the forum for January's poster design class. I look forward to sharing our learning experiences again for this class. Yesterday I was the second student to meet with Mr. Akpan for an individual videoconference about my business. I own a food truck from which I sell baked goods, and when I shared with Mr. Akpan the outline for my Web site, he suggested that I add a section with vivid images of all my baked goods. It was helpful advice.`,
      `Egbe's Bakery—Unique baked-in flavours in every bite!\n* Section 1: Explore our menu and price list\n* Section 2: Browse photos of our delicious treats\n* Section 3: Learn about our catering services\n* Section 4: View lists of ingredients`
    ],
    questions: [
      {
        id: 186,
        text: "What is indicated about TTA?",
        options: {
          A: "It was founded by a graphic designer.",
          B: "It publishes its own online newsletter.",
          C: "It offers classes led by industry professionals.",
          D: "It has classroom facilities in cities across West Africa."
        },
        answer: "C",
        explanation: "Quảng cáo của TTA ghi rõ các lớp học 'are taught by recognized professionals in their respective fields' (được giảng dạy bởi các chuyên gia được công nhận trong lĩnh vực tương ứng). Chọn C."
      },
      {
        id: 187,
        text: "According to the advertisement, what does TTA provide to students who finish a class?",
        options: {
          A: "A résumé-writing workshop",
          B: "A discount on a follow-up class",
          C: "A list of current job postings",
          D: "A certification document"
        },
        answer: "D",
        explanation: "Học viên hoàn thành sẽ nhận được 'an official Certificate of Training' (chứng chỉ đào tạo chính thức). Chọn D."
      },
      {
        id: 188,
        text: "What is most likely true about Mr. Egbe?",
        options: {
          A: "He helped design a discussion forum.",
          B: "He has previously taken a TTA class.",
          C: "He develops videoconferencing software.",
          D: "He recently sold a bakery food truck."
        },
        answer: "B",
        explanation: "Mr. Egbe viết trên diễn đàn: 'I remembered chatting with some of you on the forum for January's poster design class' (Tôi nhớ đã trò chuyện với một số bạn trên diễn đàn của lớp học thiết kế poster hồi tháng Giêng) chứng tỏ ông ấy đã học một lớp TTA trước đó. Chọn B."
      },
      {
        id: 189,
        text: "What TTA class is Mr. Egbe enrolled in?",
        options: {
          A: "Introduction to Social Media Marketing",
          B: "Become a Successful Freelance Writer",
          C: "Starting an Internet Radio Station",
          D: "Basics of Graphic Design"
        },
        answer: "A",
        explanation: "Diễn đàn dành cho sinh viên đăng ký lớp 'Class TTA1504'. Trong quảng cáo, mã TTA1504 là lớp 'Introduction to Social Media Marketing'. Chọn A."
      },
      {
        id: 190,
        text: "What section did Mr. Egbe most likely add to the outline after speaking with Mr. Akpan?",
        options: {
          A: "Section 1",
          B: "Section 2",
          C: "Section 3",
          D: "Section 4"
        },
        answer: "B",
        explanation: "Giáo viên Marcus Akpan khuyên Mr. Egbe 'add a section with vivid images of all my baked goods' (thêm một phần chứa hình ảnh sinh động của các món bánh nướng). Trong bản phác thảo outline của tiệm bánh, Section 2 là 'Browse photos of our delicious treats' chứa các bức ảnh này. Chọn B."
      }
    ]
  },
  {
    passageId: "P7_14",
    title: "Article, Review, and E-mail",
    type: "triple",
    texts: [
      `Caribbean Flavours Abound\nBy Rebecca Roats\n\nNOTTINGHAM (1 August)—Orange Bay Kitchen has been serving up an infusion of Jamaican flavours in a laid-back Caribbean atmosphere for six months now. Managed by Keron Deslandes, the 150-seat restaurant is an aromatic jewel amid the bustling shops and eateries in Wester Square. The servers are always happy to help diners select from the variety of delights on the extensive menu, which includes curried goat, oxtail soup, and red snapper. The restaurant is most famous for its jerk chicken. Marinated for 24 hours prior to grilling and served with sides of stewed cabbage and coconut rice, the dish is a good deal at £12.\n\nIf you stop in on any Friday night between 7 and 11 P.M., you will enjoy live reggae music.`,
      `https://www.dinerreviews.co.uk/orangebaykitchen\n\nPosted on 22 August by Tamika Peterkin, tpeterkin@sunmail.co.uk\n\nOrange Bay Kitchen: 2/5 Stars\n\nAfter reading a glowing article about Orange Bay Kitchen by Rebecca Roats, I was eager to give this place a try. My husband and I arrived there at 7 P.M. yesterday, keen to enjoy live music with our dinner. Unfortunately, the band's performance that night had been cancelled. Undeterred, we stayed and both ordered the jerk chicken. While the chicken's smoky flavour was outstanding, the stewed cabbage was lacking in flavour. Also, the portion size was smaller than we had anticipated, so we ordered another appetiser to avoid going home hungry. The head chef came out to apologise and was extremely nice, but we will probably not go back anytime soon.`,
      `To: tpeterkin@sunmail.co.uk\nFrom: vsmith@orangebaykitchen.co.uk\nDate: 24 August\nSubject: Your review\nAttachment: @0258\n\nDear Ms. Peterkin,\n\nThank you for visiting Orange Bay Kitchen and leaving a review. Our manager, Keron Deslandes, told me more about your visit and our failure to live up to your expectations that evening. Please accept the attached £20 gift certificate; I do hope that you will give us another try.\n\nDuring your visit, our band had an equipment malfunction, which is what led to the last-minute cancellation. However, the band will be back performing weekly beginning in September. Also, I want you to know that Head Chef Adio Brown has changed the spices he uses in the stewed cabbage. I am sure you will find them delightful.\n\nSincerely,\n\nVea Smith, Owner`
    ],
    questions: [
      {
        id: 191,
        text: "What does the article mention about Orange Bay Kitchen?",
        options: {
          A: "It is currently hiring servers.",
          B: "It is located on a quiet street.",
          C: "It has another location in Jamaica.",
          D: "It opened six months ago."
        },
        answer: "D",
        explanation: "Bài viết ngày 1 tháng 8 cho biết nhà hàng đã phục vụ được 6 tháng ('serving up... for six months now'), tức là nhà hàng mở cửa cách đây 6 tháng. Chọn D."
      },
      {
        id: 192,
        text: "According to the article, what is the most popular menu item at Orange Bay Kitchen?",
        options: {
          A: "Red snapper",
          B: "Oxtail soup",
          C: "Jerk chicken",
          D: "Curried goat"
        },
        answer: "C",
        explanation: "Bài báo ghi: 'The restaurant is most famous for its jerk chicken' (Nhà hàng nổi tiếng nhất với món gà jerk chicken). Chọn C."
      },
      {
        id: 193,
        text: "What is suggested about Ms. Peterkin's visit to Orange Bay Kitchen?",
        options: {
          A: "She was there on a Friday.",
          B: "She dined alone.",
          C: "She requested extra rice.",
          D: "She ordered dessert."
        },
        answer: "A",
        explanation: "Cô Peterkin cho biết đã đến ăn tối để nghe nhạc sống ('keen to enjoy live music with our dinner'). Theo bài báo, nhạc sống chỉ diễn ra vào tối thứ Sáu hàng tuần ('on any Friday night'). Do đó cô ấy đã đến nhà hàng vào ngày thứ Sáu. Chọn A."
      },
      {
        id: 194,
        text: "What is a purpose of the e-mail?",
        options: {
          A: "To answer a question",
          B: "To offer an apology",
          C: "To ask for feedback",
          D: "To confirm a reservation"
        },
        answer: "B",
        explanation: "Email được gửi bởi chủ cửa hàng nhằm cảm ơn, giải thích về sự cố và đưa ra lời xin lỗi đi kèm voucher trị giá £20 ('Please accept...'). Chọn B."
      },
      {
        id: 195,
        text: "Whom did Ms. Peterkin meet at Orange Bay Kitchen?",
        options: {
          A: "Ms. Roats",
          B: "Mr. Deslandes",
          C: "Mr. Brown",
          D: "Ms. Smith"
        },
        answer: "C",
        explanation: "Đánh giá của cô Peterkin cho biết cô đã gặp bếp trưởng ('The head chef came out to apologise'). Trong email của chủ tiệm có ghi rõ tên bếp trưởng là Adio Brown ('Head Chef Adio Brown'). Do đó cô đã gặp ông Brown. Chọn C."
      }
    ]
  },
  {
    passageId: "P7_15",
    title: "Invoice, Notice, and E-mail",
    type: "triple",
    texts: [
      `Orbys Distributors\n\nClient: Green Canyon  Date: June 10\nAccount: 4352-0\n\nItem                               Price\nGarden soil, 33 cubic meters       $1,170.00\nCrushed gravel, 30 metric tons      1,710.00\nDecorative stone, 20 metric tons    1,140.00\n70 paving stones, .6 x .6 meters      630.00\nSubtotal                            4,650.00\n\nDiscount (10%)                        465.00\nDelivery charge                       350.00\nGrand Total                         4,535.00\n\nPlease see the enclosed notice outlining important changes to your billing.`,
      `Orbys Distributors\n\nTo our valued customers:\nOur current invoicing system has been in use since Orbys Distributors was founded over twenty years ago. As a much-needed upgrade, we are switching to electronic invoicing. Starting August 1, invoices will be generated automatically each month and will be sent to the e-mail address associated with your company's account.\n\nRest assured that our long-standing incentives remain in place:\n\n* A 10% discount for orders of more than $4,000\n* A 20% discount for charitable organizations\n* Free deliveries to locations within 5 miles of one of our supply centers\n* Free samples for members of our Frequent Buyer Club\n\nMore information about our transition to electronic invoicing is available on our Web site. Thank you for your support. Orbys Distributors appreciates your business.`,
      `To: Mary Peterson, Billing Department\nFrom: Tanvir Singh, Account Manager\nDate: September 12\nSubject: Account 1012-4\n\nHello Mary,\n\nI received a query today from William Tesoriero at Tesoriero Remodeling. His monthly invoice for August never arrived.\n\nAs you know, Mr. Tesoriero was one of our very first customers. Since we first opened for business, he has made purchases from us on a regular basis. He is also a member of the Frequent Buyer Club. This is a customer we absolutely do not want to lose. I explained to him that the rollout of our electronic invoicing system did not go as smoothly as we had hoped and promised that this would not happen again.\n\nI would appreciate it if you could please investigate the problem without delay and send the invoice for August to Mr. Tesoriero.\n\nTanvir`
    ],
    questions: [
      {
        id: 196,
        text: "What does the invoice suggest about Green Canyon?",
        options: {
          A: "It does landscaping projects.",
          B: "It designs highways.",
          C: "It repairs old houses.",
          D: "It operates a farm."
        },
        answer: "A",
        explanation: "Hóa đơn của Green Canyon bao gồm đất làm vườn ('Garden soil'), đá nghiền ('Crushed gravel'), đá trang trí ('Decorative stone') và đá lát nền ('paving stones'). Đây là những vật liệu dùng cho các dự án thiết kế cảnh quan/làm vườn. Chọn A."
      },
      {
        id: 197,
        text: "Why most likely did Green Canyon receive a discount on its order dated June 10?",
        options: {
          A: "It is a charitable organization.",
          B: "It belongs to the Frequent Buyer Club.",
          C: "It spent more than $4,000 on merchandise.",
          D: "It is located near an Orbys Distributors supply center."
        },
        answer: "C",
        explanation: "Hóa đơn ngày 10/6 của Green Canyon có Subtotal là $4,650.00 (lớn hơn $4,000). Theo thông báo, hãng có ưu đãi chiết khấu 10% cho các đơn hàng trị giá hơn $4,000 ('A 10% discount for orders of more than $4,000'). Chọn C."
      },
      {
        id: 198,
        text: "According to the notice, what is changing at Orbys Distributors?",
        options: {
          A: "Its e-mail address",
          B: "Its list of incentives",
          C: "Its invoicing system",
          D: "Its delivery schedule"
        },
        answer: "C",
        explanation: "Thông báo nêu rõ: 'we are switching to electronic invoicing' (chúng tôi đang chuyển sang xuất hóa đơn điện tử) để nâng cấp hệ thống hóa đơn cũ đã dùng hơn 20 năm. Chọn C."
      },
      {
        id: 199,
        text: "What is suggested about Mr. Tesoriero?",
        options: {
          A: "He asked to meet with Mr. Singh.",
          B: "He is interested in employment at Orbys Distributors.",
          C: "He recently placed an order for some construction machinery.",
          D: "He has been a customer of Orbys Distributors for about twenty years."
        },
        answer: "D",
        explanation: "Email cho biết: 'Mr. Tesoriero was one of our very first customers. Since we first opened for business...'. Thông báo cho biết công ty thành lập được hơn 20 năm ('founded over twenty years ago'). Do đó, ông Tesoriero đã là khách hàng của hãng khoảng 20 năm. Chọn D."
      },
      {
        id: 200,
        text: "What does Mr. Singh ask Ms. Peterson to do?",
        options: {
          A: "Make a bill payment",
          B: "Solve a problem",
          C: "Confirm an order",
          D: "Update an account number"
        },
        answer: "B",
        explanation: "Ông Singh yêu cầu cô Peterson điều tra lý do tại sao hóa đơn tháng 8 của ông Tesoriero chưa được gửi và gửi lại hóa đơn đó ('investigate the problem without delay and send the invoice...'). Đây là việc giải quyết một vấn đề/sự cố. Chọn B."
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
