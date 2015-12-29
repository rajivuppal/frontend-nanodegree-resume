
var bio = {
			"name": "Rajiv Uppal",
			"role": "Software Engineering Executive",
			"welcomeMessage": "Welcome to my Resume",
			"contacts":
				{
					"mobile": "+1 203 258 3689",
					"email": "rajiv.uppal@yahoo.com",
					"github": "rajivuppal",
					"linkedin": "www.linkedin.com/in/rajivuppal",
					"twitter": "xxxx",
					"location": "Trumbull, CT",
					"bioPic": "images/Rajiv-pic.jpg"
				},
			"skills": ["Product Development Leadership","Hands-on Technologist","Product Lifecycle Management","Agile Development",
						"Application Architecture","Emerging Technologies","Technology Direction and Roadmap",
						"Team Development","Offshore and Near-shore Expertise","Cloud-Based SaaS Platforms",
						"Startup and High-Growth Organizations"
					],
			display: function() {
				var formatted;
				var formattedRole;
				formatted = HTMLheaderName.replace("%data%",this.name);
				formattedRole = HTMLheaderRole.replace("%data%",this.role);
				formatted = formatted + formattedRole;
				$("#header").prepend(formatted);
				formatted = HTMLmobile.replace("%data%",this.contacts.mobile);
				$("#topContacts").append(formatted);
				formatted = HTMLemail.replace("%data%",this.contacts.email);
				$("#topContacts").append(formatted);
				formatted = HTMLgithub.replace("%data%",this.contacts.github);
				$("#topContacts").append(formatted);
				formatted = HTMLlinkedin.replace("%data%",this.contacts.linkedin);
				$("#topContacts").append(formatted);
				formatted = HTMLlocation.replace("%data%",this.contacts.location);
				$("#topContacts").append(formatted);
				formatted = HTMLbioPic.replace("%data%",this.contacts.bioPic);
				$("#header").append(formatted);
				if(this.skills.length > 0) {
					$("#header").append(HTMLskillsStart);
					var tempSkill = "";
					for (var i=0; i<this.skills.length; i++) {
						tempSkill = HTMLskills.replace("%data%", bio.skills[i]);
						$("#skills").append(tempSkill);
					}
				}


			}		
		}

var work = {"jobs": [ 	{
						"title": "Self",
						"employer": "Technology Consultant",
						"dates": "3 months",
						"city": "Trumbull, CT",
						"url": "www.google.com",
						"description": ["Management and technology consulting services to software companies and VC firms."]
						},
						{ 
						"title": "Senior Director, Product Development",
						"employer": "Revionics & Retail Optimization Inc.",
						"dates": "2008-2015",
						"city": "Austin, TX",
						"url": "http://www.revionics.com",
						"description": ["Oversaw product leadership and development from prototype to production, using Microsoft technologies on a SaaS platform ", 
						"Built product development/services teams from ground up and crafted project delivery processes.", 
						"Exponentially increased productivity of software platforms, laying groundwork for major contracts with top-5 retailer to deploy flagship software in 500 grocery stores.  Delivered solutions which led to sales increases above $10 million each year.",
						"Practiced Agile development methodology, facilitated Scrum meetings, Sprint planning, Sprint review and retrospectives.",
						"Oversaw Product Quality Assurance, creation of test plans, sand box environments and test applications for functional testing.",
						"Raised $3.2 million in venture capital funding from senior management, government entities and private investors.  "
							]
						},
						{ 
						"title": "Director, Product Development",
						"employer": "IBM & NeuVis",
						"dates": "1996-2005",
						"city": "Southbury, CT",
						"url": "http://www.ibm.com",
						"description": ["Managed product development for software platform that enabled users to model sophisticated web applications using visual tools.  The generated application was deployable across multiple platforms including Microsoft, Oracle and IBM.", 
						"Developed industry specific application frameworks for financial services, energy utilities, travel and e-commerce.", 
						"Spearheaded prototype development, testing and training initiatives on stringent budget while supervising team of 60+ staff.",
						"Oversaw key aspects of company launch and operations, expanding to more than 300 employees and acquisition by IBM.",
						"Recruited senior management team and presented corporate business plan to venture capitalists, successfully raising more than $60 million in financing.",
						"Worked directly with IBM sales teams post-acquisition to differentiate software features and benefits from IBM portfolio."
							]
						},
						{ 
						"title": "Self",
						"employer": "Independent Consultant",
						"dates": "2006-2008",
						"city": "Trumbull, CT",
						"url": "www.google.com",
						"description": ["Management and technology consulting services to software companies and VC firms."]
						},
						{ 
						"title": "Senior Software Engineer",
						"employer": "Bolt Beranek and Newman",
						"dates": "1992-1994",
						"city": "Cambridge, MA",
						"url": "www.raytheon.com",
						"description": ["As a Senior Software Developer, steered successive releases of RS / 1 statistical analysis software, with team of 10 engineers."]
						},
						{ 
						"title": "Software Engineer",
						"employer": "Data Acquisition Systems",
						"dates": "1987-1992",
						"city": "Boston, MA",
						"url": "www.raytheon.com",
						"description": ["Core member of the development team that was responsible for the development of the process control automation software."]
						}
					],
					display: function() {
						var aJob;

						for (aJob in work.jobs) {
							var formattedEmp = "";
							var formattedTitle = "";
							var formattedEmpTitle = "";
							var formattedDates = "";
							var formattedDescItem = "";
							var formattedDescItems = "";
							$("#workExperience").append(HTMLworkStart);
							formattedEmp = HTMLworkEmployer.replace("%data%",work.jobs[aJob].employer);
							if(work.jobs[aJob].title == "Self") {
								formattedTitle = HTMLworkTitle.replace(" - %data%</a>","</a>");
								formattedEmpTitle = formattedEmp + formattedTitle;
							}
							else {
								formattedEmp = formattedEmp.replace("#",work.jobs[aJob].url);
								formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[aJob].title);
								formattedEmpTitle = formattedEmp + formattedTitle;
							}
							formattedDates = HTMLworkDates.replace("%data%",work.jobs[aJob].dates);
							for(var j=0; j<work.jobs[aJob].description.length; j++) {
								formattedDescItem = HTMLworkDescItem.replace("%data%",work.jobs[aJob].description[j]);
								formattedDescItems = formattedDescItems + formattedDescItem;
							}
							formattedDesc = HTMLworkDescription.replace("%data%",formattedDescItems);
							$(".work-entry:last").append(formattedEmpTitle);
							$(".work-entry:last").append(formattedDates);
							$(".work-entry:last").append(formattedDesc);
						}
					}
				}

var projects = {"projects": 
					[ 	{
						"title": "Product Roadmap and Implementation Services Setup",
						"dates": "3 Months",
						"description":"Working with senior leadership to develop strategy and roadmap for a health and wellness product.  Setting up processes for the implementation services group to provide the technical expertise and best practices that enable their customers to quickly and effectively implement Healthper wellness system.",
						"images": ["images/Healthper-logo.png"]
						},
						{ 
						"title": "Improving System Scalability",
						"dates": "2014-2015",
						"description":"Re-architecting the macro-space optimization solution for scalability.  Existing solution was broken up into loosely coupled message based services.  This architecture enabled the system to scale and perform optimizations for retailers with large numbers of stores.",
						"images": ["images/Revionics-Logo.jpg"]
						}
					],
					display: function() {
						var aProject;

						for (var i=0; i<this.projects.length; i++) {
							aProject = this.projects[i];
							var formattedTitle = "";
							var formattedDates = "";
							var formattedDesc = "";
							var formattedImageSingle = "";
							var formattedImageMulti = "";
							$("#projects").append(HTMLprojectStart);
							formattedTitle = HTMLprojectTitle.replace("%data%",aProject.title);
							formattedDates = HTMLprojectDates.replace("%data%",aProject.dates);
							formattedDesc = HTMLprojectDescription.replace("%data%",aProject.description);
							for(var j=0; j<aProject.images.length; j++) {
								formattedImageSingle = HTMLprojectImage.replace("%data%",aProject.images[j]);
								formattedImageMulti = formattedImageMulti + formattedImageSingle;
							}
							$(".project-entry:last").append(formattedTitle);
							$(".project-entry:last").append(formattedDates);
							$(".project-entry:last").append(formattedDesc);
							$(".project-entry:last").append(formattedImageMulti);
						}
					}

				}

var education = {"schools": 
						[ 
							{
								"name": "Louisiana State University",
								"location": "Baton Rouge, LA",
								"degree": "Masters",
								"majors": "Computer Science",
								"dates": "1984-1986",
								"url": "www.lsu.edu"
							},
							{ 
								"name": "Indian Institute of Technology, BHU",
								"location": "Varanasi, UP",
								"degree": "Bachelor of Engineering",
								"majors": "Chemical Engineering",
								"dates": "1977-1982",
								"url": "www.iitbhu.ac.in"
							}
						],
						"onlineCourses": 
						[ 
							{
								"title": "Javascript basics",
								"school": "Udacity",
								"dates": 2015,
								"url": "www.udacity.com"
							},
							{
								"title": "Version Control",
								"school": "Udacity",
								"dates": 2015,
								"url": "www.udacity.com"
							}
						],
						display: function() {
							var aSchool;

							for (var i=0; i<this.schools.length; i++) {
								aSchool = this.schools[i];
								var formattedName = "";
								var formattedLocation = "";
								var formattedDegree = "";
								var formattedNameDeg = "";
								var formattedMajors = "";
								var formattedDates = "";

								$("#education").append(HTMLschoolStart);
								formattedName = HTMLschoolName.replace("%data%",aSchool.name);
								formattedName = formattedName.replace("#",aSchool.url);
								formattedDegree = HTMLschoolDegree.replace("%data%",aSchool.degree);
								formattedNameDeg = formattedName + formattedDegree;
								formattedDates = HTMLschoolDates.replace("%data%",aSchool.dates);
								formattedLocation = HTMLschoolLocation.replace("%data%",aSchool.location);
								formattedMajors = HTMLschoolMajor.replace("%data%",aSchool.majors);


								$(".education-entry:last").append(formattedNameDeg);
								$(".education-entry:last").append(formattedDates);
								$(".education-entry:last").append(formattedLocation);							
								$(".education-entry:last").append(formattedMajors);							
							}


							var formattedTitle = "";
							var formattedSchool = "";	
							var formattedOnline = "";	
							var formattedURL = "";					
							$(".education-entry:last").append(HTMLonlineClasses);
							for(i=0;i<this.onlineCourses.length; i++) {
								var onlineSchool = this.onlineCourses[i];
								formattedTitle = HTMLonlineTitle.replace("%data%",onlineSchool.title);
								formattedTitle = formattedTitle.replace("#",onlineSchool.url);	
								formattedSchool = HTMLonlineSchool.replace("%data%",onlineSchool.school);
								formattedDates = HTMLonlineDates.replace("%data%",onlineSchool.dates);
								formattedOnline = formattedTitle + formattedSchool + formattedDates;
								$(".education-entry:last").append(formattedOnline);
							}
							
						}

										
					}



bio.display();
work.display();
projects.display();
education.display();

function inName(nameStr) {
	var nameArray = [];
	nameArray = nameStr.trim.split(" ");
	var fName = nameArray[0];
	fName = fName.charAt(0).toUpperCase() + fName.substr(1).toLowerCase();
	var lName = nameArray[1];
	lName = lName.toUpperCase();
	return (fName + " " + lName);
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);



$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});