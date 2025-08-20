import React from "react";

// --- Props ---
// Podemos definir um tipo comum para as partes, já que compartilham props semelhantes.
type SidebarPartProps = React.HTMLAttributes<HTMLDivElement>;

// --- SidebarHeader ---
const SidebarHeader = ({
  children,
  className,
  ...rest
}: SidebarPartProps) => {
  return (
    <header className={`sidebar-header ${className ?? ""}`} {...rest}>
      {children}
    </header>
  );
};
SidebarHeader.displayName = "Sidebar.Header";

// --- SidebarContent ---
const SidebarContent = ({
  children,
  className,
  ...rest
}: SidebarPartProps) => {
  return (
    // Usando uma div para a área principal com rolagem
    <div className={`sidebar-content ${className ?? ""}`} {...rest}>
      {children}
    </div>
  );
};
SidebarContent.displayName = "Sidebar.Content";

// --- SidebarFooter ---
const SidebarFooter = ({
  children,
  className,
  ...rest
}: SidebarPartProps) => {
  return (
    <footer className={`sidebar-footer ${className ?? ""}`} {...rest}>
      {children}
    </footer>
  );
};
SidebarFooter.displayName = "Sidebar.Footer";

// --- Sidebar (Root) ---
type SidebarRootProps = React.HTMLAttributes<HTMLElement>;

const SidebarRoot = ({ children, className, ...rest }: SidebarRootProps) => {
  return (
    <aside className={`sidebar ${className ?? ""}`} {...rest}>
      {children}
    </aside>
  );
};
SidebarRoot.displayName = "Sidebar";

// --- Export do Componente Composto ---
// Isso permite uma API agradável como: <Sidebar.Header />, <Sidebar.Content />, etc.
const Sidebar = Object.assign(SidebarRoot, {
  Header: SidebarHeader,
  Content: SidebarContent,
  Footer: SidebarFooter,
});

export default Sidebar;