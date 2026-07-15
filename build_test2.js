const fs = require('fs');

// ─── Listening Part 3 questions (32-70) ───
const part3Questions = [
  { id: 32, text: "Where does the conversation most likely take place?", options: { A: "On a train", B: "On a boat", C: "At a factory", D: "At an airport" } },
  { id: 33, text: "What caused a delay?", options: { A: "An electrical failure occurred.", B: "A worker was unavailable.", C: "Some information was incorrect.", D: "The weather was bad." } },
  { id: 34, text: "What will the man do next?", options: { A: "Confirm a schedule", B: "Speak to a coworker", C: "Check some machinery", D: "Clean a storage room" } },
  { id: 35, text: "Where does the woman most likely work?", options: { A: "At a sports stadium", B: "At a fitness center", C: "At a doctor's office", D: "At a library" } },
  { id: 36, text: "What does the man ask about?", options: { A: "A discount", B: "A form", C: "A business location", D: "A parking policy" } },
  { id: 37, text: "What will the woman do next?", options: { A: "Post a sign", B: "Confirm an account number", C: "Provide a tour", D: "Look at a schedule" } },
  { id: 38, text: "Who most likely are the speakers?", options: { A: "Art restorers", B: "Event planners", C: "Photographers", D: "Interior designers" } },
  { id: 39, text: "What does the woman say she will do?", options: { A: "Hire an intern", B: "Review a contract", C: "Take some measurements", D: "Investigate a problem" } },
  { id: 40, text: "Why does the man suggest beginning a project quickly?", options: { A: "Payment has already been made.", B: "Staff will be on vacation.", C: "An important event is approaching.", D: "A client is in town for a limited time." } },
  { id: 41, text: "What is the woman preparing?", options: { A: "A slide presentation", B: "A travel itinerary", C: "A guest list", D: "A sales contract" } },
  { id: 42, text: "What kind of business is Smith Incorporated?", options: { A: "A law firm", B: "A construction company", C: "A pharmaceutical manufacturer", D: "A bookstore chain" } },
  { id: 43, text: "What do the men agree about?", options: { A: "A subscription should be canceled.", B: "An advertising campaign should be delayed.", C: "A training session should be mandatory.", D: "A meeting should be casual." } },
  { id: 44, text: "Why does the woman congratulate the man?", options: { A: "He finished a road race.", B: "He won a publishing award.", C: "His experiment was successful.", D: "His research funding was extended." } },
  { id: 45, text: 'What does the man imply when he says, "Esra\'s leaving the company next week"?', options: { A: "He needs assistance planning a party for Esra.", B: "He will not submit a report to Esra.", C: "He will apply for a new position.", D: "A larger office has become available." } },
  { id: 46, text: "What does the man hope to do next quarter?", options: { A: "Receive a research grant", B: "Publish a book", C: "Replace some furniture", D: "Gain management experience" } },
  { id: 47, text: "Where most likely are the speakers?", options: { A: "At a sporting goods store", B: "At a television studio", C: "At a sports arena", D: "At a gym" } },
  { id: 48, text: "What does the man say he recently did?", options: { A: "He retired from his job.", B: "He designed a Web site.", C: "He opened a new facility.", D: "He competed in a sports event." } },
  { id: 49, text: "What does the woman ask the man to talk about?", options: { A: "His career path", B: "His mentors", C: "His future goals", D: "His hobbies" } },
  { id: 50, text: "What has the woman been hired to do?", options: { A: "Write articles", B: "Update some software", C: "Organize a fund-raiser", D: "Manage office staff" } },
  { id: 51, text: "According to the director, what is the organization's goal?", options: { A: "To hire professionals in the field", B: "To create educational programs", C: "To collect data from other scientific institutes", D: "To protect aquatic environments" } },
  { id: 52, text: "What does Roberto say is exciting?", options: { A: "The use of some equipment", B: "The results of a survey", C: "The public response to a project", D: "A recent donation to the institute" } },
  { id: 53, text: "What does the man say about some contacts in China?", options: { A: "They submitted some preliminary results.", B: "They requested help with a presentation.", C: "They are celebrating a holiday.", D: "They are coming to visit soon." } },
  { id: 54, text: 'What does the woman imply when she says, "we didn\'t allocate funds for a project leader"?', options: { A: "She thinks a project deadline should be extended.", B: "She is surprised by a suggestion.", C: "A scheduled meeting should take place.", D: "A project leader will not be hired." } },
  { id: 55, text: "What does the woman say about some travel expenses?", options: { A: "They are unnecessary.", B: "They have been refunded.", C: "They require receipts.", D: "They were charged to the company credit card." } },
  { id: 56, text: "Where is the woman calling from?", options: { A: "A clothing store", B: "A furniture store", C: "A restaurant supply company", D: "A graphic design firm" } },
  { id: 57, text: "What is some software being used for?", options: { A: "Inventory management", B: "Employee performance reviews", C: "Sales forecasting", D: "Web site design" } },
  { id: 58, text: "What does the man help the woman do?", options: { A: "Return a purchase", B: "Customize a setting", C: "Repair an engine", D: "Inspecting a shipment" } },
  { id: 59, text: "Where are the speakers most likely working?", options: { A: "At a flower shop", B: "At a botanical garden", C: "At a fruit orchard", D: "At a hardware store" } },
  { id: 60, text: "What have the speakers been asked to do?", options: { A: "Arrange some flowers", B: "Deliver some tools", C: "Install a watering system", D: "Repair a lawn mower" } },
  { id: 61, text: "What does the man offer to do?", options: { A: "Look for some materials", B: "Train an assistant", C: "Transplant some trees", D: "Work extra hours" } },
  { id: 62, text: "Why does the man apologize?", options: { A: "He lost a key.", B: "He arrived late.", C: "He turned off some equipment.", D: "He forgot an instruction manual." } },
  { id: 63, text: "According to the woman, why will the speakers be very busy today?", options: { A: "The agency is offering a discount.", B: "A new rental office is opening.", C: "There is a conference in town.", D: "A sporting event will take place." } },
  { id: 64, text: "Look at the graphic. Where will the man go first?", options: { A: "Area 1", B: "Area 2", C: "Area 3", D: "Area 4" } },
  { id: 65, text: "Where do the speakers most likely work?", options: { A: "At a landscaping company", B: "At a local government office", C: "At a garden store", D: "At a lumber yard" } },
  { id: 66, text: "What does the woman say will take place next month?", options: { A: "A seasonal promotion", B: "A product demonstration", C: "A poster contest", D: "A lecture series" } },
  { id: 67, text: "Look at the graphic. What kind of seedlings will be given away?", options: { A: "Eastern redbud", B: "Japanese maple", C: "White fringe tree", D: "Panicle hydrangea" } },
  { id: 68, text: "Where does the conversation most likely take place?", options: { A: "At a café", B: "At an electronics shop", C: "At a stationery store", D: "At a clothing store" } },
  { id: 69, text: "Look at the graphic. How much will the man save on his purchase?", options: { A: "5%", B: "3%", C: "7%", D: "2%" } },
  { id: 70, text: "What does the man say he will do later today?", options: { A: "Call a business", B: "Return some merchandise", C: "Fill out an online survey", D: "Hang up some posters" } },
];

// ─── Listening Part 4 questions (71-100) ───
const part4Questions = [
  { id: 71, text: "Who most likely is the speaker?", options: { A: "An art gallery owner", B: "A hairstylist", C: "A clothing designer", D: "A jewelry maker" } },
  { id: 72, text: "Why did the speaker include a special gift?", options: { A: "Because the listener is a new customer", B: "Because the listener is celebrating a special occasion", C: "Because the listener is a loyal customer", D: "Because the listener placed a large order" } },
  { id: 73, text: "Why is the listener asked to return a phone call?", options: { A: "To give feedback", B: "To confirm receipt of an order", C: "To update a payment method", D: "To provide an address" } },
  { id: 74, text: "What does the listener want to do?", options: { A: "Hire a caterer", B: "Purchase a painting", C: "Have a printer repaired", D: "Have a photograph framed" } },
  { id: 75, text: "What does the speaker expect the listener to do on a Web site?", options: { A: "View a list of prices", B: "Place an order", C: "Schedule a time to meet", D: "Read customer reviews" } },
  { id: 76, text: "What is included for an extra fee?", options: { A: "Shipping", B: "An artist's signature", C: "A newsletter", D: "A warranty" } },
  { id: 77, text: "Who are the listeners?", options: { A: "Hotel receptionists", B: "Health-care staff", C: "Customer-service representatives", D: "Fitness trainers" } },
  { id: 78, text: "What has the speaker prepared?", options: { A: "Activities", B: "Food", C: "Certificates", D: "A video" } },
  { id: 79, text: 'What does the speaker imply when he says, "I must leave at noon"?', options: { A: "He would like permission to leave.", B: "He cannot join a luncheon.", C: "A colleague will fill in for him.", D: "Some material will not be covered today." } },
  { id: 80, text: "What is the purpose of the advertisement?", options: { A: "To announce a contest", B: "To promote an upcoming sale", C: "To introduce new services", D: "To recruitemployees" } },
  { id: 81, text: "How is the speaker's company different from its competitors?", options: { A: "It is dependable.", B: "It produces innovative products.", C: "It offers flexible schedules.", D: "It pays employees well." } },
  { id: 82, text: "What does the speaker encourage the listeners to do?", options: { A: "Complete a survey", B: "Fill out an application", C: "Place an order", D: "Get more information" } },
  { id: 83, text: "What is the message mainly about?", options: { A: "Revising a restaurant menu", B: "Filming for a television show", C: "Launching an advertising campaign", D: "Renovating a kitchen" } },
  { id: 84, text: "What does the speaker ask the listener to do on Wednesday?", options: { A: "Come to work early", B: "Experiment with new ingredients", C: "Train an employee", D: "Prepare for a safety inspection" } },
  { id: 85, text: "Where will the speaker go next week?", options: { A: "To a food festival", B: "To a cooking class", C: "To a farmers market", D: "To a bakery opening" } },
  { id: 86, text: "What is the speaker mainly discussing?", options: { A: "A job fair", B: "A factory", C: "Some traffic patterns", D: "A prototype electric vehicle" } },
  { id: 87, text: 'What does the speaker imply when he says, "No one made any comments"?', options: { A: "Few people were in attendance.", B: "Another meeting will be scheduled.", C: "A project has community support.", D: "A public comment period has ended." } },
  { id: 88, text: "What can the public view at the city hall building?", options: { A: "An official contract", B: "Some images", C: "A list of companies", D: "Some facts about local politicians" } },
  { id: 89, text: "What type of product is being advertised?", options: { A: "A floor lamp", B: "A bookshelf", C: "An office chair", D: "A desk organizer" } },
  { id: 90, text: "What special feature does the speaker emphasize?", options: { A: "It is durable.", B: "It is adjustable.", C: "It is easy to assemble.", D: "It is available in many colors." } },
  { id: 91, text: "How can the listeners receive a discount?", options: { A: "By calling within a time limit", B: "By entering an e-mail address", C: "By referring a product to a friend", D: "By using a mobile phone application" } },
  { id: 92, text: "According to the speaker, what is the purpose of the podcast?", options: { A: "To discuss the restaurant industry", B: "To review new cooking equipment", C: "To share information about nutrition", D: "To showcase individual ingredients" } },
  { id: 93, text: 'Why does the speaker say, "this product line will not be available for long"?', options: { A: "To encourage the listeners to place an order", B: "To apologize to the listeners for a product shortage", C: "To justify a high price", D: "To criticize a business decision" } },
  { id: 94, text: "According to the speaker, what did Rebecca Murray recently do?", options: { A: "She published a cookbook.", B: "She launched a culinary training course.", C: "She opened a restaurant.", D: "She traveled abroad." } },
  { id: 95, text: "Why does the speaker apologize?", options: { A: "There is construction noise at the station.", B: "There are no more seats available on a train.", C: "A printed schedule has incorrect information.", D: "A train service has been delayed." } },
  { id: 96, text: "According to the speaker, why may some listeners need to see an agent?", options: { A: "To ask for a refund", B: "To request baggage service", C: "To purchase a monthly pass", D: "To arrange a transfer" } },
  { id: 97, text: "Look at the graphic. When is Train 133 scheduled to arrive at its next stop?", options: { A: "At 10:45 A.M.", B: "At 12:05 PM.", C: "At 1:00 PM.", D: "At 1:30 PM." } },
  { id: 98, text: "Who most likely are the listeners?", options: { A: "Civil engineers", B: "Urban planners", C: "News reporters", D: "Safety inspectors" } },
  { id: 99, text: "Look at the graphic. Which of the following companies will be affected by a delay?", options: { A: "Selca Air", B: "Trilco Airlines", C: "Heathson Airways", D: "Bluxtin Airlines" } },
  { id: 100, text: "What does the speaker invitethe listeners to do?", options: { A: "Download some designs", B: "Look at a model", C: "Take a site tour", D: "View a Webcam" } },
];

// ─── Helper ───
function q(id, text, options, answer = "") {
  return { id, text, options, answer };
}
function audioQ(id, nOptions = 4) {
  const labels = ["A", "B", "C", "D"].slice(0, nOptions);
  const opts = {};
  labels.forEach(o => { opts[o] = `(${o})`; });
  return { id, text: `Câu ${id}`, audioOptions: true, options: opts, answer: "" };
}

// ─── Build Test 2 ───
const test2 = {
  id: "test2",
  name: "TOEIC Test 2",
  listening: {
    timeLimit: 2700,
    questionsPdf: "assets/listening/test2/questions.pdf",
    parts: [
      {
        id: "part1",
        name: "Part 1",
        label: "Photographs",
        description: "You will hear four statements about a picture. Choose the statement that best describes what you see.",
        audio: "assets/listening/test2/part1.mp3",
        questionRange: "1–6",
        questions: Array.from({ length: 6 }, (_, i) => audioQ(i + 1))
      },
      {
        id: "part2",
        name: "Part 2",
        label: "Question-Response",
        description: "You will hear a question or statement and three responses. Choose the best response.",
        audio: "assets/listening/test2/part2.mp3",
        questionRange: "7–31",
        questions: Array.from({ length: 25 }, (_, i) => audioQ(i + 7, 3))
      },
      {
        id: "part3",
        name: "Part 3",
        label: "Conversations",
        description: "You will hear conversations between two or more people. Choose the best answer to each question.",
        audio: "assets/listening/test2/part3.mp3",
        questionRange: "32–70",
        questions: part3Questions.map(q => ({ ...q, answer: "" }))
      },
      {
        id: "part4",
        name: "Part 4",
        label: "Talks",
        description: "You will hear short talks given by a single speaker. Choose the best answer to each question.",
        audio: "assets/listening/test2/part4.mp3",
        questionRange: "71–100",
        questions: part4Questions.map(q => ({ ...q, answer: "" }))
      }
    ]
  },
  reading: {
    timeLimit: 4500,
    pdf: "assets/reading/test2.pdf",
    note: "PDF is image-based. View PDF for questions.",
    parts: [
      {
        id: "part5",
        name: "Part 5",
        label: "Incomplete Sentences",
        description: "Choose the word or phrase that best completes each sentence. PDF is scanned — read questions from PDF and select answers below.",
        questionRange: "101–130",
        questions: Array.from({ length: 30 }, (_, i) => ({
          id: 101 + i,
          text: `Câu ${101 + i}`,
          audioOptions: true,
          options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
          answer: "",
          explanation: "Xem câu hỏi trong PDF để chọn đáp án đúng."
        }))
      },
      {
        id: "part6",
        name: "Part 6",
        label: "Text Completion",
        description: "Choose the best word or phrase to complete each passage. Refer to the PDF.",
        questionRange: "131–146",
        questions: Array.from({ length: 16 }, (_, i) => ({
          id: 131 + i,
          text: `Câu ${131 + i}`,
          audioOptions: true,
          options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
          answer: "",
          explanation: "Xem passage trong PDF để hiểu ngữ cảnh và chọn đáp án."
        }))
      },
      {
        id: "part7",
        name: "Part 7",
        label: "Reading Comprehension",
        description: "Choose the best answer to each question about the reading passages. Refer to the PDF.",
        questionRange: "147–200",
        questions: Array.from({ length: 54 }, (_, i) => ({
          id: 147 + i,
          text: `Câu ${147 + i}`,
          audioOptions: true,
          options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
          answer: "",
          explanation: "Xem đoạn văn tương ứng trong PDF để kiểm tra đáp án."
        }))
      }
    ]
  }
};

// ─── Read & update tests.json ───
const filePath = "data/tests.json";
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// Remove existing test2 if present
data.tests = data.tests.filter(t => t.id !== "test2");
data.tests.push(test2);

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

// ─── Summary ───
const lParts = test2.listening.parts;
const rParts = test2.reading.parts;
const lTotal = lParts.reduce((s, p) => s + p.questions.length, 0);
const rTotal = rParts.reduce((s, p) => s + p.questions.length, 0);
console.log(`✅ Test 2 added to ${filePath}`);
console.log(`   Listening: ${lParts.length} parts, ${lTotal} questions`);
console.log(`   Reading:   ${rParts.length} parts, ${rTotal} questions`);
console.log(`   ⚠️  All answers are empty (awaiting answer key)`);
console.log(`   📝 Assets: assets/listening/test2/ + assets/reading/test2.pdf`);
