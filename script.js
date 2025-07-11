// script.js - 控制 menubar 和 sidebar 的展开/收起

function toggleMenu() {
  const menu = document.querySelector('nav.menubar');
  if (menu) menu.classList.toggle('show');
}

function toggleSidebar() {
  const sidebar = document.querySelector('aside');
  if (sidebar) sidebar.classList.toggle('show');
}
