
export const  getAllRequests = () => {
  return new Promise((resolve, reject) => {
    resolve(requests);
  });
}

const requests = [
  {
    id: 1,
    requester: "Felipe",
    requesterEmail: "felipearomani@gmail.com",
    companyRequested: "Bart Digital",
    requestDate: "30/01/2018 16:30",
    documents: [
      "Certidão A",
      "Certidão B",
      "Certidão C",
      "Certidão D",
    ]
  },
  {
    id: 2,
    requester: "José",
    requesterEmail: "jose@gmail.com",
    companyRequested: "Bayer",
    requestDate: "20/02/2018 16:30",
    documents: [ 
      "Certidão A",
      "Certidão C"
    ]
  },
  {
    id: 345,
    requester: "José",
    requesterEmail: "jose@gmail.com",
    companyRequested: "Bayer",
    requestDate: "20/02/2018 16:30",
    documents: [ 
      "Certidão H",
      "Certidão O",
      "Certidão W",
      "Certidão U",
      "Certidão X",
    ]
  }
];