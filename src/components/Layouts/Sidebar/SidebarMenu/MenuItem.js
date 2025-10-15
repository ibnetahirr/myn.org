import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const MenuItem = ({
  title,
  iconClass,
  type,
  path,
  badgeCount,
  links,
  name,
  collapseId,
}) => {
  const pathname = usePathname();
  const isActive = useMemo(() => {
    return (linkPath) => linkPath === pathname;
  }, [pathname]);
  
  const checkUnder = (links) => {
    return links?.some(link => 
      isActive(link.path) || (link.children && link.children.some(link => isActive(link.path)))
    );
  };
  return (
    <>
      {type === "dropdown" ? (
        <>
          {title && (
            <li className="menu-title">
              <span>{title}</span>
            </li>
          )}
          <li>
            <Link
              data-bs-toggle="collapse"
              href={collapseId ? `#${collapseId}` : ""}
              aria-expanded={`${links.some(link => isActive(link.path)) || checkUnder(links)}`}
            >
              <i className={iconClass}></i>
              {name.toLowerCase()}
              {badgeCount && (
                <span
                  className={`badge ${
                    collapseId == "advance-ui"
                      ? "rounded-pill bg-warning"
                      : badgeCount == "new"
                      ? "text-light-success"
                      : "text-bg-success"
                  } badge-notification ms-2`}
                >
                  {badgeCount}
                </span>
              )}
            </Link>
            {links && (
              <ul className={`collapse ${(links.some(link => isActive(link.path)) || checkUnder(links) )? "show" : ""}`} id={collapseId}>
                {links.map((link, index) => {
                  return (
                    <div key={index}>
                      {link.children ? (
                        <li key={index} className="another-level">
                          <Link
                            className=""
                            data-bs-toggle="collapse"
                            href={`#${link.collapseId}`}
                            aria-expanded="false"
                          >
                            {link.name}
                          </Link>

                          <ul className={`collapse  ${link.children.some(link => isActive(link.path)) ? "show" : ""}`} id={link.collapseId}>
                            {link.children.map((underLink, index) => (
                              <li key={index} className={isActive(underLink.path) ? "active" : ""}>
                                <Link className="" href={underLink.path}>
                                  {underLink.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <>
                          <li key={index} className={isActive(link.path) ? 'active' : ''}>
                            <Link href={link.path}>{link.name}</Link>
                          </li>
                        </>
                      )}
                    </div>
                  );
                })}
              </ul>
            )}
          </li>
        </>
      ) : (
        <li className="no-sub">
          <Link href={path}>
            <i className={iconClass}></i>
            {name.toLowerCase()}
          </Link>
        </li>
      )}
    </>
  );
};

export default MenuItem;
