import Navbar from '@/components/Navbar';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export default function Layout({ children }) {
  return (
    <>
      <Navbar/>
      <SiteBreadcrumbs />
      <main>{children}</main>
    </>
  );
}