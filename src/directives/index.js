export const imgErr = {
  inserted: function (el, { value }) {
    el.onerror = function () {
      el.src = value
    }
  },
}
