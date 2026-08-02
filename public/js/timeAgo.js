const timeAgo = (date1, date2) => {
  date1 = Math.round(date1.getTime() / 1000);
  date2 = Math.round(new Date(date2).getTime() / 1000);
  let diff = date1 - date2;
  // seconds
  if (diff < 60) {
    return `${diff} second${diff > 1 ? "s" : ""} ago`;
  }

  // minutes
  diff = Math.round(diff / 60);
  if (diff < 60) {
    return `${diff} minute${diff > 1 ? "s" : ""} ago`;
  }

  // hours
  diff = Math.round(diff / 60);
  if (diff < 24) {
    return `${diff} hour${diff > 1 ? "s" : ""} ago`;
  }

  // days
  diff = Math.round(diff / 24);
  if (diff < 7) {
    return `${diff} day${diff > 1 ? "s" : ""} ago`;
  }

  // weeks
  diff = Math.round(diff / 7);
  if (diff < 52) {
    return `${diff} week${diff > 1 ? "s" : ""} ago`;
  }

  // years
  diff = Math.round(diff / 54);
  if (diff < 52) {
    return `${diff} year${diff > 1 ? "s" : ""} ago`;
  }

  return diff;
};

module.exports = timeAgo;
