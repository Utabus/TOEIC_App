const fs = require('fs');

// ─── PART 6: 4 passages full (Q131-146) ───
const part6Passages = [
  {
    passageId:"P6_1", title:"E-mail (Dellwyn Home Store)", type:"single",
    texts:[`To: Myung-Hee Hahn\nFrom: Dellwyn Home Store\nDate: January 15\nSubject: Order update\n\nDear Ms. Hahn,\n\nYour ___(131)___ order of a red oak dining table and six matching chairs arrived at our store this morning. We would now like to arrange for the delivery of the ___(132)___. Please call us at 517-555-0188 and ask ___(133)___ to Coleman Cobb, our delivery manager. ___(134)___.\n\nCustomer Service, Dellwyn Home Store`],
    questions:[
      {id:131,options:{A:"specially",B:"specialize",C:"special",D:"specializing"},answer:"C",
       explanation:'"Special order" = đơn hàng đặc biệt. Cần tính từ trước danh từ "order". "Specially" (adv), "specialize" (V), "specializing" (V-ing) sai từ loại.'},
      {id:132,options:{A:"furniture",B:"appliances",C:"refund",D:"tools"},answer:"A",
       explanation:'Sản phẩm là bàn ăn + ghế → "furniture" (đồ nội thất). "Appliances" = thiết bị điện. "Refund" = hoàn tiền. "Tools" = dụng cụ.'},
      {id:133,options:{A:"speak",B:"spoken",C:"is speaking",D:"to speak"},answer:"D",
       explanation:'"Ask to speak to someone" = yêu cầu nói chuyện với ai (cụm cố định). Cần infinitive "to speak" sau "ask".'},
      {id:134,options:{A:"He can schedule a convenient time.",B:"He began working here yesterday.",C:"He can meet you at 11:00 A.M.",D:"He recently moved to Dellwyn."},answer:"A",
       explanation:'Câu cuối giải thích lý do gọi cho Coleman Cobb → (A) "Ông ấy có thể sắp xếp thời gian thuận tiện" để giao hàng. Phù hợp nhất với ngữ cảnh.'}
    ]
  },
  {
    passageId:"P6_2", title:"Advertisement (Keep Cool Service Contractors)", type:"single",
    texts:[`Keep Cool Service Contractors:\n67 Main Road, Edinburgh Village\nChaguanas, Trinidad and Tobago\n\nKeep Cool Service Contractors can bring you peace of mind. As part of an annual contract, we will service your air-conditioning system, ensuring your ___(135)___ and comfort. This includes inspecting the system, making repairs as needed, and professionally cleaning your air ducts. ___(136)___, if necessary, we can replace your old air-conditioning system with a new, cost-efficient one.\n\nOur workers are highly qualified licensed technicians who stay up-to-date with ongoing training. ___(137)___. We promise you fair prices and professional work, ___(138)___ by our Keep Cool guarantee.\n\nCall 1-868-555-0129 for a free quote today.`],
    questions:[
      {id:135,options:{A:"safe",B:"safely",C:"safest",D:"safety"},answer:"D",
       explanation:'"ensuring your safety and comfort" — cần danh từ song song với "comfort". "Safety" (N) đúng. "Safe" (adj), "safely" (adv), "safest" (superlative) sai từ loại.'},
      {id:136,options:{A:"On one hand",B:"Nonetheless",C:"Furthermore",D:"And yet"},answer:"C",
       explanation:'"Furthermore" = hơn nữa — bổ sung thêm dịch vụ (thay hệ thống nếu cần). "On one hand" cần "on the other hand". "Nonetheless"/"And yet" mang nghĩa tương phản.'},
      {id:137,options:{A:"Take advantage of dozens of useful online tools.",B:"Moreover, the air conditioner you chose is very popular.",C:"Plus, they are friendly, clean, and knowledgeable.",D:"Thank you for visiting our contractor showroom."},answer:"C",
       explanation:'Câu trước mô tả công nhân có chuyên môn cao → (C) tiếp tục ca ngợi đội ngũ: "thân thiện, gọn gàng, hiểu biết". Các đáp án khác lạc đề.'},
      {id:138,options:{A:"backed",B:"backs",C:"backing",D:"back"},answer:"A",
       explanation:'"backed by our guarantee" = được bảo đảm bởi cam kết. "Backed" là past participle trong participial phrase. "Backs" (V số ít), "backing" (V-ing) sai cấu trúc.'}
    ]
  },
  {
    passageId:"P6_3", title:"E-mail (Light Idea – Price Increase)", type:"single",
    texts:[`To: All Customers\nFrom: asquires@lightidea.com\nDate: March 6\nSubject: Information\n\nDear Light Idea Customers,\n\nLight Idea is enacting a price increase on select energy-efficient products, effective April 17. Specific product pricing will ___(139)___. Please contact your sales representative for details and questions.\n\nThe last date for ordering at current prices is April 16. All orders ___(140)___ after this date will follow the new price list. ___(141)___. Customers will be able to find this on our Web site.\n\nWe will continue to provide quality products and ___(142)___ service to our valued customers. Thank you for your business.\n\nSincerely,\nArvin Squires\nHead of Sales, Light Idea`],
    questions:[
      {id:139,options:{A:"agree",B:"vary",C:"wait",D:"decline"},answer:"B",
       explanation:'"Specific product pricing will vary" = giá từng sản phẩm sẽ khác nhau. "Vary" phù hợp khi nói về nhiều mức giá. "Agree", "wait", "decline" không hợp ngữ cảnh.'},
      {id:140,options:{A:"receiving",B:"having received",C:"received",D:"will be received"},answer:"C",
       explanation:'"All orders received after this date" — "received" là past participle rút gọn mệnh đề quan hệ bị động (orders that are received). Các đáp án khác sai cấu trúc.'},
      {id:141,options:{A:"The updated price list will be available on March 20.",B:"We apologize for this inconvenience.",C:"Your orders will be shipped after April 17.",D:"We are increasing prices because of rising costs."},answer:"A",
       explanation:'Câu sau nói "find this on our Web site" — "this" cần referent. (A) giới thiệu bảng giá mới → "this" = bảng giá đó. Logic nhất với câu tiếp theo.'},
      {id:142,options:{A:"exceptionally",B:"exception",C:"exceptional",D:"exceptionalism"},answer:"C",
       explanation:'Cần tính từ trước "service". "Exceptional service" = dịch vụ xuất sắc. "Exceptionally" (adv), "exception"/"exceptionalism" (N) sai từ loại.'}
    ]
  },
  {
    passageId:"P6_4", title:"E-mail (Okim Jewelry – Good News)", type:"single",
    texts:[`To: Jang-Ho Kwon <jkwon@newart.nz>\nFrom: Kenneth Okim <k.okim@okimjewelry.nz>\nSubject: Good news\nDate: 30 August\n\nDear Jang-Ho,\n\nThank you for the shipment last month of 80 units of your jewelry pieces. I am happy to report that they have been selling very well in my shop. My ___(143)___ love the colourful designs as well as the quality of your workmanship. ___(144)___.\n\nI would like to increase the number of units I order from you. Would you be able to ___(145)___ my order for the September shipment?\n\nFinally, I would like to discuss the possibility of featuring your work exclusively in my store. I believe that I could reach your target audience best and that the agreement would serve ___(146)___ both very well. I look forward to hearing from you.\n\nBest regards,\nKenneth Okim\nOkim Jewelry`],
    questions:[
      {id:143,options:{A:"patients",B:"students",C:"customers",D:"teammates"},answer:"C",
       explanation:'Kenneth Okim là chủ cửa hàng trang sức → người mua hàng là "customers". "Patients" (bệnh nhân), "students", "teammates" không hợp ngữ cảnh.'},
      {id:144,options:{A:"If you need more time, please let me know.",B:"Unfortunately, I do not have adequate shelf space at this time.",C:"I would like to show you some of my own designs.",D:"The reasonable prices also make your pieces a great value."},answer:"D",
       explanation:'Câu trước khen thiết kế và tay nghề → (D) tiếp tục khen: "Giá hợp lý cũng làm sản phẩm rất đáng giá". Phù hợp logic tích cực của đoạn.'},
      {id:145,options:{A:"include",B:"double",C:"repeat",D:"insure"},answer:"B",
       explanation:'"double my order" = tăng gấp đôi đơn hàng. Người viết muốn tăng số lượng → "double" phù hợp nhất. "Include", "repeat", "insure" không diễn đạt ý tăng số lượng.'},
      {id:146,options:{A:"us",B:"you",C:"we",D:"these"},answer:"A",
       explanation:'"serve us both" = có lợi cho cả hai chúng ta. "Us" là tân ngữ (object) sau "serve". "We" là chủ ngữ. "You" (1 người), "these" (vật) sai nghĩa.'}
    ]
  }
];

// ─── PART 7: passages (bổ sung dần theo ảnh) ───
const part7Passages = [
  {
    passageId:"P7_1", title:"Invitation – Focus Your Social Media Presence", type:"single",
    texts:[`Focus Your Social Media Presence\n\nFor small-business owners, it can be a challenge to stand out in a competitive social media environment. Successfully reaching your target market involves knowing how and where to promote your products in a way that is effective and memorable. The Savan Business Center offers support for business owners who need a boost in doing just that. For over 50 years, we've been helping entrepreneurs grow their sales through insight of current industry trends and understanding of our clients' unique needs.\n\nLet us help you get more organized in creating effective and far-reaching social media content. Our latest webinar, Focus Your Social Media Presence, will cover topics related to making your business stand out. You can sign up on our event Web page.\n\nDate: February 5\nTime: 10:00 A.M. to 11:00 A.M.\nEvent Web page: https://www.savanbusinesscenter.com/socialmedia`],
    questions:[
      {id:147,text:"What is true about the Savan Business Center?",
       options:{A:"It works with small businesses.",B:"It publishes a weekly newsletter.",C:"It recently launched a new Web site.",D:"It is seeking suggestions for webinar topics."},
       answer:"A",explanation:'Đoạn mở đầu "For small-business owners" và "offers support for business owners" → (A) đúng. (B) Không đề cập newsletter. (C) Không đề cập website mới. (D) Không đề cập gợi ý chủ đề.'},
      {id:148,text:"What is indicated about the webinar?",
       options:{A:"It begins at 11:00 A.M.",B:"It features advice on creating promotional content.",C:"It is being offered every month.",D:"It requires a small fee to attend."},
       answer:"B",explanation:'"creating effective and far-reaching social media content" + "cover topics related to making your business stand out" → (B) đúng. (A) Sai — bắt đầu 10:00 A.M. (C) Không đề cập hàng tháng. (D) Không đề cập phí.'}
    ]
  },
  {
    passageId:"P7_2", title:"Announcement – Dine Out Darville Is Back!", type:"single",
    texts:[`Dine Out Darville Is Back!\n\nDine Out Darville, which runs this year from June 22 to 28, is the perfect chance to try a restaurant in Darville for the first time or revisit one of your favorite restaurants in town. You might even visit multiple restaurants during the weeklong event! Twelve popular restaurants will offer special four-course dinners—including a cup of soup, a salad, a main course, and a dessert—all for a reduced price of $30. Reservations are highly recommended. Dine Out Darville welcomes hundreds of locals and tourists each year, and you do not want to miss your opportunity to get a great meal at a great price.\n\nVisit www.darvillebusinesscouncil.org/dineout for a list of participating restaurants.`],
    questions:[
      {id:149,text:"What is mentioned about Dine Out Darville?",
       options:{A:"It lasts for one week.",B:"It is held in a different location each year.",C:"It is being held for the first time.",D:"It includes both lunch and dinner."},
       answer:"A",explanation:'Sự kiện diễn ra từ ngày 22 đến 28 tháng 6, được mô tả là "weeklong event" (kéo dài một tuần) → (A) đúng.'},
      {id:150,text:"What is NOT included in the reduced-price meals?",
       options:{A:"A cup of soup",B:"A salad",C:"A dessert",D:"A beverage"},
       answer:"D",explanation:'Bữa ăn giảm giá $30 gồm có soup, salad, món chính và tráng miệng. Đồ uống (beverage) không được liệt kê trong danh sách này.'}
    ]
  },
  {
    passageId:"P7_3", title:"Article – Rainsy To Move Headquarters", type:"single",
    texts:[`Rainsy To Move Headquarters\n\nDADE (July 11)—Rainsy LLC announced yesterday that it is moving its headquarters to Dade.\nA data storage and analytics firm currently based in Salt Creek, Rainsy has clients that include some of the country's largest credit card companies, online retailers, and software providers. Rainsy helps these businesses manage and understand their customer data.\nRainsy is not planning to close its current offices in Salt Creek. However, the Dade location will become its new base of operations, as several members of its executive team will work there. The company's chief executive officer and chief financial officer will relocate to Dade along with approximately 50 percent of the company's workforce.\nThe office of Rainsy's chief technology officer will remain in Salt Creek, as will the account management team. The company's new Dade offices are located at 12 Glacier Parkway.`],
    questions:[
      {id:151,text:"What does Rainsy LLC do?",
       options:{A:"It stores and analyzes consumer information.",B:"It sells technology products online.",C:"It processes credit card payments for retailers.",D:"It develops computer software programs."},
       answer:"A",explanation:'Rainsy LLC là một công ty lưu trữ và phân tích dữ liệu (data storage and analytics firm) giúp doanh nghiệp quản lý và hiểu dữ liệu khách hàng → (A) đúng.'},
      {id:152,text:"Who will be based in Dade?",
       options:{A:"Rainsy's chief technology officer",B:"The entire Rainsy executive team",C:"About half of Rainsy's employees",D:"The Rainsy account management team"},
       answer:"C",explanation:'Bài báo viết rằng khoảng 50% lực lượng lao động của công ty (approximately 50 percent of the company\'s workforce) sẽ chuyển đến Dade.'}
    ]
  },
  {
    passageId:"P7_4", title:"Text-Message Chain – Biz Plus Shopping", type:"single",
    texts:[`Michael Liu (9:43 A.M.)\nHi, Jana. I'm at Biz Plus. The paper you need is out of stock until next week. Will another color work?\n\nJana Bhat (9:45 A.M.)\nWhat are the options?\n\nMichael Liu (9:46 A.M.)\nThey have yellow, green, and pink in the brand that you prefer.\n\nJana Bhat (9:47 A.M.)\nI really need blue. Are there other brands of blue printer paper?\n\nMichael Liu (9:48 A.M.)\nYes, but they're all a darker blue. They also cost more.\n\nJana Bhat (9:49 A.M.)\nOK, forget it. I'll place an order online.`],
    questions:[
      {id:153,text:"What is suggested about the paper Mr. Liu is shopping for?",
       options:{A:"It is light blue.",B:"It is expensive.",C:"It is sold exclusively at Biz Plus.",D:"It has been discontinued."},
       answer:"A",explanation:'Jana nói cô ấy thực sự cần màu xanh dương, và Michael bảo các hãng khác chỉ có màu xanh đậm hơn (darker blue) → loại Jana cần ban đầu là xanh dương nhạt (light blue) → (A) đúng.'},
      {id:154,text:"At 9:49 A.M., what does Ms. Bhat most likely mean when she writes, 'OK, forget it'?",
       options:{A:"She wants to check her budget.",B:"She thinks Mr. Liu should not purchase paper at Biz Plus.",C:"She believes Mr. Liu should not place an order this week.",D:"She plans to cancel her order."},
       answer:"B",explanation:'Jana Bhat nói "OK, forget it. I\'ll place an order online" (Thôi bỏ đi, tôi sẽ tự đặt mua trực tuyến) tức là cô ấy không muốn Michael mua giấy ở Biz Plus nữa.'}
    ]
  },
  {
    passageId:"P7_5", title:"Letter – SFMA Courses", type:"single",
    texts:[`20 May\n\nNeil Croft, Director\nQueensland Libraries\n13 Hummocky Road\nBrisbane QLD 4003\n\nDear Mr. Croft,\n\n— [1] —. I have read your inquiry about offering financial management courses at libraries across Queensland. The Society for Financial Management Advisors (SFMA) welcomes the opportunity to partner with the libraries to make basic financial management information more widely available.\n\nYou proposed that SFMA members could lead introductory courses at several library branches. — [2] —. SFMA members have offered similar courses to recent graduates, people changing careers, and first-time investors in the past.\n\n— [3] —. If you have a list of library branches that would host the first series of events, I can suggest facilitators who work near those libraries or would be willing to travel to them. Do you have a general profile of the expected attendees? — [4] —. That information would help us tailor the courses to audience needs and interests.\n\nI look forward to meeting with you to develop a plan. Please contact me by telephone at 07 5550 1344 to set up a time to discuss the courses.\n\nSincerely,\nRoberta Otney\nChairperson, Society for Financial Management Advisors`],
    questions:[
      {id:155,text:"Why did Ms. Otney write the letter?",
       options:{A:"To welcome a new library director",B:"To register for an SFMA finance course",C:"To confirm some educational credentials",D:"To reply to a question from Mr. Croft"},
       answer:"D",explanation:'Roberta Otney viết thư để trả lời thư hỏi thăm/yêu cầu trước đó của ông Croft ("I have read your inquiry...") về việc mở các khóa học quản lý tài chính ở thư viện.'},
      {id:156,text:"What is one thing Ms. Otney requested?",
       options:{A:"A library membership",B:"A list of course instructors",C:"The locations of some libraries",D:"Mr. Croft's telephone number"},
       answer:"C",explanation:'Bà Otney yêu cầu danh sách các chi nhánh thư viện sẽ tổ chức sự kiện ("If you have a list of library branches...") để đề xuất người hướng dẫn phù hợp ở gần đó.'},
      {id:157,text:"In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"This is something I would be happy to arrange.\"",
       options:{A:"[1]",B:"[2]",C:"[3]",D:"[4]"},
       answer:"B",explanation:'Câu "This is something I would be happy to arrange." (Đây là việc tôi rất sẵn lòng sắp xếp) phù hợp nhất ở vị trí [2], ngay sau đề xuất của ông Croft về việc nhờ thành viên SFMA hướng dẫn các khóa học tại các chi nhánh thư viện.'}
    ]
  },
  {
    passageId:"P7_6", title:"Advertisement – Claro Vision Offer", type:"single",
    texts:[`Claro Vision\nThe difference is clear.\n\nTake advantage of our limited-time offer:\n50% off all eyeglass frames through 30 September\n\nOther advantages available today and every day:\n• Free eyeglass fittings and adjustments\n• Money-back guarantee if you are not completely satisfied\n• More than 500 locations in shopping malls throughout Canada\n• Low-cost vision checkups by licensed opticians\n\nTo find a store near you, visit www.clarovision.ca/locations, or call 416-555-0122 today!`],
    questions:[
      {id:158,text:"Why most likely was the advertisement created?",
       options:{A:"To draw attention to an underused professional service",B:"To publicize the benefits of a warranty policy",C:"To announce the opening of new store locations",D:"To promote a temporary price discount"},
       answer:"D",explanation:'Quảng cáo tập trung giới thiệu ưu đãi giảm giá 50% gọng kính đến hết ngày 30 tháng 9 ("50% off all eyeglass frames through 30 September").'},
      {id:159,text:"What is stated about Claro Vision stores?",
       options:{A:"They are larger than competitors' stores.",B:"They accept all major credit cards.",C:"They are located next to shopping malls.",D:"They provide eyeglass fittings at no cost."},
       answer:"D",explanation:'Quảng cáo ghi rõ "Free eyeglass fittings and adjustments" (Đo lắp và điều chỉnh kính miễn phí) nghĩa là không mất tiền (at no cost) → (D) đúng.'},
      {id:160,text:"What is stated about vision checkups?",
       options:{A:"They are completed by a partner company.",B:"They are performed by a certified professional.",C:"They should be done every ten months.",D:"They are offered on a limited number of days."},
       answer:"B",explanation:'Các buổi kiểm tra thị lực được thực hiện bởi "licensed opticians" (chuyên gia khúc xạ được cấp phép/chứng chỉ hành nghề) → (B) đúng.'}
    ]
  },
  {
    passageId:"P7_7", title:"Letter – Lease End Reminder", type:"single",
    texts:[`Rossery Building Corporation\n2710 South Exmouth Drive\nSingapore 188509\n\n1 April\n\nElizabeth Balakrishnan\nBala Home Furnishings\n416 Holliton Drive C2\nSingapore 793801\n\nDear Ms. Balakrishnan,\n\nThis is a reminder that the one-year lease for your space will end on 30 April. Please contact my office at 1555 0124 to make an appointment to renew your lease. There will be a small increase in rent and fees because of rising operating costs.\n\nUpdated charges upon lease renewal:\nMonthly rental: S$1,800.00\nParking space fee: S$50.00\nCleaning service: S$10.00\nSecurity fee: S$35.00\nTotal monthly charge: S$1,895.00\n\nIf you are not renewing your lease, please notify our office by 15 April. Plan to vacate the property by 5 P.M. on 30 April. There will be an inspection of the property, and there may be charges for repairs or damages beyond normal usage.\n\nKind regards,\nAlexis Tan\nAlexis Tan`],
    questions:[
      {id:161,text:"What is the purpose of the letter?",
       options:{A:"To explain the fees for equipment installation",B:"To offer a discount on a service",C:"To provide information about a lease agreement",D:"To request a change to a property amenity"},
       answer:"C",explanation:'Bức thư nhắc nhở về việc hết hạn hợp đồng thuê mặt bằng ("lease for your space will end on 30 April"), kèm thông tin chi tiết về việc gia hạn hợp đồng.'},
      {id:162,text:"According to the letter, what must Ms. Balakrishnan pay for each month?",
       options:{A:"Furniture rental",B:"Office supplies",C:"An inspection fee",D:"A parking space"},
       answer:"D",explanation:'Trong bảng chi phí hàng tháng sau khi gia hạn có ghi "Parking space fee: S$50.00" (Phí đỗ xe) → (D) đúng.'},
      {id:163,text:"Who most likely is Ms. Tan?",
       options:{A:"A repair person",B:"A property manager",C:"A cleaning person",D:"A security company employee"},
       answer:"B",explanation:'Alexis Tan ký tên đại diện cho Rossery Building Corporation, phụ trách các vấn đề gia hạn hợp đồng thuê và nhắc nhở thời hạn hoàn trả mặt bằng → cô ấy là quản lý tòa nhà (property manager).'}
    ]
  }
];

// ─── Update tests.json ───
const filePath = "data/tests.json";
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
const idx = data.tests.findIndex(t => t.id === "test2");
if (idx === -1) { console.error("❌ test2 not found"); process.exit(1); }

const R = data.tests[idx].reading;

// Update Part 6 → passages mode
const p6 = R.parts.find(p => p.id === "part6");
if (p6) {
  delete p6.questions;
  p6.passages = part6Passages;
  p6.description = "Choose the best word or phrase to complete each passage.";
}

// Update Part 7 → passages mode (partial, thêm dần)
const p7 = R.parts.find(p => p.id === "part7");
if (p7) {
  delete p7.questions;
  p7.passages = part7Passages;
  p7.description = "Choose the best answer to each question about the reading passages.";
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

const p6total = part6Passages.reduce((s,p)=>s+p.questions.length,0);
const p7total = part7Passages.reduce((s,p)=>s+p.questions.length,0);
console.log("✅ Done!");
console.log(`   Part 6: ${part6Passages.length} passages, ${p6total} câu (FULL)`);
console.log(`   Part 7: ${part7Passages.length} passages, ${p7total} câu (còn ${54-p7total} câu chờ ảnh)`);
