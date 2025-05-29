const Dropdown = (menu, menuItems) => {

  function initDropdown(speed) {
    addBaseStyle(menuItems, speed)
    menu.addEventListener("click", () => {
      toggle(menuItems)
    })
  }

  function addBaseStyle(item, speed = 0.5) {
    item.style.opacity = 0
    item.style.maxHeight = 0
    item.style.overflow = "hidden"
    item.style.transition = `opacity ${speed}s ease, max-height ${speed}s ease`
  }

  function show(item) {
    item.style.opacity = 1
    item.style.maxHeight = item.scrollHeight + "px"
  }

  function hide(item) {
    item.style.opacity = 0
    item.style.maxHeight = 0
  }

  function toggle(item) {
    const isVisible = item.style.opacity === "1";
    isVisible ? hide(item) : show(item)
  }

  function setSpeed(speed) {
    addBaseStyle(menuItems, speed)
  }

  return { initDropdown, setSpeed }
}

export default Dropdown
