import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  useMediaQuery,
  useTheme,
  Button,
  List,
  ListItem,
  ListItemText,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";

function Confirmation() {
  // const [message, setMessage] = useState('');
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    router.push("/");
  };

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Clear cart from local storage
    localStorage.removeItem("cart");

    // Conditionally show confirmation message or redirect to home
    if (
      typeof document !== "undefined" &&
      document.referrer.includes("checkout.stripe.com")
    ) {
      setIsOpen(true);
    } else if (
      typeof document !== "undefined" &&
      !document.referrer.includes("checkout.stripe.com")
    ) {
      setIsOpen(false);
      router.push("/");
    } else {
      setIsOpen(false);
    }
  }, [router]);

  return (
    <Dialog open={isOpen} onClose={handleClose} fullScreen={isMobile}>
      <DialogTitle marginLeft={2} marginTop={2}>
        Your order was successfully processed.
      </DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <ListItemText primary="You should recieve an email receipt for your purchase from Stripe." />
          </ListItem>
          <ListItem>
            <ListItemText primary='You will also receive an additional email from "it&apos;s ya boi webstore" (lance@robotson.media) with the tracking number for your order when it ships.' />
          </ListItem>
          <ListItem>
            <ListItemText primary="Reach out to lance@robotson.media if you have any issues or questions." />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions sx={{ pr: 3, pb: 2 }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleClose}
          color="primary"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default Confirmation;
