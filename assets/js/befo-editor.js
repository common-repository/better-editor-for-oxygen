(function($) {

// Tree opened by default
  setTimeout(function () {
      $(".oxygen-dom-tree-button").click();
  }, 1500);

// Exit Menu
  $(".oxygen-back-to-wp-menu .oxygen-toolbar-button-dropdown").append(
    '<a target="_blank" href="' +
    document.location.origin +
    "/" +
    '" class="oxygen-toolbar-button-dropdown-option"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>Frontend</a><a href="' +
    document.location.origin +
    "/wp-admin/index.php" +
    '" class="oxygen-toolbar-button-dropdown-option"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="currentColor" d="M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14z"/><path d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18 0 00480 287.9C480 164.2 379.7 64 256 64z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 128v32M416 288h-32M128 288H96M165.49 197.49l-22.63-22.63M346.51 197.49l22.63-22.63"/></svg>Dashboard</a><a href="' +
      document.location.origin +
      "/wp-admin/edit.php?post_type=ct_template" +
      '" class="oxygen-toolbar-button-dropdown-option"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><path fill="currentColor" d="M138.58,74.47a63.18,63.18,0,1,0-34.37,56.26,22.55,22.55,0,0,0,34.37-18.92,22,22,0,0,0-4.64-13.54A63,63,0,0,0,138.58,74.47ZM75.37,126.9c-27.91,0-50.53-23.47-50.53-52.43S47.46,22,75.37,22,125.9,45.5,125.9,74.47a53.93,53.93,0,0,1-2.49,16.28,22.76,22.76,0,0,0-7.33-1.21,22.39,22.39,0,0,0-22.5,22.27,22,22,0,0,0,2.62,10.44A48.73,48.73,0,0,1,75.37,126.9Zm55.29-15.06a14.45,14.45,0,0,1-14.58,14.32,14.9,14.9,0,0,1-3.68-.46,14.52,14.52,0,0,1-9.32-7.38,14,14,0,0,1-1.58-6.48,14.45,14.45,0,0,1,14.58-14.32,15,15,0,0,1,4.37.65,14.54,14.54,0,0,1,9.27,8.59A14.06,14.06,0,0,1,130.66,111.84Z"></path></svg>Templates</a><a href="' +
      document.location.origin +
      "/wp-admin/edit.php?post_type=page" +
      '" class="oxygen-toolbar-button-dropdown-option"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M256 56v120a32 32 0 0032 32h120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>Pages</a><a href="' +
      document.location.origin +
      "/wp-admin/edit.php" +
      '" class="oxygen-toolbar-button-dropdown-option"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="currentColor" d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z"/></svg>Posts</a>'
  );

})(jQuery);
