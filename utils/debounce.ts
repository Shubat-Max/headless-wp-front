function debounce(f, ms) {

  let onCooldown = false;

  return function(...args) {
    if (onCooldown) return;

    f.apply(this, args);

    onCooldown = true;

    setTimeout(() => onCooldown = false, ms);
  };
}

export default debounce;