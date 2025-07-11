// script.js - 控制 menubar 和 sidebar 的展开/收起

function toggleMenu() {
  const menu = document.querySelector('nav.menubar');
  const body = document.body;

  // 📌 隐藏目录面板
  const sidebar = document.querySelector('aside');
  if (sidebar && sidebar.classList.contains('show')) {
    sidebar.classList.remove('show');
    body.classList.remove('aside-open');
  }

  // 📌 隐藏目录按钮（📑）
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.style.display = menu.classList.contains('show') ? 'block' : 'none';
  }

  // 📌 切换菜单显示状态 + 禁用滚动
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    body.classList.remove('no-scroll');
  } else {
    menu.classList.add('show');
    body.classList.add('no-scroll');
  }
}



function toggleSidebar() {
  const sidebar = document.querySelector('aside');
  const body = document.body;
  if (sidebar) {
    sidebar.classList.toggle('show');
    body.classList.toggle('aside-open'); // ✅ 控制 main 右移
  }
}
