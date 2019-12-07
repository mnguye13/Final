function displayAllResume() {
    const Url='http://localhost:5555/resume';

	console.log("Display")
    $.ajax({
        url: Url,
        method:"GET",
        success: result => {
            $('#tbody tr').remove();
            console.log(result);
            $.each(result, (i, item) => {
                var infoURL = "<a href = http://localhost:5555/resumeInfo/"+ String(item._id) + ">";
                var eachrow = "<tr>"
                            + "<td>" + infoURL + item._id+"</a>" + "</td>"
                            + "<td>" + infoURL + item.firstname + item.lastname +"</a>"+ "</td>"
                            + "</tr>";
                $('#tbody').append(eachrow);
            })
        },
        error: error =>{
            console.log(`Error ${error}`)
        }
    });
};

function displayResume() {
    document.getElementById("resumeSelect").addEventListener("click", function(event){
        event.preventDefault()
    });
    var id = document.getElementById('resumeID').value

    const Url2='http://localhost:5555/resume/' + id;
    $.ajax({
        url: Url2,
        method:"GET",
        dataType: 'json',
        contentType: 'application/json',
        success: result => {
            console.log(result);
            //$('#resumeCreate').remove();

            document.getElementById("studentID").value = result["studentID"];
            document.getElementById("firstname").value = result["firstname"];
            document.getElementById("lastname").value = result["lastname"];
            document.getElementById("major").value = result["major"];
            document.getElementById("school").value = result["school"];
            document.getElementById("year").value = result["year"];
            document.getElementById("exp1").value = result["exp1"];
            document.getElementById("exp2").value = result["exp2"];
            document.getElementById("exp3").value = result["exp3"];
            /*
            document.getElementById("studentID").disabled = true;
            document.getElementById("firstname").disabled = true;
            document.getElementById("lastname").disabled = true;
            document.getElementById("major").disabled = true;
            document.getElementById("school").disabled = true;
            document.getElementById("year").disabled = true;
            document.getElementById("exp1").disabled = true;
            document.getElementById("exp2").disabled = true;
            document.getElementById("exp3").disabled = true;
            */
            document.getElementById("createResume").disabled = true;
            document.getElementById("updateBtn").disabled = false;
            document.getElementById("deleteBtn").disabled = false;


            //document.getElementById("resumeSelect").reset();
        },
        error: error =>{
            console.log(`Error ${error}`);

        }
    });
};
/*
function info(){
  var id = document.getElementById('resumeID').value;
  const Url2='http://localhost:5555/resume/' + id;
  $.ajax({
      url: Url2,
      method:"GET",
      dataType: 'json',
      contentType: 'application/json',
      success: result => {
          console.log(result);
      },
      error: error =>{
          console.log(`Error ${error}`)
      }
  });
};
*/
function postResume() {
    //document.getElementById("resume").addEventListener("click", function(event){
        //event.preventDefault()
    //});

    if (document.getElementById('studentID').value == "" || document.getElementById('firstname') == "" || document.getElementById('lastname') == "" || document.getElementById('major') == "" || document.getElementById('school') == "" ){
      alert("Please enter missing value!!!");
    }
    else{
      var r = new Resume(
      document.getElementById('resumeID').value,
      document.getElementById('studentID').value,
      document.getElementById('firstname').value,
      document.getElementById('lastname').value,
      document.getElementById('major').value,
      document.getElementById('school').value,
      document.getElementById('year').value,
      document.getElementById('exp1').value,
      document.getElementById('exp2').value,
      document.getElementById('exp3').value
      );


      const Url3='http://localhost:5555/resume';
      alert("Resume for student#"+ document.getElementById('studentID').value +" created.")
    console.log("Create");
    console.log(JSON.stringify(r));
      $.ajax({
          url: Url3,
          method:"POST",
          data: JSON.stringify(r),
          dataType: 'json',
          contentType: 'application/json',
          success: result => {
              console.log(result)
              console.log(r)
              console.log("Create")
              document.getElementById("resumeCreate").reset();
          },
          error: error =>{
              console.log(`Error ${error}`)
          }

      });

    }
};

function updateResume(){
  var id = document.getElementById('resumeID').value;
  console.log(id);
  const Url4='http://localhost:5555/resume/' + id;
  //alert("Resume#"+ result['_id'] +" update");
  var r = new Resume(
  document.getElementById('resumeID').value,
  document.getElementById('studentID').value,
  document.getElementById('firstname').value,
  document.getElementById('lastname').value,
  document.getElementById('major').value,
  document.getElementById('school').value,
  document.getElementById('year').value,
  document.getElementById('exp1').value,
  document.getElementById('exp2').value,
  document.getElementById('exp3').value
  );
  $.ajax({
      url: Url4,
      method:"PATCH",
      data: JSON.stringify(r),
      dataType: 'json',
      contentType: 'application/json',
      success: result => {
          //console.log(result);
          console.log(result)
          document.getElementById("resumeSelect").reset();
          document.getElementById("resumeCreate").reset();
      },
      error: error =>{
          console.log(`Error ${error}`)
      }
  });

};
function deleteResume(){

  var id = document.getElementById('resumeID').value;
  console.log(id);
  const Url5='http://localhost:5555/resume/' + id;
  alert("Resume deleted");
  $.ajax({
      url: Url5,
      method:"DELETE",
      dataType: 'json',
      contentType: 'application/json',
      success: result => {
          console.log(result);
          document.getElementById("resumeSelect").reset();
          document.getElementById("resumeCreate").reset();

      },

      error: error =>{
          console.log(`Error ${error}`)
      }
  });
};
function Resume(rResumeID,rStudentID,rFirstName,rLastName, rMajor, rSchool, rYear, rExperience1, rExperience2, rExperience3){
	this.resumeID = rResumeID;
  this.studentID = rStudentID;
  this.firstname = rFirstName;
  this.lastname = rLastName;
	this.major = rMajor;
  this.school = rSchool;
	this.year = rYear;
  this.exp1 = rExperience1;
	this.exp2 = rExperience2;
	this.exp3 = rExperience3;
};
function createVerify(rStudentID,rFirstName,rLastName, rMajor, rSchool, rYear){
  if (rStudentID == null || rFirstName == null || rLastName == null || rMajor == null || rSchool == null || rYear == null)
  {
    alert("Please enter missing value");
  }

}
