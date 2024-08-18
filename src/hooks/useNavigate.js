function useNavigate() {
  function navigate(to) {
    window.history.pushState(null, "", `#${to}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }

  return navigate;
}

export { useNavigate };
