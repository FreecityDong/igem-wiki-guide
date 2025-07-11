// script.js - 控制 menubar 和 sidebar 的展开/收起

function toggleMenu() {
  const menu = document.querySelector('nav.menubar');
  const body = document.body;

  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    body.classList.remove('no-scroll'); // ✅ 恢复滚动
  } else {
    menu.classList.add('show');
    body.classList.add('no-scroll'); // ✅ 禁止滚动
  }
}


function toggleSidebar() {
  const sidebar = document.querySelector('aside');
  if (sidebar) sidebar.classList.toggle('show');
}
