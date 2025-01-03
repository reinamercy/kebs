const adminApp = angular.module('adminApp', []);

adminApp.controller('AdminController', ['$scope', '$timeout', function ($scope, $timeout) {
  $scope.selectedApp = "Projects"; // Default selected app
  $scope.showDialog = false;
  $scope.showEditDialog = false;
  $scope.showSuccessDialog = false;

  $scope.faqs = {
    "Projects": [
      { question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", show: false },
      { question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", show: false },
      { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", show: false },
      { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", show: false },
      { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", show: false },
      { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", show: false },
      { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", show: false },
      { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", show: false },
      { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", show: false },
      { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", show: false },
      { question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", show: false },
      { question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", show: false },
      { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", show: false },
      { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", show: false },
      { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", show: false },
      { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", show: false },
      { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", show: false },
      { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", show: false },
      { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", show: false },
      { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", show: false },
      { question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", show: false },
      { question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", show: false },
      { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", show: false },
      { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", show: false },
      { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", show: false },
      { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", show: false },
      { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", show: false },
      { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", show: false },
      { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", show: false },
      { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", show: false },
    { question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", show: false },
    { question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", show: false },
    { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", show: false },
    { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", show: false },
    { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", show: false },
    { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", show: false },
    { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", show: false },
    { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", show: false },
    { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", show: false },
    { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", show: false },
    { question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", show: false },
    { question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", show: false },
    { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", show: false },
    { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", show: false },
    { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", show: false },
    { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", show: false },
    { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", show: false },
    { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", show: false },
    { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", show: false },
    { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", show: false },
    { question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", show: false },
    { question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", show: false },
    { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", show: false },
    { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", show: false },
    { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", show: false },
    { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", show: false },
    { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", show: false },
    { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", show: false },
    { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", show: false },
    { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", show: false },
    { question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", show: false },
    { question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", show: false },
    { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", show: false },
    { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", show: false },
    { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", show: false },
    { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", show: false },
    { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", show: false },
    { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", show: false },
    { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", show: false },
    { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", show: false },
    { question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", show: false },
    { question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", show: false },
    { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", show: false },
    { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", show: false },
    { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", show: false },
    { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", show: false },
    { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", show: false },
    { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", show: false },
    { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", show: false },
    { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", show: false },
    { question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", show: false },
    { question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", show: false },
    { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", show: false },
    { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", show: false },
    { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", show: false },
    { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", show: false },
    { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", show: false },
    { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", show: false },
    { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", show: false },
    { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", show: false },
    { question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", show: false },
    { question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", show: false },
    { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", show: false },
    { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", show: false },
    { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", show: false },
    { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", show: false },
    { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", show: false },
    { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", show: false },
    { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", show: false },
    { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", show: false },
    ],
    "ATS": [
    { "question": "How do I post a job opening?", "answer": "Go to the ATS module, click on 'Post Job', and fill out the job details.", "show": false },
    { "question": "How can I view applicants?", "answer": "Navigate to the 'Applicants' section in the ATS module to view all the applicants.", "show": false },
    { "question": "How do I track candidate applications?", "answer": "Candidate tracking is available in the ATS dashboard.", "show": false },
    { "question": "What is the interview feedback system?", "answer": "The feedback system allows evaluators to rate candidates.", "show": false },
    { "question": "How do I add new job postings?", "answer": "Go to the 'Job Postings' section and click 'Add New'.", "show": false },
    { "question": "Can I set up automated email responses?", "answer": "Yes, email responses can be automated in ATS settings.", "show": false },
    { "question": "How do I integrate ATS with other tools?", "answer": "Integration options are available in the settings.", "show": false },
    { "question": "What analytics are available in ATS?", "answer": "Analytics include candidate pipeline, time to hire, and more.", "show": false },
    { "question": "How do I delete a candidate profile?", "answer": "Use the 'Delete' option in the candidate profile page.", "show": false },
    { "question": "Can I share job postings externally?", "answer": "Yes, job postings can be shared via public links.", "show": false },
    { "question": "How can I schedule interviews?", "answer": "Interviews can be scheduled from the candidate profile page.", "show": false },
    { "question": "How do I tag candidates with specific skills?", "answer": "Use the tagging feature available in the candidate profile.", "show": false },
    { "question": "What does the Candidate Match Score mean?", "answer": "It indicates how well a candidate's profile matches the job requirements.", "show": false },
    { "question": "Can I assign team members to review candidates?", "answer": "Yes, team members can be assigned through the review section.", "show": false },
    { "question": "How do I update a candidate's status?", "answer": "Use the status dropdown in the candidate's profile to update their application stage.", "show": false },
    { "question": "How do I filter candidates by location?", "answer": "Use the filters section in the 'Applicants' tab to refine candidates by location.", "show": false },
    { "question": "Can external recruiters access the ATS?", "answer": "Yes, recruiters can access the ATS via assigned roles.", "show": false },
    { "question": "How do I set approval workflows for job requisitions?", "answer": "Approval workflows can be configured in the 'Job Requisition' settings.", "show": false },
    { "question": "What types of reports are available in ATS?", "answer": "Reports include hiring velocity, candidate source analysis, and rejection reasons.", "show": false },
    { "question": "Can I integrate video conferencing tools for interviews?", "answer": "Yes, integrations for tools like Zoom or Teams are available in the settings.", "show": false },
    { "question": "How do I notify candidates of interview schedules?", "answer": "Notifications can be sent via the ATS email automation feature.", "show": false },
    { "question": "Can I duplicate an existing job posting?", "answer": "Yes, job postings can be duplicated via the 'Job Details' page.", "show": false },
    { "question": "How do I view candidate pipelines for active job openings?", "answer": "Candidate pipelines are available on the ATS dashboard under 'Active Job Openings'.", "show": false },
    { "question": "How can I filter job postings by status?", "answer": "Use the status filter in the 'Job Postings' section to refine results.", "show": false },
    { "question": "How do I manage internal referrals in ATS?", "answer": "Referrals can be tracked in the 'Referrals' section under 'Applicants'.", "show": false },
    { "question": "What is the Candidate Pipeline view?", "answer": "It shows candidates at each stage of the recruitment process.", "show": false },
    { "question": "Can I attach additional documents to a candidate profile?", "answer": "Yes, additional documents can be uploaded to the candidate profile under 'Attachments'.", "show": false },
    { "question": "How do I search for specific candidates in the database?", "answer": "Use the global search bar in the ATS module to find candidates by name or keyword.", "show": false },
    { "question": "What happens to duplicate candidate profiles?", "answer": "Duplicate profiles are flagged, and users can choose to merge or delete them.", "show": false },
    { "question": "How do I track time-to-hire metrics?", "answer": "Time-to-hire metrics are available in the ATS analytics dashboard.", "show": false },
    { "question": "Can I customize the ATS dashboard?", "answer": "Yes, widgets and reports on the dashboard can be customized.", "show": false },
    { "question": "How do I enable automated reminders for interviews?", "answer": "Set up reminders in the 'Interview Scheduler' section of the ATS module.", "show": false },
    { "question": "What is the role of job requisition templates?", "answer": "Templates simplify the creation of new job postings by predefining roles, descriptions, and criteria.", "show": false },
    { "question": "How do I reject a candidate and send feedback?", "answer": "Use the 'Reject' option in the candidate profile, and select a feedback template for automated communication.", "show": false },
    { "question": "Can I restrict access to certain job postings?", "answer": "Yes, access restrictions can be set based on roles and permissions.", "show": false },
    { "question": "How do I update job posting details?", "answer": "Go to the 'Job Postings' section, select the job, and edit its details.", "show": false },
    { "question": "How can I view rejected candidates?", "answer": "Rejected candidates can be found in the 'Rejected' tab under 'Applicants'.", "show": false },
    { "question": "Can I track candidates from external job boards?", "answer": "Yes, candidates from integrated job boards are automatically tracked in ATS.", "show": false },
    { "question": "How do I set deadlines for job applications?", "answer": "Deadlines can be configured during job posting creation under the 'Application Deadline' field.", "show": false },
    { "question": "What is the candidate experience score?", "answer": "It reflects candidate feedback on the application and interview process.", "show": false },
    { "question": "How can I export candidate lists?", "answer": "Candidate lists can be exported as Excel or CSV files from the 'Applicants' section.", "show": false },
    { "question": "Can I track the source of candidate applications?", "answer": "Yes, ATS tracks candidate sources, such as referrals, job boards, or direct applications.", "show": false },
    { "question": "How do I archive inactive job postings?", "answer": "Use the 'Archive' option available in the 'Job Postings' section.", "show": false },
    { "question": "Can I assign multiple interviewers to a candidate?", "answer": "Yes, multiple interviewers can be assigned in the 'Interview Scheduler'.", "show": false },
    { "question": "What does the analytics dashboard in ATS provide?", "answer": "It provides insights into recruitment performance, including pipeline trends and efficiency metrics.", "show": false },
    { "question": "How do I reopen a closed job posting?", "answer": "Go to the 'Closed Postings' tab, select the job, and click 'Reopen'.", "show": false },
    { "question": "How do I post a job opening?", "answer": "Go to the ATS module, click on 'Post Job', and fill out the job details.", "show": false },
    { "question": "How can I view applicants?", "answer": "Navigate to the 'Applicants' section in the ATS module to view all the applicants.", "show": false },
    { "question": "How do I track candidate applications?", "answer": "Candidate tracking is available in the ATS dashboard.", "show": false },
    { "question": "What is the interview feedback system?", "answer": "The feedback system allows evaluators to rate candidates.", "show": false },
    { "question": "How do I add new job postings?", "answer": "Go to the 'Job Postings' section and click 'Add New'.", "show": false },
    { "question": "Can I set up automated email responses?", "answer": "Yes, email responses can be automated in ATS settings.", "show": false },
    { "question": "How do I integrate ATS with other tools?", "answer": "Integration options are available in the settings.", "show": false },
    { "question": "What analytics are available in ATS?", "answer": "Analytics include candidate pipeline, time to hire, and more.", "show": false },
    { "question": "How do I delete a candidate profile?", "answer": "Use the 'Delete' option in the candidate profile page.", "show": false },
    { "question": "Can I share job postings externally?", "answer": "Yes, job postings can be shared via public links.", "show": false },
    { "question": "How can I schedule interviews?", "answer": "Interviews can be scheduled from the candidate profile page.", "show": false },
    { "question": "How do I tag candidates with specific skills?", "answer": "Use the tagging feature available in the candidate profile.", "show": false },
    { "question": "What does the Candidate Match Score mean?", "answer": "It indicates how well a candidate's profile matches the job requirements.", "show": false },
    { "question": "Can I assign team members to review candidates?", "answer": "Yes, team members can be assigned through the review section.", "show": false },
    { "question": "How do I update a candidate's status?", "answer": "Use the status dropdown in the candidate's profile to update their application stage.", "show": false },
    { "question": "How do I filter candidates by location?", "answer": "Use the filters section in the 'Applicants' tab to refine candidates by location.", "show": false },
    { "question": "Can external recruiters access the ATS?", "answer": "Yes, recruiters can access the ATS via assigned roles.", "show": false },
    { "question": "How do I set approval workflows for job requisitions?", "answer": "Approval workflows can be configured in the 'Job Requisition' settings.", "show": false },
    { "question": "What types of reports are available in ATS?", "answer": "Reports include hiring velocity, candidate source analysis, and rejection reasons.", "show": false },
    { "question": "Can I integrate video conferencing tools for interviews?", "answer": "Yes, integrations for tools like Zoom or Teams are available in the settings.", "show": false },
    { "question": "How do I notify candidates of interview schedules?", "answer": "Notifications can be sent via the ATS email automation feature.", "show": false },
    { "question": "How do I tag candidates with specific skills?", "answer": "Use the tagging feature available in the candidate profile.", "show": false },
    { "question": "What does the Candidate Match Score mean?", "answer": "It indicates how well a candidate's profile matches the job requirements.", "show": false },
    { "question": "Can I assign team members to review candidates?", "answer": "Yes, team members can be assigned through the review section.", "show": false },
    { "question": "How do I update a candidate's status?", "answer": "Use the status dropdown in the candidate's profile to update their application stage.", "show": false },
    { "question": "How do I filter candidates by location?", "answer": "Use the filters section in the 'Applicants' tab to refine candidates by location.", "show": false },
    { "question": "Can external recruiters access the ATS?", "answer": "Yes, recruiters can access the ATS via assigned roles.", "show": false },
    { "question": "How do I set approval workflows for job requisitions?", "answer": "Approval workflows can be configured in the 'Job Requisition' settings.", "show": false },
    { "question": "What types of reports are available in ATS?", "answer": "Reports include hiring velocity, candidate source analysis, and rejection reasons.", "show": false },
    { "question": "Can I integrate video conferencing tools for interviews?", "answer": "Yes, integrations for tools like Zoom or Teams are available in the settings.", "show": false },
    { "question": "How do I notify candidates of interview schedules?", "answer": "Notifications can be sent via the ATS email automation feature.", "show": false },
  ],
    "HR": [
    { "question": "What is the leave policy?", "answer": "The leave policy includes details on annual leave, sick leave, and other entitlements.", "show": false },
    { "question": "How do I submit a leave request?", "answer": "Use the 'Submit Leave Request' option in the HR module.", "show": false },
    { "question": "Can I track my leave balance?", "answer": "Yes, leave balance is visible in the HR dashboard under 'Leave Management'.", "show": false },
    { "question": "What is the onboarding process?", "answer": "The onboarding process includes document submission, orientation sessions, and task assignments.", "show": false },
    { "question": "How do I update my personal information?", "answer": "Go to the HR module, select 'Profile Management', and edit your personal details.", "show": false },
    { "question": "What is the grievance redressal process?", "answer": "Grievances can be reported through the HR portal's 'Grievance' section for resolution.", "show": false },
    { "question": "How do I access my payslips?", "answer": "Payslips are available under the 'Payroll' section of the HR module.", "show": false },
    { "question": "Can I request training programs?", "answer": "Yes, training requests can be made under the 'Learning & Development' section in HR.", "show": false },
    { "question": "What is the exit process?", "answer": "The exit process involves resignation submission, clearance procedures, and feedback submission.", "show": false },
    { "question": "How do I contact the HR team?", "answer": "The HR team's contact details are listed in the HR portal under 'Contact Us'.", "show": false },
    { "question": "How do I apply for a salary advance?", "answer": "Salary advance requests can be submitted through the 'Payroll Requests' section.", "show": false },
    { "question": "Can I view my attendance records?", "answer": "Yes, attendance records are available in the 'Attendance' section of the HR module.", "show": false },
    { "question": "How do I submit performance feedback?", "answer": "Feedback can be submitted through the 'Performance Review' section in the HR module.", "show": false },
    { "question": "What is the process for internal job applications?", "answer": "Internal job applications can be submitted via the 'Career Opportunities' section in HR.", "show": false },
    { "question": "How do I nominate someone for an award?", "answer": "Nominations can be submitted through the 'Rewards & Recognition' section.", "show": false },
    { "question": "What is the process for relocation assistance?", "answer": "Relocation assistance requests can be submitted under the 'Relocation' section in HR.", "show": false },
    { "question": "Can I view company policies in the HR module?", "answer": "Yes, all company policies are accessible under the 'Policies' section.", "show": false },
    { "question": "How do I submit expense claims?", "answer": "Expense claims can be submitted through the 'Expense Management' section in HR.", "show": false },
    { "question": "What is the process for applying for a promotion?", "answer": "Promotion applications are handled through the 'Career Growth' section in the HR module.", "show": false },
    { "question": "How do I register for corporate events?", "answer": "Corporate event registration is available under the 'Events' section in HR.", "show": false },
    { "question": "What is the procedure for employee transfers?", "answer": "Employee transfers can be requested through the 'Employee Transfers' section in HR.", "show": false },
    { "question": "Can I submit medical reimbursements through HR?", "answer": "Yes, medical reimbursements can be submitted via the 'Claims & Benefits' section.", "show": false },
    { "question": "How do I access my employment contract?", "answer": "Employment contracts are available in the 'Documents' section of the HR portal.", "show": false },
    { "question": "How do I update my bank details?", "answer": "Bank details can be updated under the 'Payroll Settings' in the HR module.", "show": false },
    { "question": "What is the process for returning company assets during exit?", "answer": "Company assets must be returned during the clearance process in the 'Exit Management' section.", "show": false },
    { "question": "Can I check my training history?", "answer": "Yes, training history is available under the 'Learning & Development' section.", "show": false },
    { "question": "What is the process for changing my emergency contact details?", "answer": "Emergency contact details can be updated in the 'Profile Management' section.", "show": false },
    { "question": "How do I raise a workplace safety concern?", "answer": "Workplace safety concerns can be reported in the 'Safety & Compliance' section.", "show": false },
    { "question": "Can I request additional leave days?", "answer": "Additional leave requests can be submitted under the 'Leave Management' section for approval.", "show": false },
    { "question": "How do I track my probation period progress?", "answer": "Probation progress can be tracked in the 'Probation Tracker' under the HR module.", "show": false },
    { "question": "How do I access employee benefits information?", "answer": "Employee benefits information is available in the 'Benefits' section of the HR portal.", "show": false },
    { "question": "Can I submit a work-from-home request?", "answer": "Yes, work-from-home requests can be submitted through the 'Remote Work' section in HR.", "show": false },
    { "question": "How do I request a certificate of employment?", "answer": "Certificates can be requested in the 'Documents' section under 'Employment Verification'.", "show": false },
    { "question": "What is the process for handling payroll discrepancies?", "answer": "Payroll discrepancies can be reported under the 'Payroll Helpdesk' section in HR.", "show": false },
    { "question": "Can I view my team’s leave calendar?", "answer": "Yes, the team leave calendar is accessible under the 'Team Leave Overview' section.", "show": false },
    { "question": "How do I nominate myself for training programs?", "answer": "Self-nominations can be submitted through the 'Learning & Development' section.", "show": false },
    { "question": "What is the policy for overtime compensation?", "answer": "The overtime policy is outlined in the 'Policies' section under 'Compensation'.", "show": false },
    { "question": "How do I submit suggestions for company improvements?", "answer": "Suggestions can be submitted through the 'Employee Suggestions' section in HR.", "show": false },
    { "question": "What is the process for reporting harassment?", "answer": "Harassment reports can be submitted confidentially under the 'Grievance Redressal' section.", "show": false },
    { "question": "How do I access mental health support?", "answer": "Mental health resources are available under the 'Wellness Programs' section in HR.", "show": false },
    { "question": "Can I participate in cross-departmental projects?", "answer": "Yes, cross-departmental project participation can be requested through the 'Collaboration' section.", "show": false },
    { "question": "What is the policy for unpaid leave?", "answer": "The unpaid leave policy is detailed in the 'Leave Management' section.", "show": false },
    { "question": "How do I raise technical issues in HR systems?", "answer": "Technical issues can be reported through the 'HR Support' section.", "show": false },
    { "question": "How can I view my performance appraisal history?", "answer": "Performance appraisal history is available in the 'Performance Reviews' section of HR.", "show": false },
    { "question": "Can I request flexible work hours?", "answer": "Yes, flexible work hour requests can be submitted through the 'Work Schedule' section.", "show": false },
    { "question": "How do I submit tax-related documents?", "answer": "Tax-related documents can be uploaded in the 'Payroll Settings' section.", "show": false },
    { "question": "What is the procedure for initiating a role change?", "answer": "Role change requests are handled through the 'Career Growth' section in HR.", "show": false },
    { "question": "How do I submit suggestions for company improvements?", "answer": "Suggestions can be submitted through the 'Employee Suggestions' section in HR.", "show": false },
    { "question": "What is the process for reporting harassment?", "answer": "Harassment reports can be submitted confidentially under the 'Grievance Redressal' section.", "show": false },
    { "question": "How do I access mental health support?", "answer": "Mental health resources are available under the 'Wellness Programs' section in HR.", "show": false },
    { "question": "Can I participate in cross-departmental projects?", "answer": "Yes, cross-departmental project participation can be requested through the 'Collaboration' section.", "show": false },
    { "question": "What is the policy for unpaid leave?", "answer": "The unpaid leave policy is detailed in the 'Leave Management' section.", "show": false },
    { "question": "How do I raise technical issues in HR systems?", "answer": "Technical issues can be reported through the 'HR Support' section.", "show": false },
    { "question": "How can I view my performance appraisal history?", "answer": "Performance appraisal history is available in the 'Performance Reviews' section of HR.", "show": false },
    { "question": "Can I request flexible work hours?", "answer": "Yes, flexible work hour requests can be submitted through the 'Work Schedule' section.", "show": false },
    { "question": "How do I submit tax-related documents?", "answer": "Tax-related documents can be uploaded in the 'Payroll Settings' section.", "show": false },
    { "question": "What is the procedure for initiating a role change?", "answer": "Role change requests are handled through the 'Career Growth' section in HR.", "show": false }
],

    "CRM": [
    { "question": "How can you access the Accounts application?", "answer": "Locate the App Navigation Section, search for the 'Accounts' application, and click to open it. For quick access, you can pin the Accounts app to the navigation bar.", "show": false },
    { "question": "How do you customize the columns visible in Accounts?", "answer": "Use the Customize option to select, deselect, and rearrange columns. Simply drag and drop the desired fields to tailor the table view to match your workflow requirements.", "show": false },
    { "question": "How do filters help in Accounts?", "answer": "Filters allow users to refine data based on specific criteria, such as location, stakeholders, or account status, simplifying navigation and improving access to relevant account records.", "show": false },
    { "question": "How do you update financial details in Accounts?", "answer": "Navigate to the Account Financials section, edit fields like payment terms, tax details, billing currency, or GSTIN, and save the updates for accurate financial record management.", "show": false },
    { "question": "What is the Opportunities Landing Page?", "answer": "The Opportunities Landing Page lists all opportunities. By default, it shows opportunities linked to the logged-in user ('My Opportunities'), but it can also display all opportunities in the system.", "show": false },
    { "question": "What does the Opportunity Audit Log show?", "answer": "The Opportunity Audit Log maintains a detailed history of all changes made to opportunity details, including updates to timelines, stakeholders, and revenue information.", "show": false },
    { "question": "What happens when an Opportunity is closed as Won?", "answer": "Once an Opportunity is closed as Won, the associated Quote becomes locked. This ensures data integrity and prevents further modifications to the approved project cost structure.", "show": false },
    { "question": "What does the GM% field show in Quotes?", "answer": "The GM% (Gross Margin Percentage) indicates profitability, calculated as: GM% = (Total Revenue - Total Cost) / Total Revenue × 100. It helps assess project margins and financial health.", "show": false },
    { "question": "How do you create a Quote?", "answer": "Navigate to the Opportunity module > Quote tab, click Create Quote, then add details like services, positions, rates, and units. Save the quote to initiate project costing and tracking.", "show": false },
    { "question": "What is the Quote Monthly Projection Report?", "answer": "It aggregates active Quote data to display month-wise revenue and effort projections. The report helps track expected revenue, identify trends, and plan resource allocations effectively.", "show": false },
    { "question": "How do you add Opportunity stakeholders?", "answer": "Stakeholders can be added via the 'Stakeholders' tab within the Opportunity details page.", "show": false },
    { "question": "What is the purpose of Parent Opportunities?", "answer": "Parent Opportunities link to smaller dependent opportunities for better tracking and management.", "show": false },
    { "question": "How do you access the Accounts Audit Log?", "answer": "Go to the Accounts section, select an account, and view the 'Audit Log' tab.", "show": false },
    { "question": "Can Quotes be modified after project creation?", "answer": "No, Quotes are locked after project creation, but new positions can still be added.", "show": false },
    { "question": "How do you apply filters in Opportunities?", "answer": "Filters can be applied in the Opportunities dashboard to refine views based on criteria such as stage, stakeholder, and timeline.", "show": false },
    { "question": "What are Exception Widgets?", "answer": "Exception Widgets in the Sales Dashboard highlight anomalies like inactive quotes, overdue opportunities, or mismatched data.", "show": false },
    { "question": "How do you activate a Quote?", "answer": "Navigate to the Quotes section and use the 'Flag' option to activate the Quote.", "show": false },
    { "question": "What is the purpose of the Customize Fields option?", "answer": "Customize Fields allows users to add, remove, or rearrange columns in dashboards and reports.", "show": false },
    { "question": "How do you track Quote performance?", "answer": "Quote performance can be tracked through the Quote Monthly Projection Report and Sales Dashboard.", "show": false },
    { "question": "How are Opportunity Values synced with Quotes?", "answer": "Opportunity Values are automatically updated based on active Quotes.", "show": false },
    { "question": "How can you share account details?", "answer": "Account details can be shared using the 'Share' option in the Accounts section.", "show": false },
    { "question": "What is the role of Rate Cards in Quotes?", "answer": "Rate Cards store predefined pricing for positions, licenses, and services, automatically populating Quotes when selected.", "show": false },
    { "question": "What does the Sales Dashboard show?", "answer": "The Sales Dashboard visualizes revenue projections by stage, owner, and entity, alongside exception widgets for critical alerts.", "show": false },
    { "question": "How do you reject a Quote?", "answer": "Navigate to the Quotes section, select the Quote, and choose the 'Reject' option to finalize rejection.", "show": false },
    { "question": "What is the purpose of the Opportunity Confidence Level field?", "answer": "This field reflects the likelihood of winning the Opportunity and influences resource planning.", "show": false },
    { "question": "Can I create a custom Quote template?", "answer": "Yes, custom templates can be created in the 'Quote Configuration' section.", "show": false },
    { "question": "How do I update Opportunity details?", "answer": "Go to the Opportunity overview page and use the edit icon to update fields like name, stage, or timeline.", "show": false },
    { "question": "What is the Planned Opportunity Closure Date?", "answer": "It indicates the expected date for finalizing and closing an Opportunity.", "show": false },
    { "question": "Can I duplicate an existing Opportunity?", "answer": "Yes, Opportunities can be duplicated via the 'Duplicate Opportunity' option.", "show": false },
    { "question": "How do I categorize Opportunities by priority?", "answer": "Use the 'Priority for Deployment' field to mark urgent or high-priority Opportunities.", "show": false },
    { "question": "What is the purpose of the Revenue Stream field?", "answer": "This field categorizes the type of revenue generated, such as services or licenses.", "show": false },
    { "question": "How do you merge Opportunities?", "answer": "Opportunities can be merged through the 'Merge Opportunities' feature in the Opportunities section.", "show": false },
    { "question": "How do you track Opportunity Confidence Levels?", "answer": "Confidence Levels are displayed on the Opportunity overview page, with updates based on CRM activities.", "show": false },
    { "question": "How are delivery durations calculated?", "answer": "Delivery durations are calculated based on the planned start and end dates of the Opportunity.", "show": false },
    { "question": "What is the process for assigning Opportunities to team members?", "answer": "Opportunities can be assigned via the 'Owner Assignment' dropdown in the Opportunity details page.", "show": false },
    { "question": "How do you flag overdue Opportunities?", "answer": "Overdue Opportunities are flagged automatically in the CRM dashboard under 'Exceptions'.", "show": false },
    { "question": "Can I archive old Opportunities?", "answer": "Yes, Opportunities can be archived using the 'Archive' option.", "show": false },
    { "question": "How do I retrieve archived Opportunities?", "answer": "Archived Opportunities can be accessed through the 'Archived Opportunities' filter in the Opportunities section.", "show": false },
    { "question": "What is the purpose of the Action History button?", "answer": "It tracks all updates and changes made to CRM records for auditing purposes.", "show": false },
    { "question": "How do I apply discounts in Quotes?", "answer": "Discounts can be applied in the Quotes section using the 'Add Discount' feature.", "show": false },
    { "question": "How do I export Opportunity data?", "answer": "Opportunity data can be exported to Excel or CSV via the 'Export' option in the Opportunities section.", "show": false },
    { "question": "What does the Candidate Pipeline in CRM show?", "answer": "It displays the status of candidates across various stages of the recruitment or sales process.", "show": false },
    { "question": "How do I configure alerts for CRM updates?", "answer": "Alerts can be configured in the 'Notification Settings' section.", "show": false },
    { "question": "What is the purpose of the Refresh View option?", "answer": "It resets all applied filters and displays the most updated records in CRM sections.", "show": false },
    { "question": "Can I delete inactive Accounts?", "answer": "Yes, inactive Accounts can be deleted via the 'Delete' option in the Accounts section.", "show": false },
    { "question": "How do I create a custom dashboard view?", "answer": "Custom dashboard views can be created by selecting widgets in the 'Dashboard Settings' section.", "show": false }
],

    "Finance": [
    { "question": "How can I generate financial reports?", "answer": "Navigate to Finance > Reports > Generate Report and select the report type you need.", "show": false },
    { "question": "What payment methods are supported?", "answer": "KEBS supports payment methods such as credit cards, PayPal, and bank transfers.", "show": false },
    { "question": "How do I update billing information?", "answer": "Go to the Billing section in your account settings and update payment or billing details.", "show": false },
    { "question": "What is the refund policy?", "answer": "The refund policy is outlined in the Terms and Conditions section under Finance policies.", "show": false },
    { "question": "Can I set up recurring payments?", "answer": "Yes, recurring payments can be configured in the 'Recurring Payments' section of Finance.", "show": false },
    { "question": "How do I view my invoice history?", "answer": "Go to Finance > Invoices to view the full history of your invoices.", "show": false },
    { "question": "Can I download invoices?", "answer": "Yes, invoices can be downloaded as PDF files from the 'Invoices' section.", "show": false },
    { "question": "What currencies are supported?", "answer": "KEBS supports multiple currencies, including USD, EUR, GBP, and INR.", "show": false },
    { "question": "How do I dispute a charge?", "answer": "To dispute a charge, contact support through the 'Dispute Charge' option in Finance.", "show": false },
    { "question": "Can I add multiple payment methods?", "answer": "Yes, you can add and manage multiple payment methods in the 'Payment Methods' section.", "show": false },
    { "question": "How do I update tax details?", "answer": "Tax details can be updated in the 'Tax Management' section under Finance.", "show": false },
    { "question": "Can I split payments across multiple accounts?", "answer": "Yes, payments can be split using the 'Split Payment' option during checkout.", "show": false },
    { "question": "How do I automate expense approvals?", "answer": "Expense approvals can be automated in the 'Expense Settings' section of Finance.", "show": false },
    { "question": "What financial KPIs are available in Finance?", "answer": "KPIs such as profit margins, expense ratios, and revenue growth metrics are available in the Finance dashboard.", "show": false },
    { "question": "How do I access my organization's budget overview?", "answer": "The budget overview can be found in the 'Budget Management' section.", "show": false },
    { "question": "How do I submit an expense claim?", "answer": "Expense claims can be submitted through the 'Expense Management' section in Finance.", "show": false },
    { "question": "Can I schedule automatic financial report generation?", "answer": "Yes, reports can be scheduled for automatic generation in the 'Report Scheduler' section.", "show": false },
    { "question": "What is the process for reconciling transactions?", "answer": "Transactions can be reconciled through the 'Reconciliation' tab under Finance.", "show": false },
    { "question": "How do I track overdue payments?", "answer": "Overdue payments are displayed in the 'Accounts Receivable' section.", "show": false },
    { "question": "What is the function of the Revenue Tracker?", "answer": "The Revenue Tracker monitors incoming revenue streams and categorizes them for better analysis.", "show": false },
    { "question": "How do I configure late payment penalties?", "answer": "Late payment penalties can be set up in the 'Payment Policies' section.", "show": false },
    { "question": "Can I generate profit and loss statements?", "answer": "Yes, profit and loss statements are available in the 'Reports' section.", "show": false },
    { "question": "How do I categorize expenses?", "answer": "Expenses can be categorized under 'Expense Categories' in the Finance module.", "show": false },
    { "question": "What is the purpose of the Cash Flow Dashboard?", "answer": "The Cash Flow Dashboard tracks inflows and outflows, giving a real-time view of cash availability.", "show": false },
    { "question": "Can I link external bank accounts?", "answer": "Yes, external bank accounts can be linked via the 'Bank Integration' option.", "show": false },
    { "question": "How do I manage payment reminders?", "answer": "Payment reminders can be configured in the 'Reminder Settings' section of Finance.", "show": false },
    { "question": "Can I track vendor payments?", "answer": "Yes, vendor payments can be tracked in the 'Accounts Payable' section.", "show": false },
    { "question": "What is the process for creating purchase orders?", "answer": "Purchase orders can be created in the 'Purchase Order' section by filling in required details and saving them.", "show": false },
    { "question": "How do I add new vendors to the system?", "answer": "Vendors can be added via the 'Vendor Management' section under Finance.", "show": false },
    { "question": "What is the purpose of the Expense Tracker?", "answer": "The Expense Tracker monitors all recorded expenses and highlights trends or anomalies.", "show": false },
    { "question": "How do I record manual payments?", "answer": "Manual payments can be recorded in the 'Payments' tab by selecting 'Add Manual Payment'.", "show": false },
    { "question": "Can I set budget limits for departments?", "answer": "Yes, budget limits can be defined in the 'Budget Allocation' section.", "show": false },
    { "question": "How do I generate an invoice for a customer?", "answer": "Invoices can be generated in the 'Invoice Creation' section by selecting the customer and entering the required details.", "show": false },
    { "question": "Can I track recurring expenses?", "answer": "Yes, recurring expenses can be tracked and managed in the 'Recurring Expenses' section.", "show": false },
    { "question": "How do I calculate gross margins?", "answer": "Gross margins are calculated in the Finance dashboard using the formula: Total Revenue - Total Cost.", "show": false },
    { "question": "What is the process for updating financial forecasts?", "answer": "Financial forecasts can be updated in the 'Forecasting' section under Finance.", "show": false },
    { "question": "How do I add tax exemptions?", "answer": "Tax exemptions can be configured in the 'Tax Exemptions' section of the Tax Management module.", "show": false },
    { "question": "What is the process for refunding a customer?", "answer": "Customer refunds can be initiated in the 'Refunds' section under Finance.", "show": false },
    { "question": "Can I export financial data?", "answer": "Yes, financial data can be exported to Excel or CSV via the 'Export Data' option.", "show": false },
    { "question": "What is the Accounts Receivable aging report?", "answer": "The AR aging report displays overdue receivables categorized by their duration.", "show": false },
    { "question": "How do I configure currency exchange rates?", "answer": "Exchange rates can be configured in the 'Currency Settings' section.", "show": false },
    { "question": "What is the purpose of the Financial Summary page?", "answer": "The Financial Summary provides an overview of key metrics like revenue, expenses, and profit.", "show": false },
    { "question": "Can I create custom payment terms?", "answer": "Yes, custom payment terms can be created in the 'Payment Terms' section.", "show": false },
    { "question": "How do I enable payment gateway integration?", "answer": "Payment gateway integration can be enabled in the 'Integrations' section of Finance settings.", "show": false },
    { "question": "What is the process for handling disputed invoices?", "answer": "Disputed invoices are managed in the 'Dispute Resolution' section under Invoices.", "show": false },
    { "question": "Can I schedule recurring invoices?", "answer": "Yes, recurring invoices can be scheduled in the 'Recurring Invoices' section.", "show": false },
    { "question": "How do I track department-specific expenses?", "answer": "Department-specific expenses are tracked in the 'Expense Allocation' section of Finance.", "show": false },
    { "question": "What is the process for submitting vendor bills?", "answer": "Vendor bills can be submitted in the 'Vendor Billing' section.", "show": false },
    { "question": "How do I reconcile bank statements?", "answer": "Bank statements can be reconciled in the 'Bank Reconciliation' section.", "show": false },
    { "question": "What is the Accounts Receivable aging report?", "answer": "The AR aging report displays overdue receivables categorized by their duration.", "show": false },
    { "question": "How do I configure currency exchange rates?", "answer": "Exchange rates can be configured in the 'Currency Settings' section.", "show": false },
    { "question": "What is the purpose of the Financial Summary page?", "answer": "The Financial Summary provides an overview of key metrics like revenue, expenses, and profit.", "show": false },
    { "question": "Can I create custom payment terms?", "answer": "Yes, custom payment terms can be created in the 'Payment Terms' section.", "show": false },
    { "question": "How do I enable payment gateway integration?", "answer": "Payment gateway integration can be enabled in the 'Integrations' section of Finance settings.", "show": false },
    { "question": "What is the process for handling disputed invoices?", "answer": "Disputed invoices are managed in the 'Dispute Resolution' section under Invoices.", "show": false },
    { "question": "Can I schedule recurring invoices?", "answer": "Yes, recurring invoices can be scheduled in the 'Recurring Invoices' section.", "show": false },
    { "question": "How do I track department-specific expenses?", "answer": "Department-specific expenses are tracked in the 'Expense Allocation' section of Finance.", "show": false },
    { "question": "What is the process for submitting vendor bills?", "answer": "Vendor bills can be submitted in the 'Vendor Billing' section.", "show": false },
    { "question": "How do I reconcile bank statements?", "answer": "Bank statements can be reconciled in the 'Bank Reconciliation' section.", "show": false }
],

    "Timesheet": [
    { "question": "How do I submit a timesheet?", "answer": "Go to the Timesheets module, select the relevant project, enter hours worked, and click 'Submit'.", "show": false },
    { "question": "Can I edit a submitted timesheet?", "answer": "Yes, submitted timesheets can be edited until they are approved by a manager.", "show": false },
    { "question": "How do I track my timesheet approvals?", "answer": "Timesheet approvals can be tracked under the 'Approval Status' tab in the Timesheets module.", "show": false },
    { "question": "What happens if my timesheet is rejected?", "answer": "You will receive a notification, and you can edit and resubmit the timesheet for approval.", "show": false },
    { "question": "Can I submit timesheets for multiple projects?", "answer": "Yes, you can submit timesheets for multiple projects by selecting each project separately in the Timesheets module.", "show": false },
    { "question": "How do I record overtime in my timesheet?", "answer": "Overtime can be recorded by selecting the 'Overtime' category and entering the additional hours.", "show": false },
    { "question": "Can I add comments to my timesheet?", "answer": "Yes, comments can be added in the 'Notes' section before submitting the timesheet.", "show": false },
    { "question": "How do I view past timesheets?", "answer": "Past timesheets can be accessed under the 'Timesheet History' section in the Timesheets module.", "show": false },
    { "question": "Can I export my timesheets?", "answer": "Yes, timesheets can be exported as Excel or PDF files using the 'Export' option.", "show": false },
    { "question": "How do managers approve timesheets?", "answer": "Managers approve timesheets via the 'Approval Queue' in the Timesheets module.", "show": false },
    { "question": "What is the deadline for timesheet submission?", "answer": "Timesheet deadlines are set by the organization and displayed in the Timesheets dashboard.", "show": false },
    { "question": "Can I set up recurring timesheet entries?", "answer": "Yes, recurring entries can be configured for repetitive tasks in the 'Recurring Entries' section.", "show": false },
    { "question": "What happens if I miss the timesheet deadline?", "answer": "Missed deadlines will result in a notification, and late submissions may require managerial approval.", "show": false },
    { "question": "How do I allocate hours to specific tasks?", "answer": "Allocate hours by selecting the task under the relevant project and entering the time worked.", "show": false },
    { "question": "Can I track billable and non-billable hours?", "answer": "Yes, you can categorize hours as billable or non-billable in the Timesheets module.", "show": false },
    { "question": "How do I view my total hours for a project?", "answer": "Total hours for a project are displayed in the 'Project Summary' tab.", "show": false },
    { "question": "Can I submit timesheets on behalf of my team?", "answer": "Yes, if you have managerial permissions, you can submit timesheets for your team.", "show": false },
    { "question": "How do I correct an error in a submitted timesheet?", "answer": "Errors can be corrected by recalling the timesheet, editing the details, and resubmitting it.", "show": false },
    { "question": "What is the purpose of the Timesheet Summary?", "answer": "The Timesheet Summary provides a consolidated view of hours worked, approvals, and pending submissions.", "show": false },
    { "question": "How do I log hours for a non-project task?", "answer": "Log non-project hours under the 'Miscellaneous' category in the Timesheets module.", "show": false },
    { "question": "Can I view my team's timesheets?", "answer": "Yes, team timesheets can be viewed under the 'Team Timesheets' section if you have access permissions.", "show": false },
    { "question": "How do I submit timesheets for leave days?", "answer": "Leave days can be marked in the 'Leave' section of the Timesheets module.", "show": false },
    { "question": "What is the process for approving overtime hours?", "answer": "Overtime hours are approved through the 'Overtime Approvals' section in the Timesheets module.", "show": false },
    { "question": "Can I track my weekly working hours?", "answer": "Yes, weekly working hours are displayed in the 'Weekly Overview' tab.", "show": false },
    { "question": "How do I enable timesheet reminders?", "answer": "Timesheet reminders can be configured in the 'Notification Settings' section.", "show": false },
    { "question": "What happens if my timesheet is overdue?", "answer": "Overdue timesheets will appear in the 'Pending Submissions' tab with an alert.", "show": false },
    { "question": "Can I delete a draft timesheet?", "answer": "Yes, draft timesheets can be deleted using the 'Delete Draft' option.", "show": false },
    { "question": "How do I view the approval status of my timesheet?", "answer": "Approval status is visible in the 'Approval History' section.", "show": false },
    { "question": "What is the process for creating a new timesheet template?", "answer": "New templates can be created under the 'Templates' section by defining tasks and hours.", "show": false },
    { "question": "Can I categorize hours by department?", "answer": "Yes, hours can be categorized by department in the 'Department Allocation' section.", "show": false },
    { "question": "How do I view timesheet analytics?", "answer": "Analytics can be accessed in the 'Timesheet Dashboard' for insights into hours worked and utilization rates.", "show": false },
    { "question": "Can I edit a recalled timesheet?", "answer": "Yes, recalled timesheets can be edited before resubmission.", "show": false },
    { "question": "How do I approve multiple timesheets at once?", "answer": "Multiple timesheets can be approved in bulk through the 'Batch Approvals' option.", "show": false },
    { "question": "What is the purpose of the Timesheet Calendar view?", "answer": "The Timesheet Calendar provides a visual representation of hours logged on specific dates.", "show": false },
    { "question": "Can I log hours for future dates?", "answer": "Future hours can only be logged if enabled by your organization's policy.", "show": false },
    { "question": "How do I track unbilled hours?", "answer": "Unbilled hours are tracked in the 'Unbilled Hours' tab of the Timesheets module.", "show": false },
    { "question": "Can I export team timesheet data?", "answer": "Yes, team timesheet data can be exported from the 'Team Summary' section.", "show": false },
    { "question": "How do I configure timesheet approval workflows?", "answer": "Approval workflows can be configured in the 'Approval Settings' section.", "show": false },
    { "question": "What is the Timesheet Utilization Report?", "answer": "This report provides insights into resource utilization based on logged hours.", "show": false },
    { "question": "Can I log break hours separately?", "answer": "Yes, break hours can be logged under the 'Breaks' category.", "show": false },
    { "question": "How do I set up automated timesheet submission reminders?", "answer": "Automated reminders can be set up in the 'Reminders' tab of Timesheet Settings.", "show": false },
    { "question": "What is the process for submitting timesheets for approval?", "answer": "Timesheets are submitted by clicking the 'Submit for Approval' button after logging hours.", "show": false },
    { "question": "How do I check the status of submitted timesheets?", "answer": "The status of submitted timesheets is available in the 'Submitted Timesheets' section.", "show": false },
    { "question": "Can I categorize hours by activity type?", "answer": "Yes, hours can be categorized by activity type, such as development, testing, or meetings.", "show": false },
    { "question": "What happens if my timesheet is partially approved?", "answer": "You can edit and resubmit the rejected portions for re-approval.", "show": false },
    { "question": "How do I log hours for training sessions?", "answer": "Training hours can be logged under the 'Training' category in the Timesheets module.", "show": false },
    { "question": "Can I access timesheets offline?", "answer": "Offline access is available if your organization enables this feature.", "show": false },
    { "question": "How do I view pending timesheet submissions?", "answer": "Pending submissions are visible in the 'Pending Submissions' section of the Timesheets module.", "show": false },
    { "question": "Can I categorize hours by department?", "answer": "Yes, hours can be categorized by department in the 'Department Allocation' section.", "show": false },
    { "question": "How do I view timesheet analytics?", "answer": "Analytics can be accessed in the 'Timesheet Dashboard' for insights into hours worked and utilization rates.", "show": false },
    { "question": "Can I edit a recalled timesheet?", "answer": "Yes, recalled timesheets can be edited before resubmission.", "show": false },
    { "question": "How do I approve multiple timesheets at once?", "answer": "Multiple timesheets can be approved in bulk through the 'Batch Approvals' option.", "show": false },
    { "question": "What is the purpose of the Timesheet Calendar view?", "answer": "The Timesheet Calendar provides a visual representation of hours logged on specific dates.", "show": false },
    { "question": "Can I log hours for future dates?", "answer": "Future hours can only be logged if enabled by your organization's policy.", "show": false },
    { "question": "How do I track unbilled hours?", "answer": "Unbilled hours are tracked in the 'Unbilled Hours' tab of the Timesheets module.", "show": false },
    { "question": "Can I export team timesheet data?", "answer": "Yes, team timesheet data can be exported from the 'Team Summary' section.", "show": false },
    { "question": "How do I configure timesheet approval workflows?", "answer": "Approval workflows can be configured in the 'Approval Settings' section.", "show": false },
    { "question": "What is the Timesheet Utilization Report?", "answer": "This report provides insights into resource utilization based on logged hours.", "show": false },
    { "question": "Can I log break hours separately?", "answer": "Yes, break hours can be logged under the 'Breaks' category.", "show": false },
    { "question": "How do I set up automated timesheet submission reminders?", "answer": "Automated reminders can be set up in the 'Reminders' tab of Timesheet Settings.", "show": false },
]

  };

/* ...................................................................*/  
$scope.faqsPerPage = 10; // FAQs per page
$scope.currentPage = 0; // Default to the first page
$scope.paginatedFaqs = []; // Store current page's FAQs
$scope.selectedApp = null; // Default to 'Select Module'

// Calculate total pages for the selected module
$scope.totalPages = function () {
  const faqs = $scope.selectedApp
    ? $scope.faqs[$scope.selectedApp] || []
    : [].concat(...Object.values($scope.faqs)); // Combine all FAQs if no module is selected
  return Math.ceil(faqs.length / $scope.faqsPerPage);
};

// Update paginated FAQs for the current page
$scope.updatePaginatedFaqs = function () {
  const faqs = $scope.selectedApp
    ? $scope.faqs[$scope.selectedApp] || [] // Filter by selected module
    : [].concat(...Object.values($scope.faqs)); // Combine all FAQs if no module selected
  const start = $scope.currentPage * $scope.faqsPerPage;
  const end = start + $scope.faqsPerPage;
  $scope.paginatedFaqs = faqs.slice(start, end); // Paginate the FAQs
};


// Handle module selection change
$scope.onModuleChange = function (module) {
  $scope.selectedApp = module; // Update the selected module
  $scope.currentPage = 0; // Reset to the first page
  $scope.updatePaginatedFaqs(); 
  $scope.updatePagination();
};


// Pagination navigation
$scope.goToPage = function (action) {
  if (action === 'first') {
    $scope.currentPage = 0;
  } else if (action === 'last') {
    $scope.currentPage = $scope.totalPages() - 1;
  } else if (action === 'prev') {
    $scope.currentPage = Math.max(0, $scope.currentPage - 1);
  } else if (action === 'next') {
    $scope.currentPage = Math.min($scope.totalPages() - 1, $scope.currentPage + 1);
  } else if (typeof action === 'number') {
    $scope.currentPage = action;
  }

  $scope.updatePaginatedFaqs(); // Update the displayed FAQs
  $scope.updatePagination(); // Update the pagination buttons

  $scope.currentPage = page; // Set the current page
  $scope.updatePaginatedFaqs();
};

$scope.updatePagination = function () {
  $scope.pagination = [];

  // Add "First" and "Previous" buttons
  $scope.pagination.push({ label: '«', action: 'first', disabled: $scope.currentPage === 0 });
  $scope.pagination.push({ label: '‹', action: 'prev', disabled: $scope.currentPage === 0 });

  const totalPages = $scope.totalPages();
  const maxVisiblePages = 3; // Number of visible pages in pagination
  let startPage = Math.max(0, $scope.currentPage - 1);
  let endPage = Math.min(totalPages, startPage + maxVisiblePages);

  // Ensure pagination always shows the first few pages if the current page is near the start
  if ($scope.currentPage <= 2) {
    startPage = 0;
    endPage = Math.min(maxVisiblePages, totalPages);
  }

  // Add numbered page buttons
  for (let i = startPage; i < endPage; i++) {
    $scope.pagination.push({ label: i + 1, action: i, active: $scope.currentPage === i });
  }

  // Add ellipsis if there are many pages
  if (endPage < totalPages - 3) {
    $scope.pagination.push({ label: '...', action: null });
  }

  // Add the last few pages
  for (let i = Math.max(totalPages - 3, endPage); i < totalPages; i++) {
    $scope.pagination.push({ label: i + 1, action: i, active: $scope.currentPage === i });
  }

  // Add "Next" and "Last" buttons
  $scope.pagination.push({ label: '›', action: 'next', disabled: $scope.currentPage === totalPages - 1 });
  $scope.pagination.push({ label: '»', action: 'last', disabled: $scope.currentPage === totalPages - 1 });
};

// Toggle FAQ visibility
$scope.toggleFaq = function (index) {
  const faqs = $scope.selectedApp
    ? $scope.faqs[$scope.selectedApp]
    : [].concat(...Object.values($scope.faqs)); // Fallback to all FAQs if no module selected
  if (faqs[index]) {
    faqs[index].show = !faqs[index].show;
  }
};

// Initialize FAQs
$scope.updatePaginatedFaqs();
$scope.updatePagination();

/* ...........................................................................................................................*/

// Add, Edit, Delete, Toggle logic remains unchanged
// Open Add FAQ dialog
$scope.openDialog = function () {
  $scope.showDialog = true;
  $scope.showEditDialog = false; // Hide edit dialog when adding new FAQ
  $scope.showSuccessDialog = false; // Ensure success dialog is hidden
  $scope.newFaq = { question: "", answer: "", module: $scope.selectedApp || "Projects" };
  document.getElementById('editor-container').innerHTML = '';
};

// Add FAQ logic
$scope.addFaq = function () {
  if ($scope.newFaq.question && $scope.newFaq.answer) {
    // Add the new FAQ
    if (!$scope.faqs[$scope.newFaq.module]) {
      $scope.faqs[$scope.newFaq.module] = [];
    }
    $scope.faqs[$scope.newFaq.module].push({
      question: $scope.newFaq.question,
      answer: $scope.newFaq.answer,
      show: false
    });

    $scope.updatePaginatedFaqs(); // Refresh the displayed FAQs
    $scope.updatePagination(); // Update the pagination

    // Display the success dialog
    $scope.showDialog = false; // Close the Add FAQ dialog
    $timeout(function () {
      $scope.showSuccessDialog = true; // Show the success dialog
    }, 300); // Optional slight delay for a smoother transition
  } else {
    alert("Please fill in all the fields.");
  }
};

// Close the success dialog
$scope.closeSuccessDialog = function () {
  $scope.showSuccessDialog = false;
};

// Close all dialogs
$scope.closeDialog = function () {
  $scope.showDialog = false;
  $scope.showEditDialog = false;
  $scope.showSuccessDialog = false;
  $scope.newFaq = { question: '', answer: '', module: 'Projects' }; // Reset all fields
};

// Open Edit FAQ dialog
$scope.openEditDialog = function (index) {
  const selectedFaqs = $scope.selectedApp ? $scope.faqs[$scope.selectedApp] : $scope.faqs["Projects"];
  if (selectedFaqs[index]) {
    $scope.showEditDialog = true;
    $scope.showDialog = false; // Ensure the add dialog is hidden
    $scope.showSuccessDialog = false; // Hide success dialog during editing
    $scope.currentEditIndex = index;

    $scope.newFaq = {
      question: selectedFaqs[index].question,
      answer: selectedFaqs[index].answer || "", // Default to empty string if undefined
      module: $scope.selectedApp || "Projects" // Default to "Projects" if no module is selected
    };

    // Populate contenteditable div
    const editor = document.getElementById('editor-container');
    editor.innerHTML = $scope.newFaq.answer;
  } else {
    alert("Invalid FAQ selection. Please try again.");
  }
};



// Save edited FAQ
$scope.saveEditFaq = function () {
  const selectedFaqs = $scope.selectedApp ? $scope.faqs[$scope.selectedApp] : $scope.faqs["Projects"];
  if ($scope.newFaq.question && $scope.newFaq.answer && selectedFaqs[$scope.currentEditIndex]) {
    // Update the FAQ
    selectedFaqs[$scope.currentEditIndex].question = $scope.newFaq.question;
    selectedFaqs[$scope.currentEditIndex].answer = $scope.newFaq.answer;

    $scope.updatePaginatedFaqs(); // Refresh the displayed FAQs
    $scope.updatePagination(); // Update the pagination

    // Close the edit dialog and show success dialog
    $scope.showEditDialog = false;
    $timeout(function () {
      $scope.showSuccessDialog = true; // Show the success dialog
    }, 300); // Optional slight delay for a smoother transition
  } else {
    alert("Please fill in all fields.");
  }
};



/* #######################################################################################################################*/


// Add variables to manage dialog state
$scope.showDeleteDialog = false;
$scope.faqToDeleteIndex = null;

// Function to open the delete dialog
$scope.openDeleteDialog = function (index) {
  $scope.showDeleteDialog = true;
  $scope.faqToDeleteIndex = index; // Save the index of the FAQ to delete
};

// Function to confirm deletion
$scope.confirmDelete = function () {
  const selectedFaqs = $scope.selectedApp ? $scope.faqs[$scope.selectedApp] : $scope.faqs["Projects"];
  if (selectedFaqs && $scope.faqToDeleteIndex !== null) {
    selectedFaqs.splice($scope.faqToDeleteIndex, 1); // Remove the FAQ at the saved index
    $scope.updatePaginatedFaqs(); // Refresh displayed FAQs
    $scope.updatePagination(); // Update pagination
  }
  $scope.showDeleteDialog = false; // Close the delete dialog
  $scope.faqToDeleteIndex = null; // Reset the index
};

// Function to cancel deletion
$scope.cancelDelete = function () {
  $scope.showDeleteDialog = false; // Close the delete dialog
  $scope.faqToDeleteIndex = null; // Reset the index
};
/* .................................................................................................................................................................*/

$scope.showNotificationDialog = false; // To control dialog visibility
$scope.activeTab = 'request'; // Default active tab

// Open the Notification Dialog
$scope.openNotificationDialog = function () {
  $scope.showNotificationDialog = true;
};

// Close the Notification Dialog
$scope.closeNotificationDialog = function () {
  $scope.showNotificationDialog = false;
};

// Change Tabs in the Notification Dialog
$scope.changeTab = function (tab) {
  $scope.activeTab = tab;
};


$scope.syncDescription = function () {
  const editor = document.getElementById('editor-container');
  $scope.newFaq.answer = editor.innerHTML;
};

/* ############################################################################################################*/

}]);