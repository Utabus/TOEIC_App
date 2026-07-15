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
  },
  {
    passageId:"P7_8", title:"E-mail – Your proposed changes", type:"single",
    texts:[`To: lkhoury@britelyauto.co.uk\nFrom: khagel@qualiview.co.uk\nDate: 14 April\nSubject: Your proposed changes\n\nDear Ms. Khoury,\n\nThank you for forwarding your proposed revisions to the contract for Qualiview Ltd. to be your wholesale supplier of automotive window glass.\n\nFirst, we will gladly agree to an extension of the contract term from one to three years. Secondly, I am not sure what more we can do to address your concerns about packaging materials. We use custom-built crates and innovative packaging to reduce the risk of breakage during shipping. While we will replace any goods that may be damaged in transit, we do not agree to pay an additional penalty fee in the event of such damage.\n\nI would like to discuss this further with you next week; however, I will be out of the office through Tuesday afternoon. Would you be available to meet before 11:00 A.M. on either Wednesday or Thursday? Friday is also possible. Please let me know a convenient date and time for you.\n\nBest regards,\n\nKarl Hagel\nQualiview Ltd.`],
    questions:[
      {id:164,text:"Why did Mr. Hagel write the e-mail?",
       options:{A:"To report damage to an item",B:"To finalize a purchase",C:"To request a product sample",D:"To negotiate a contract"},
       answer:"D",explanation:'Thư thảo luận các điểm sửa đổi về thời hạn hợp đồng, chi phí phạt hư hại vận chuyển nhằm đi đến thỏa thuận cuối cùng.'},
      {id:165,text:"What is indicated about Qualiview Ltd.?",
       options:{A:"It sells its products online.",B:"It makes windows for cars.",C:"It has paid penalty fees in the past.",D:"It recently redesigned its shipping crates."},
       answer:"B",explanation:'Qualiview Ltd. là nhà cung cấp kính cửa sổ cho ngành ô tô ("wholesale supplier of automotive window glass").'},
      {id:166,text:"The word \"address\" in paragraph 2, line 2, is closest in meaning to",
       options:{A:"respond to",B:"think about",C:"greet",D:"deliver"},
       answer:"A",explanation:'"address your concerns" mang nghĩa phản hồi, giải quyết các mối quan tâm lo ngại, gần nghĩa nhất với "respond to".'},
      {id:167,text:"When is Mr. Hagel available next week?",
       options:{A:"On Monday morning",B:"On Tuesday afternoon",C:"On Wednesday morning",D:"On Thursday afternoon"},
       answer:"C",explanation:'Ông Hagel đi vắng đến hết chiều thứ Ba. Ông đề xuất họp trước 11:00 A.M ngày thứ Tư hoặc thứ Năm → Sáng thứ Tư là thời điểm phù hợp.'}
    ]
  },
  {
    passageId:"P7_9", title:"Article – Shipping Disruptions", type:"single",
    texts:[`Shipping Disruptions\n\nSINGAPORE (6 June)—Recently, the demand for international freight space has been outpacing the availability of shipping containers. This container shortage has led to higher costs for goods being shipped out of Asian ports. A drop in the production of rolls of steel, the raw material that containers are made from, has further complicated the situation. — [1] —.\nSome exporters have considered the more expensive option of air freight, but companies are still faced with a difficult choice. — [2] —. They must either ask their customers to accept shipment delays, or substantially raise customer prices to cover the costs of expedited shipping. Either way, suppliers risk triggering customer dissatisfaction.\n\"We are working with business partners, investors, and government officials to discuss solutions to this problem,\" said Henry Lam, a spokesperson for the household goods producer QET Group. — [3] —. \"It's going to take total cooperation of all stakeholders to find a solution.\"\nNot all companies are suffering, though. For example, Fezker, the producer of athletic apparel and footwear, has implemented strategies to better overcome this situation. Fezker has successfully refocused its efforts away from exports to western countries and toward expanding its domestic and regional markets. — [4] —.\n\"We moved quickly, so the shipping container shortage has not caused a significant impact on our profits,\" said Fezker CEO Nuwa Lee.`],
    questions:[
      {id:168,text:"What is mentioned about shipping containers?",
       options:{A:"They come in different sizes.",B:"They are in short supply.",C:"They are made from a variety of materials.",D:"They can be used for long-term storage."},
       answer:"B",explanation:'Đoạn 1 nêu tình trạng thiếu hụt container vận chuyển hàng hóa ("container shortage").'},
      {id:169,text:"What does Mr. Lam say is needed to resolve the situation?",
       options:{A:"A sharp increase in the number of customers",B:"A relaxation of government restrictions",C:"The development of new technologies",D:"Communication between affected groups"},
       answer:"D",explanation:'Ông Lam nói cần sự hợp tác toàn diện của tất cả các bên liên quan ("total cooperation of all stakeholders"), tức là sự đối thoại/giao tiếp giữa các nhóm bị ảnh hưởng.'},
      {id:170,text:"What type of clothing does Fezker produce?",
       options:{A:"Rain jackets",B:"Sportswear",C:"Business suits",D:"Work uniforms"},
       answer:"B",explanation:'Fezker được giới thiệu là nhà sản xuất giày và trang phục thể thao ("producer of athletic apparel and footwear" = sportswear).'},
      {id:171,text:"In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"These markets are supplied using more readily available truck and train transportation.\"",
       options:{A:"[1]",B:"[2]",C:"[3]",D:"[4]"},
       answer:"D",explanation:'"These markets" ở đây liên kết trực tiếp với "domestic and regional markets" (thị trường nội địa và khu vực) ở câu trước đó, do đó vị trí [4] là hoàn hảo nhất.'}
    ]
  },
  {
    passageId:"P7_10", title:"Online Chat – Project Status Update", type:"single",
    texts:[`Gary Wendel (7:40 A.M.)\nGood morning, team. Can you share the current status of your projects, please?\n\nJing Yu (7:42 A.M.)\nI met with the client last week to confirm the start date for Phase B of the Palisade project.\n\nRobbie Zuniga (7:43 A.M.)\nI am headed to the job site now for the Riverview project. The rain last week delayed pouring the concrete for the sidewalks. I will check the conditions this morning to see if the situation has improved.\n\nGary Wendel (7:44 A.M.)\nWhen will Phase B of the Palisade project begin?\n\nJing Yu (7:46 A.M.)\nWe will break ground in March and plan to have the building completed by November.\n\nGary Wendel (7:47 A.M.)\nThat's good news about the March start date. I am sure the client is happy about that.\n\nGary Wendel (7:50 A.M.)\nRobbie, let me know what you find out about the site conditions. Perhaps Nathan Burry can help at the site. He's our most knowledgeable concrete finisher.\n\nRobbie Zuniga (7:55 A.M.)\nActually, I'm meeting Nathan at the site this morning, so I'll get his opinion on when we can pour the concrete. The rest of the project is on hold until we can do this.\n\nGary Wendel (7:57 A.M.)\nKeep me posted. I don't want to rush it if it's still too wet. At the same time, the Riverview project is already behind schedule because of equipment problems and late delivery of building materials.\n\nRobbie Zuniga (7:58 A.M.)\nWill do.`],
    questions:[
      {id:172,text:"In what industry do the writers most likely work?",
       options:{A:"Construction",B:"Energy",C:"Manufacturing",D:"Travel"},
       answer:"A",explanation:'Các thuật ngữ như "pour the concrete" (đổ bê tông), "break ground" (khởi công), "building completed" chỉ ra họ làm việc trong ngành xây dựng.'},
      {id:173,text:"Why did Mr. Wendel begin the discussion?",
       options:{A:"To plan a client meeting",B:"To discuss a weather forecast",C:"To obtain an update on some work",D:"To change the start date of an event"},
       answer:"C",explanation:'Ông bắt đầu đoạn chat bằng câu hỏi tiến độ dự án của nhóm: "Can you share the current status of your projects, please?".'},
      {id:174,text:"What is indicated about the Riverview project?",
       options:{A:"It has had several delays.",B:"It is being managed by Ms. Yu.",C:"It will be completed in November.",D:"Its clients are happy with the progress."},
       answer:"A",explanation:'Dự án bị hoãn đổ bê tông do mưa, đồng thời đang bị chậm tiến độ do hỏng thiết bị và giao vật tư muộn.'},
      {id:175,text:"At 7:58 A.M., what does Mr. Zuniga most likely mean when he writes, \"Will do\"?",
       options:{A:"He will revise a delivery schedule.",B:"He will purchase more equipment.",C:"He will hire workers to help at a site.",D:"He will share the outcome of a meeting."},
       answer:"D",explanation:'Đáp lại yêu cầu "Keep me posted" (hãy báo cáo cho tôi biết) của Gary, Robbie nhắn "Will do" nghĩa là anh ấy sẽ báo cáo lại sau cuộc bàn bạc tại công trường với Nathan.'}
    ]
  },
  {
    passageId:"P7_11", title:"E-mail & Survey – Fatior Labs Taste-Testing", type:"double",
    texts:[
      `From: Madalyn Kerluke <mkerluke@karabel.ca>\nTo: Omar Niklaus <oniklaus@karabel.ca>, Joy Toncic <jtoncic@karabel.ca>\nDate: Friday, 3 February 2:16 P.M.\nSubject: Taste-test results\nAttachment: Fatior Labs survey results\n\nHi Team,\n\nI just received the 24-26 January survey results from Fatior Labs for our new ice-cream taste test. As you can see from the attached document, the results are very disappointing. We sent the four flavours that we considered to be the best, but none of them received high enough ratings to advance to the next stage of development. Most of the reviews were consistent among the 92 taste-test participants in our target market of consumers ages 25 through 40. It's not a big problem if a product gets low scores in colour in the testing phase, since we can easily adjust that in the laboratory. But we should never be sending out samples that are getting scores lower than 3 in the taste category.\n\nI would like to meet at 9 A.M. on Monday (6 February) to figure out how to proceed. There is one flavour we may be able to work with if we make a few adjustments, as suggested by most of our taste testers. We will also need to get some new flavours to Fatior Labs no later than 1 March if we are going to get a new ice cream on the Preston Grocers freezer shelves by the beginning of June.\n\nMadalyn Kerluke`,
      `Fatior Labs Consumer Taste-Testing Survey\n\nDate: 24 January\nCompany: Karabel Industries\nParticipant number: 54\n\nDirections: You will be given a 45 g sample of 4 different ice creams. Please rate the taste, texture, sweetness, and colour of each ice cream on a scale of 1 (very unpleasant) to 5 (very pleasant). Please write any additional comments below.\n\nFlavour | Taste | Texture | Sweetness | Colour\nLemon | 2 | 3 | 2 | 4\nMango | 3 | 3 | 2 | 1\nSalted Caramel | 2 | 1 | 1 | 5\nPeanut Brittle | 3 | 4 | 2 | 2\n\nComments: The fruit-flavoured ice creams were surprisingly sour. I did not care for them at all. I think the Peanut Brittle has the most potential, but it's missing something. I bet that adding chocolate swirls or brownie bits would make it a winner.`
    ],
    questions:[
      {id:176,text:"What does the e-mail indicate about Karabel Industries ice cream?",
       options:{A:"It is currently sold in four flavors.",B:"Its coloring can be changed easily.",C:"Its popularity has declined recently.",D:"It is sold in Karabel Industries stores."},
       answer:"B",explanation:'Email cho biết: "It\'s not a big problem if a product gets low scores in colour... since we can easily adjust that in the laboratory".'},
      {id:177,text:"What does Ms. Kerluke state that she wants to do?",
       options:{A:"Visit a laboratory",B:"Hold a team meeting",C:"Contact a grocery store",D:"Write new survey questions"},
       answer:"B",explanation:'Bà viết: "I would like to meet at 9 A.M. on Monday" để bàn thảo kế hoạch hành động tiếp theo.'},
      {id:178,text:"What is suggested about Fatior Labs?",
       options:{A:"It has 92 employees.",B:"It manufactures food colorings.",C:"It will perform another taste test for Karabel Industries.",D:"It supplies ice cream to Preston Grocers."},
       answer:"C",explanation:'Email cho biết họ phải gửi các hương vị mới tới Fatior Labs trước ngày 1/3, đồng nghĩa Fatior Labs sẽ làm một đợt kiểm thử mới cho Karabel.'},
      {id:179,text:"Based on the survey form, what flavor will Karabel Industries most likely make adjustments to?",
       options:{A:"Lemon",B:"Mango",C:"Salted Caramel",D:"Peanut Brittle"},
       answer:"D",explanation:'Người đánh giá (participant 54) và Madalyn đều đồng ý là Peanut Brittle có nhiều tiềm năng nhất nếu thực hiện thêm một vài điều chỉnh như thêm chocolate/brownie.'},
      {id:180,text:"What can be concluded about participant number 54?",
       options:{A:"The participant purchased several containers of ice cream.",B:"The participant is between the ages of 25 and 40.",C:"The participant regularly takes consumer surveys.",D:"The participant prefers fruit-flavored ice cream."},
       answer:"B",explanation:'Email ghi rõ nhóm khảo sát thuộc đối tượng mục tiêu từ 25 đến 40 tuổi ("target market of consumers ages 25 through 40"), nên ứng viên số 54 nằm trong độ tuổi này.'}
    ]
  },
  {
    passageId:"P7_12", title:"Web Page & Letter – Copywriter Position", type:"double",
    texts:[
      `https://www.creategreat.ca/openings\n\nCreate Great, an Ontario-based creative agency with a diverse range of global clients in the fashion industry, is seeking a copywriter who is passionate about fashion, understands market trends, and handles digital tools with ease.\n\nThe ideal candidate will be someone who works well in a fast-paced environment with team members from international backgrounds. The copywriter will collaborate with the creative team to develop brand strategies that suit customer needs and with the marketing team to ensure the success of brand-based publicity campaigns for current and prospective clients. As remote work is permitted for copywriters, residence in Canada is not required.\n\nTo apply, send your cover letter and résumé to the director of our creative team, Fran Benjamin, Create Great, 838 Colbert Street, London, ON N6B 3P5. Application deadline: August 5.`,
      `Annie Smith\n4810 South Bryant Street\nPortland, OR 97206\n\nAugust 6\n\nFran Benjamin\nCreate Great\n838 Colbert Street\nLondon, ON N6B 3P5\n\nDear Ms. Benjamin,\n\nI am writing to apply for the copywriter position at Create Great. As an expert fashion designer who also has writing experience, I believe I would be a valuable addition to your team. Enclosed please find my résumé.\n\nI have a decade of experience as the lead designer for women's collections at MODA, a clothing line in Portland. I oversee the design production process from initial market research to finished product. In my role, I work in close partnership with the marketing and production teams.\n\nIn addition, for the last five years, I have been maintaining my own blog. My posts focus on trends in women's fashion and how to make clothing and cosmetics more sustainable. What started as a hobby has now attracted paying advertisers and over 15,000 followers. Visit www.medesheen.com for examples of my writing.\n\nThank you for considering my application.\n\nSincerely,\n\nAnnie Smith\nAnnie Smith\n\nEnclosure`
    ],
    questions:[
      {id:181,text:"According to the Web page, what will the job recipient be able to do?",
       options:{A:"Work remotely",B:"Manage a team",C:"Travel internationally",D:"Relocate to Canada"},
       answer:"A",explanation:'Trang tuyển dụng ghi: "As remote work is permitted for copywriters, residence in Canada is not required".'},
      {id:182,text:"On the Web page, the word \"suit\" in paragraph 2, line 4, is closest in meaning to",
       options:{A:"adapt",B:"determine",C:"invest",D:"satisfy"},
       answer:"D",explanation:'"suit customer needs" nghĩa là đáp ứng/thỏa mãn các nhu cầu của khách hàng, gần nghĩa nhất với "satisfy".'},
      {id:183,text:"What is indicated about Ms. Smith?",
       options:{A:"She has already met Ms. Benjamin.",B:"She has worked as a copywriter.",C:"She missed an application deadline.",D:"She forgot to submit a required document."},
       answer:"C",explanation:'Hạn chót nộp hồ sơ là 5/8, trong khi thư ứng tuyển của Annie Smith đề ngày 6/8 → Nộp muộn.'},
      {id:184,text:"According to the letter, what is one of Ms. Smith's responsibilities at MODA?",
       options:{A:"Hiring fashion designers",B:"Writing drafts of advertisements",C:"Managing a production process",D:"Researching sustainable clothing options"},
       answer:"C",explanation:'Annie viết cô ấy quản lý toàn bộ quy trình thiết kế và sản xuất ("I oversee the design production process").'},
      {id:185,text:"What most likely is Medesheen?",
       options:{A:"A brand of cosmetics",B:"A fashion blog",C:"An online magazine",D:"An advertising agency"},
       answer:"B",explanation:'Annie Smith viết cô duy trì blog cá nhân về thời trang bền vững và có thể xem bài viết mẫu tại www.medesheen.com.'}
    ]
  },
  {
    passageId:"P7_13", title:"E-mails & Receipt – Fowler Office Supplies", type:"triple",
    texts:[
      `From: Akihito Nakashima <a.nakashima@gilchristshipping.com>\nTo: Fowler Office Supplies <support@fowlerofficesupplies.com>\nSubject: Order B19849\nDate: August 19\n\nTo Whom It May Concern,\n\nYesterday, I purchased some office supplies on your Web site. I received an e-mail receipt, but the costs are not itemized on it. To satisfy a new company policy, I must give my supervisor a receipt with the charges for each item listed separately. Could you e-mail me such a receipt? If not, is it possible for me to get this information myself from your Web site? Finally, can confirmations for future orders possibly be sent to more than one e-mail address? It would be ideal for my supervisor to automatically receive one.\n\nThank you.\n\nAkihito Nakashima, Executive Assistant\nGilchrist Shipping`,
      `From: Fowler Office Supplies <support@fowlerofficesupplies.com>\nTo: Akihito Nakashima <a.nakashima@gilchristshipping.com>\nSubject: RE: Order B19849\nDate: August 19\nAttachment: B19849\n\nDear Mr. Nakashima,\n\nAttached is the receipt you requested. In apology for the inconvenience, we will provide you with 10 percent off the total price of your next order. To view a full description of any previous order, first log in to your account on our Web site, go to the "My Orders" tab, and then click on any order number.\n\nI noticed that included in each of your last few orders was an identical order for ten of a particular item. You should know that we will reduce the price for that item by 5 percent if you mark this as a recurring order. To do this, simply check the "Recurring Order" box on the online order form.\n\nAs for your final query, this is not possible right now. However, I will share the idea with our technical team.\n\nAll the best,\n\nCameron Higgins, Customer Relations\nFowler Office Supplies`,
      `Fowler Office Supplies\nReceipt for Order: B19849\nOrder Date: August 18\n\nItem | Price | Quantity | Total\nPrinter paper | $8.00/500 sheets | 10 | $80.00\nToner (black) | $50.00/cartridge | 1 | $50.00\nGel pens (blue) | $5.00/8-pack | 3 | $15.00\nStaples | $3.50/box | 2 | $7.00\nGRAND TOTAL: $152.00\n\nReturn Policy: Unopened merchandise may be returned by mail or in one of our stores within 60 days of purchase. For returns by mail, log in to your www.fowlerofficesupplies.com account to print a shipping label. For in-store returns, bring the item and the order number to any Fowler Office Supplies location.`
    ],
    questions:[
      {id:186,text:"Why did Mr. Nakashima send the e-mail?",
       options:{A:"He did not receive an item he ordered.",B:"He was mistakenly charged twice for an item.",C:"He received a receipt that was not detailed enough.",D:"He did not get a confirmation e-mail for a purchase he made."},
       answer:"C",explanation:'Ông Nakashima cần hóa đơn có liệt kê giá riêng biệt từng sản phẩm ("costs are not itemized on it") để nộp cho cấp trên.'},
      {id:187,text:"According to the second e-mail, what will Mr. Nakashima receive with his next order?",
       options:{A:"A catalog",B:"A free pen",C:"A printed receipt",D:"A price discount"},
       answer:"D",explanation:'Fowler hứa tặng ông mã giảm giá 10% cho đơn hàng kế tiếp ("10 percent off the total price of your next order").'},
      {id:188,text:"For what item does Mr. Higgins suggest that Mr. Nakashima select \"Recurring Order\"?",
       options:{A:"Printer paper",B:"Toner",C:"Gel pens",D:"Staples"},
       answer:"A",explanation:'Higgins nhận thấy vài đơn gần đây đều mua 10 chiếc của 1 loại hàng. Theo hóa đơn đính kèm, mặt hàng có số lượng 10 là Printer paper.'},
      {id:189,text:"What will Mr. Higgins ask the technical team to look into?",
       options:{A:"Improving the Web site's response rate",B:"Providing an option to send receipts to multiple e-mail addresses",C:"Placing a link to customers' order history on the home page",D:"Making return labels printable from any device"},
       answer:"B",explanation:'Nhằm đáp ứng câu hỏi gửi xác nhận đơn cho nhiều email của Nakashima, Higgins hứa sẽ chuyển ý kiến này cho đội ngũ kỹ thuật.'},
      {id:190,text:"What is needed to return an item at a Fowler Office Supplies store?",
       options:{A:"The original receipt",B:"A credit card number",C:"A confirmation e-mail",D:"The order number"},
       answer:"D",explanation:'Theo chính sách trả hàng: "For in-store returns, bring the item and the order number..." → Cần mang theo sản phẩm và mã đơn hàng.'}
    ]
  },
  {
    passageId:"P7_14", title:"Article, Web Site & Receipt – Crawford and Duval", type:"triple",
    texts:[
      `Crawford and Duval Opens Brick-and-Mortar Stores\n\nHONG KONG (18 February)—Crawford and Duval, the online retailer known for its handcrafted blankets, decorative pillows, and other household goods, has established four brick-and-mortar stores in Hong Kong. Last Monday, the company celebrated the grand opening of boutique stores in Causeway Bay, Discovery Bay, and Sheung Wan in addition to a large department store in Central District. While the boutique stores carry the most popular of the small household goods for which Crawford and Duval is famous, the Central District location also boasts an indoor plant department and an on-site café that features specialty coffees, teas, and light snacks. Moreover, it has a much more extensive selection of the merchandise than what is available through the company's Web site.`,
      `https://www.crawfordandduval.com.hk\n\nCrawford and Duval comes to our loyal shoppers in Hong Kong!\n\nCrawford and Duval is pleased to announce the opening of its first brick-and-mortar stores in the following locations: Causeway Bay, Discovery Bay, Sheung Wan, and Central District.\n\nSince the launch of our online store five years ago, we have helped you to create the living space of your dreams. Now we make it even easier to decorate your home. Each location has an interior designer on staff, so you can consult with an expert in person while you browse our popular items.\n\nAll locations are convenient to public transportation. Our Central District location offers free parking in its attached car park.\n\nAs part of our grand-opening celebration, shoppers who visit one of our stores before 1 March will receive a gift card for HK$70 to use during their visit.\n\nMembers of our online Frequent Purchase Club will receive the same benefits in our stores, including a 10 percent discount on purchases of HK$500 or more.`,
      `Crawford and Duval\nCustomer Receipt\nDate: 23 February\n\nItem | Price\nBamboo table lamp | HK$1,450.00\nDecorative cushions, set of two | HK$750.00\nAloe plant in a 7.5-litre planter | HK$300.00\nMachine-washable wool blanket | HK$2,000.00\nSub Total: HK$4,500.00\nLess 10%: HK$450.00\nTOTAL: HK$4,050.00\n\n[ ] Cash\n[ ] Gift card number:\n[x] Credit card number: ************5598\nName on the credit card: Mei-Lin Fong\n\nStop at our in-store café for a treat!`
    ],
    questions:[
      {id:191,text:"What is the purpose of the article?",
       options:{A:"To compare locally made products",B:"To announce store openings",C:"To list changes to a Web site",D:"To review a café"},
       answer:"B",explanation:'Bài báo đăng tin Crawford and Duval chính thức khai trương 4 cửa hàng vật lý mới tại Hồng Kông.'},
      {id:192,text:"What does the Web site indicate about Crawford and Duval?",
       options:{A:"It has store locations around the world.",B:"It has been in business for ten years.",C:"It employs interior designers.",D:"It offers free parking at all of its stores."},
       answer:"C",explanation:'Trang web của hãng đề cập: "Each location has an interior designer on staff" (Mỗi chi nhánh đều có nhà thiết kế nội thất tại chỗ).'},
      {id:193,text:"According to the receipt, what is indicated about the blanket?",
       options:{A:"It can be washed by machine.",B:"It is made of cotton.",C:"It is queen-sized.",D:"It comes in a set with pillows."},
       answer:"A",explanation:'Biên lai ghi rõ món hàng chăn len có thể giặt bằng máy ("Machine-washable wool blanket").'},
      {id:194,text:"Where most likely did Ms. Fong make her purchase?",
       options:{A:"On a Web site",B:"In a boutique shop",C:"At a café",D:"In a department store"},
       answer:"D",explanation:'Mei-Lin Fong mua cây lô hội ("Aloe plant") và hóa đơn khuyên ghé thử tiệm cà phê trong tiệm. Theo bài viết, chỉ có cửa hàng bách hóa tổng hợp lớn (department store) tại Central District mới bán cây cảnh và có quán cà phê.'},
      {id:195,text:"What is suggested about Ms. Fong?",
       options:{A:"She often buys food from Crawford and Duval.",B:"She is a member of the Frequent Purchase Club.",C:"She applied a gift card to her purchase.",D:"She shopped during a grand-opening event."},
       answer:"B",explanation:'Cô Fong được chiết khấu 10% cho hóa đơn trị giá HK$4,500 (trên mức HK$500). Web site có nói điều khoản giảm giá này áp dụng cho thành viên Frequent Purchase Club.'}
    ]
  },
  {
    passageId:"P7_15", title:"Web Pages – Osawa Corporate Team Building", type:"triple",
    texts:[
      `https://www.osawacorporateteambuilding.com/home\n\nOsawa Corporate Team Building\n\nBring your team together to promote cooperation while having fun! Our activities increase job satisfaction and engagement. We do all the planning so you can relax. Simply choose the event that is right for your team.\n\nScavenger Hunt—An outdoor game in which teams are given a list of objects to find and photograph with their phone or camera. Group size: 10-30 people. Time: 3 hours.\n\nGame Day—This is a high-energy game day with fun team activities. This event builds team strength, communication, and problem-solving skills. Group size: 20-500 people. Time: 2 hours.\n\nTeam Painting—Each team member creates a painting outdoors based on a predetermined theme. The paintings are linked together at the end. Group size: 6-30 people. Time: 1-2 hours.\n\nRobot Building—Your group will be broken into teams. Each team builds a robot to be used in challenges against the others. Group size: 10-30 people. Time: 2-3 hours.\n\nAll Chocolate—Your group will have the chance to use engineering skills to build a tower of chocolate. Then you learn how to make chocolate from a local chocolatier. Group size: 8-150 people. Time: 2 hours.\n\nBook an event in October and receive 15 percent off.`,
      `https://www.osawacorporateteambuilding.com/requests\n\nHome | Requests | Reviews | Contact Us\nName: Alexandra Peterson\nCompany name: Whitten Tech\nE-mail address: apeterson@whittentech.com\nPhone: 617-555-0123\nLocation and date of event: Downtown Boston, October 15\n\nWhat events are you interested in? Choose your top three.\n1 Game Day | 2 Scavenger Hunt | 3 Team Painting\nNumber of participants: 28 people\n\nAdditional information:\nWe are interested in a fun activity for our sales team before the busy selling season begins. We spend a lot of time in the office, so we want an outdoor event.\n\nWe will contact you within three business days with a quote and confirmation.`,
      `https://www.osawacorporateteambuilding.com/reviews\n\nWhat Our Customers Are Saying\n\nPosted by Whitten Tech on October 20\n\nOur team hired Osawa Corporate Team Building to lead an activity for the sales staff at Whitten Tech. The facilitator of the Scavenger Hunt, Lorenzo Benford, was excellent. The 28 members of our sales team all had positive feedback. They reported that they loved exploring the city, learning about its history, and finding new local attractions, even on a cold and cloudy day. I highly recommend this activity. The only downside was that we did not realize how far we would be walking. It would have been helpful to have an idea of the walking distances so we could have been fully prepared.`
    ],
    questions:[
      {id:196,text:"What does the first Web page indicate about the Scavenger Hunt?",
       options:{A:"It requires participants to rent a camera.",B:"It concludes with prizes for participants.",C:"It is a suitable activity for indoors.",D:"It takes three hours to complete."},
       answer:"D",explanation:'Mô tả hoạt động Scavenger Hunt có ghi: "Time: 3 hours".'},
      {id:197,text:"What event is best for a group of more than 200 people?",
       options:{A:"Game Day",B:"Team Painting",C:"Robot Building",D:"All Chocolate"},
       answer:"A",explanation:'Game Day hỗ trợ quy mô nhóm từ 20-500 người, trong khi các sự kiện khác có quy mô tối đa dưới 200 người.'},
      {id:198,text:"What is suggested about Ms. Peterson?",
       options:{A:"She has joined the Building Robots event in the past.",B:"She will receive a discount on an event.",C:"She recently started a job at Whitten Tech.",D:"She used to be an event planner."},
       answer:"B",explanation:'Alexandra Peterson đăng ký tổ chức sự kiện vào ngày 15/10. Trang chủ ghi: "Book an event in October and receive 15 percent off" (Đặt lịch trong tháng 10 được giảm giá 15%).'},
      {id:199,text:"What can be concluded about Whitten Tech?",
       options:{A:"It changed its number of event participants.",B:"It provided its staff with free passes to museums.",C:"It was unable to schedule its first-choice activity.",D:"It was not able to hold its event outside."},
       answer:"C",explanation:'Alexandra gửi yêu cầu đăng ký với thứ tự lựa chọn là: 1. Game Day, 2. Scavenger Hunt. Tuy nhiên, bài viết phản hồi (reviews) cho thấy họ đã chơi Scavenger Hunt → Họ đã không đặt được lựa chọn đầu tiên của mình.'},
      {id:200,text:"According to the review, what was disappointing about the event?",
       options:{A:"The focus on local history",B:"The lack of information about walking distances",C:"The difficulty in keeping the group together",D:"The uninteresting facilitator"},
       answer:"B",explanation:'Bài đánh giá ghi nhược điểm duy nhất ("only downside") là họ không nhận thức được trước quãng đường phải đi bộ ("we did not realize how far we would be walking. It would have been helpful to have an idea of the walking distances").'}
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
