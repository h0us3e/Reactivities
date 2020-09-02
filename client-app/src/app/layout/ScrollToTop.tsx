import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ children, location: { pathname } }: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

export default withRouter(ScrollToTop);
