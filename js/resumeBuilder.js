/*
This is empty on purpose! Your code to build the resume will go here.
 */



var bio = {
	"name":"Kanishkar J",
	"role":"Web Developer",
	"contacts":{
		"email":"kanishkarj@hotmail.com",
		"mobile":"9902847087",
		"github":"kanishkarj",
		"location":"Bangalore",
		"twitter":"@kanishkarj"	
	},
	"bioPic":"images/fry.jpg",
	"welcomeMessage":"Hello, to my portfolio",
	"skills" : ["Footballer", "Developer","Musician","Artist","Dancer","Swimmer"]
};

var education={
	"schools":[
		{
			"name":"KV Hebbal",
			"city":"Bangalore",
			"degree":"High School",
			"dates":2013,
			"url":"#"
		},
		{
			"name":"IIT Indore",
			"city":"Indore",
			"degree":"BTech",
			"dates":2013,
			"url":"#"
		}
	],
	"onlineCourses":[
	{
		"title":"JavaScript",
		"school":"udacity",
		"dates":2014,
		"url":"#"
	},
	{
		"title":"Python",
		"school":"udacity",
		"dates":2015,
		"url":"#"
	}
	]
};

var work = {
	"jobs":[
	{
		"employer":"Planet express",
		"title":"Delivery Boy",
		"dates":"Jan 3000 - future",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus idgravida volutpat. Morbi quis enim diam. Etiam ornare ornare diam venenatis rhoncus. Maecenas id velit vel eros aliquam aliquam. Cras gravida ligula massa, at aliquam libero porta eget. Phasellus suscipit odio at sapien vulputate auctor. Phasellus mattis vitae ante id vehicula. "
	},
	{
		"employer":"Pizzahut",
		"title":"Delivery Boy",
		"dates":"Jan 2000 - 3000",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus idgravida volutpat. Morbi quis enim diam. Etiam ornare ornare diam venenatis rhoncus. Maecenas id velit vel eros aliquam aliquam. Cras gravida ligula massa, at aliquam libero porta eget. Phasellus suscipit odio at sapien vulputate auctor. Phasellus mattis vitae ante id vehicula. "
	}
	]
};

var projects={
	"projects":[
	{
		"title":"Sample Project 1",
		"dates":"2014",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus idgravida volutpat. Morbi quis enim diam. Etiam ornare ornare diam venenatis rhoncus. Maecenas id velit vel eros aliquam aliquam. Cras gravida ligula massa, at aliquam libero porta eget. Phasellus suscipit odio at sapien vulputate auctor. Phasellus mattis vitae ante id vehicula.",
		"images":[
			"images/prj1_1.jpg","images/prj1_2.png"
		]
	},
	{
		"title":"Sample Project 2",
		"dates":"2014",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus idgravida volutpat. Morbi quis enim diam. Etiam ornare ornare diam venenatis rhoncus. Maecenas id velit vel eros aliquam aliquam. Cras gravida ligula massa, at aliquam libero porta eget. Phasellus suscipit odio at sapien vulputate auctor. Phasellus mattis vitae ante id vehicula. ",
		"images":[
			"images/prj2_1.png","images/prj2_2.png"
		]
	}
	]
};


$("#header").append(HTMLheaderName.replace("%data%",bio.name));
$("#header").append(HTMLheaderRole.replace("%data%",bio.role));
$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));

for(school in education.schools){
	$("#education").append(HTMLschoolStart);
	$("#education").append(HTMLschoolName.replace("%data%",education.schools[school].name));
	$("#education").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
	$("#education").append(HTMLschoolLocation.replace("%data%",education.schools[school].city));
	$("#education").append(HTMLschoolDegree.replace("%data%",education.schools[school].degree));
}
/*
$("#education").append(HTMLonlineClasses);
for(edu in education.onlineCourses){
	
	$("#education").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[edu].title));
	$("#education").append(HTMLonlineDates.replace("%data%",education.onlineCourses[edu].dates));
	$("#education").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[edu].school));	

}*/

if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	for(var i =0;i<bio.skills.length;i++){
		var temp = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(temp);
	}
}

for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var temp1 = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var temp2 = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var temp = temp1 + temp2;
	$(".work-entry:last").append(temp);

	temp1 =  HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(temp1);

	temp1 =  HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(temp1);
}

function inName(name){
	var words =  name.split(" ");
	words[1].toUpperCase();
	var t = words[0];
	words[0] = t[0].toUpperCase();
	return words[0] +" "+ words[1];
}

//$("#main").append(internationalizeButton);

projects.display = function(){
	for(proj in projects.projects){
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[proj].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[proj].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[proj].description))
		if(projects.projects[proj].images.length > 0){
			for(img in projects.projects[proj].images){
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[proj].images[img]))
			}
		}
	}
};

projects.display();
//$("#mapdiv").append(googleMap);