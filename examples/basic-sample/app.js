// Create new app
Cut(function(root) {

  // Set view box
  root.viewbox(300, 200);

  // Create an image and append it to root
  var box = Cut.image('box').appendTo(root);
  
  // Align box to center
  box.pin('align', 0.5);
  
  // On mouse click...
  box.on('click', function(point) {
    // ...tween scale values of this node
    this.tween().clear().ease('bounce').pin({
      scaleX : Math.random() + 0.5,
      scaleY : Math.random() + 0.5
    });
  });
});

// Adding a texture
Cut({
  image : 'sample.png',
  textures : {
    box : { x : 0, y : 0, width : 30, height : 30 }
  }
});