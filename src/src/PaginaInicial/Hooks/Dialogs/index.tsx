import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Dialogs() {
    return (
        <Dialog open={false}>
            <DialogTitle>Dialog</DialogTitle>
            <DialogContent>
                <Typography>Dialog</Typography>
            </DialogContent>
            <DialogActions>
                <Button>Close</Button>
            </DialogActions>
        </Dialog>
    )
}