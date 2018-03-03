
export const selectRequestById = (id, requests = []) => {
  const request = requests.filter(request => {
    return request.id === id  
  });
  if (request.length !== 0) return request[0];
}
