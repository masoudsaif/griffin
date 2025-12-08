import { useMemo, type FC } from "react";
import SEO from "./SEO";
import {
  RouteMeta,
  RouteName,
  RoutePath,
  type RouteNameType,
} from "../constants/routes";
import { useLocation } from "react-router-dom";

const PageSEO: FC = () => {
  const location = useLocation();
  const activeRoute = useMemo(() => {
    const entry = Object.entries(RoutePath).find(
      (entry) => location.pathname === entry[1]
    );

    return entry?.[0] || RouteName.NotFound;
  }, [location.pathname]) as RouteNameType;

  const meta = RouteMeta[activeRoute];

  return (
    <SEO
      title={meta.title}
      description={meta.description}
      keywords={meta.keywords}
    />
  );
};

export default PageSEO;
