const AVAILABLE_STYLES = ["primary", "secondary", "success", "warning", "processing", "error"]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const getGradient = (style) => {
  let color = "";

  switch (style) {
    case "primary":
      color = "from-pink-500 via-red-500 to-yellow-500"; break;
    case "secondary":
      color = "from-indigo-300 to-purple-400"; break;
    case "success":
      color = "from-green-200 via-green-400 to-green-500"; break;
    case "warning":
      color = "from-yellow-200 via-yellow-400 to-yellow-500"; break;
    case "processing":
      color = "from-purple-200 via-purple-400 to-purple-500"; break;
    case "error":
      color = "from-red-200 via-red-400 to-red-500"; break;
  }
  return classNames(
    "bg-gradient-to-br",
    color,
  )
}

export {
  AVAILABLE_STYLES,
  classNames,
  getGradient,
}
