import Appcenter from '@/assets/Signin_logo.png';
import { CATEGORY } from '@/constants/category';
import { PATH } from '@/constants/path';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomDrawer = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation'>
      <List>
        <ListItemButton onClick={() => handleNavigation(PATH.ROOT)}>
          <ListItemIcon>{CATEGORY.WELCONE.icon}</ListItemIcon>
          메인홈
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton onClick={toggleExpanded}>
          <ListItemText primary={CATEGORY.DASGBOARD.CLUB.title} />
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {expanded && (
          <List sx={{ pl: 4 }}>
            <ListItemButton
              onClick={() => handleNavigation(CATEGORY.CLUB_MANAGE.MEMBER.path)}
            >
              {CATEGORY.CLUB_MANAGE.MEMBER.title}
            </ListItemButton>
            <ListItemButton
              onClick={() =>
                handleNavigation(CATEGORY.CLUB_MANAGE.ORDINAL_NUMS.path)
              }
            >
              {CATEGORY.CLUB_MANAGE.ORDINAL_NUMS.title}
            </ListItemButton>
            <ListItemButton
              onClick={() => handleNavigation(CATEGORY.CLUB_MANAGE.ROLE.path)}
            >
              {CATEGORY.CLUB_MANAGE.ROLE.title}
            </ListItemButton>
          </List>
        )}
        {Object.entries(CATEGORY.DASGBOARD)
          .slice(1)
          .map(([key, value]) => (
            <ListItem key={key} disablePadding>
              <ListItemButton onClick={() => handleNavigation(value.path)}>
                <ListItemText primary={value.title} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );

  return (
    <div
      role='presentation'
      className={`MuiDrawer-root MuiDrawer-modal MuiModal-root ${
        open ? 'pointer-events-none' : ''
      }`}
    >
      <div onClick={toggleDrawer(true)}>
        <img src={Appcenter} className='h-auto w-10 cursor-pointer' />
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CustomDrawer;
