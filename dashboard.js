dashboard.jfunction showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.menu li').forEach(item => item.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  document.querySelector(`.menu li[onclick="showTab('${tabId}')"]`).classList.add('active');
}
s