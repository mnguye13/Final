const ObjectId = require('mongoose').Types.ObjectId;
const Controller = require('./controller');

class ResumeController extends Controller{
  find(id, callback){
    try{
      this.DBModel.findOne({ $or:[{'_id':ObjectId(id)}, {'studentID':id}]}, (err, res)=>callback(err, res));
    }catch(err){
      this.DBModel.findOne({'studentID':id}, (err, res)=>callback(err, res));
    }
  }
}

module.exports = ResumeController;
