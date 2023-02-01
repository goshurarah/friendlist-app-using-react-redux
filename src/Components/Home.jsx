import * as React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Home = (ALL_LIST_STORE) => {
  const [acceptOpen, setAcceptOpen] = React.useState(false);
  const [rejectOpen, setRejectOpen] = React.useState(false);
  const [blockOpen, setBlockOpen] = React.useState(false);

  const onAccept = (items) => {
    //dispatch
    ALL_LIST_STORE.acceptFuncHandler({
      id: items.id,
      name: items.name,
      status: 'Accepted',
    })
    setAcceptOpen(true);
  }
  const onReject = (items) => {
    //dispatch
    ALL_LIST_STORE.rejectFuncHandler({
      id: items.id,
      name: items.name,
      status: 'Rejected',
    })
    setRejectOpen(true);
  }
  const onBlock = (items) => {
    //dispatch
    ALL_LIST_STORE.blockFuncHandler({
      id: items.id,
      name: items.name,
      status: 'Blocked',
    })
    setBlockOpen(true);
  }
  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setAcceptOpen(false);
    setRejectOpen(false);
    setBlockOpen(false);
  }

  return (
    <>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={acceptOpen} autoHideDuration={1000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Accepted!
          </Alert>
        </Snackbar>
        <Snackbar
          open={rejectOpen}
          autoHideDuration={1000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Rejected!
          </Alert>
        </Snackbar>
        <Snackbar
          open={blockOpen}
          autoHideDuration={1000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Blocked!
          </Alert>
        </Snackbar>
      </Stack>
      <Paper elevation={12} sx={{
        paddingBottom: '1rem',
        width: '50%',
        minWidth: 'fit-content',
        marginTop: '2rem',
        mx: 'auto'
      }}
      >
        <Container>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>All List</Typography>
          {ALL_LIST_STORE.Data.map((items) => {
            return (
              <Paper elevation={5} id={items.id}>
                <Box sx={{
                  m: 1,
                  p: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <Box>
                    <Typography variant="body1" color="secondary.main">
                      {items.name}
                    </Typography>
                  </Box>
                  <Box>
                    <Stack direction="row" spacing={2}>

                      {items.status === null ?
                        (<><Button sx={{ borderRadius: '0.7rem' }} size="small" variant="contained" color="success"
                          onClick={() => onAccept(items)}>
                          Accept
                        </Button>
                          <Button sx={{ borderRadius: '0.7rem' }} size="small" variant="contained" color="warning"
                            onClick={() => onReject(items)}>
                            Reject
                          </Button>
                          <Button sx={{ borderRadius: '0.7rem' }} size="small" variant="contained" color="error"
                            onClick={() => onBlock(items)}>
                            Block
                          </Button></>) :
                        (<Typography variant="body1" color="secondary.main">
                          {items.status}
                        </Typography>)}

                    </Stack>
                  </Box>
                </Box>
              </Paper>
            )
          })}
        </Container>
      </Paper>
    </>
  );
}

export default Home;