import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';

const Authors = () => {

  return (
    <Container maxWidth="md">
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead >
            <TableRow >
                <TableCell>Author</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell component="th" scope="row">
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
    </Container>
  );
}
export default Authors;
