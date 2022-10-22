import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function DarkExample() {
  return (

    <Container>
        < br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Jabatan</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ketua BEM</td>
            <td>Daniel Limbong</td>
            <td>S1 Sistem Informasi</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Wakil Ketua BEM</td>
            <td>Christoper Atmadjaya Siburian</td>
            <td>S1 Teknik Elektro</td>
          </tr>
          <tr>
            <td>3</td>
            <td> Sekretaris 1 BEM</td>
            <td>Mida Sinaga</td>
            <td>S1 Teknik Elektro</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Bendahara 1 BEM</td>
            <td>Eladita Nadeak</td>
            <td>S1 Teknik Elektro</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Kadep Depagsos</td>
            <td>Satria Pakpahan</td>
            <td>S1 Informatika</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Kadep Depkebdis</td>
            <td>Sandro Sinaga</td>
            <td>S1 SIstem Informasi</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Kadep Depol</td>
            <td>Dony Simatupang</td>
            <td>S1 Teknik ELektro</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Kadep Depkominfo</td>
            <td>Zan Peter Silaen</td>
            <td>S1 Informatika</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Kadep Sarpras</td>
            <td>Sebastian Napitupulu</td>
            <td>S1 Informatika</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Kadep DHPM</td>
            <td>Marcellino Manalu</td>
            <td>S1 Sistem Informasi </td>
          </tr>

        </tbody>
      </Table>
    </Container>

  );
}

export default DarkExample;