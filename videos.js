var app = angular.module('app', []);
app.controller('VideoController', function ($scope) {
  $scope.selectedModule = null; // Default no module selected

  // Videos categorized by modules
  $scope.moduleVideos = {
    Projects: [
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
{ thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },
      { thumbnail: 'images/t1.png', title: 'Custom Fields in Projects', description: 'Learn how to manage custom fields in your project dashboards.' },
      { thumbnail: 'images/t2.png', title: 'Best Collaboration Practices', description: 'Tips for seamless team collaboration within projects.' },
      { thumbnail: 'images/t3.png', title: 'Configuring New Projects', description: 'Step-by-step guide for creating and configuring projects.' },
      { thumbnail: 'images/t4.png', title: 'Archiving Completed Projects', description: 'Learn how to archive and restore projects efficiently.' },

    ],
    ATS: [
      { thumbnail: 'images/t1.png', title: 'Posting Job Openings', description: 'Learn how to create and manage job postings effectively.' },
      { thumbnail: 'images/t2.png', title: 'Tracking Applications', description: 'Best practices for tracking candidate applications in ATS.' },
      { thumbnail: 'images/t3.png', title: 'Interview Feedback', description: 'How to use the interview feedback system for evaluations.' },
      { thumbnail: 'images/t4.png', title: 'Automating Responses', description: 'Set up and manage automated email responses in ATS.' },
    ],
    Finance: [
      { thumbnail: 'images/t1.png', title: 'Generating Financial Reports', description: 'Learn how to create and analyze financial reports.' },
      { thumbnail: 'images/t2.png', title: 'Managing Payments', description: 'Understand supported payment methods and recurring payments.' },
      { thumbnail: 'images/t3.png', title: 'Updating Billing Information', description: 'Step-by-step guide to updating billing information in the Finance module.' },
      { thumbnail: 'images/t4.png', title: 'Disputing Charges', description: 'Learn how to dispute charges effectively in the Finance system.' },
    ],
    HR: [
      { thumbnail: 'images/t1.png', title: 'Leave Policies Overview', description: 'Comprehensive guide on the leave policies in the HR module.' },
      { thumbnail: 'images/t2.png', title: 'Submitting Leave Requests', description: 'Learn how to submit and track your leave requests.' },
      { thumbnail: 'images/t3.png', title: 'Accessing Payslips', description: 'Guide on how to view and download payslips from the HR system.' },
      { thumbnail: 'images/t4.png', title: 'Grievance Redressal', description: 'Learn the process for reporting and resolving grievances.' },
    ],
    CRM: [
      { thumbnail: 'images/t1.png', title: 'Managing Accounts', description: 'Best practices for managing accounts in the CRM module.' },
      { thumbnail: 'images/t2.png', title: 'Customizing Columns', description: 'Learn how to customize visible columns in the Accounts section.' },
      { thumbnail: 'images/t3.png', title: 'Opportunity Tracking', description: 'A guide to tracking opportunities and managing pipelines.' },
      { thumbnail: 'images/t4.png', title: 'Creating Quotes', description: 'Learn how to create and manage quotes in the CRM system.' },
    ],
    Timesheets: [
      { thumbnail: 'images/t1.png', title: 'Logging Work Hours', description: 'Step-by-step guide to logging and tracking work hours.' },
      { thumbnail: 'images/t2.png', title: 'Editing Timesheets', description: 'Learn how to edit and update locked timesheets.' },
      { thumbnail: 'images/t3.png', title: 'Daily Log Reports', description: 'Understand how to generate and analyze daily log reports.' },
      { thumbnail: 'images/t4.png', title: 'Removing Tasks', description: 'Learn how to remove tasks from timesheets effectively.' },
    ],
  };

  $scope.videosPerPage = 12; // Videos per page
$scope.currentPage = 0; // Default to the first page
$scope.paginatedVideos = []; // Store current page's videos

// Calculate total pages for the selected module or all modules
$scope.totalPages = function () {
  let videos = [];
  if ($scope.selectedModule) {
    videos = $scope.moduleVideos[$scope.selectedModule] || [];
  } else {
    videos = [].concat(...Object.values($scope.moduleVideos)); // Combine videos from all modules if no module is selected
  }
  return Math.ceil(videos.length / $scope.videosPerPage);
};

// Update paginated videos for the current page
$scope.updatePaginatedVideos = function () {
  let videos = [];
  if ($scope.selectedModule) {
    videos = $scope.moduleVideos[$scope.selectedModule] || [];
  } else {
    videos = [].concat(...Object.values($scope.moduleVideos)); // Combine videos from all modules if no module is selected
  }
  const start = $scope.currentPage * $scope.videosPerPage;
  const end = start + $scope.videosPerPage;
  $scope.paginatedVideos = videos.slice(start, end);
};
$scope.updatePagination = function () {
  $scope.pagination = [];

  // Add "First" and "Previous" buttons
  $scope.pagination.push({ label: '«', action: 'first', disabled: $scope.currentPage === 0 });
  $scope.pagination.push({ label: '‹', action: 'prev', disabled: $scope.currentPage === 0 });

  const totalPages = $scope.totalPages();
  const maxVisiblePages = 3; // Number of visible pages in the current range
  let startPage = Math.max(0, $scope.currentPage - 1); // Start before the current page
  let endPage = Math.min(totalPages, startPage + maxVisiblePages); // End after maxVisiblePages

  // Always show first few pages if currentPage is near the start
  if ($scope.currentPage <= 2) {
    startPage = 0;
    endPage = Math.min(maxVisiblePages, totalPages);
  }

  // Add numbered pages in the visible range
  for (let i = startPage; i < endPage; i++) {
    $scope.pagination.push({ label: i + 1, action: i, active: $scope.currentPage === i });
  }

  // Add ellipsis for middle pages if needed
  if (endPage < totalPages - maxVisiblePages) {
    $scope.pagination.push({ label: '...', action: null });
  }

  // Add the last few pages
  for (let i = Math.max(totalPages - maxVisiblePages, endPage); i < totalPages; i++) {
    $scope.pagination.push({ label: i + 1, action: i, active: $scope.currentPage === i });
  }

  // Add "Next" and "Last" buttons
  $scope.pagination.push({ label: '›', action: 'next', disabled: $scope.currentPage === totalPages - 1 });
  $scope.pagination.push({ label: '»', action: 'last', disabled: $scope.currentPage === totalPages - 1 });
};


$scope.getPaginationNumbers = function () {
  const total = $scope.totalPages();
  const current = $scope.currentPage + 1; // Adjust for 0-based index
  const range = 3; // Number of pages to show before the ellipsis

  let pages = [];

  if (total <= 7) {
    // If total pages are 7 or less, show all
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    // Always include the first page
    pages.push(1);

    if (current > range + 1) {
      // Add ellipsis if current page is beyond range
      pages.push('...');
    }

    // Add middle range of numbers
    const start = Math.max(2, current - 1); // Start showing from the current - 1
    const end = Math.min(current + 1, total - 1); // Show until current + 1 or second-last page

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (current < total - range) {
      // Add ellipsis if current page is far from the end
      pages.push('...');
    }

    // Always include the last page
    pages.push(total);
  }

  return pages;
};

// Updated goToPage function remains the same
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

  $scope.updatePaginatedVideos(); // Update videos displayed
  $scope.updatePagination(); // Update pagination buttons
};

// Initialize Pagination on Page Load
$scope.updatePaginatedVideos();
$scope.updatePagination();

// Watch for Current Page Changes
$scope.$watch('currentPage', function () {
  $scope.paginationNumbers = $scope.getPaginationNumbers();
});

// Initialize Pagination
$scope.paginationNumbers = $scope.getPaginationNumbers();



// Handle module selection
$scope.onModuleChange = function () {
  $scope.currentPage = 0; // Reset to the first page
  $scope.updatePaginatedVideos(); // Update the videos immediately
};

// Initialize
$scope.updatePaginatedVideos();

  
  /* ........................................................................................................................*/
  $scope.openAddVideoDialog = function () {
    $scope.newVideo = {
      question: '',
      description: '',
      module: $scope.selectedModule || 'Projects',
      videoFile: null,
      thumbnailFile: null,
    };
    $scope.showAddVideoDialog = true;
  };

  // Post video logic
  $scope.postVideo = function () {
    if ($scope.newVideo.question && $scope.newVideo.description) {
      $scope.moduleVideos[$scope.newVideo.module].push({
        thumbnail: 'images/t1.png', // Placeholder thumbnail
        title: $scope.newVideo.question,
        description: $scope.newVideo.description,
      });

      $scope.closeAddVideoDialog(); // Close the dialog
      $scope.showSuccessDialog = true; // Show success dialog
    } else {
      alert('Please fill in all the fields.');
    }
  };

  // Close dialogs
  $scope.closeAddVideoDialog = function () {
    $scope.showAddVideoDialog = false;
  };
  $scope.closeSuccessDialog = function () {
    $scope.showSuccessDialog = false;
  };



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
});
