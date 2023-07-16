import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const pages = [
  { name: "UltralightX", path: "/products/ultralightx-overview" },
  { name: "XPANEL", path: "/pages/xpanel" },
  { name: "Support", path: "/pages/support" },
];

type Anchor = "right";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [cartDrawer, setCartDrawer] = React.useState({
    right: false,
  });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const toggleCartDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setCartDrawer({ ...cartDrawer, [anchor]: open });
    };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const cart = (anchor: Anchor) => (
    <Box
      sx={{
        width: { xs: "350px", md: "450px" },
        height: "100%",
        background: "linear-gradient(135deg,rgb(51 51 51),rgb(41 41 41))",
        color: "#d9d9d9",
      }}
    >
      <Box
        sx={{
          padding: "40px 0 12px 40px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ flexGrow: 1, fontSize: "24px" }}>
          Cart
        </Typography>
        <IconButton
          aria-label="cart drawer toggle"
          aria-controls="cart-drawer"
          aria-haspopup="true"
          role="presentation"
          disableRipple
          onClick={toggleCartDrawer(anchor, false)}
          sx={{ paddingRight: "40px" }}
        >
          <CloseRoundedIcon sx={{ fontSize: "24px" }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          height: "1px",
          width: "100%",
          background:
            "linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.4) 53.05%,rgba(255,255,255,0) 100%)",
        }}
      />
      <Typography variant="body1" sx={{ padding: "40px" }} id="cart-drawer">
        Your cart is currently empty
      </Typography>
    </Box>
  );

  return (
    <AppBar
      id="app-bar"
      position="fixed"
      sx={{
        background: "black",
        opacity: 0.9,
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: "90px" }}>
          <img
            src="https://finalmouse.com/cdn/shop/files/finalmouse_icon_white_v2.svg?v=1678935378&width=100"
            width="48px"
          />
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                height: "100%",
                justifyContent: "center",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                href={page.path}
                disableRipple
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 2,
                  color: "#ccc",
                  display: "block",
                  textTransform: "none",
                  fontSize: "18px",
                  opacity: "1",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    color: "#fff",
                    transition: "color 0.1s linear",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "right",
            }}
          >
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              aria-label="xs menu toggle"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ padding: "0", marginRight: "15px" }}
            >
              <MenuIcon sx={{ fontSize: "28px" }} />
            </IconButton>
          </Box>
          <Tooltip title="Open Shopping Cart">
            <>
              <IconButton
                onClick={toggleCartDrawer("right", true)}
                sx={{ p: 0 }}
              >
                <ShoppingBasketOutlinedIcon sx={{ fontSize: "28px" }} />
              </IconButton>
              <Drawer
                anchor={"right"}
                open={cartDrawer["right"]}
                onClose={toggleCartDrawer("right", false)}
                sx={{
                  background:
                    "linear-gradient(135deg,rgba(51 51 51 0.1),rgba(41 41 41 0.1))",
                }}
              >
                {cart("right")}
              </Drawer>
            </>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
