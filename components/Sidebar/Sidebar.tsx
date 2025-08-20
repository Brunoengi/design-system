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
export type SidebarProps = React.HTMLAttributes<HTMLElement>;
type SidebarComponent = React.FC<SidebarProps> & {
  Header: React.FC<SidebarPartProps>;
  Content: React.FC<SidebarPartProps>;
  Footer: React.FC<SidebarPartProps>;
};

const Sidebar: SidebarComponent = ({ children, className, ...rest }) => {
  return (
    <aside className={`sidebar ${className ?? ""}`} {...rest}>
      {children}
    </aside>
  );
};
Sidebar.displayName = "Sidebar";

// --- Export do Componente Composto ---
// Isso permite uma API agradável como: <Sidebar.Header />, <Sidebar.Content />, etc.
Sidebar.Header = SidebarHeader;
Sidebar.Content = SidebarContent;
Sidebar.Footer = SidebarFooter;

export default Sidebar;