  function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-250px" || sidebar.style.left === "") {
      sidebar.style.left = "0";
    } else {
      sidebar.style.left = "-250px";
    }
  }

  // Add event listener to collapse sidebar when clicking outside of it
  document.addEventListener('click', function(event) {
    var sidebar = document.getElementById("sidebar");
    if (event.target.closest('.sidebar') === null && sidebar.style.left === '0') {
      sidebar.style.left = '-250px';
    }
  });