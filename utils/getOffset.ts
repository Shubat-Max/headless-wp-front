const getOffset = elem => {
  var rect = elem.getBoundingClientRect();
  var win = elem.ownerDocument.defaultView;

  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  };
}

export default getOffset;