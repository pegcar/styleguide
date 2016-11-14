addLoadEvent(function() {
  var colors = { 'blue-hard': '#003d60',
                 'blue-medium': '#0065a0',
                 'blue-soft': '#2294d5',
                 'blue-sky': '#66ccff',
                 'blue-facebook': '#3b5998',
                 'blue-facebook--hover': '#14306c',
                 'red-no': '#eb584b',
                 'red-hover': '#c33c33',
                 'green-yes': '#04bd00',
                 'green-warn': '#00b16a',
                 'orange': '#f58220',
                 'orange-hard': '#ea6c00',
                 'white-hard': '#ffffff',
                 'white-soft': '#f0f0f0',
                 'gray-medium': '#808080',
                 'gray-soft': '#b7b7b7',
                 'gray-hard': '#606060' };


  for (var key in colors) {
    $('.js--color-container').append("<span class='styleguide-color' title='"+colors[key]+"' style='background-color: "+ colors[key] +";'><span style='background-color: white; color: black;'>"+key+" <br/> "+colors[key]+"</span></span>");
    console.log(colors[key]);
  }
});
