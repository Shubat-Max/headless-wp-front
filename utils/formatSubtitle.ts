const FormatSubtitle = (subtitle) => {
  if (!subtitle) return '';

  if (!Array.isArray(subtitle)) return subtitle;

  let categories = subtitle.join(', ');
  return categories.charAt(0).toUpperCase() + categories.slice(1);
};

export default FormatSubtitle;