/**
 * ===================================================================
 * BRIL ONLINE FEE PAYMENT GATEWAY ENGINE
 * Brilliant Institute of Engineering & Technology, Hyderabad
 * Affiliated to JNTU-Hyderabad • UGC Autonomous • NAAC 'A' Grade
 * CSE Batch: 2024 - 2028 (Section A: 501-560 | Section B: 61-D0 | Section C: D1-510)
 * Annual Tuition Fee: ₹72,000 • JNTU University Fee: ₹6,500
 * ===================================================================
 */

// Full Student Master Database (CSE Batch 2024-2028: 199 Students across Sections A, B, C & Management Quota)
const CSE_STUDENTS_DATABASE = [
  {
    "roll": "24QA1A0501",
    "name": "Aparanjitha A.C.Ancy",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000000",
    "email": "24QA1A0501@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0502",
    "name": "Vishnu Adepu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000001",
    "email": "24QA1A0502@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0503",
    "name": "Nandini Ailu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000002",
    "email": "24QA1A0503@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0504",
    "name": "Kumar Yadav Ajay",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000003",
    "email": "24QA1A0504@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0505",
    "name": "Rathin Akula",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000004",
    "email": "24QA1A0505@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0506",
    "name": "Goutham Kumar Ale",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000005",
    "email": "24QA1A0506@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0507",
    "name": "Swapna Rutham",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000006",
    "email": "24QA1A0507@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0508",
    "name": "Mandal Aniket",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000007",
    "email": "24QA1A0508@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0509",
    "name": "Vani Ldas",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000008",
    "email": "24QA1A0509@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0510",
    "name": "Bhagya Sri Annam",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000009",
    "email": "24QA1A0510@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0511",
    "name": "Abhigna Are",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000010",
    "email": "24QA1A0511@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0512",
    "name": "James Ttada",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000011",
    "email": "24QA1A0512@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0513",
    "name": "Kowshik B",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000012",
    "email": "24QA1A0513@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0514",
    "name": "Noel Karan B R",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000013",
    "email": "24QA1A0514@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0515",
    "name": "Akshay Balke",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000014",
    "email": "24QA1A0515@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0516",
    "name": "Uday Alne",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000015",
    "email": "24QA1A0516@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0517",
    "name": "Nandini Avaraju",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000016",
    "email": "24QA1A0517@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0518",
    "name": "Sandeep Bayya",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000017",
    "email": "24QA1A0518@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0519",
    "name": "Sharath Chandra Boddu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000018",
    "email": "24QA1A0519@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0520",
    "name": "Adarsh Oddula",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000019",
    "email": "24QA1A0520@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0521",
    "name": "Rakesh Reddy",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000020",
    "email": "24QA1A0521@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0522",
    "name": "Supriya Bojja",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000021",
    "email": "24QA1A0522@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0523",
    "name": "Naveen Yadav Bollam",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000022",
    "email": "24QA1A0523@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0524",
    "name": "Indu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000023",
    "email": "24QA1A0524@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0525",
    "name": "Vijay Kumar",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000024",
    "email": "24QA1A0525@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0526",
    "name": "Rakesh",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000025",
    "email": "24QA1A0526@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0527",
    "name": "Hemavathi",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000026",
    "email": "24QA1A0527@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0528",
    "name": "Karthik",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000027",
    "email": "24QA1A0528@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0529",
    "name": "Niharika",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000028",
    "email": "24QA1A0529@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0530",
    "name": "Akhila Reddy",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000029",
    "email": "24QA1A0530@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0531",
    "name": "Shivakrishna Alli",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000030",
    "email": "24QA1A0531@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0532",
    "name": "Sruthi",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000031",
    "email": "24QA1A0532@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0533",
    "name": "Sravika",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000032",
    "email": "24QA1A0533@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0534",
    "name": "Venu Kumar",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000033",
    "email": "24QA1A0534@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0535",
    "name": "Nandini",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000034",
    "email": "24QA1A0535@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0536",
    "name": "Sandya",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000035",
    "email": "24QA1A0536@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0537",
    "name": "Charan",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000036",
    "email": "24QA1A0537@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0538",
    "name": "Srilaxmi",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000037",
    "email": "24QA1A0538@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0539",
    "name": "Bhanu Prasad",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000038",
    "email": "24QA1A0539@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0540",
    "name": "Shirsha Ramchander Dhangar",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000039",
    "email": "24QA1A0540@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0541",
    "name": "Shravankuma R E",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000040",
    "email": "24QA1A0541@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0542",
    "name": "Sonu Virat",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000041",
    "email": "24QA1A0542@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0543",
    "name": "Raghu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000042",
    "email": "24QA1A0543@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0544",
    "name": "Sai Priya",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000043",
    "email": "24QA1A0544@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0545",
    "name": "Nagaraju",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000044",
    "email": "24QA1A0545@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0546",
    "name": "Madhusri",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000045",
    "email": "24QA1A0546@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0547",
    "name": "Sai Priya",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000046",
    "email": "24QA1A0547@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0548",
    "name": "Nikitha",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000047",
    "email": "24QA1A0548@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0549",
    "name": "Maneesha",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000048",
    "email": "24QA1A0549@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0550",
    "name": "Ashwini",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000049",
    "email": "24QA1A0550@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0551",
    "name": "Praveen Gadham",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000050",
    "email": "24QA1A0551@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0552",
    "name": "Pallavi Aikwad",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000051",
    "email": "24QA1A0552@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0553",
    "name": "Sukesh Andla",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000052",
    "email": "24QA1A0553@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0554",
    "name": "Sathvik Ikanti",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000053",
    "email": "24QA1A0554@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0555",
    "name": "Pranith Kumar Gokinapally",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000054",
    "email": "24QA1A0555@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0556",
    "name": "Mounika Opagani",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000055",
    "email": "24QA1A0556@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0557",
    "name": "Sreeja Ipati",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000056",
    "email": "24QA1A0557@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0558",
    "name": "Pravalika Guduru",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000057",
    "email": "24QA1A0558@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0559",
    "name": "Vaibhav Gule",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000058",
    "email": "24QA1A0559@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0560",
    "name": "Manikanta Gundu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section A",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000059",
    "email": "24QA1A0560@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0561",
    "name": "Saikiran Jangili",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000060",
    "email": "24QA1A0561@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0562",
    "name": "Mahesh Jilla",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000061",
    "email": "24QA1A0562@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0563",
    "name": "Rakesh Inuga",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000062",
    "email": "24QA1A0563@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0564",
    "name": "Charan Sai Jogula",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000063",
    "email": "24QA1A0564@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0565",
    "name": "Bharath K",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000064",
    "email": "24QA1A0565@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0566",
    "name": "Deepika K",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000065",
    "email": "24QA1A0566@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0567",
    "name": "Akshay Kumar Kade",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000066",
    "email": "24QA1A0567@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0568",
    "name": "Lakhan Doddi",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000067",
    "email": "24QA1A0568@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0569",
    "name": "Dhanush Lletla",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000068",
    "email": "24QA1A0569@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0570",
    "name": "Shashank Lshetty",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000069",
    "email": "24QA1A0570@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0571",
    "name": "Akash Goud Kammagoni",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000070",
    "email": "24QA1A0571@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0572",
    "name": "Mohan Chandra Kanna",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000071",
    "email": "24QA1A0572@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0573",
    "name": "Vineel Rnati",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000072",
    "email": "24QA1A0573@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0574",
    "name": "Anu Ty",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000073",
    "email": "24QA1A0574@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0575",
    "name": "Akhila Golla",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000074",
    "email": "24QA1A0575@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0576",
    "name": "Mohan Turi",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000075",
    "email": "24QA1A0576@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0577",
    "name": "Ashok Reddy Kati Reddy",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000076",
    "email": "24QA1A0577@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0578",
    "name": "Praveen Ravath",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000077",
    "email": "24QA1A0578@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0579",
    "name": "Charan Teja Kobbai",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000078",
    "email": "24QA1A0579@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0580",
    "name": "Jaweed Basha Kommeddi",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000079",
    "email": "24QA1A0580@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0581",
    "name": "Karthik Kommu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000080",
    "email": "24QA1A0581@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0582",
    "name": "Shiva Onda",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000081",
    "email": "24QA1A0582@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0583",
    "name": "Yashwitha Korivi",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000082",
    "email": "24QA1A0583@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0584",
    "name": "Sanjay Bhargav Kosanam",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000083",
    "email": "24QA1A0584@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0585",
    "name": "Daniel Othili",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000084",
    "email": "24QA1A0585@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0586",
    "name": "Abhilash Reddy Kurli",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000085",
    "email": "24QA1A0586@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0587",
    "name": "Sony Lly",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000086",
    "email": "24QA1A0587@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0588",
    "name": "Neha L",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000087",
    "email": "24QA1A0588@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0589",
    "name": "Anil Kumar Lakavath",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000088",
    "email": "24QA1A0589@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0590",
    "name": "Avinash Madasu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000089",
    "email": "24QA1A0590@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0591",
    "name": "Anusha Agula",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000090",
    "email": "24QA1A0591@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0592",
    "name": "Krushitha Madiga",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000091",
    "email": "24QA1A0592@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0593",
    "name": "Karthikmred Dy Yenna",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000092",
    "email": "24QA1A0593@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0594",
    "name": "Ramkiran Alavath",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000093",
    "email": "24QA1A0594@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0595",
    "name": "Ravi Charan Malothu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000094",
    "email": "24QA1A0595@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0596",
    "name": "Bhavani Gaskan",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000095",
    "email": "24QA1A0596@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0597",
    "name": "Deekshitha Mamunuri",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000096",
    "email": "24QA1A0597@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0598",
    "name": "Pranay Pelli",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000097",
    "email": "24QA1A0598@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A0599",
    "name": "Sai Deekshith Manpuri",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000098",
    "email": "24QA1A0599@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05A1",
    "name": "Md Jameer Md",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000099",
    "email": "24QA1A05A1@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05A2",
    "name": "Vaishnavi Daboyina",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000100",
    "email": "24QA1A05A2@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05A3",
    "name": "Poojitha Damouni",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000101",
    "email": "24QA1A05A3@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05A4",
    "name": "Akhil Yadav Meesam",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000102",
    "email": "24QA1A05A4@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05A5",
    "name": "Kavya Kala",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000103",
    "email": "24QA1A05A5@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05A6",
    "name": "Mahesh Ekala",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000104",
    "email": "24QA1A05A6@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05A7",
    "name": "Yesudas Methri",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000105",
    "email": "24QA1A05A7@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05A8",
    "name": "Afroz Mmed",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000106",
    "email": "24QA1A05A8@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05A9",
    "name": "Sohel Khan Mohammad",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000107",
    "email": "24QA1A05A9@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05B0",
    "name": "Akshitha Mudam",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000108",
    "email": "24QA1A05B0@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05B1",
    "name": "Tejeswara Rao Mula",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000109",
    "email": "24QA1A05B1@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05B2",
    "name": "Harish Usham",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000110",
    "email": "24QA1A05B2@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05B3",
    "name": "Harisha Styala",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000111",
    "email": "24QA1A05B3@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05B4",
    "name": "Tejashwini Muttha",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000112",
    "email": "24QA1A05B4@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05B5",
    "name": "Harshavardh An Myana",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000113",
    "email": "24QA1A05B5@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05B6",
    "name": "Saikumar Laganti",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000114",
    "email": "24QA1A05B6@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05B7",
    "name": "Shravya Naroju",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000115",
    "email": "24QA1A05B7@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05B8",
    "name": "Nandhini Neerudu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000116",
    "email": "24QA1A05B8@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05B9",
    "name": "Sanju Vath",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000117",
    "email": "24QA1A05B9@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05C0",
    "name": "Saraswathi Nenavath",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000118",
    "email": "24QA1A05C0@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05C1",
    "name": "Shirisha Enavath",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000119",
    "email": "24QA1A05C1@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05C2",
    "name": "Giri Ani",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000120",
    "email": "24QA1A05C2@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05C3",
    "name": "Sneha Madi",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000121",
    "email": "24QA1A05C3@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05C4",
    "name": "Siddu Hala",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000122",
    "email": "24QA1A05C4@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05C5",
    "name": "Nithin Bapu Padala",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000123",
    "email": "24QA1A05C5@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05C6",
    "name": "Tharun Ntham",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000124",
    "email": "24QA1A05C6@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05C7",
    "name": "Rajeshwari Paritala",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000125",
    "email": "24QA1A05C7@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05C8",
    "name": "Vinay Kumar Pathri",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000126",
    "email": "24QA1A05C8@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05C9",
    "name": "Rishitha Rathod Pathulothu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000127",
    "email": "24QA1A05C9@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05D0",
    "name": "Praveen Chikolu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section B",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000128",
    "email": "24QA1A05D0@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05D1",
    "name": "Sekh Rul",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000129",
    "email": "24QA1A05D1@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05D2",
    "name": "Sai Ganesh Okuri Sai",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000130",
    "email": "24QA1A05D2@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05D3",
    "name": "Nithya Nnala",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000131",
    "email": "24QA1A05D3@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05D4",
    "name": "Santhosh Reddy Poreddy",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000132",
    "email": "24QA1A05D4@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05D5",
    "name": "Prabhu Deva Pouda",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000133",
    "email": "24QA1A05D5@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05D6",
    "name": "Bhukya Hanth",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000134",
    "email": "24QA1A05D6@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05D7",
    "name": "Mohith Racha",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000135",
    "email": "24QA1A05D7@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05D8",
    "name": "Lavanya Shetti",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000136",
    "email": "24QA1A05D8@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05D9",
    "name": "Sandeep Ragiri",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000137",
    "email": "24QA1A05D9@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05E0",
    "name": "Dikshith Reddy Rampuram",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000138",
    "email": "24QA1A05E0@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05E1",
    "name": "Vaishali Hlavath",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000139",
    "email": "24QA1A05E1@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05E2",
    "name": "Madry Meghana Reddy Madry",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000140",
    "email": "24QA1A05E2@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05E3",
    "name": "Rafique An Bin",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000141",
    "email": "24QA1A05E3@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05E4",
    "name": "Madhu Uthu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000142",
    "email": "24QA1A05E4@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05E5",
    "name": "Shaikh Rulla",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000143",
    "email": "24QA1A05E5@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05E6",
    "name": "Pooja Reddy Sama",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000144",
    "email": "24QA1A05E6@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05E7",
    "name": "Siddhartha Nkurthula",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000145",
    "email": "24QA1A05E7@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05E8",
    "name": "Basheer Shaik",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000146",
    "email": "24QA1A05E8@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05E9",
    "name": "Shabbir Shaik",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000147",
    "email": "24QA1A05E9@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05F0",
    "name": "Vaishnavi Mbugalla",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000148",
    "email": "24QA1A05F0@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05F1",
    "name": "Akshitha Reddy Sheri",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000149",
    "email": "24QA1A05F1@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05F2",
    "name": "Aravind Kumar Reddy Sheri",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000150",
    "email": "24QA1A05F2@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05F3",
    "name": "Srinithya Sheri",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000151",
    "email": "24QA1A05F3@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05F4",
    "name": "Manideep Mshetti",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000152",
    "email": "24QA1A05F4@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05F5",
    "name": "Bhanusree Singaram",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000153",
    "email": "24QA1A05F5@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05F6",
    "name": "Siritha Reeram",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000154",
    "email": "24QA1A05F6@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05F7",
    "name": "Shivaji Mane Sudarshan",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000155",
    "email": "24QA1A05F7@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05F8",
    "name": "Kumar Umit",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000156",
    "email": "24QA1A05F8@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05F9",
    "name": "Shivalingam Surigi",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000157",
    "email": "24QA1A05F9@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05G0",
    "name": "Rohith Thari",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000158",
    "email": "24QA1A05G0@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05G1",
    "name": "Abdul Sami Faizan Syed",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000159",
    "email": "24QA1A05G1@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05G2",
    "name": "Younus Syed",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000160",
    "email": "24QA1A05G2@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05G3",
    "name": "Sravanthi T G",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000161",
    "email": "24QA1A05G3@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05G4",
    "name": "Mohan T",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000162",
    "email": "24QA1A05G4@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05G5",
    "name": "Veera Sathya Sai Reddy Tatikonda",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000163",
    "email": "24QA1A05G5@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05G6",
    "name": "Sai Niharika Tenali",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000164",
    "email": "24QA1A05G6@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05G7",
    "name": "Thallapalli Thallapalli",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000165",
    "email": "24QA1A05G7@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05G8",
    "name": "Rakesh Harak",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000166",
    "email": "24QA1A05G8@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05G9",
    "name": "Uday Kumar Thati",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000167",
    "email": "24QA1A05G9@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05H0",
    "name": "Manvith Ikonda",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000168",
    "email": "24QA1A05H0@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05H1",
    "name": "Akshitha Thogari",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000169",
    "email": "24QA1A05H1@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05H2",
    "name": "Manyapu Reddy U",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000170",
    "email": "24QA1A05H2@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05H3",
    "name": "Santhosh Dathala",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000171",
    "email": "24QA1A05H3@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05H4",
    "name": "Lokesh Agiri",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000172",
    "email": "24QA1A05H4@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05H5",
    "name": "Bharadhwaj Udugula",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000173",
    "email": "24QA1A05H5@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05H6",
    "name": "Sowmya Vaddi",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000174",
    "email": "24QA1A05H6@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05H7",
    "name": "Jhansi Boina",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000175",
    "email": "24QA1A05H7@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05H8",
    "name": "Babitha Lakati",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000176",
    "email": "24QA1A05H8@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05H9",
    "name": "Raghavendra Vangala",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000177",
    "email": "24QA1A05H9@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05I0",
    "name": "Shiva Sai Vanguri",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000178",
    "email": "24QA1A05I0@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05I1",
    "name": "Rithika Arthya",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000179",
    "email": "24QA1A05I1@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05I2",
    "name": "Shettshivam Ani Vasham",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000180",
    "email": "24QA1A05I2@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05I3",
    "name": "Srujan Kumar Vatturi",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000181",
    "email": "24QA1A05I3@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05I4",
    "name": "Sanjay Awada",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000182",
    "email": "24QA1A05I4@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05I5",
    "name": "Basu Esh",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000183",
    "email": "24QA1A05I5@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05I6",
    "name": "Vinaykumar D",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000184",
    "email": "24QA1A05I6@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05I7",
    "name": "Ahmad Asim",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000185",
    "email": "24QA1A05I7@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05I8",
    "name": "Sri Charan Yarra",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000186",
    "email": "24QA1A05I8@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05I9",
    "name": "Charan Teja Yathakula",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000187",
    "email": "24QA1A05I9@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "24QA1A05J0",
    "name": "Abhishek Malyala",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000188",
    "email": "24QA1A05J0@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "25QA5A0501",
    "name": "Mallesh Gaddam",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000189",
    "email": "25QA5A0501@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "25QA5A0502",
    "name": "Rachana Darapu",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000190",
    "email": "25QA5A0502@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "25QA5A0503",
    "name": "Durga Arre",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000191",
    "email": "25QA5A0503@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "25QA5A0504",
    "name": "Venkataram Mallela",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000192",
    "email": "25QA5A0504@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "25QA5A0505",
    "name": "Jashwanth Gadupula",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Management Quota",
    "isManagement": true,
    "mobile": "9848000193",
    "email": "25QA5A0505@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "25QA5A0506",
    "name": "Ankith P",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000194",
    "email": "25QA5A0506@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "25QA5A0507",
    "name": "Sandeep Agarla",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000195",
    "email": "25QA5A0507@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "25QA5A0508",
    "name": "Anjaneyulu Ramavath",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000196",
    "email": "25QA5A0508@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "25QA5A0509",
    "name": "Manoj S",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000197",
    "email": "25QA5A0509@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  },
  {
    "roll": "25QA5A0510",
    "name": "Manasa T",
    "program": "B.Tech - Computer Science & Engineering (CSE)",
    "branch": "CSE",
    "batch": "2024 - 2028",
    "section": "Section C",
    "quota": "Convenor Quota (EAPCET)",
    "isManagement": false,
    "mobile": "9848000198",
    "email": "25QA5A0510@b-iet.ac.in",
    "tuitionFee": 72000,
    "jntuFee": 6500,
    "totalAnnualFee": 78500
  }
];

// Global Application State
const PaymentState = {
    currentCategory: 'tuition',
    amount: 72000,
    purpose: 'B.Tech Full Year Tuition Fee (2024-2028 Batch) - ₹72,000',
    student: {
        roll: '',
        name: '',
        program: 'B.Tech - Computer Science & Engineering (CSE)',
        branch: 'CSE',
        batch: '2024 - 2028',
        section: '',
        quota: '',
        isManagement: false,
        mobile: '',
        email: '',
        tuitionFee: 72000,
        jntuFee: 6500,
        totalAnnualFee: 78500
    },
    orderId: '',
    selectedPaymentMode: 'UPI',
    countdownInterval: null
};

// UPI Merchant Configuration (Brilliant Institute of Engineering & Technology)
const UPI_CONFIG = {
    vpa: 'brilcollege@sbi',
    name: 'Brilliant Institute of Engineering and Technology',
    merchantCode: '' // Left blank to prevent NPCI unverified merchant rejection on UPI apps
};

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSubOptions('tuition');
    generateOrderReference();
    updateLiveQrCode();
    attachEventListeners();
    prefillDefaultStudent();
    initStudentSearchAndAutocomplete();
    renderStudentVerifiedCard();
});

// ================= THEME (Light / Dark) =================
function getPreferredTheme() {
    try {
        const saved = localStorage.getItem('bril-theme');
        if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) { /* ignore */ }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('bril-theme', theme); } catch (e) { /* ignore */ }
    updateThemeToggleLabels(theme);
    if (typeof updateLiveQrCode === 'function') {
        try { updateLiveQrCode(); } catch (e) { /* ignore */ }
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
}

function updateThemeToggleLabels(theme) {
    const label = theme === 'dark' ? 'Light' : 'Dark';
    document.querySelectorAll('.theme-toggle-text').forEach(el => {
        el.textContent = label;
    });
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        btn.title = theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode';
    });
}

function initTheme() {
    applyTheme(getPreferredTheme());
    try {
        if (!localStorage.getItem('bril-theme') && window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                applyTheme(e.matches ? 'dark' : 'light');
            });
        }
    } catch (e) { /* older browsers */ }
}

// Generate Unique Order Reference
function generateOrderReference() {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(1000 + Math.random() * 9000);
    PaymentState.orderId = `BRIL-ORD-${timestamp}-${random}`;

    const orderRefEl = document.getElementById('modalOrderRef');
    if (orderRefEl) orderRefEl.textContent = PaymentState.orderId;
}

// Reset Student Fields in Provided Space
function resetStudentFields() {
    PaymentState.student = {
        roll: '',
        name: '',
        program: 'B.Tech - Computer Science & Engineering (CSE)',
        branch: 'CSE',
        batch: '2024 - 2028',
        section: '',
        quota: '',
        isManagement: false,
        mobile: '',
        email: '',
        tuitionFee: 72000,
        jntuFee: 6500,
        totalAnnualFee: 78500
    };

    const rollDisplay = document.getElementById('studentRollDisplay');
    const nameInput = document.getElementById('studentName');
    const secInput = document.getElementById('studentSection');
    const quotaInput = document.getElementById('studentQuota');
    const mobileInput = document.getElementById('studentMobile');
    const emailInput = document.getElementById('studentEmail');
    const psBadge = document.getElementById('psStatusBadge');
    const btnActionText = document.getElementById('btnProceedActionText');
    const btnSubText = document.getElementById('btnProceedSubText');
    const card = document.getElementById('studentVerifiedCard');
    const verifiedIcon = document.getElementById('rollVerifiedIcon');
    const rollInput = document.getElementById('studentRoll');
    const verifyRollBtn = document.getElementById('verifyRollBtn');
    const btnProvidedProceed = document.getElementById('btnProvidedSpaceProceed');

    if (rollDisplay) {
        rollDisplay.value = '';
        rollDisplay.classList.remove('field-populated');
    }
    if (nameInput) {
        nameInput.value = '';
        nameInput.classList.remove('field-populated', 'name-field-active');
    }
    const nameVerifiedIcon = document.getElementById('nameVerifiedIcon');
    if (nameVerifiedIcon) nameVerifiedIcon.style.display = 'none';
    if (secInput) {
        secInput.value = '';
        secInput.classList.remove('field-populated');
    }
    if (quotaInput) {
        quotaInput.value = '';
        quotaInput.classList.remove('field-populated');
    }
    if (mobileInput) {
        mobileInput.value = '';
        mobileInput.classList.remove('field-populated');
    }
    if (emailInput) {
        emailInput.value = '';
        emailInput.classList.remove('field-populated');
    }

    if (psBadge) {
        psBadge.innerHTML = '<span class="badge-waiting"><i class="fas fa-clock"></i> Awaiting Hall Ticket</span>';
    }
    if (btnActionText) {
        btnActionText.textContent = 'Verify & Proceed to Fee Payment';
    }
    if (btnSubText) {
        btnSubText.textContent = 'Enter Hall Ticket above to auto-load student records';
    }
    if (card) card.style.display = 'none';
    if (verifiedIcon) verifiedIcon.style.display = 'none';
    if (rollInput) rollInput.classList.remove('roll-input-matched');
    if (verifyRollBtn) verifyRollBtn.classList.remove('btn-ready');
    if (btnProvidedProceed) btnProvidedProceed.classList.remove('btn-ready');

    const matchStatus = document.getElementById('rollMatchStatus');
    if (matchStatus) {
        matchStatus.innerHTML = '<span class="match-info"><i class="fas fa-bolt text-warning"></i> Type any roll number to auto-load student records</span>';
    }
}

// Prefill default student (if specified via URL or demo; otherwise keeps field clean for user entry)
function prefillDefaultStudent() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const queryRoll = urlParams.get('roll') || urlParams.get('htno') || urlParams.get('hallticket');
        if (queryRoll) {
            const matched = findMatchingStudent(queryRoll);
            if (matched) {
                selectStudent(matched, false);
                return;
            }
        }
        if (urlParams.get('demo') === '1' || urlParams.get('demo') === 'true') {
            selectStudent(CSE_STUDENTS_DATABASE[0], false);
            return;
        }
    } catch (e) { /* ignore */ }

    // Start with empty input ready for student to enter their hall ticket
    const rollInput = document.getElementById('studentRoll');
    if (rollInput) {
        rollInput.value = '';
        setTimeout(() => {
            try { rollInput.focus(); } catch (e) {}
        }, 100);
    }
    resetStudentFields();
}

// Directly Enter Person Name into Student Name field on click
function enterPersonName(name, roll) {
    if (!name) return;
    const nameInput = document.getElementById('studentName');
    const rollInput = document.getElementById('studentRoll');
    const nameIcon = document.getElementById('nameVerifiedIcon');
    const rollIcon = document.getElementById('rollVerifiedIcon');

    if (nameInput) {
        nameInput.value = name;
        nameInput.classList.add('field-populated', 'name-field-active');
    }
    if (nameIcon) {
        nameIcon.style.display = 'flex';
    }

    if (roll) {
        if (rollInput && (!rollInput.value || !rollInput.value.includes(roll))) {
            rollInput.value = roll;
            rollInput.classList.add('roll-input-matched');
        }
        if (rollIcon) {
            rollIcon.style.display = 'flex';
        }
        const student = CSE_STUDENTS_DATABASE.find(s => s.roll === roll);
        if (student) {
            selectStudent(student, false);
            showNotification(`✓ Directly entered "${name}" in the student name field!`);
            return;
        }
    }

    showNotification(`✓ Directly entered "${name}" in the student name field!`);
}

// Select a student and populate form
function selectStudent(st, showToast = true) {
    if (!st) return;

    PaymentState.student = {
        roll: st.roll,
        name: st.name,
        program: st.program,
        branch: st.branch || 'CSE',
        batch: st.batch || '2024 - 2028',
        section: st.section,
        quota: st.quota,
        isManagement: st.isManagement,
        mobile: st.mobile,
        email: st.email,
        tuitionFee: st.tuitionFee || 72000,
        jntuFee: st.jntuFee || 6500,
        totalAnnualFee: st.totalAnnualFee || 78500
    };

    const rollInput = document.getElementById('studentRoll');
    const rollDisplay = document.getElementById('studentRollDisplay');
    const nameInput = document.getElementById('studentName');
    const progInput = document.getElementById('academicProgram');
    const secInput = document.getElementById('studentSection');
    const quotaInput = document.getElementById('studentQuota');
    const mobileInput = document.getElementById('studentMobile');
    const emailInput = document.getElementById('studentEmail');
    const psBadge = document.getElementById('psStatusBadge');
    const btnActionText = document.getElementById('btnProceedActionText');
    const btnSubText = document.getElementById('btnProceedSubText');
    const verifyRollBtn = document.getElementById('verifyRollBtn');
    const btnProvidedProceed = document.getElementById('btnProvidedSpaceProceed');
    const verifiedIcon = document.getElementById('rollVerifiedIcon');
    const nameVerifiedIcon = document.getElementById('nameVerifiedIcon');

    // Populate Hall Ticket inputs
    if (rollInput) {
        rollInput.value = st.roll;
        rollInput.classList.add('roll-input-matched');
    }
    if (rollDisplay) {
        rollDisplay.value = st.roll;
        rollDisplay.classList.add('field-populated');
    }

    // Populate Name
    if (nameInput) {
        nameInput.value = st.name;
        nameInput.classList.add('field-populated', 'name-field-active');
    }
    if (nameVerifiedIcon) {
        nameVerifiedIcon.style.display = 'flex';
    }

    // Populate Program
    if (progInput) {
        progInput.value = st.program;
        progInput.classList.add('field-populated');
    }

    // Populate Section & Batch
    if (secInput) {
        secInput.value = `${st.section} (${st.batch || 'Batch 2024 - 2028'})`;
        secInput.classList.add('field-populated');
    }

    // Populate Quota
    if (quotaInput) {
        quotaInput.value = st.quota;
        quotaInput.classList.add('field-populated');
    }

    // Populate Mobile & Email
    if (mobileInput) {
        mobileInput.value = st.mobile;
        mobileInput.classList.add('field-populated');
    }
    if (emailInput) {
        emailInput.value = st.email;
        emailInput.classList.add('field-populated');
    }

    // Update Status Badge in Provided Space
    if (psBadge) {
        psBadge.innerHTML = `<span class="badge-matched"><i class="fas fa-circle-check"></i> Verified: ${st.name}</span>`;
    }

    // Update Button Texts & Glow
    if (btnActionText) {
        btnActionText.textContent = `Verify & Proceed with ${st.name} (${st.roll})`;
    }
    if (btnSubText) {
        btnSubText.textContent = `Data loaded from institutional records • Click to choose fee payment`;
    }
    if (verifyRollBtn) verifyRollBtn.classList.add('btn-ready');
    if (btnProvidedProceed) btnProvidedProceed.classList.add('btn-ready');
    if (verifiedIcon) verifiedIcon.style.display = 'flex';

    // Sync quota dropdown if tuition tab is active
    const quotaDropdown = document.getElementById('subOptQuota');
    if (quotaDropdown) {
        quotaDropdown.value = st.quota.includes('Management') ? 'Management Quota' : 'Convenor Quota (EAPCET / ECET)';
    }

    syncStudentState();
    renderStudentVerifiedCard();

    // Update Step 2 subtext
    const step2Target = document.getElementById('step2StudentTarget');
    if (step2Target) {
        step2Target.innerHTML = `Making payment for: <strong class="text-primary">${st.name}</strong> (<code>${st.roll}</code> &bull; ${st.section} &bull; ${st.quota})`;
    }

    const matchStatus = document.getElementById('rollMatchStatus');
    if (matchStatus) {
        const safeName = (st.name || '').replace(/'/g, "\\'");
        matchStatus.innerHTML = `
            <div class="person-name-click-card" onclick="enterPersonName('${safeName}', '${st.roll}')" title="Click to enter ${st.name} directly into the field">
                <div class="pnc-header">
                    <i class="fas fa-hand-pointer text-warning"></i>
                    <span>Student Verified &bull; Click name to enter directly in field:</span>
                </div>
                <div class="pnc-body">
                    <button type="button" class="btn-person-name" onclick="enterPersonName('${safeName}', '${st.roll}'); event.stopPropagation();">
                        <i class="fas fa-user-check"></i>
                        <span class="pnc-name-highlight">${st.name}</span>
                        <span class="pnc-click-badge"><i class="fas fa-arrow-turn-down"></i> Click to Enter</span>
                    </button>
                    <div class="pnc-meta">
                        <span class="pnc-roll"><code>${st.roll}</code></span>
                        <span>&bull;</span>
                        <span class="pnc-sec">${st.section}</span>
                        <span>&bull;</span>
                        <span class="pnc-quota">${st.quota}</span>
                    </div>
                </div>
            </div>
        `;
    }

    if (typeof updateStep2ProceedBanner === 'function') {
        updateStep2ProceedBanner('tuition');
    }

    if (showToast) {
        showNotification(`✓ Loaded: ${st.name} (${st.roll}) - ${st.section} [${st.quota}]`);
    }
}

// Render the Verified Student Card badge
function renderStudentVerifiedCard() {
    const card = document.getElementById('studentVerifiedCard');
    if (!card) return;

    const st = PaymentState.student;
    const isMgmt = st.quota.includes('Management') || st.isManagement;
    const sectionClass = st.section.includes('Section A') ? 'badge-sec-a' : st.section.includes('Section B') ? 'badge-sec-b' : 'badge-sec-c';
    const quotaClass = isMgmt ? 'badge-mgmt' : 'badge-convenor';

    card.innerHTML = `
        <div class="verified-card-inner">
            <div class="verified-header">
                <div class="verified-title">
                    <i class="fas fa-circle-check text-success"></i>
                    <strong>BRIL CSE Enrolled Student Record &bull; Batch 2024 - 2028</strong>
                </div>
                <div class="verified-badges">
                    <span class="status-badge ${sectionClass}"><i class="fas fa-users-rectangle"></i> ${st.section}</span>
                    <span class="status-badge ${quotaClass}"><i class="fas fa-id-badge"></i> ${isMgmt ? 'Management Quota' : 'Convenor Quota'}</span>
                    <span class="status-badge badge-active"><i class="fas fa-shield-check"></i> JNTUH Verified</span>
                </div>
            </div>

            <!-- Complete Student Profile Grid -->
            <div class="verified-profile-grid">
                <div class="v-grid-col">
                    <span class="v-label">Student Full Name:</span>
                    <strong class="v-val text-primary">${st.name}</strong>
                </div>
                <div class="v-grid-col">
                    <span class="v-label">Hall Ticket Number:</span>
                    <strong class="v-val"><code>${st.roll}</code></strong>
                </div>
                <div class="v-grid-col">
                    <span class="v-label">Program & Branch:</span>
                    <span class="v-val">${st.program}</span>
                </div>
                <div class="v-grid-col">
                    <span class="v-label">Academic Batch:</span>
                    <span class="v-val font-semibold">2024 - 2028 (4-Year B.Tech)</span>
                </div>
                <div class="v-grid-col">
                    <span class="v-label">Official College Email:</span>
                    <span class="v-val font-mono text-xs">${st.email}</span>
                </div>
                <div class="v-grid-col">
                    <span class="v-label">Registered Mobile:</span>
                    <span class="v-val font-mono">${st.mobile}</span>
                </div>
            </div>

            <!-- Institutional Fee Statement Strip -->
            <div class="verified-fee-ledger">
                <div class="ledger-box">
                    <span class="l-head">Annual Tuition Fee:</span>
                    <span class="l-amount">₹72,000</span>
                    <button type="button" class="btn-ledger-apply" onclick="quickSetStudentFee('tuition_annual')">Pay ₹72,000</button>
                </div>
                <div class="ledger-box">
                    <span class="l-head">JNTU University Fee:</span>
                    <span class="l-amount">₹6,500</span>
                    <button type="button" class="btn-ledger-apply" onclick="quickSetStudentFee('jntu')">Pay ₹6,500</button>
                </div>
                <div class="ledger-box highlight-pkg">
                    <span class="l-head">Full Package (Tuition+JNTU):</span>
                    <span class="l-amount">₹78,500</span>
                    <button type="button" class="btn-ledger-apply btn-pkg" onclick="quickSetStudentFee('combined')">Pay ₹78,500</button>
                </div>
                <div class="ledger-box">
                    <span class="l-head">Semester I Installment:</span>
                    <span class="l-amount">₹36,000</span>
                    <button type="button" class="btn-ledger-apply" onclick="quickSetStudentFee('tuition_sem1')">Pay ₹36,000</button>
                </div>
            </div>

            <div class="verified-actions">
                <button type="button" class="btn-quota-toggle" onclick="toggleStudentQuota()">
                    <i class="fas fa-shuffle"></i> Switch Quota to ${isMgmt ? 'Convenor Quota' : 'Management Quota'}
                </button>
                <button type="button" class="btn-directory-open" onclick="openStudentDirectoryModal()">
                    <i class="fas fa-users-viewfinder"></i> Browse All 199 CSE Students
                </button>
            </div>
        </div>
    `;
    card.style.display = 'block';
}

// 1-Click Quick Fee Setter from Student Card
function quickSetStudentFee(type) {
    if (type === 'tuition_annual') {
        const input = document.querySelector('input[name="feeCategory"][value="tuition"]');
        if (input) input.checked = true;
        handleCategoryChange('tuition');
        updateTuitionPreset('annual');
        showNotification('Configured: Full Year College Tuition Fee (₹72,000)');
    } else if (type === 'tuition_sem1') {
        const input = document.querySelector('input[name="feeCategory"][value="tuition"]');
        if (input) input.checked = true;
        handleCategoryChange('tuition');
        updateTuitionPreset('sem1');
        showNotification('Configured: Semester I Tuition Fee (₹36,000)');
    } else if (type === 'jntu') {
        const input = document.querySelector('input[name="feeCategory"][value="jntu"]');
        if (input) input.checked = true;
        handleCategoryChange('jntu');
        updateJntuPreset('jntu_common');
        showNotification('Configured: JNTU-H University Fee (₹6,500)');
    } else if (type === 'combined') {
        const input = document.querySelector('input[name="feeCategory"][value="combined"]');
        if (input) input.checked = true;
        handleCategoryChange('combined');
        updateCombinedPreset('full_pkg');
        showNotification('Configured: Complete Package - Tuition ₹72,000 + JNTUH ₹6,500 = ₹78,500');
    }
}

function toggleStudentQuota() {
    const isCurrentlyMgmt = PaymentState.student.quota.includes('Management') || PaymentState.student.isManagement;
    PaymentState.student.isManagement = !isCurrentlyMgmt;
    PaymentState.student.quota = !isCurrentlyMgmt ? 'Management Quota' : 'Convenor Quota (EAPCET)';

    const quotaDropdown = document.getElementById('subOptQuota');
    if (quotaDropdown) {
        quotaDropdown.value = !isCurrentlyMgmt ? 'Management Quota' : 'Convenor Quota (EAPCET / ECET)';
    }

    renderStudentVerifiedCard();
    showNotification(`Updated to ${PaymentState.student.quota} for ${PaymentState.student.name}`);
}

// ===================================================================
// COMPREHENSIVE ROLL NUMBER AUTO-FILL & VERIFICATION ENGINE
// ===================================================================

// Smart Roll Matcher Function
function findMatchingStudent(inputStr) {
    if (!inputStr) return null;
    const raw = inputStr.trim().toUpperCase();
    const clean = raw.replace(/[^A-Z0-9]/g, '');
    if (!clean) return null;

    // 1. Exact full roll match (e.g. 24QA1A0501 or 25QA5A0501)
    let found = CSE_STUDENTS_DATABASE.find(s => s.roll.toUpperCase() === clean);
    if (found) return found;

    // 2. Exact match on last 4 characters (e.g. 0501, 0561, 05D0, 05D1, 05J0, 0510)
    if (clean.length >= 4) {
        found = CSE_STUDENTS_DATABASE.find(s => s.roll.toUpperCase().endsWith(clean));
        if (found) return found;
    }

    // 3. Exact 3-character match (e.g. 501, 560, 561, 5D0, 5D1, 5J0, 510)
    if (clean.length === 3) {
        // Special case for lateral 510: "d1 to 510 belongs to c section"
        if (clean === '510') {
            const lat510 = CSE_STUDENTS_DATABASE.find(s => s.roll === '25QA5A0510');
            if (lat510) return lat510;
        }
        // Match 0 + clean at the end, e.g. 501 -> 0501
        found = CSE_STUDENTS_DATABASE.find(s => s.roll.toUpperCase().endsWith('0' + clean));
        if (found) return found;
        found = CSE_STUDENTS_DATABASE.find(s => s.roll.toUpperCase().endsWith(clean));
        if (found) return found;
    }

    // 4. Exact 2-character hex match (e.g. D0, D1, J0, 60, 61)
    if (clean.length === 2 && isNaN(clean)) {
        found = CSE_STUDENTS_DATABASE.find(s => s.roll.toUpperCase().endsWith('05' + clean) || s.roll.toUpperCase().endsWith(clean));
        if (found) return found;
    }

    // 5. Clean ends with or contains (for 5+ chars like QA1A0501)
    if (clean.length >= 5) {
        found = CSE_STUDENTS_DATABASE.find(s => s.roll.toUpperCase().endsWith(clean) || s.roll.toUpperCase() === clean);
        if (found) return found;
    }

    return null;
}

// Student Search and Real-Time Autocomplete Engine
function initStudentSearchAndAutocomplete() {
    const rollInput = document.getElementById('studentRoll');
    const suggestionsBox = document.getElementById('rollSuggestions');
    const matchStatus = document.getElementById('rollMatchStatus');
    const verifiedIcon = document.getElementById('rollVerifiedIcon');

    if (!rollInput) return;

    // Helper to perform instant auto-load
    function triggerAutoCheck(val, isExplicit = false) {
        if (!val || val.trim().length === 0) {
            if (suggestionsBox) suggestionsBox.style.display = 'none';
            resetStudentFields();
            return;
        }

        const trimmed = val.trim();
        const matched = findMatchingStudent(trimmed);

        if (matched) {
            // Immediate Automatic Fill from Database into Provided Space!
            selectStudent(matched, isExplicit);
            if (suggestionsBox) suggestionsBox.style.display = 'none';
            rollInput.classList.add('roll-input-matched');
            if (verifiedIcon) verifiedIcon.style.display = 'flex';
            return;
        }

        // If not exact match yet, show search suggestions
        rollInput.classList.remove('roll-input-matched');
        if (verifiedIcon) verifiedIcon.style.display = 'none';
        const verifyRollBtn = document.getElementById('verifyRollBtn');
        const btnProvidedProceed = document.getElementById('btnProvidedSpaceProceed');
        if (verifyRollBtn) verifyRollBtn.classList.remove('btn-ready');
        if (btnProvidedProceed) btnProvidedProceed.classList.remove('btn-ready');

        const q = trimmed.toLowerCase();
        const matches = CSE_STUDENTS_DATABASE.filter(s => 
            s.roll.toLowerCase().includes(q) ||
            s.name.toLowerCase().includes(q) ||
            s.roll.toLowerCase().endsWith(q)
        ).slice(0, 8);

        if (matchStatus) {
            if (matches.length > 0) {
                matchStatus.innerHTML = `<span class="match-searching"><i class="fas fa-magnifying-glass"></i> Found ${matches.length} matching students in CSE 2024-2028 batch... Press Enter or click to auto-fill</span>`;
            } else {
                matchStatus.innerHTML = `<span class="match-not-found"><i class="fas fa-triangle-exclamation text-warning"></i> "${trimmed}" not found in CSE 2024-2028 database (Sections A, B, C). You may enter custom details.</span>`;
            }
        }

        if (!suggestionsBox) return;

        if (!matches.length) {
            suggestionsBox.innerHTML = `<div class="suggestion-item no-match">No student matching "${trimmed}"</div>`;
            suggestionsBox.style.display = 'block';
            return;
        }

        let html = '';
        matches.forEach(m => {
            const secBadge = m.section.includes('Section A') ? 'Sec A' : m.section.includes('Section B') ? 'Sec B' : 'Sec C';
            const quotaBadge = m.isManagement ? 'Mgmt' : 'Convenor';
            html += `
                <div class="suggestion-item" onclick="handleSuggestionClick('${m.roll}')">
                    <div class="sugg-left">
                        <span class="sugg-roll">${m.roll}</span>
                        <span class="sugg-name">${m.name}</span>
                    </div>
                    <div class="sugg-right">
                        <span class="sugg-badge sugg-badge-sec">${secBadge}</span>
                        <span class="sugg-badge sugg-badge-quota ${m.isManagement ? 'quota-mgmt' : ''}">${quotaBadge}</span>
                    </div>
                </div>
            `;
        });

        suggestionsBox.innerHTML = html;
        suggestionsBox.style.display = 'block';
    }

    // 1. Real-time auto-load while typing
    rollInput.addEventListener('input', (e) => {
        triggerAutoCheck(e.target.value, false);
    });

    // 2. On Paste: Instant full match check
    rollInput.addEventListener('paste', (e) => {
        setTimeout(() => {
            triggerAutoCheck(rollInput.value, true);
        }, 50);
    });

    // 3. On Keydown (Enter / Tab keys)
    rollInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleGoClick();
        } else if (e.key === 'Tab') {
            const val = rollInput.value.trim();
            const matched = findMatchingStudent(val);
            if (matched) {
                selectStudent(matched, true);
                if (suggestionsBox) suggestionsBox.style.display = 'none';
            }
        }
    });

    // 4. On Blur
    rollInput.addEventListener('blur', () => {
        setTimeout(() => {
            if (suggestionsBox) suggestionsBox.style.display = 'none';
            const val = rollInput.value.trim();
            if (val) {
                const matched = findMatchingStudent(val);
                if (matched) {
                    selectStudent(matched, false);
                }
            }
        }, 200);
    });

    // 5. On Change
    rollInput.addEventListener('change', (e) => {
        triggerAutoCheck(e.target.value, true);
    });

    // Close suggestions on outside click
    document.addEventListener('click', (e) => {
        if (!rollInput.contains(e.target) && suggestionsBox && !suggestionsBox.contains(e.target)) {
            suggestionsBox.style.display = 'none';
        }
    });

    // Also support studentName search
    const nameInput = document.getElementById('studentName');
    if (nameInput) {
        nameInput.addEventListener('change', (e) => {
            const q = e.target.value.trim().toLowerCase();
            if (q.length >= 3) {
                const found = CSE_STUDENTS_DATABASE.find(s => s.name.toLowerCase() === q || s.name.toLowerCase().includes(q));
                if (found) {
                    selectStudent(found, true);
                }
            }
        });
    }
}

function handleSuggestionClick(roll) {
    const student = CSE_STUDENTS_DATABASE.find(s => s.roll === roll);
    if (student) {
        enterPersonName(student.name, student.roll);
    }
    const box = document.getElementById('rollSuggestions');
    if (box) box.style.display = 'none';
}

// Attach Event Listeners
function attachEventListeners() {
    // Quick Demo Autofill button (Cycles randomly through CSE Batch 2024-2028 across Sections A, B, C & Management)
    const quickBtn = document.getElementById('quickFillDemoBtn');
    if (quickBtn) {
        quickBtn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * CSE_STUDENTS_DATABASE.length);
            const student = CSE_STUDENTS_DATABASE[randomIndex];
            selectStudent(student);
        });
    }

    // Browse Students Button
    const browseBtn = document.getElementById('browseStudentsBtn');
    if (browseBtn) {
        browseBtn.addEventListener('click', openStudentDirectoryModal);
    }

    const headerBrowseBtn = document.getElementById('headerBrowseStudentsBtn');
    if (headerBrowseBtn) {
        headerBrowseBtn.addEventListener('click', openStudentDirectoryModal);
    }

    // Inputs Sync
    ['studentRoll', 'studentName', 'academicProgram', 'studentMobile', 'studentEmail'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', syncStudentState);
    });

    // Amount input sync
    const amountInput = document.getElementById('payableAmount');
    if (amountInput) {
        amountInput.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value) || 0;
            PaymentState.amount = val;
            updateAmountDisplays();
            updateLiveQrCode();
        });
    }

    // Receipt Lookup
    const lookupBtn = document.getElementById('lookupReceiptBtn');
    if (lookupBtn) lookupBtn.addEventListener('click', openLookupModal);
}

// Synchronize Student Details to State and Summary
function syncStudentState() {
    const roll = document.getElementById('studentRoll')?.value || PaymentState.student.roll;
    const name = document.getElementById('studentName')?.value || PaymentState.student.name;
    const prog = document.getElementById('academicProgram')?.value || PaymentState.student.program;
    const mobile = document.getElementById('studentMobile')?.value || PaymentState.student.mobile;
    const email = document.getElementById('studentEmail')?.value || PaymentState.student.email;

    PaymentState.student.roll = roll;
    PaymentState.student.name = name;
    PaymentState.student.program = prog;
    PaymentState.student.mobile = mobile;
    PaymentState.student.email = email;

    // Update Summary Box Elements
    const sumRoll = document.getElementById('summaryRoll');
    const sumName = document.getElementById('summaryName');
    const sumSection = document.getElementById('summarySection');
    const sumBatch = document.getElementById('summaryBatch');
    const sumQuota = document.getElementById('summaryQuota');

    if (sumRoll) sumRoll.textContent = PaymentState.student.roll;
    if (sumName) sumName.textContent = PaymentState.student.name;
    if (sumSection) sumSection.textContent = PaymentState.student.section;
    if (sumBatch) sumBatch.textContent = PaymentState.student.batch || 'CSE Batch 2024 - 2028';
    if (sumQuota) sumQuota.textContent = PaymentState.student.quota;
}

// Handle Category Change (Radio buttons)
function handleCategoryChange(category) {
    PaymentState.currentCategory = category;

    // Toggle active card class
    document.querySelectorAll('.fee-cat-card').forEach(card => {
        const input = card.querySelector('input');
        if (input && input.value === category) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    initSubOptions(category);
}

// Initialize Dynamic Suboptions per Category
function initSubOptions(category) {
    const container = document.getElementById('dynamicSubOptions');
    if (!container) return;

    let html = '';

    switch (category) {
        case 'tuition':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label><i class="fas fa-graduation-cap"></i> Academic Term & Tuition Preset (Prescribed: ₹72,000/yr)</label>
                        <select id="subOptTuitionSem" onchange="updateTuitionPreset(this.value)">
                            <option value="annual" selected>Full Academic Year Tuition Fee (Annual: ₹72,000)</option>
                            <option value="sem1">Semester I Installment (50%: ₹36,000)</option>
                            <option value="sem2">Semester II Installment (50%: ₹36,000)</option>
                            <option value="dues">Part Payment / Balance Tuition Dues</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label><i class="fas fa-user-tag"></i> Admission Quota Category</label>
                        <select id="subOptQuota" onchange="handleQuotaSelection(this.value)">
                            <option value="Convenor Quota (EAPCET / ECET)">Convenor Quota (EAPCET / ECET)</option>
                            <option value="Management Quota">Management Quota (Category-B)</option>
                            <option value="NRI Quota">NRI / Sponsored Quota</option>
                        </select>
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateTuitionPreset('annual');
            break;

        case 'jntu':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label><i class="fas fa-building-columns"></i> JNTU-H University Fee Head</label>
                        <select id="subOptJntuHead" onchange="updateJntuPreset(this.value)">
                            <option value="jntu_common" selected>JNTUH University Common Services Fee (Annual: ₹6,500)</option>
                            <option value="jntu_affil">JNTUH Affiliation & Student Services Charges (₹6,500)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label><i class="fas fa-calendar-check"></i> Academic Year</label>
                        <input type="text" readonly value="B.Tech CSE Batch 2024-2028 (JNTUH Prescribed)">
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateJntuPreset('jntu_common');
            break;

        case 'combined':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label><i class="fas fa-layer-group"></i> Complete Academic Package (Tuition + JNTU)</label>
                        <select id="subOptCombinedPackage" onchange="updateCombinedPreset(this.value)">
                            <option value="full_pkg" selected>Full Year Tuition (₹72,000) + JNTU Fee (₹6,500) = ₹78,500</option>
                            <option value="sem1_pkg">Semester 1 Tuition (₹36,000) + JNTU Fee (₹6,500) = ₹42,500</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label><i class="fas fa-receipt"></i> Package Breakdown</label>
                        <input type="text" id="combinedBreakdownDisplay" readonly value="Tuition: ₹72,000 + JNTUH: ₹6,500">
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateCombinedPreset('full_pkg');
            break;

        case 'exam':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label><i class="fas fa-file-signature"></i> Examination / Document Service</label>
                        <select id="subOptExamService" onchange="updateExamPreset(this.value)">
                            <option value="transcript" selected>Official Transcripts (₹60 per copy - Replaces SBI Challan)</option>
                            <option value="reg_exam">Autonomous Regular Semester Exam Fee (₹1,500)</option>
                            <option value="supply_exam">Supplementary Exam Fee (₹500 / subject)</option>
                            <option value="revaluation">Paper Revaluation / Recounting (₹1,000 / subject)</option>
                            <option value="condonation">Attendance Condonation Fee (₹300)</option>
                            <option value="verification">Certificate Attestation / Student Verification (₹500)</option>
                        </select>
                    </div>
                    <div class="form-group" id="transcriptCountGroup">
                        <label>Number of Transcript Copies</label>
                        <input type="number" id="subOptTranscriptQty" min="1" max="20" value="1" oninput="calculateTranscriptTotal(this.value)">
                        <span class="input-hint">₹60 per copy. Instant electronic payment slip generated.</span>
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateExamPreset('transcript');
            break;

        case 'admission':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label><i class="fas fa-user-plus"></i> Admission Service</label>
                        <select id="subOptAdmService" onchange="updateAdmissionPreset(this.value)">
                            <option value="app_fee" selected>B.Tech / MBA / Diploma Application Form Fee (₹1,000)</option>
                            <option value="seat_confirm">Seat Confirmation / Token Advance (₹10,000)</option>
                            <option value="provisional">Provisional Registration Charge (₹2,500)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Academic Batch</label>
                        <input type="text" readonly value="B.Tech CSE Batch 2024-2028 Admissions">
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateAdmissionPreset('app_fee');
            break;

        case 'transport':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label><i class="fas fa-bus"></i> Select Bus Route (Hyderabad / Secunderabad)</label>
                        <select id="subOptBusRoute" onchange="updateTransportPreset(this.value)">
                            <option value="Route 1: Dilsukhnagar - Kothapet - LB Nagar - BRIL">Route 1: Dilsukhnagar & LB Nagar (₹18,000 / yr)</option>
                            <option value="Route 2: Uppal - Nagole - Hayathnagar - BRIL">Route 2: Uppal & Nagole (₹18,000 / yr)</option>
                            <option value="Route 3: ECIL - Malkajgiri - Tarnaka - BRIL">Route 3: ECIL & Tarnaka (₹21,000 / yr)</option>
                            <option value="Route 4: Mehdipatnam - Chandrayangutta - BRIL">Route 4: Mehdipatnam & Old City (₹20,000 / yr)</option>
                            <option value="Route 5: Secunderabad - Ramanthapur - BRIL">Route 5: Secunderabad & Amberpet (₹20,000 / yr)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Pass Duration</label>
                        <select id="subOptBusDuration" onchange="updateTransportDuration(this.value)">
                            <option value="annual" selected>Full Year (Annual Bus Pass)</option>
                            <option value="semester">One Semester Only (50% Cost)</option>
                        </select>
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateTransportPreset(document.getElementById('subOptBusRoute').value);
            break;

        case 'hostel':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label><i class="fas fa-bed"></i> Hostel Accommodation Type</label>
                        <select id="subOptHostelRoom" onchange="updateHostelPreset(this.value)">
                            <option value="Non-AC Standard Room with Mess (₹50,000 / Year)" selected>Non-AC Room + Food & Mess (₹50,000 / Year)</option>
                            <option value="AC Premium Room with Mess (₹75,000 / Year)">AC Premium Room + Food & Mess (₹75,000 / Year)</option>
                            <option value="Hostel Caution Deposit / Admission (₹5,000)">Hostel Caution Deposit (Refundable: ₹5,000)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Installment Term</label>
                        <select id="subOptHostelTerm" onchange="updateHostelTerm(this.value)">
                            <option value="full" selected>Full Annual Payment</option>
                            <option value="term1">Term 1 (Semester I - 50%)</option>
                        </select>
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateHostelPreset('Non-AC Standard Room with Mess (₹50,000 / Year)');
            break;

        case 'custom':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label><i class="fas fa-pen-nib"></i> Specify Custom Purpose</label>
                        <input type="text" id="subOptCustomTitle" placeholder="e.g., CSE Technical Certification / Lab Kit Fee" oninput="updateCustomPurpose(this.value)">
                    </div>
                    <div class="form-group">
                        <label><i class="fas fa-indian-rupee-sign"></i> Enter Amount</label>
                        <input type="number" id="subOptCustomAmt" placeholder="Amount in ₹" min="50" value="1000" oninput="updateCustomAmount(this.value)">
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateCustomPurpose('CSE Department Certification / Lab Dues');
            updateCustomAmount(1000);
            break;
    }
}

// Preset Updaters
function updateTuitionPreset(type) {
    let amt = 72000;
    let desc = `B.Tech Annual Tuition Fee (2024-28 Batch - ${PaymentState.student.section}) - ₹72,000`;
    if (type === 'annual') {
        amt = 72000;
        desc = `B.Tech Full Year Tuition Fee (2024-28 Batch - ${PaymentState.student.section}) - ₹72,000`;
    } else if (type === 'sem1') {
        amt = 36000;
        desc = `B.Tech Semester I Tuition Fee (2024-28 Batch - ${PaymentState.student.section}) - ₹36,000`;
    } else if (type === 'sem2') {
        amt = 36000;
        desc = `B.Tech Semester II Tuition Fee (2024-28 Batch - ${PaymentState.student.section}) - ₹36,000`;
    } else if (type === 'dues') {
        amt = 20000;
        desc = `B.Tech Tuition Fee Balance Dues (2024-28 Batch - ${PaymentState.student.section})`;
    }
    setFeeDetails(desc, amt);
}

function updateJntuPreset(type) {
    const amt = 6500;
    const desc = `JNTU-H University Common Services Fee (2024-28 Batch) - ₹6,500`;
    setFeeDetails(desc, amt);
}

function updateCombinedPreset(type) {
    if (type === 'sem1_pkg') {
        const amt = 42500;
        const desc = `Tuition Sem-I (₹36,000) + JNTUH University Fee (₹6,500) Package`;
        setFeeDetails(desc, amt);
    } else {
        const amt = 78500;
        const desc = `Full Year Tuition (₹72,000) + JNTUH University Fee (₹6,500) Package`;
        setFeeDetails(desc, amt);
    }
}

function handleQuotaSelection(val) {
    PaymentState.student.quota = val;
    PaymentState.student.isManagement = val.includes('Management');
    renderStudentVerifiedCard();
    showNotification(`Applied ${val} to current payment configuration.`);
}

function updateExamPreset(service) {
    const qtyGroup = document.getElementById('transcriptCountGroup');
    if (service === 'transcript') {
        if (qtyGroup) qtyGroup.style.display = 'block';
        calculateTranscriptTotal(document.getElementById('subOptTranscriptQty')?.value || 1);
    } else {
        if (qtyGroup) qtyGroup.style.display = 'none';
        let amt = 1500;
        let desc = 'Autonomous Regular Semester Exam Fee';
        if (service === 'supply_exam') {
            amt = 500;
            desc = 'Supplementary Exam Fee (Per Subject)';
        } else if (service === 'revaluation') {
            amt = 1000;
            desc = 'Exam Answer Script Revaluation Fee';
        } else if (service === 'condonation') {
            amt = 300;
            desc = 'Exam Attendance Condonation Fee';
        } else if (service === 'verification') {
            amt = 500;
            desc = 'Official Student Certificate Verification Fee';
        }
        setFeeDetails(desc, amt);
    }
}

function calculateTranscriptTotal(qty) {
    const count = parseInt(qty) || 1;
    const rate = 60; // BRIL transcript procedure states Rs. 60 per transcript
    const total = count * rate;
    const desc = `Official Exam Transcripts (${count} ${count > 1 ? 'Copies' : 'Copy'} @ ₹60/copy)`;
    setFeeDetails(desc, total);
}

function updateAdmissionPreset(type) {
    let amt = 1000;
    let desc = 'BRIL Admission Application Form Fee (CSE 2024-2028)';
    if (type === 'seat_confirm') {
        amt = 10000;
        desc = 'Seat Confirmation Token Advance - B.Tech CSE';
    } else if (type === 'provisional') {
        amt = 2500;
        desc = 'Provisional Admission Registration Charge';
    }
    setFeeDetails(desc, amt);
}

function updateTransportPreset(route) {
    const duration = document.getElementById('subOptBusDuration')?.value || 'annual';
    let baseAmt = 18000;
    if (route.includes('ECIL')) baseAmt = 21000;
    else if (route.includes('Mehdipatnam') || route.includes('Secunderabad')) baseAmt = 20000;

    const finalAmt = duration === 'semester' ? (baseAmt / 2) : baseAmt;
    const desc = `College Bus Transport Fee: ${route.split(':')[0]} (${duration.toUpperCase()})`;
    setFeeDetails(desc, finalAmt);
}

function updateTransportDuration(duration) {
    const route = document.getElementById('subOptBusRoute')?.value || '';
    updateTransportPreset(route);
}

function updateHostelPreset(room) {
    const term = document.getElementById('subOptHostelTerm')?.value || 'full';
    let baseAmt = 50000;
    if (room.includes('75,000')) baseAmt = 75000;
    else if (room.includes('5,000')) baseAmt = 5000;

    const finalAmt = (term === 'term1' && baseAmt > 5000) ? (baseAmt / 2) : baseAmt;
    const desc = `Hostel & Mess Charges: ${room.split('(')[0]}`;
    setFeeDetails(desc, finalAmt);
}

function updateHostelTerm(term) {
    const room = document.getElementById('subOptHostelRoom')?.value || '';
    updateHostelPreset(room);
}

function updateCustomPurpose(title) {
    const amt = parseFloat(document.getElementById('subOptCustomAmt')?.value) || 1000;
    setFeeDetails(title || 'Miscellaneous College Dues', amt);
}

function updateCustomAmount(val) {
    const title = document.getElementById('subOptCustomTitle')?.value || 'Miscellaneous College Dues';
    setFeeDetails(title, parseFloat(val) || 100);
}

// Master Setter for Fee Details
function setFeeDetails(purpose, amount) {
    PaymentState.purpose = purpose;
    PaymentState.amount = amount;

    const purposeInput = document.getElementById('feePurpose');
    const amtInput = document.getElementById('payableAmount');

    if (purposeInput) purposeInput.value = purpose;
    if (amtInput) amtInput.value = amount;

    updateAmountDisplays();
    updateLiveQrCode();
    if (typeof updateStep2ProceedBanner === 'function') {
        updateStep2ProceedBanner(PaymentState.currentCategory);
    }
}

// Update all amount labels across the page
function updateAmountDisplays() {
    const formatted = '₹' + PaymentState.amount.toLocaleString('en-IN');
    const formattedWithDecimals = '₹' + PaymentState.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 });

    const btnPay = document.getElementById('btnPayAmount');
    if (btnPay) btnPay.textContent = formatted;

    const qrAmt = document.getElementById('qrAmountDisplay');
    if (qrAmt) qrAmt.textContent = formatted;

    const sumBase = document.getElementById('summaryBase');
    if (sumBase) sumBase.textContent = formattedWithDecimals;

    const sumTotal = document.getElementById('summaryTotal');
    if (sumTotal) sumTotal.textContent = formattedWithDecimals;

    const sumHead = document.getElementById('summaryHead');
    if (sumHead) sumHead.textContent = PaymentState.purpose;

    // Modal elements
    const modalFeeValue = document.getElementById('modalFeeValue');
    const modalFeeTitle = document.getElementById('modalFeeTitle');
    if (modalFeeValue) modalFeeValue.textContent = formatted;
    if (modalFeeTitle) modalFeeTitle.textContent = PaymentState.purpose;
}

// Build Standard NPCI UPI Query Parameters (clean format without invalid merchant codes)
function generateUpiQueryParams() {
    const encodedName = encodeURIComponent(UPI_CONFIG.name);
    const roll = PaymentState.student?.roll || 'Student';
    const purpose = PaymentState.purpose || 'Fee Payment';
    const encodedNote = encodeURIComponent(`${roll} - ${purpose}`);
    const orderRef = PaymentState.orderId ? encodeURIComponent(PaymentState.orderId) : '';
    let params = `pa=${encodeURIComponent(UPI_CONFIG.vpa)}&pn=${encodedName}&am=${PaymentState.amount}&cu=INR&tn=${encodedNote}`;
    if (orderRef) params += `&tr=${orderRef}`;
    if (UPI_CONFIG.merchantCode) params += `&mc=${encodeURIComponent(UPI_CONFIG.merchantCode)}`;
    return params;
}

// Generate Standard National UPI URI String
function generateUpiString() {
    return `upi://pay?${generateUpiQueryParams()}`;
}

// Helper to safely render QR code regardless of library variation
function safeRenderQr(container, text, size, darkColor, callback) {
    if (!container) return;
    container.innerHTML = '';

    if (window.QRCode && typeof window.QRCode.toCanvas === 'function') {
        window.QRCode.toCanvas(text, {
            width: size,
            margin: 1,
            color: {
                dark: darkColor || '#0000cc',
                light: '#ffffff'
            }
        }, function (error, canvas) {
            if (!error && canvas) {
                container.appendChild(canvas);
                if (callback) callback(null, canvas);
            }
        });
    } else if (typeof window.QRCode === 'function') {
        const qr = new window.QRCode(container, {
            text: text,
            width: size,
            height: size,
            colorDark: darkColor || '#0000cc',
            colorLight: '#ffffff'
        });
        if (callback) {
            setTimeout(() => {
                const el = container.querySelector('canvas') || container.querySelector('img');
                callback(null, el);
            }, 100);
        }
    } else {
        const img = document.createElement('img');
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`;
        img.style.width = '100%';
        img.style.height = '100%';
        container.appendChild(img);
        if (callback) callback(null, img);
    }
}

// Update Dynamic Live QR Code
function updateLiveQrCode() {
    const qrHolder = document.getElementById('dynamicQRElement');
    if (!qrHolder) return;
    const upiString = generateUpiString();
    safeRenderQr(qrHolder, upiString, 170, '#0a0a2e');
}

// Quick UPI App Selector (PhonePe, GPay, Paytm chips on the right side)
function selectQuickUpiApp(appName) {
    if (!validateFormFields()) return;

    openPaymentModal();
    switchGatewayTab('upi');
    showNotification(`Selected ${appName}. Click 'Pay with ${appName}' to complete transaction.`);
}

// Form validation
function validateFormFields() {
    const roll = document.getElementById('studentRoll');
    const name = document.getElementById('studentName');
    const prog = document.getElementById('academicProgram');
    const mobile = document.getElementById('studentMobile');
    const email = document.getElementById('studentEmail');

    if (!roll.value.trim()) {
        roll.focus();
        alert('Please enter Hall Ticket / Roll Number');
        return false;
    }
    if (!prog.value) {
        prog.focus();
        alert('Please select Course / Department');
        return false;
    }
    if (!name.value.trim()) {
        name.focus();
        alert('Please enter Student Name');
        return false;
    }
    if (!mobile.value.trim() || mobile.value.length < 10) {
        mobile.focus();
        alert('Please enter a valid 10-digit Mobile Number');
        return false;
    }
    if (!email.value.trim() || !email.value.includes('@')) {
        email.focus();
        alert('Please enter a valid Email ID for e-Receipt delivery');
        return false;
    }

    syncStudentState();
    return true;
}

// Main Flow Trigger: "Proceed to Payment Gateway"
function initiatePaymentFlow() {
    if (!validateFormFields()) return;
    openPaymentModal();
}

// Open Payment Modal
function openPaymentModal() {
    generateOrderReference();
    updateAmountDisplays();
    renderModalQrCode();
    startModalTimer();

    const statusCard = document.getElementById('mobileUpiStatusCard');
    if (statusCard) statusCard.style.display = 'none';

    document.getElementById('paymentGatewayModal').classList.add('open');
}

// Close Payment Modal
function closePaymentModal() {
    document.getElementById('paymentGatewayModal').classList.remove('open');
    if (PaymentState.countdownInterval) clearInterval(PaymentState.countdownInterval);

    const statusCard = document.getElementById('mobileUpiStatusCard');
    if (statusCard) statusCard.style.display = 'none';
}

// Switch Gateway Tabs
function switchGatewayTab(tabKey) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    const activeContent = document.getElementById(`tab-${tabKey}`);
    if (activeContent) activeContent.classList.add('active');

    const clickedBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick')?.includes(tabKey));
    if (clickedBtn) clickedBtn.classList.add('active');

    if (tabKey === 'qr') {
        renderModalQrCode();
    }
}

// Render QR inside modal
function renderModalQrCode() {
    const modalQrHolder = document.getElementById('modalDynamicQR');
    if (!modalQrHolder) return;
    const upiString = generateUpiString();
    safeRenderQr(modalQrHolder, upiString, 190, '#0000cc');
}

// Modal Countdown Timer
function startModalTimer() {
    if (PaymentState.countdownInterval) clearInterval(PaymentState.countdownInterval);

    let timeLeft = 300; // 5 minutes
    const timerDisplay = document.getElementById('qrCountdown');

    PaymentState.countdownInterval = setInterval(() => {
        timeLeft--;
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        if (timerDisplay) {
            timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }

        if (timeLeft <= 0) {
            clearInterval(PaymentState.countdownInterval);
            alert('Payment session expired. Refreshing order reference.');
            generateOrderReference();
            startModalTimer();
        }
    }, 1000);
}

// Build platform-specific deep link for Android / iOS
function buildAppDeepLink(appName) {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const queryParams = generateUpiQueryParams();

    if (isAndroid) {
        if (appName === 'PhonePe') {
            // Official Android Intent for PhonePe app
            return `intent://pay?${queryParams}#Intent;scheme=upi;package=com.phonepe.app;end`;
        } else if (appName === 'Google Pay' || appName === 'GPay') {
            // Official Android Intent for Google Pay app
            return `intent://pay?${queryParams}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;
        } else if (appName === 'Paytm') {
            // Official Android Intent for Paytm app
            return `intent://pay?${queryParams}#Intent;scheme=upi;package=net.one97.paytm;end`;
        } else {
            // Universal UPI Chooser for any installed app
            return `upi://pay?${queryParams}`;
        }
    } else if (isIOS) {
        if (appName === 'PhonePe') {
            return `phonepe://pay?${queryParams}`;
        } else if (appName === 'Google Pay' || appName === 'GPay') {
            return `gpay://upi/pay?${queryParams}`;
        } else if (appName === 'Paytm') {
            return `paytmmp://pay?${queryParams}`;
        } else {
            return `upi://pay?${queryParams}`;
        }
    }

    // Default fallback
    return `upi://pay?${queryParams}`;
}

// Safely launch URI without triggering net::ERR_UNKNOWN_URL_SCHEME browser crash
function safeLaunchUri(uri, onFallback) {
    let appLaunched = false;

    const blurOrHideHandler = () => {
        appLaunched = true;
    };

    window.addEventListener('blur', blurOrHideHandler, { once: true });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) appLaunched = true;
    }, { once: true });

    // Invisible temporary anchor prevents browser address bar navigation error
    const link = document.createElement('a');
    link.href = uri;
    link.style.display = 'none';
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);

    try {
        link.click();
    } catch (e) {
        console.warn('Safe URI launch error:', e);
    } finally {
        setTimeout(() => {
            if (link.parentNode) link.parentNode.removeChild(link);
        }, 500);
    }

    // Check after 1.8 seconds if user was not switched to external app
    setTimeout(() => {
        if (!appLaunched && document.visibilityState === 'visible') {
            if (typeof onFallback === 'function') {
                onFallback();
            }
        }
    }, 1800);
}

// Show Mobile UPI Status Card
function showMobileUpiStatus(appName) {
    const card = document.getElementById('mobileUpiStatusCard');
    const title = document.getElementById('upiStatusTitle');
    const desc = document.getElementById('upiStatusDesc');

    if (card && title && desc) {
        title.textContent = `Opening ${appName}...`;
        desc.textContent = `Connecting to ${appName} for ₹${PaymentState.amount.toLocaleString('en-IN')}. Approve the transaction in your app or choose an option below:`;
        card.style.display = 'block';
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Handle Mobile Fallback when App is Not Installed or Launch is Blocked
function handleMobileUpiFallback(appName) {
    const title = document.getElementById('upiStatusTitle');
    const desc = document.getElementById('upiStatusDesc');

    if (title && desc) {
        title.textContent = `Unable to launch ${appName} directly`;
        desc.textContent = `If ${appName} is not installed or your browser blocked direct opening, choose an option below to proceed:`;
    }
}

// Confirm Mobile Payment Success
function confirmMobilePaymentSuccess() {
    const mode = PaymentState.selectedPaymentMode || 'UPI Mobile';
    showProcessingModal('Verifying Payment Ledger...', 'Reconciling transaction with college fee database...');
    setTimeout(() => {
        simulatePaymentSuccess(mode);
    }, 1500);
}

// Execute Payment with Specific App (PhonePe, Google Pay, Paytm, Any UPI)
function executeAppPayment(appName) {
    PaymentState.selectedPaymentMode = `${appName} UPI`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const deepLink = buildAppDeepLink(appName);

    if (isMobile) {
        // Show in-modal status & fallback card
        showMobileUpiStatus(appName);

        // Safe launch without crashing browser to ERR_UNKNOWN_URL_SCHEME
        safeLaunchUri(deepLink, () => {
            handleMobileUpiFallback(appName);
        });
    } else {
        // Desktop: show gateway processing modal & simulate success
        showProcessingModal(
            `Connecting to ${appName} Gateway...`,
            `Forwarding authorization request for ₹${PaymentState.amount.toLocaleString('en-IN')}`
        );
        setTimeout(() => {
            simulatePaymentSuccess(`${appName} UPI`);
        }, 2200);
    }
}

// Execute VPA Collect Request
function executeVpaPayment() {
    const vpa = document.getElementById('customVpa').value.trim();
    if (!vpa || !vpa.includes('@')) {
        alert('Please enter a valid UPI ID (e.g., student@oksbi, user@ybl)');
        document.getElementById('customVpa').focus();
        return;
    }

    PaymentState.selectedPaymentMode = `UPI (${vpa})`;
    showProcessingModal(`Sending UPI Collect to ${vpa}...`, `Please open your UPI app and authorize the payment within 5 minutes.`);

    setTimeout(() => {
        simulatePaymentSuccess(`UPI (${vpa})`);
    }, 2800);
}

// Card Payment Handler
function executeCardPayment() {
    const cardNum = document.getElementById('cardNumber').value.replace(/\s+/g, '');
    const expiry = document.getElementById('cardExpiry').value;
    const cvv = document.getElementById('cardCvv').value;

    if (cardNum.length < 15) {
        alert('Please enter a valid 16-digit card number');
        return;
    }
    if (!expiry || expiry.length < 5) {
        alert('Please enter card expiry (MM/YY)');
        return;
    }
    if (!cvv || cvv.length < 3) {
        alert('Please enter a valid CVV');
        return;
    }

    PaymentState.selectedPaymentMode = `Debit / Credit Card (ending ${cardNum.slice(-4)})`;
    showProcessingModal('Authenticating with Bank 3D-Secure...', 'Verifying card credentials with payment gateway...');

    setTimeout(() => {
        simulatePaymentSuccess('Card Payment');
    }, 2500);
}

// Net Banking Payment Handler
function executeNetBankingPayment() {
    const selectedBank = document.querySelector('input[name="bankOption"]:checked')?.value || document.getElementById('otherBankSelect')?.value;
    if (!selectedBank) {
        alert('Please select a bank');
        return;
    }

    PaymentState.selectedPaymentMode = `Net Banking - ${selectedBank}`;
    showProcessingModal(`Redirecting to ${selectedBank}...`, 'Connecting securely to institutional banking gateway...');

    setTimeout(() => {
        simulatePaymentSuccess(`Net Banking (${selectedBank})`);
    }, 2500);
}

// Card Number Formatter
function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, '');
    let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
    input.value = formatted.substring(0, 19);
}

// Processing Modal Show / Hide
function showProcessingModal(title, subtitle) {
    closePaymentModal();
    const modal = document.getElementById('processingModal');
    document.getElementById('processingTitle').textContent = title;
    document.getElementById('processingSubtitle').textContent = subtitle;
    modal.classList.add('open');
}

function hideProcessingModal() {
    document.getElementById('processingModal').classList.remove('open');
}

// Payment Success Simulation & Receipt Generation
function simulatePaymentSuccess(methodUsed) {
    hideProcessingModal();

    if (typeof confetti === 'function') {
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
        });
    }

    const timestamp = Date.now();
    const dateObj = new Date();
    const dateFormatted = dateObj.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }) + ' ' + dateObj.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const receiptNo = `BRIL-REC-2026-${timestamp.toString().slice(-4)}`;
    const txnId = `TXN-${(methodUsed || 'UPI').toUpperCase().replace(/[^A-Z]/g, '')}-${timestamp.toString().slice(-10)}`;

    const record = {
        receiptNo,
        txnId,
        date: dateFormatted,
        mode: methodUsed || PaymentState.selectedPaymentMode,
        roll: PaymentState.student.roll,
        name: PaymentState.student.name,
        branch: PaymentState.student.program,
        batch: PaymentState.student.batch || '2024 - 2028',
        section: PaymentState.student.section || 'Section A (501 to 560)',
        quota: PaymentState.student.quota || 'Convenor Quota (EAPCET)',
        mobile: PaymentState.student.mobile,
        email: PaymentState.student.email,
        purpose: PaymentState.purpose,
        amount: PaymentState.amount
    };

    saveReceiptToHistory(record);

    // Populate Receipt Modal
    const rcptNoEl = document.getElementById('rcptNo');
    const rcptTxnIdEl = document.getElementById('rcptTxnId');
    const rcptDateEl = document.getElementById('rcptDate');
    const rcptModeEl = document.getElementById('rcptMode');
    const rcptNameEl = document.getElementById('rcptName');
    const rcptRollEl = document.getElementById('rcptRoll');
    const rcptBranchEl = document.getElementById('rcptBranch');
    const rcptBatchEl = document.getElementById('rcptBatch');
    const rcptSectionEl = document.getElementById('rcptSection');
    const rcptQuotaEl = document.getElementById('rcptQuota');
    const rcptMobileEl = document.getElementById('rcptMobile');
    const rcptEmailEl = document.getElementById('rcptEmail');
    const rcptParticularsEl = document.getElementById('rcptParticulars');

    function enforceBlackText(el) {
        if (!el) return;
        el.style.setProperty('color', '#000000', 'important');
        el.style.setProperty('-webkit-text-fill-color', '#000000', 'important');
        el.style.setProperty('font-weight', '800', 'important');
    }

    if (rcptNoEl) { rcptNoEl.textContent = record.receiptNo; enforceBlackText(rcptNoEl); }
    if (rcptTxnIdEl) { rcptTxnIdEl.textContent = record.txnId; enforceBlackText(rcptTxnIdEl); }
    if (rcptDateEl) { rcptDateEl.textContent = record.date; enforceBlackText(rcptDateEl); }
    if (rcptModeEl) { rcptModeEl.textContent = record.mode; enforceBlackText(rcptModeEl); }
    if (rcptNameEl) { rcptNameEl.textContent = record.name; enforceBlackText(rcptNameEl); }
    if (rcptRollEl) { rcptRollEl.textContent = record.roll; enforceBlackText(rcptRollEl); }
    if (rcptBranchEl) { rcptBranchEl.textContent = record.branch; enforceBlackText(rcptBranchEl); }
    if (rcptBatchEl) { rcptBatchEl.textContent = record.batch || '2024 - 2028'; enforceBlackText(rcptBatchEl); }
    if (rcptSectionEl) { rcptSectionEl.textContent = record.section || 'Section A'; enforceBlackText(rcptSectionEl); }
    if (rcptQuotaEl) { rcptQuotaEl.textContent = record.quota || 'Convenor Quota (EAPCET)'; enforceBlackText(rcptQuotaEl); }
    if (rcptMobileEl) { rcptMobileEl.textContent = record.mobile || '+91-9848000000'; enforceBlackText(rcptMobileEl); }
    if (rcptEmailEl) { rcptEmailEl.textContent = record.email || (record.roll + '@b-iet.ac.in'); enforceBlackText(rcptEmailEl); }
    if (rcptParticularsEl) { rcptParticularsEl.textContent = record.purpose; enforceBlackText(rcptParticularsEl); }

    const formattedAmount = '₹' + record.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 });
    const rcptTableAmount = document.getElementById('rcptTableAmount');
    const rcptTotalPaid = document.getElementById('rcptTotalPaid');
    const rcptAmountWords = document.getElementById('rcptAmountWords');

    if (rcptTableAmount) rcptTableAmount.textContent = formattedAmount;
    if (rcptTotalPaid) rcptTotalPaid.textContent = formattedAmount;
    if (rcptAmountWords) rcptAmountWords.textContent = numberToWordsIndian(record.amount) + ' Only';

    renderReceiptQr(record);
    document.getElementById('receiptModal').classList.add('open');
}

// Generate Receipt Verification QR Code
function renderReceiptQr(record) {
    const holder = document.getElementById('receiptQrCodeHolder');
    if (!holder) return;
    const verifyUrl = `https://b-iet.ac.in/verify-receipt?no=${record.receiptNo}&txn=${record.txnId}&amt=${record.amount}&roll=${record.roll}&sec=${encodeURIComponent(record.section)}&batch=2024-2028`;
    safeRenderQr(holder, verifyUrl, 65, '#0000cc');
}

function closeReceiptModal() {
    document.getElementById('receiptModal').classList.remove('open');
}

// Convert Number to Words (Indian Numbering System)
function numberToWordsIndian(n) {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    function numToWordsUnder1000(num) {
        let str = '';
        if (num >= 100) {
            str += units[Math.floor(num / 100)] + ' Hundred ';
            num %= 100;
        }
        if (num >= 20) {
            str += tens[Math.floor(num / 10)] + ' ';
            num %= 10;
        }
        if (num > 0) {
            str += units[num] + ' ';
        }
        return str.trim();
    }

    if (n === 0) return 'Rupees Zero';

    let result = '';
    const crore = Math.floor(n / 10000000);
    n %= 10000000;
    const lakh = Math.floor(n / 100000);
    n %= 100000;
    const thousand = Math.floor(n / 1000);
    n %= 1000;
    const remaining = n;

    if (crore > 0) result += numToWordsUnder1000(crore) + ' Crore ';
    if (lakh > 0) result += numToWordsUnder1000(lakh) + ' Lakh ';
    if (thousand > 0) result += numToWordsUnder1000(thousand) + ' Thousand ';
    if (remaining > 0) result += numToWordsUnder1000(remaining);

    return 'Rupees ' + result.trim();
}

// Local Storage Receipt Management
function saveReceiptToHistory(record) {
    try {
        let history = JSON.parse(localStorage.getItem('bril_fee_receipts') || '[]');
        history.unshift(record);
        if (history.length > 50) history = history.slice(0, 50);
        localStorage.setItem('bril_fee_receipts', JSON.stringify(history));
    } catch (e) {
        console.error('Storage error:', e);
    }
}

// Past Receipt Lookup Modal
function openLookupModal() {
    document.getElementById('receiptLookupModal').classList.add('open');
    searchPastReceipt();
}

function closeLookupModal() {
    document.getElementById('receiptLookupModal').classList.remove('open');
}

function searchPastReceipt() {
    const query = document.getElementById('lookupQuery').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('lookupResults');
    const history = JSON.parse(localStorage.getItem('bril_fee_receipts') || '[]');

    if (!history.length) {
        resultsContainer.innerHTML = '<p class="text-muted" style="padding:10px;">No past receipts saved on this browser yet. Make a payment to generate one!</p>';
        return;
    }

    const filtered = query ? history.filter(r =>
        r.roll.toLowerCase().includes(query) ||
        r.receiptNo.toLowerCase().includes(query) ||
        r.txnId.toLowerCase().includes(query) ||
        r.mobile.includes(query) ||
        r.name.toLowerCase().includes(query)
    ) : history;

    if (!filtered.length) {
        resultsContainer.innerHTML = `<p class="text-danger" style="padding:10px;">No receipts found matching "${query}".</p>`;
        return;
    }

    let html = '';
    filtered.forEach((r, idx) => {
        html += `
            <div class="lookup-result-item">
                <div>
                    <strong>${r.receiptNo} &bull; ₹${r.amount.toLocaleString('en-IN')}</strong>
                    <div style="font-size:12px;color:#64748b;">${r.name} (${r.roll}) &bull; ${r.section || 'CSE 2024-28'} &bull; ${r.purpose}</div>
                    <div style="font-size:11px;color:#94a3b8;">${r.date} &bull; ${r.mode}</div>
                </div>
                <button type="button" class="btn-app-pay" onclick="reprintSavedReceipt(${idx})">
                    <i class="fas fa-print"></i> View
                </button>
            </div>
        `;
    });
    resultsContainer.innerHTML = html;
}

function reprintSavedReceipt(index) {
    const history = JSON.parse(localStorage.getItem('bril_fee_receipts') || '[]');
    const record = history[index];
    if (!record) return;

    closeLookupModal();

    const rcptNoEl = document.getElementById('rcptNo');
    const rcptTxnIdEl = document.getElementById('rcptTxnId');
    const rcptDateEl = document.getElementById('rcptDate');
    const rcptModeEl = document.getElementById('rcptMode');
    const rcptNameEl = document.getElementById('rcptName');
    const rcptRollEl = document.getElementById('rcptRoll');
    const rcptBranchEl = document.getElementById('rcptBranch');
    const rcptBatchEl = document.getElementById('rcptBatch');
    const rcptSectionEl = document.getElementById('rcptSection');
    const rcptQuotaEl = document.getElementById('rcptQuota');
    const rcptMobileEl = document.getElementById('rcptMobile');
    const rcptEmailEl = document.getElementById('rcptEmail');
    const rcptParticularsEl = document.getElementById('rcptParticulars');

    function enforceBlackText(el) {
        if (!el) return;
        el.style.setProperty('color', '#000000', 'important');
        el.style.setProperty('-webkit-text-fill-color', '#000000', 'important');
        el.style.setProperty('font-weight', '800', 'important');
    }

    if (rcptNoEl) { rcptNoEl.textContent = record.receiptNo; enforceBlackText(rcptNoEl); }
    if (rcptTxnIdEl) { rcptTxnIdEl.textContent = record.txnId; enforceBlackText(rcptTxnIdEl); }
    if (rcptDateEl) { rcptDateEl.textContent = record.date; enforceBlackText(rcptDateEl); }
    if (rcptModeEl) { rcptModeEl.textContent = record.mode; enforceBlackText(rcptModeEl); }
    if (rcptNameEl) { rcptNameEl.textContent = record.name; enforceBlackText(rcptNameEl); }
    if (rcptRollEl) { rcptRollEl.textContent = record.roll; enforceBlackText(rcptRollEl); }
    if (rcptBranchEl) { rcptBranchEl.textContent = record.branch; enforceBlackText(rcptBranchEl); }
    if (rcptBatchEl) { rcptBatchEl.textContent = record.batch || '2024 - 2028'; enforceBlackText(rcptBatchEl); }
    if (rcptSectionEl) { rcptSectionEl.textContent = record.section || 'Section A'; enforceBlackText(rcptSectionEl); }
    if (rcptQuotaEl) { rcptQuotaEl.textContent = record.quota || 'Convenor Quota (EAPCET)'; enforceBlackText(rcptQuotaEl); }
    if (rcptMobileEl) { rcptMobileEl.textContent = record.mobile || '+91-9848000000'; enforceBlackText(rcptMobileEl); }
    if (rcptEmailEl) { rcptEmailEl.textContent = record.email || (record.roll + '@b-iet.ac.in'); enforceBlackText(rcptEmailEl); }
    if (rcptParticularsEl) { rcptParticularsEl.textContent = record.purpose; enforceBlackText(rcptParticularsEl); }

    const formattedAmount = '₹' + record.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 });
    const rcptTableAmount = document.getElementById('rcptTableAmount');
    const rcptTotalPaid = document.getElementById('rcptTotalPaid');
    const rcptAmountWords = document.getElementById('rcptAmountWords');

    if (rcptTableAmount) rcptTableAmount.textContent = formattedAmount;
    if (rcptTotalPaid) rcptTotalPaid.textContent = formattedAmount;
    if (rcptAmountWords) rcptAmountWords.textContent = numberToWordsIndian(record.amount) + ' Only';

    renderReceiptQr(record);
    document.getElementById('receiptModal').classList.add('open');
}

// ================= STUDENT DIRECTORY MODAL =================
let currentDirectoryFilter = 'all';

function openStudentDirectoryModal() {
    const modal = document.getElementById('studentDirectoryModal');
    if (!modal) return;
    modal.classList.add('open');
    filterStudentDirectory('all');
}

function closeStudentDirectoryModal() {
    const modal = document.getElementById('studentDirectoryModal');
    if (modal) modal.classList.remove('open');
}

function filterStudentDirectory(category) {
    currentDirectoryFilter = category;

    // Update active tab button
    document.querySelectorAll('.dir-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderStudentDirectoryList();
}

function renderStudentDirectoryList() {
    const container = document.getElementById('studentDirectoryGrid');
    const searchInput = document.getElementById('directorySearchInput');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    if (!container) return;

    let list = CSE_STUDENTS_DATABASE;

    // Filter by Section / Quota tab
    if (currentDirectoryFilter === 'A') {
        list = list.filter(s => s.section.includes('Section A'));
    } else if (currentDirectoryFilter === 'B') {
        list = list.filter(s => s.section.includes('Section B'));
    } else if (currentDirectoryFilter === 'C') {
        list = list.filter(s => s.section.includes('Section C'));
    } else if (currentDirectoryFilter === 'mgmt') {
        list = list.filter(s => s.isManagement);
    }

    // Filter by search query
    if (query) {
        list = list.filter(s => 
            s.roll.toLowerCase().includes(query) ||
            s.name.toLowerCase().includes(query) ||
            s.email.toLowerCase().includes(query)
        );
    }

    const countLabel = document.getElementById('directoryCountBadge');
    if (countLabel) {
        countLabel.textContent = `Showing ${list.length} of ${CSE_STUDENTS_DATABASE.length} Students`;
    }

    if (!list.length) {
        container.innerHTML = '<div class="no-dir-results">No students match your filter or search criteria.</div>';
        return;
    }

    let html = '';
    list.forEach(st => {
        const isMgmt = st.isManagement;
        const secClass = st.section.includes('Section A') ? 'sec-badge-a' : st.section.includes('Section B') ? 'sec-badge-b' : 'sec-badge-c';
        const isSelected = st.roll === PaymentState.student.roll;

        html += `
            <div class="dir-student-card ${isSelected ? 'selected' : ''}">
                <div class="dir-card-header">
                    <span class="dir-roll">${st.roll}</span>
                    <span class="dir-badge ${secClass}">${st.section.split(' ')[0] + ' ' + st.section.split(' ')[1]}</span>
                </div>
                <div class="dir-name">${st.name}</div>
                <div class="dir-meta">
                    <span><i class="fas fa-id-badge"></i> ${isMgmt ? 'Management Quota' : 'Convenor Quota'}</span>
                    <span><i class="fas fa-coins"></i> Tuition: ₹72,000 | JNTU: ₹6,500</span>
                </div>
                <button type="button" class="btn-select-student" onclick="selectStudentFromDirectory('${st.roll}')">
                    <i class="fas fa-check"></i> ${isSelected ? 'Selected' : 'Select & Pay'}
                </button>
            </div>
        `;
    });

    container.innerHTML = html;
}

function selectStudentFromDirectory(roll) {
    const student = CSE_STUDENTS_DATABASE.find(s => s.roll === roll);
    if (student) {
        selectStudent(student);
        closeStudentDirectoryModal();
    }
}

// Notification Toast Helper
function showNotification(msg) {
    let toast = document.getElementById('brilPortalToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'brilPortalToast';
        toast.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: #0f172a;
            color: #ffffff;
            padding: 14px 22px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.35);
            font-size: 13.5px;
            font-weight: 600;
            z-index: 99999;
            transition: all 0.3s;
            border-left: 4px solid #10b981;
            display: flex;
            align-items: center;
            gap: 10px;
        `;
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
    }, 3200);
}


// ===================================================================
// ENTRANCE WORKFLOW HELPERS: STEP 1 (ROLL) & STEP 2 (FEE CHOICE)
// ===================================================================

// Quick Pill Click Handler: auto-fills roll and navigates directly to fees
function quickFillRoll(shortOrFullRoll) {
    const rollInput = document.getElementById('studentRoll');
    if (rollInput) {
        rollInput.value = shortOrFullRoll;
        const matched = findMatchingStudent(shortOrFullRoll);
        if (matched) {
            selectStudent(matched, false);
            const box = document.getElementById('rollSuggestions');
            if (box) box.style.display = 'none';

            // Navigate directly to the fee selection cards in Step 2
            updateStepperProgress(2);
            const step2 = document.getElementById('paymentSelectionStep2');
            if (step2) {
                step2.classList.add('step2-active-highlight');
                setTimeout(() => {
                    step2.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 60);
            }
            showNotification(`✓ Loaded: ${matched.name} (${matched.roll}). Select fee to pay below.`);
        }
    }
}

// Go Button Click Handler: Navigates directly to the fees selection in Step 2
function handleGoClick() {
    const rollInput = document.getElementById('studentRoll');
    if (!rollInput) return;
    const val = rollInput.value.trim();
    if (!val) {
        rollInput.focus();
        showNotification('Please enter Hall Ticket / Roll Number (e.g. 501, 561, 5D4, 510 or 24QA1A0501)');
        return;
    }

    const matched = findMatchingStudent(val);
    if (matched) {
        // 1. Directly take student data into state and synchronized inputs
        selectStudent(matched, false);

        // 2. Hide suggestions
        const box = document.getElementById('rollSuggestions');
        if (box) box.style.display = 'none';

        // 3. Mark Step 1 complete & activate Step 2
        updateStepperProgress(2);

        // 4. Smoothly navigate directly to the fee options in Step 2
        const step2 = document.getElementById('paymentSelectionStep2');
        if (step2) {
            step2.classList.add('step2-active-highlight');
            setTimeout(() => {
                step2.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 60);
        }
        showNotification(`✓ Verified: ${matched.name} (${matched.roll}). Select which fee you want to pay below.`);
    } else {
        // Check if custom details were entered
        const nameVal = document.getElementById('studentName')?.value.trim();
        if (nameVal) {
            syncStudentState();
            updateStepperProgress(2);
            const step2 = document.getElementById('paymentSelectionStep2');
            if (step2) {
                step2.classList.add('step2-active-highlight');
                step2.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            showNotification(`Proceeding with details for ${nameVal} (${val}). Select fee below.`);
        } else {
            showNotification(`Roll "${val}" not found in CSE 2024-2028 database. Please select from directory or enter valid roll.`);
            rollInput.focus();
        }
    }
}

// Keep aliases for backwards compatibility
function handleVerifyAndProceed() {
    handleGoClick();
}

function handleVerifyContinue() {
    handleGoClick();
}

// Change Roll Number Button Click Handler
function handleChangeRollClick() {
    const rollInput = document.getElementById('studentRoll');
    if (rollInput) {
        rollInput.focus();
        rollInput.select();
        const entranceBox = document.getElementById('entranceStep1');
        if (entranceBox) {
            entranceBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        showNotification('Enter new roll number to switch student.');
    }
}

// Proceed directly from an in-card button click
function proceedFromCard(category, event) {
    if (event) {
        event.stopPropagation();
    }
    selectPaymentChoice(category);
    initiatePaymentFlow();
}

// 1-Click Primary Payment Choice: 'tuition', 'jntu', 'combined'
function selectPaymentChoice(category) {
    // Sync radio buttons
    const radio = document.querySelector(`input[name="feeCategory"][value="${category}"]`);
    if (radio) radio.checked = true;

    // Sync card active states
    syncPaymentCardActive(category);

    // Call category handler
    handleCategoryChange(category);

    // Highlight Stepper 2
    updateStepperProgress(2);

    // Update Step 2 Proceed Banner & in-card amounts
    updateStep2ProceedBanner(category);
}

function syncPaymentCardActive(category) {
    document.querySelectorAll('.primary-fee-card').forEach(c => c.classList.remove('active'));
    
    if (category === 'tuition') {
        document.getElementById('cardFeeTuition')?.classList.add('active');
    } else if (category === 'jntu') {
        document.getElementById('cardFeeJntu')?.classList.add('active');
    } else if (category === 'combined') {
        document.getElementById('cardFeeCombined')?.classList.add('active');
    }
}

// Update Step 2 Selected & Proceed Banner
function updateStep2ProceedBanner(category) {
    const cat = category || PaymentState.currentCategory || 'tuition';
    const titleEl = document.getElementById('step2BannerTitle');
    const amtEl = document.getElementById('step2BannerAmount');
    const tuitionBtnAmt = document.getElementById('cardTuitionBtnAmt');
    const formatted = '₹' + PaymentState.amount.toLocaleString('en-IN');

    if (titleEl) {
        if (cat === 'tuition') {
            const semSelect = document.getElementById('subOptTuitionSem');
            const semText = semSelect && semSelect.selectedOptions && semSelect.selectedOptions[0] ? semSelect.selectedOptions[0].text.split('(')[0].trim() : 'Annual Tuition';
            titleEl.textContent = `College Tuition Fee (${semText})`;
        } else if (cat === 'jntu') {
            titleEl.textContent = 'JNTU University Fee (Official JNTUH Affiliation)';
        } else if (cat === 'combined') {
            titleEl.textContent = 'Tuition + JNTU Package (Single Transaction)';
        } else {
            titleEl.textContent = PaymentState.purpose || 'Selected College Payment';
        }
    }

    if (amtEl) {
        amtEl.textContent = formatted;
    }

    if (tuitionBtnAmt && cat === 'tuition') {
        tuitionBtnAmt.textContent = formatted;
    }
}

// Toggle Other Fees Accordion
function toggleOtherFeeOptions() {
    const container = document.getElementById('otherFeesContainer');
    const chevron = document.getElementById('otherFeesChevron');
    const dynamicSub = document.getElementById('dynamicSubOptions');

    if (!container) return;

    if (container.style.display === 'none') {
        container.style.display = 'block';
        if (dynamicSub) dynamicSub.style.display = 'block';
        if (chevron) chevron.style.transform = 'rotate(180deg)';
    } else {
        container.style.display = 'none';
        if (chevron) chevron.style.transform = 'rotate(0deg)';
    }
}

// Stepper visual progress update
function updateStepperProgress(activeStep) {
    const s1 = document.getElementById('stepIndicator1');
    const s2 = document.getElementById('stepIndicator2');
    const s3 = document.getElementById('stepIndicator3');

    if (!s1 || !s2 || !s3) return;

    s1.classList.remove('active', 'completed');
    s2.classList.remove('active', 'completed');
    s3.classList.remove('active', 'completed');

    if (activeStep === 1) {
        s1.classList.add('active');
    } else if (activeStep === 2) {
        s1.classList.add('completed');
        s2.classList.add('active');
    } else if (activeStep === 3) {
        s1.classList.add('completed');
        s2.classList.add('completed');
        s3.classList.add('active');
    }
}

// ── B-IET Admissions Popup Handlers ──────────────────
function openAdmissionsPopup() {
    const o = document.getElementById('admPopupOverlay');
    if (o) {
        o.classList.add('adm-open');
    }
}

function closeAdmissionsPopup() {
    const o = document.getElementById('admPopupOverlay');
    if (o) {
        o.classList.remove('adm-open');
    }
}

