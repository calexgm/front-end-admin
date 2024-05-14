// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';

// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  return (
    <>
      <SimpleBar sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column' } }}>
        
        {/* Opciones de navegacion del menu */}
        <Navigation />

        {/* card en el menu, abajo de las opciones */}
        <NavCard />
      </SimpleBar>
    </>
  );
}
