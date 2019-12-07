function displayAllResume() {
    const Url='http://localhost:5555/resume';
	console.log("Display")
    $.ajax({
        url: Url,
        method:"GET",
        success: result => {
            $('#tbody tr').remove();
			console.log(Url)
            $.each(result.resume, (i, item) => {
                var eachrow = "<tr>"
                            + "<th>" + item.resume.firstname + "</th>"
                            + "<th>" + item.resume.lastname + "</th>"
                            + "<th>" + item.resume.major + "</th>"
							+ "<th>" + item.resume.school + "</th>"
                            + "<th>" + item.resume.year + "</th>"
                            + "<th>" + item.resume.exp1 + "</th>"
							+ "<th>" + item.resume.exp2 + "</th>"
                            + "<th>" + item.resume.exp3 + "</th>"
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
        success: result => {
            //console.log(result);
            document.getElementById("resumeSelect").reset();
        },
        error: error =>{
            console.log(`Error ${error}`)
        }
    });
};
function postResume() {
    //document.getElementById("resume").addEventListener("click", function(event){
        //event.preventDefault()
    //});
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
    alert("Resume for student#"+ document.getElementById('studentID').value +" created")
	console.log("Create");
    $.ajax({
        url: Url3,
        method:"POST",
        data: r,
        success: result => {
            console.log(result)
			      console.log("Create")
            document.getElementById("resumeCreate").reset();
        },
        error: error =>{
            console.log(`Error ${error}`)
        }
    });
}

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


}
