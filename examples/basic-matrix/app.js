Cut(function(root) {

  root.viewbox(1000, 1000).pin('handle', -0.5);

  var matrix = new Cut.Matrix();

  Cut.image('box').appendTo(root).pin('handle', 0.5).pin('matrix',
      matrix.identity().rotate(Math.PI / 4).scale(1, 0.5));

  Cut.image('box').appendTo(root).pin('handle', 0.5).pin('matrix',
      matrix.identity().scale(1, 0.5).rotate(Math.PI / 4));
});

Cut({
  image : 'box.png',
  textures : {
    box : {
      x : 0,
      y : 0,
      width : 200,
      height : 200
    }
  }
});
