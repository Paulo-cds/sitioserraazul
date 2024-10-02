import {
  AppBar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HiveIcon from '@mui/icons-material/Hive';
import { useState } from "react";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const drawerWidth = 240;

const Header = ({ children, setActualPage }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              edge="start"
              sx={[
                {
                  mr: 2,
                },
                open && { display: "none" },
              ]}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Sítio Serra Azul
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <a href="https://www.instagram.com/sitio.serra.azul/" target="_blank" style={{height:'24px'}}>
            <InstagramIcon sx={{color:"#FFFFFF"}} />
            </a>
            <WhatsAppIcon/>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(!open)}
        variant="persistent"
        sx={{
        //   width: open ? drawerWidth : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : 0,
            boxSizing: "border-box",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{setActualPage('main');setOpen(!open)}} >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Início"} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{setActualPage('honey');setOpen(!open)}} >
              <ListItemIcon>
                <HiveIcon />
              </ListItemIcon>
              <ListItemText primary={"Produções"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {children}
    </Box>
  );
};

export default Header;
