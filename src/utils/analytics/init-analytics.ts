import ReactGA from "react-ga";

export const initAnalytics = () => {
  ReactGA.initialize(import.meta.env.VITE_GA_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
};
