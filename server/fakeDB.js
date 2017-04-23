import rp from 'request-promise'

const fakeDB = [];
rp({uri:"http://localhost:5001/addr/avon-by-the-sea",json:true})
  .then(pb=>{
  pb.forEach(l=>{
    l['slug'] = l.Id;
    l['id'] = l.Id;
    l['title'] = l.StreetAddressOnly;
    l['content'] = l.PublicRemarks;
    fakeDB.push(l);
  })
  })
export default fakeDB
