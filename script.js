document.addEventListener('DOMContentLoaded', function(){
  const tabs = document.querySelectorAll('.tab-btn');
  const panes = document.querySelectorAll('.tab-pane');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Hide all panes
      panes.forEach(p => p.style.display = 'none');
      // Add active class to clicked tab
      tab.classList.add('active');
      // Show corresponding pane
      document.getElementById('tab-' + tab.dataset.tab).style.display = 'block';
    });
  });
});
