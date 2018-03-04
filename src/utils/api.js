/**
 * Foi adicionado tempo de loading para simular uma comunicação com uma api REST real
 */

import * as moment from 'moment';

export const  getAllRequests = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(requests);
    }, 2000);
  });
}

export const getAllCompanys = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(companys);
    }, 1000)
  });
};

export const getAllDocuments = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(documents);
    }, 1000)
  })
};

export const addNewRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.id = (requests.length + 1);
    request.requestDate = moment().format('DD/MM/YYYY HH:mm');
    requests.push(request);
    resolve(request);
  });
}

const companys = [
  'Empresa 1',
  'Empresa 2',
  'Empresa 3',
  'Empresa 4',
]

const documents = [
  'Certidão A',
  'Certidão B',
  'Certidão C',
  'Certidão D',
  'Certidão E',
  'Certidão F',
  'Certidão G',
]

const requests = [
  {
    id: 1,
    requester: "Wolverine",
    requesterEmail: "wolverine@gmail.com",
    companyRequested: "Empresa 1",
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
    requester: "Iron Man",
    requesterEmail: "iron_man@gmail.com",
    companyRequested: "Empresa 4",
    requestDate: "20/02/2018 16:30",
    documents: [ 
      "Certidão A",
      "Certidão C"
    ]
  },
  {
    id: 3,
    requester: "Black Panther",
    requesterEmail: "black_panther@gmail.com",
    companyRequested: "Empresa 2",
    requestDate: "20/02/2018 16:30",
    documents: [ 
      "Certidão H",
      "Certidão U",
      "Certidão X",
    ]
  }
];