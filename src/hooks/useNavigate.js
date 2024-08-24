function useNavigate() {
  function navigate(to, state = null) {
    window.history.pushState(state, "", `#${to}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }

  return navigate;
}

export { useNavigate };
