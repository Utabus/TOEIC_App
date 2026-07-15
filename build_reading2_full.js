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
  }
  // Các passage tiếp theo sẽ được thêm khi có ảnh
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
