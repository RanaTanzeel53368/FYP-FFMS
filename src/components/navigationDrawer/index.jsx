import React, { useState, useEffect, useContext } from "react";
import {useTheme} from "@mui/material";
// import Typography from '@mui/material/Typography';
import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Icon,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomAppBar, DrawerHeader, CustomDrawer } from "./styledComponents";
// import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard,
} from "@mui/icons-material";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import {
  ProfileHeader,
  MenuItemStyle,
  NavigationStyle,
  DrawerStyle,
  CustomCard,
  ActiveBtn,
  InactiveBtn,
  Count,
  AvatarStyle,
  Title,
  GlobalBtnStyle,
  GlobalInputLabel,
  GlobalDialogContentStyle,
} from "./style"; // 
import { AppContext } from "../../context";
// import Products from "../../constainers/appStack/Products";
// import CategoryIcon from '@mui/icons-material/Category';
const userData = JSON.parse(localStorage.getItem("user"));
import logo from "../../assets/logo.png"
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import tank from "../../assets/tank.png"
import menuIcon from "../../assets/menu.png"






export default function NavigationDrawer(props) {
  const {openDrawer,setOpenDrawer, logout, user} = useContext(AppContext);
  // console.log(user, "usersssssssssssssssssssssssssssssss")
  const navigate = useNavigate();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  useEffect(() => {
    const toggleItem = JSON.parse(localStorage.getItem("toggle_drawer"));

    if (toggleItem) setOpenDrawer(toggleItem);
  }, []);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const routes = [
    {
      icon: <img src={menuIcon} alt="Dashboard" style={{ width: 24, height: 24 }}/>,
      path: "/home",
      label: "Dashboard",
    },
    {
      icon:  <img src={tank} alt="Tank1" style={{ width: 24, height: 24 }} />,
      path: "/tank1",
      label: "Tank 1",
    },
    {
      icon: <img src={tank} alt="Tank2" style={{ width: 24, height: 24 }} />,
      path: "/tank2",
      label: "Tank 2",
    },
    {
      icon: <img src={tank} alt="Tank3" style={{ width: 24, height: 24 }} />,
      path: "/tank3",
      label: "Tank 3",
    },
    {
      icon: <img src={tank} alt="Tank4" style={{ width: 24, height: 24 }} />,
      path: "/tank4",
      label: "Tank 4",
    },
    
    
    
  ];

  const navigateToPage = (route) => {
    localStorage.setItem("toggle_drawer", openDrawer);
    navigate(route);
  };


  return (
    
    <Box sx={{ display: "flex" }} style={{backgroundColor:"#8ba8bc"}}>
      <CssBaseline />
      <CustomAppBar position="fixed" open={openDrawer}>
        <Toolbar
        
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              color: "black",
              ...(openDrawer && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          <div>
          
          
            <ListItem
              className={ProfileHeader}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              style={{ cursor: "pointer", paddingRight: 0 }}
            >
            
              <ListItemAvatar>
              
                <Avatar>
                    <img width={40} height={40} src="https://cdn-icons-png.flaticon.com/512/147/147142.png" />
                </Avatar>
              </ListItemAvatar>
              <small className="text-dark fw-bold  m-auto">
                {user?.name}
              </small>
            </ListItem>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
            
             <MenuItem
                onClick={() => {
                  // handleClose();
                  // localStorage.clear();
                  // navigate("/");
                  logout();
                  // window.location.pathname = "/login";
                }}
                className={MenuItemStyle}
              >
                Logout
              </MenuItem>
            </Menu>

                
          </div>
        </Toolbar>
      </CustomAppBar>
      <CustomDrawer variant="permanent" open={openDrawer}>
        <div
          style={{
            backgroundColor: openDrawer ? "#185179" : "#fff",
            paddingBottom: "25px",
          }}
        >
          <DrawerHeader style={{ minHeight: "42px" }}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon
                  style={{
                    background: "#fff",
                    borderRadius: "50%",
                    fontSize: "12px",
                  }}
                />
              ) : (
                <ChevronLeftIcon
                  style={{
                    background: "#8ba8bc",
                    borderRadius: "50%",
                    fontSize: "20px",
                  }}
                />
              )}
            </IconButton>
          </DrawerHeader>

          <div
            style={{
              display: openDrawer ? "flex" : "none",
              justifyContent: "center",
              // margin: "15px 0 10px",
            }}
          >
            <ListItemAvatar>
            <img src={logo} alt="logo"  style={{ width: 100, height: 100 }}/>
            <Typography variant="body2" className="text-center pt-3 text-white">
              FISH TANK
            </Typography>
            {/* <Avatar style={{ width: 60, height: 60 }}> */}
              
                {/* {userData?.image ? (
                <img width={55} height={55} src={} />
              ) : ( 
                  
                 {userData.role == "Admin" ? (
                  userData?.name?.charAt(0)
                  
                ) : (
                  <img
                    style={{ width: 60, height: 60 }}
                    src={userData?.logoImage}
                  />
                )}  */}
                
              {/* </Avatar> */}
            </ListItemAvatar>
          </div>
        </div>
        <List>
          <>
          {routes.map((route, index) => (
             <ListItem
             key={index}
             className={NavigationStyle}
             onClick={() => navigateToPage(route.path)} 
             id="hover-icon"
           >
             <ListItemIcon style={{cursor:"pointer"}}>
               {route.icon}
             </ListItemIcon>
             <ListItemText
             
               primary={route.label}
               style={{
                 display: openDrawer ? "block" : "none",
                 cursor:"pointer",
                 color:"#185179",
                 fontWeight:"800"
               }}
             />
           </ListItem>
          ))}
          </>
        </List>
      
      </CustomDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflowX: "auto" }}>
        <div style={{ marginBottom: "50px" }}></div>
        {props.children}
      </Box>
    </Box>
  );
}
